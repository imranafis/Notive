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
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { initializeAditorPoint } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./BulletJournal.css";

function BulletJournal() {
  const Aditor_Point_BulletJournal = useRef(null);
  // const [BulletContent, setBulletContent] = useState("");
  const [BulletJournals, setBulletJournals] = useState([]);
  const [ViewMode, setViewMode] = useState("today");
  const [SelectedBullet, setSelectedBullet] = useState(null);

  const [activeDropdown, setActiveDropdown] = useState(null);

  // Get current date
  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const todayDate = `${monthDayYear} | ${weekday}`;
  const displayDate =
    ViewMode === "selected" && SelectedBullet
      ? SelectedBullet.bulletDate
      : `${monthDayYear} | ${weekday}`;

  // Load data from local storage
  useEffect(() => {
    const storedDate = localStorage.getItem("bulletDate") || "";
    let storedContent = localStorage.getItem("bulletContent") || "";

    if (storedDate === "" || storedDate !== todayDate) {
      localStorage.setItem("bulletDate", todayDate);
      localStorage.setItem("bulletContent", "");
      storedContent = "";
    }

    // setBulletContent(storedContent);

    if (Aditor_Point_BulletJournal.current) {
      initializeAditorPoint(Aditor_Point_BulletJournal.current, storedContent);
      // Aditor_Point_BulletJournal.current.innerHTML = storedContent;
    }

    fetchAllBullets();
    setActiveDropdown(null);
  }, [ViewMode]);

  // Update local storage on content change
  useEffect(() => {
    if (ViewMode != "selected" && Aditor_Point_BulletJournal.current) {
      const aditorElement = Aditor_Point_BulletJournal.current;
      const handleKeyUp = () => {
        const updatedContent = aditorElement.innerHTML;
        // setBulletContent(updatedContent);
        localStorage.setItem("bulletContent", updatedContent);
      };

      aditorElement.addEventListener("keyup", handleKeyUp);
      return () => aditorElement.removeEventListener("keyup", handleKeyUp);
    }
  }, [ViewMode]);

  useEffect(() => {
    if (
      ViewMode === "selected" &&
      SelectedBullet &&
      Aditor_Point_BulletJournal.current
    ) {
      initializeAditorPoint(
        Aditor_Point_BulletJournal.current,
        SelectedBullet.bulletContent
      );
    }
  }, [SelectedBullet]);

  const handleSelectedBullet = (bullet) => {
    setSelectedBullet(bullet);
    setViewMode(bullet.bulletDate === todayDate ? "today" : "selected");
  };

  const saveBullet = async () => {
    const aditorElement = Aditor_Point_BulletJournal.current;

    const defaultValue =
      aditorElement?.querySelector(".inputContent")?.innerText;

    if (!defaultValue || defaultValue.trim() === "") {
      toast.error("Bullet note is required!", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    try {
      const updatedContent = aditorElement.innerHTML;

      const userID = getUser().uid; // Get user ID
      const bulletData = {
        bulletDate: displayDate,
        category: "bulletJournal",
        bulletContent: updatedContent,
      };

      const userCollection = collection(db, userID);

      // Check if a document with the same bulletDate exists
      const q = query(userCollection, where("bulletDate", "==", displayDate));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, bulletData);
        toast.success("Bullet note updated successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      } else {
        await addDoc(userCollection, bulletData);
        toast.success("Bullet note saved successfully!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (e) {
      toast.error("Failed to save Bullet note. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const fetchAllBullets = async () => {
    try {
      const userID = getUser().uid;
      const userCollection = collection(db, userID);
      const q = query(userCollection, where("category", "==", "bulletJournal"));
      const querySnapshot = await getDocs(q);
      const bullets = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBulletJournals(bullets);
      // setViewAll(true);
    } catch (error) {
      toast.error("Failed to load bullet notes.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const truncateContent = (content) => {
    const plainText = content.replace(/<[^>]*>/g, "");
    return plainText.substring(0, 100) + "...";
  };

  const toggleDropdown = (bulletId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === bulletId ? null : bulletId);
  };

  const handleDeleteBullet = async (bulletId) => {
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
        <p>Are you sure you want to delete this Bullet Journal?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const bulletRef = doc(db, userID, bulletId);
                await deleteDoc(bulletRef);

                setBulletJournals(
                  BulletJournals.filter((bullet) => bullet.id !== bulletId)
                );
                toast.dismiss(toastId);
                toast.success("Bullet Journal deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 1000,
                });
              } catch (error) {
                console.error("Error deleting Bullet Journal:", error);
                toast.dismiss(toastId);
                toast.error(
                  "Failed to delete Bullet Journal. Please try again.",
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

  return (
    <div className="bulletJournal">
      {ViewMode == "today" && (
        <>
          <div className="bulletHeader">
            <div className="displayDate">{displayDate}</div>
            <button
              onClick={() => {
                setViewMode("all");
              }}
            >
              View All
            </button>
          </div>
          <div
            ref={Aditor_Point_BulletJournal}
            className="Aditor_Point_BulletJournal"
          ></div>
          <button className="saveBullet" onClick={saveBullet}>
            Save
          </button>
        </>
      )}
      {ViewMode == "all" && (
        <>
          <div className="bulletJournal all">
            <div className="bulletHeader">
              {/* <div className="displayDate">{displayDate}</div> */}
              <button
                onClick={() => {
                  setViewMode("today");
                }}
              >
                Go Today
              </button>
            </div>
            <div className="bulletContainer">
              <div className="bulletGrid">
                {BulletJournals.length === 0 ? (
                  <p>No Bullet Journal added yet.</p>
                ) : (
                  BulletJournals.map((bullet) => (
                    <div
                      key={bullet.id}
                      className="bulletCard"
                      onClick={() => {
                        handleSelectedBullet(bullet);
                      }}
                    >
                      <h3>{bullet.bulletDate}</h3>
                      <div className="content">
                        {truncateContent(bullet.bulletContent)}
                      </div>

                      <div
                        className="bulletActions"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="dropdown-container">
                          <FontAwesomeIcon
                            className="menuBtn"
                            icon={faEllipsisV}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleDropdown(bullet.id, e);
                            }}
                          />
                          {activeDropdown === bullet.id && (
                            <div
                              className="dropdown-menu"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div
                                className="dropdown-item"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSelectedBullet(bullet);
                                }}
                              >
                                View
                              </div>

                              <div
                                className="dropdown-item"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteBullet(bullet.id);
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
        </>
      )}
      {ViewMode == "selected" && (
        <>
          <div className="bulletHeader">
            <div className="displayDate">{displayDate}</div>
            <button
              onClick={() => {
                setViewMode("all");
              }}
            >
              View All
            </button>
            <button
              onClick={() => {
                setViewMode("today");
              }}
            >
              Go Today
            </button>
          </div>
          <div
            ref={Aditor_Point_BulletJournal}
            className="Aditor_Point_BulletJournal"
          ></div>
          <button className="saveBullet" onClick={saveBullet}>
            Save
          </button>
        </>
      )}
    </div>
  );
}

export default BulletJournal;
