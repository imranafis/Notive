import React, { useState, useRef, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import Aditor_Point from "../../lib/Aditor_Point";
import "./BulletJournal.css";

function BulletJournal() {
  const Aditor_Point_BulletJournal = useRef(null);

  const [BulletContent, setBulletContent] = useState("");

  // Get current date
  const currentDate = new Date();

  // Format date components
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Combine date into desired format
  const displayDate = `${monthDayYear} | ${weekday}`;

  const addBullet = async () => {
    // Retrieve content from Aditor_Point
    const defaultValue =
      Aditor_Point_BulletJournal.current?.querySelector(
        ".inputContent"
      ).innerText;
    const updatedBulletContent = Aditor_Point_BulletJournal.current?.innerHTML;

    if (defaultValue == "") {
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
        bulletContent: updatedBulletContent, // Store retrieved content
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, userID), bulletData);
      console.log("Bullet note saved with ID:", docRef.id);

      toast.success("Bullet note saved successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });

      // Reset form state
      setBulletContent("");
    } catch (e) {
      console.error("Error saving Bullet note:", e);
      toast.error("Failed to save Bullet note. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="bulletJournal">
      <div className="displayDate">{displayDate}</div>
      <Aditor_Point
        ref={Aditor_Point_BulletJournal}
        className="Aditor_Point_BulletJournal"
        defaultValue={BulletContent} // Set saved content as default
      />
      <button className="addBullet" onClick={addBullet}>
        Save
      </button>
      <ToastContainer />
    </div>
  );
}

export default BulletJournal;
