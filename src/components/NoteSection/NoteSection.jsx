import React, { useState, useRef, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  Timestamp,
  deleteDoc,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { initializeAditor } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./NoteSection.css";
import Tag from "../Tag/Tag.jsx";

function NoteSection() {
  const Aditor_NoteSection = useRef(null);
  const [NoteName, setNoteName] = useState("");
  const [NoteSections, setNoteSections] = useState([]);
  const [ViewMode, setViewMode] = useState("currentNote");
  const [SelectedNote, setSelectedNote] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [addedTags, setAddedTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);

  useEffect(() => {
    let storedContent = localStorage.getItem("noteContent") || "";
    setNoteName(localStorage.getItem("noteName") || "");

    if (Aditor_NoteSection.current) {
      initializeAditor(Aditor_NoteSection.current, storedContent);
      Aditor_NoteSection.current.querySelector(".inputContent").focus();
    }

    setTagSuggestions([]);
    setAddedTags([]);
    fetchAllNotes();
    fetchTagsSuggestions();
    setActiveDropdown(null);
  }, [ViewMode]);

  useEffect(() => {
    if (ViewMode !== "selected" && Aditor_NoteSection.current) {
      const aditorElement = Aditor_NoteSection.current;
      const handleKeyUp = () => {
        const updatedContent = aditorElement.innerHTML;
        localStorage.setItem("noteContent", updatedContent);
      };

      aditorElement.addEventListener("keyup", handleKeyUp);
      return () => aditorElement.removeEventListener("keyup", handleKeyUp);
    }
  }, [ViewMode]);

  useEffect(() => {
    if (ViewMode === "selected" && SelectedNote && Aditor_NoteSection.current) {
      setNoteName(SelectedNote.noteName);
      setAddedTags(SelectedNote.tags || []);
      initializeAditor(Aditor_NoteSection.current, SelectedNote.noteContent);
    }
  }, [SelectedNote]);

  const fetchTagsSuggestions = async () => {
    try {
      const userID = getUser().uid;
      const tagSuggestionsQuery = query(
        collection(db, userID),
        where("category", "==", "NoteSection")
      );

      const snapshot = await getDocs(tagSuggestionsQuery);
      const defaults = ["Personal", "Work", "Others"];
      const dynamic = snapshot.docs
        .flatMap((doc) => doc.data().tags || [])
        .filter(Boolean);
      const combined = [...new Set([...defaults, ...dynamic])];
      setTagSuggestions(combined);
    } catch (error) {
      console.error("Error fetching note tags:", error);
    }
  };

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const handleSelectedNote = (Note) => {
    setSelectedNote(Note);
    setViewMode("selected");
  };

  const saveNote = async () => {
    const aditorElement = Aditor_NoteSection.current;
    const defaultValue =
      aditorElement?.querySelector(".inputContent")?.innerText;

    if (!defaultValue || defaultValue.trim() === "") {
      toast.error("Note is required!", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    try {
      const updatedContent = aditorElement.innerHTML;
      const userID = getUser().uid;

      const NoteData = {
        category: "NoteSection",
        noteName:
          NoteName === "" ? truncateContent(updatedContent).trim() : NoteName,
        noteContent: updatedContent,
        tags: addedTags,
        createdAt: new Date().toISOString(),
      };

      if (SelectedNote) {
        const docRef = doc(db, userID, SelectedNote.id);
        await updateDoc(docRef, NoteData);
        toast.success("Note updated successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
        setSelectedNote(null);
      } else {
        const userCollection = collection(db, userID);
        await addDoc(userCollection, NoteData);
        toast.success("Note saved successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });

        localStorage.setItem("noteContent", "");
        localStorage.setItem("noteName", "");
        setNoteName("");
        setAddedTags([]);
        if (Aditor_NoteSection.current) {
          initializeAditor(Aditor_NoteSection.current, "");
        }
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed to save Note. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const fetchAllNotes = async () => {
    try {
      const userID = getUser().uid;
      const userCollection = collection(db, userID);
      const q = query(userCollection, where("category", "==", "NoteSection"));
      const querySnapshot = await getDocs(q);
      const Notes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNoteSections(Notes);
    } catch (error) {
      toast.error("Failed to load Notes.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const truncateContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const ulElement = doc.querySelector("ul.inputContent");
    if (!ulElement) return "";
    const text = ulElement.textContent.trim();
    const words = text.split(/\s+/).slice(0, 4).join(" ");
    return words;
  };

  const toggleDropdown = (NoteId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === NoteId ? null : NoteId);
  };

  const handleDeleteNote = async (NoteId) => {
    const toastId = toast.warn(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p>Are you sure you want to delete this Note Journal?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const NoteRef = doc(db, userID, NoteId);
                await deleteDoc(NoteRef);

                setNoteSections(
                  NoteSections.filter((Note) => Note.id !== NoteId)
                );
                toast.dismiss(toastId);
                toast.success("Note Journal deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 1000,
                });
              } catch (error) {
                console.error("Error deleting Note Journal:", error);
                toast.dismiss(toastId);
                toast.error(
                  "Failed to delete Note Journal. Please try again.",
                  {
                    position: "bottom-right",
                    autoClose: 1000,
                  }
                );
              }
            }}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              padding: "8px 16px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            No
          </button>
        </div>
      </div>,
      {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: false,
        draggable: false,
        pauseOnHover: false,
        hideProgressBar: true,
      }
    );

    setActiveDropdown(null);
  };

  const handleInputChange = (e) => {
    setNoteName(e.target.value);
    if (ViewMode === "currentNote") {
      localStorage.setItem("noteName", e.target.value);
    }
  };

  return (
    <div className="NoteSection">
      {(ViewMode === "currentNote" || ViewMode === "selected") && (
        <>
          <div className="NoteHeader">
            <input
              type="text"
              value={NoteName}
              placeholder={"Note name"}
              onChange={handleInputChange}
            />
            <button
              onClick={() => {
                setViewMode("all");
                setSelectedNote(null);
              }}
            >
              View All
            </button>
            {ViewMode === "selected" && (
              <button
                onClick={() => {
                  setViewMode("currentNote");
                  setSelectedNote(null);
                }}
              >
                Create new
              </button>
            )}
          </div>

          <div ref={Aditor_NoteSection} className="Aditor_NoteSection"></div>
          <div className="noteHeaderControls">
            <div className="tagContainer">
              <Tag
                tagSuggestions={tagSuggestions}
                onTagChange={handleTagChange}
                initialTags={addedTags}
              />
            </div>
            <button className="saveNote" onClick={saveNote}>
              Save
            </button>
          </div>
        </>
      )}

      {ViewMode === "all" && (
        <div className="NoteSection all">
          <div className="NoteHeader">
            <button
              onClick={() => {
                setViewMode("currentNote");
              }}
            >
              Create new
            </button>
          </div>
          <div className="NoteContainer">
            <div className="NoteGrid">
              {NoteSections.length === 0 ? (
                <p>No Note Journal added yet.</p>
              ) : (
                NoteSections.map((Note) => (
                  <div
                    key={Note.id}
                    className="NoteCard"
                    onClick={() => {
                      handleSelectedNote(Note);
                    }}
                  >
                    <div className="content">{Note.noteName}</div>
                    <div
                      className="NoteActions"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="dropdown-container">
                        <FontAwesomeIcon
                          className="menuBtn"
                          icon={faEllipsisV}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(Note.id, e);
                          }}
                        />
                        {activeDropdown === Note.id && (
                          <div
                            className="dropdown-menu"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleSelectedNote(Note);
                              }}
                            >
                              View
                            </div>
                            <div
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteNote(Note.id);
                              }}
                            >
                              Delete
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteSection;
