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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import { initializeAditorPoint } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./BulletJournal.css";

function BulletJournal() {
  const Aditor_Point_BulletJournal = useRef(null);
  const [BulletContent, setBulletContent] = useState("");

  // Get current date
  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const displayDate = `${monthDayYear} | ${weekday}`;

  // Load data from local storage
  useEffect(() => {
    const storedDate = localStorage.getItem("bulletDate") || "";
    let storedContent = localStorage.getItem("bulletContent") || "";

    if (storedDate === "" || storedDate !== displayDate) {
      localStorage.setItem("bulletDate", displayDate);
      localStorage.setItem("bulletContent", "");
      storedContent = "";
    }

    setBulletContent(storedContent);

    if (Aditor_Point_BulletJournal.current) {
      initializeAditorPoint(Aditor_Point_BulletJournal.current, storedContent);
      // Aditor_Point_BulletJournal.current.innerHTML = storedContent;
    }
  }, []);

  // Update local storage on content change
  useEffect(() => {
    if (Aditor_Point_BulletJournal.current) {
      const aditorElement = Aditor_Point_BulletJournal.current;

      const handleKeyUp = () => {
        const updatedContent = aditorElement.innerHTML;
        setBulletContent(updatedContent);
        localStorage.setItem("bulletContent", updatedContent);
      };

      aditorElement.addEventListener("keyup", handleKeyUp);
      // return () => aditorElement.removeEventListener("keyup", handleKeyUp);
    }
  }, []);

  const addBullet = async () => {
    const defaultValue =
      Aditor_Point_BulletJournal.current?.querySelector(
        ".inputContent"
      )?.innerText;

    if (!defaultValue || defaultValue.trim() === "") {
      toast.error("Bullet note is required!", {
        position: "bottom-right",
        autoClose: 1000,
      });
      return;
    }

    try {
      const userID = getUser().uid; // Get user ID
      const bulletData = {
        bulletDate: displayDate,
        category: "bulletJournal",
        bulletContent: BulletContent,
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
        const docRef = await addDoc(userCollection, bulletData);
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
  return (
    <div className="bulletJournal">
      <div className="displayDate">{displayDate}</div>
      <div
        ref={Aditor_Point_BulletJournal}
        className="Aditor_Point_BulletJournal"
      ></div>
      <button className="addBullet" onClick={addBullet}>
        Save
      </button>
      <ToastContainer />
    </div>
  );
}

export default BulletJournal;
