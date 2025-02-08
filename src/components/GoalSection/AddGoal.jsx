import React, { useState, useRef, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file
import DatePickerComponent from "../../lib/DatePickerComponent.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import Aditor_Checkbox from "../../lib/Aditor_Checkbox.jsx";
import "./GoalSection.css";

function AddGoal({ setAddSection }) {
  const Aditor_Checkbox_Goal = useRef(null);
  const [goalName, setGoalName] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleSection = (section) => {
    // If closing, store the content before hiding
    if (activeGroup === section) {
      if (Aditor_Checkbox_Goal.current) {
        setBreakdownContent(Aditor_Checkbox_Goal.current.innerHTML);
      }
      setActiveGroup(null);
    } else {
      setActiveGroup(section);
    }
  };

  const handleInputChange = (e) => {
    setGoalName(e.target.value);
  };

  const addGoal = async () => {
    if (!goalName.trim()) {
      toast.error("Goal name is required!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const userID = getUser().uid; // Get user ID

      // Retrieve latest breakdown content
      const updatedBreakdownContent = Aditor_Checkbox_Goal.current?.innerHTML;

      const goalData = {
        goalName: goalName.trim(),
        estimatedTime: selectedDate ? selectedDate.format("DD/MM/YYYY") : null,
        category: "goal",
        done: false,
        breakdown: updatedBreakdownContent, // Store retrieved breakdown content
        createdAt: new Date().toISOString(),
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, userID), goalData);
      console.log("Goal saved with ID:", docRef.id);

      toast.success("Goal saved successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });

      // Reset form state
      setGoalName("");
      setBreakdownContent("");
      setActiveGroup(null);
    } catch (e) {
      console.error("Error saving goal:", e);
      toast.error("Failed to save goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }

    setTimeout(() => {
      setAddSection("");
    }, 2200);
  };

  return (
    <div className="addGoal">
      <div className="panel">
        <div className="contentSection">
          <input
            type="text"
            value={goalName}
            onChange={handleInputChange}
            placeholder="Add a Goal name"
          />

          {activeGroup === "Breakdown" && (
            <>
              <Aditor_Checkbox
                ref={Aditor_Checkbox_Goal}
                className="Aditor_Checkbox_Goal"
                defaultValue={BreakdownContent} // Set saved content as default
              />
              <p>Selecte a Date:</p>
              <DatePickerComponent
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </>
          )}
        </div>
        <div className="controlSection">
          <button
            className={`${activeGroup === "Breakdown" ? "active" : ""}`}
            onClick={() => toggleSection("Breakdown")}
          >
            Breakdown
          </button>
          <button onClick={addGoal}>Save</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddGoal;
