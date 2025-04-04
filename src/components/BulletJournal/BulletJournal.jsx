import React, { useState, useRef, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import { initializeAditorPoint } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./BulletJournal.css";

function BulletJournal() {
  const Aditor_Point_BulletJournal = useRef(null);
  // const [BulletContent, setBulletContent] = useState("");
  const [BulletJournals, setBulletJournals] = useState([]);
  const [ViewMode, setViewMode] = useState("today");
  const [SelectedBullet, setSelectedBullet] = useState(null);

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
  }, []);

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
