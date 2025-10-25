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
  getDoc,
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

function NoteSection({ addSection, setAddSection }) {
  const Aditor_NoteSection = useRef(null);
  const [NoteName, setNoteName] = useState("");
  const [NoteSections, setNoteSections] = useState([]);
  const [TaskNotes, setTaskNotes] = useState([]);
  const [ProjectNotes, setProjectNotes] = useState([]);
  const [HabitDailyNotes, setHabitDailyNotes] = useState([]);
  const [ViewMode, setViewMode] = useState("all");
  const [FilterMode, setFilterMode] = useState("all"); // "all", "notes", "tasks", "projects", "habits"
  const [SelectedNote, setSelectedNote] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [addedTags, setAddedTags] = useState([]);
  const [tagSuggestions, setTagSuggestions] = useState([]);

  useEffect(() => {
    if (addSection === "noteSection") {
      setViewMode("currentNote");
      setAddSection(""); // Reset addSection after handling
    }
  }, [addSection, setAddSection]);

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
    fetchTaskNotes();
    fetchProjectNotes();
    fetchHabitDailyNotes();
    fetchTagsSuggestions();
    setActiveDropdown(null);
    setFilterDropdownOpen(false);
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

      // Handle habit Daily notes differently - display all daily notes
      if (SelectedNote.isHabitNote) {
        const dailyNotesHTML = Object.entries(SelectedNote.dailyNotes)
          .sort(([dateA], [dateB]) => new Date(dateB) - new Date(dateA)) // Sort by date descending
          .map(
            ([date, content]) => `
            <div class="habitDailyNoteEntry" data-date="${date}">
              <div class="habitDateHeader">${date}</div>
              <div class="dailyNoteContent" contenteditable="true">${content}</div>
            </div>
          `
          )
          .join("");

        Aditor_NoteSection.current.innerHTML = dailyNotesHTML;
      } else {
        initializeAditor(Aditor_NoteSection.current, SelectedNote.noteContent);
      }
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

  const fetchTaskNotes = async () => {
    try {
      const userID = getUser().uid;
      const userCollection = collection(db, userID);
      const q = query(userCollection, where("category", "==", "task"));
      const querySnapshot = await getDocs(q);

      // Filter tasks that have notes
      const Tasks = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((task) => {
          // Check if note exists and has content
          if (!task.note) return false;
          const parser = new DOMParser();
          const docNote = parser.parseFromString(task.note, "text/html");
          const noteContent = docNote.querySelector(".inputContent")?.innerText;
          return noteContent && noteContent.trim() !== "";
        })
        .map((task) => ({
          id: task.id,
          noteName: task.name,
          noteContent: task.note,
          tags: task.tags || [],
          createdAt: task.createdAt,
          isTaskNote: true, // Flag to identify task notes
        }));

      setTaskNotes(Tasks);
    } catch (error) {
      console.error("Error fetching task notes:", error);
      toast.error("Failed to load task notes.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const fetchProjectNotes = async () => {
    try {
      const userID = getUser().uid;
      const userCollection = collection(db, userID);
      const q = query(
        userCollection,
        where("category", "==", "goal"),
        where("subCategory", "==", "project")
      );
      const querySnapshot = await getDocs(q);

      // Filter projects that have notes
      const Projects = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((project) => {
          // Check if note exists and has content
          if (!project.note) return false;
          const parser = new DOMParser();
          const docNote = parser.parseFromString(project.note, "text/html");
          const noteContent = docNote.querySelector(".inputContent")?.innerText;
          return noteContent && noteContent.trim() !== "";
        })
        .map((project) => ({
          id: project.id,
          noteName: project.goalName,
          noteContent: project.note,
          tags: project.tags || [],
          createdAt: project.createdAt,
          isProjectNote: true, // Flag to identify project notes
        }));

      setProjectNotes(Projects);
    } catch (error) {
      console.error("Error fetching project notes:", error);
      toast.error("Failed to load project notes.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const fetchHabitDailyNotes = async () => {
    try {
      const userID = getUser().uid;
      const userCollection = collection(db, userID);
      const q = query(
        userCollection,
        where("category", "==", "goal"),
        where("subCategory", "==", "habit")
      );
      const querySnapshot = await getDocs(q);

      // Filter habits that have daily notes - keep as one card per habit
      const Habits = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((habit) => {
          // Check if dailyNotes exists and has at least one entry
          return habit.dailyNotes && Object.keys(habit.dailyNotes).length > 0;
        })
        .map((habit) => ({
          id: habit.id,
          habitId: habit.id,
          noteName: habit.goalName,
          dailyNotes: habit.dailyNotes, // Keep all daily notes together
          tags: habit.tags || [],
          createdAt: habit.createdAt,
          isHabitNote: true,
        }));

      setHabitDailyNotes(Habits);
    } catch (error) {
      console.error("Error fetching habit Daily notes:", error);
      toast.error("Failed to load habit Daily notes.", {
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

  const saveNote = async () => {
    const aditorElement = Aditor_NoteSection.current;

    try {
      const updatedContent = aditorElement.innerHTML;
      const userID = getUser().uid;

      // Check if it's a habit note
      if (SelectedNote?.isHabitNote) {
        // Collect all daily notes from the editor
        const allDailyNoteDivsRef = {};
        const dailyNoteSections = Aditor_NoteSection.current.querySelectorAll(
          ".habitDailyNoteEntry"
        );

        if (dailyNoteSections.length === 0) {
          toast.error("No daily notes found!", {
            position: "bottom-right",
            autoClose: 1000,
          });
          return;
        }

        dailyNoteSections.forEach((section) => {
          const dateKey = section.getAttribute("data-date");
          const contentDiv = section.querySelector(".dailyNoteContent");
          if (dateKey && contentDiv) {
            allDailyNoteDivsRef[dateKey] = contentDiv.innerHTML;
          }
        });

        // Update all daily notes in the habit
        const docRef = doc(db, userID, SelectedNote.habitId);

        await updateDoc(docRef, {
          dailyNotes: allDailyNoteDivsRef,
        });

        toast.success("Habit Daily notes updated successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
        setSelectedNote(null);
        fetchHabitDailyNotes(); // Refresh habit Daily notes
        return;
      }
      // Check if it's a task note
      else if (SelectedNote?.isTaskNote) {
        const defaultValue =
          aditorElement?.querySelector(".inputContent")?.innerText;

        if (!defaultValue || defaultValue.trim() === "") {
          toast.error("Note is required!", {
            position: "bottom-right",
            autoClose: 1000,
          });
          return;
        }

        const updatedContent = aditorElement.innerHTML;
        // Update only the note field of the task
        const docRef = doc(db, userID, SelectedNote.id);
        await updateDoc(docRef, {
          note: updatedContent,
        });
        toast.success("Task note updated successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
        setSelectedNote(null);
        fetchTaskNotes(); // Refresh task notes
      } else if (SelectedNote?.isProjectNote) {
        const defaultValue =
          aditorElement?.querySelector(".inputContent")?.innerText;

        if (!defaultValue || defaultValue.trim() === "") {
          toast.error("Note is required!", {
            position: "bottom-right",
            autoClose: 1000,
          });
          return;
        }

        const updatedContent = aditorElement.innerHTML;
        // Update only the note field of the project
        const docRef = doc(db, userID, SelectedNote.id);
        await updateDoc(docRef, {
          note: updatedContent,
        });
        toast.success("Project note updated successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
        setSelectedNote(null);
        fetchProjectNotes(); // Refresh project notes
      } else {
        const defaultValue =
          aditorElement?.querySelector(".inputContent")?.innerText;

        if (!defaultValue || defaultValue.trim() === "") {
          toast.error("Note is required!", {
            position: "bottom-right",
            autoClose: 1000,
          });
          return;
        }

        const updatedContent = aditorElement.innerHTML;
        // Regular note save/update logic
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
      }
    } catch (e) {
      console.log(e);
      toast.error("Failed to save Note. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const handleSelectedNote = (Note) => {
    setSelectedNote(Note);
    setViewMode("selected");
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

  const getFilteredNotes = () => {
    let notes = [];
    if (FilterMode === "notes") {
      notes = NoteSections;
    } else if (FilterMode === "tasks") {
      notes = TaskNotes;
    } else if (FilterMode === "projects") {
      notes = ProjectNotes;
    } else if (FilterMode === "habits") {
      notes = HabitDailyNotes;
    } else {
      // Return all notes combined
      notes = [
        ...NoteSections,
        ...TaskNotes,
        ...ProjectNotes,
        ...HabitDailyNotes,
      ];
    }

    // Sort by createdAt in descending order (newest first)
    return notes.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB - dateA;
    });
  };

  return (
    <div className="NoteSection">
      {ViewMode === "currentNote" && (
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
            <div className="filterDropdownContainer">
              <div
                className="filterBtn"
                onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
              >
                <i className="fa-solid fa-filter"></i>
              </div>
              {filterDropdownOpen && (
                <div className="filterDropdown">
                  <div
                    className={`filterDropdownItem ${
                      FilterMode === "all" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode("all");
                      setFilterDropdownOpen(false);
                    }}
                  >
                    All
                  </div>
                  <div
                    className={`filterDropdownItem ${
                      FilterMode === "notes" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode("notes");
                      setFilterDropdownOpen(false);
                    }}
                  >
                    Notes
                  </div>
                  <div
                    className={`filterDropdownItem ${
                      FilterMode === "tasks" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode("tasks");
                      setFilterDropdownOpen(false);
                    }}
                  >
                    Task Notes
                  </div>
                  <div
                    className={`filterDropdownItem ${
                      FilterMode === "projects" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode("projects");
                      setFilterDropdownOpen(false);
                    }}
                  >
                    Project Notes
                  </div>
                  <div
                    className={`filterDropdownItem ${
                      FilterMode === "habits" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode("habits");
                      setFilterDropdownOpen(false);
                    }}
                  >
                    Habit Daily Notes
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="NoteContainer">
            <div className="NoteGrid">
              {getFilteredNotes().length === 0 ? (
                <p>
                  No{" "}
                  {FilterMode === "tasks"
                    ? "Task Notes"
                    : FilterMode === "projects"
                    ? "Project Notes"
                    : FilterMode === "habits"
                    ? "Habit Daily Notes"
                    : FilterMode === "notes"
                    ? "Notes"
                    : "Notes"}{" "}
                  added yet.
                </p>
              ) : (
                getFilteredNotes().map((Note) => (
                  <div
                    key={Note.id}
                    className="NoteCard"
                    onClick={() => {
                      handleSelectedNote(Note);
                    }}
                  >
                    <div className="content">
                      {Note.noteName}
                      {Note.isTaskNote && (
                        <span className="taskBadge">Task</span>
                      )}
                      {Note.isProjectNote && (
                        <span className="projectBadge">Project</span>
                      )}
                      {Note.isHabitNote && (
                        <span className="habitBadge">Habit</span>
                      )}
                    </div>
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
                            {!Note.isTaskNote &&
                              !Note.isProjectNote &&
                              !Note.isHabitNote && (
                                <div
                                  className="dropdown-item"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteNote(Note.id);
                                  }}
                                >
                                  Delete
                                </div>
                              )}
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

      {/* Modal for Selected Note */}
      {ViewMode === "selected" && SelectedNote && (
        <div className="NoteModalOverlay" onClick={() => setViewMode("all")}>
          <div className="NoteModal" onClick={(e) => e.stopPropagation()}>
            <div className="NoteHeader">
              <input
                type="text"
                value={NoteName}
                placeholder={"Note name"}
                onChange={handleInputChange}
                disabled={
                  SelectedNote.isTaskNote ||
                  SelectedNote.isProjectNote ||
                  SelectedNote.isHabitNote
                }
              />
              <button
                onClick={() => {
                  setViewMode("all");
                  setSelectedNote(null);
                }}
              >
                Close
              </button>
            </div>

            <div ref={Aditor_NoteSection} className="Aditor_NoteSection"></div>
            <div className="noteHeaderControls">
              {!SelectedNote.isTaskNote &&
                !SelectedNote.isProjectNote &&
                !SelectedNote.isHabitNote && (
                  <div className="tagContainer">
                    <Tag
                      tagSuggestions={tagSuggestions}
                      onTagChange={handleTagChange}
                      initialTags={addedTags}
                    />
                  </div>
                )}
              <button className="saveNote" onClick={saveNote}>
                Save
              </button>
            </div>
            {(SelectedNote.isTaskNote ||
              SelectedNote.isProjectNote ||
              SelectedNote.isHabitNote) && (
              <p className="taskNoteInfo">
                Note: This is a{" "}
                {SelectedNote.isTaskNote
                  ? "task"
                  : SelectedNote.isProjectNote
                  ? "project"
                  : "habit"}{" "}
                note. You can only update the content. To delete it, delete the{" "}
                {SelectedNote.isTaskNote
                  ? "task"
                  : SelectedNote.isProjectNote
                  ? "project"
                  : "habit"}
                .
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default NoteSection;
