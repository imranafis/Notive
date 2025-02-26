import React, { useState, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase";
import DatePickerComponent from "../../lib/DatePickerComponent.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import Aditor_Checkbox from "../../lib/Aditor_Checkbox.jsx";
import "./GoalSection.css";

function AddGoal({ setAddSection, defaultCategory, setDefaultCategory }) {
  const Aditor_Checkbox_Goal = useRef(null);
  const [goalName, setGoalName] = useState("");
  const [category, setCategory] = useState("");
  const [activeGroups, setActiveGroups] = useState(
    defaultCategory === "Project" ? ["Breakdown", "Details"] : []
  );
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const addSection = (section) => {
    setActiveGroups((prev) =>
      prev.includes(section) ? prev : [...prev, section]
    );
  };

  const handleInputChange = (e) => {
    setGoalName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);

    setBreakdownContent("");
    setSelectedDate(null);
    setActiveGroups([]);
  };

  const addGoal = async () => {
    if (!category) {
      toast.error("Please select a category!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    if (!goalName.trim()) {
      toast.error("Goal name is required!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const userID = getUser().uid;

      if (category === "Project") {
        const updatedBreakdownContent =
          Aditor_Checkbox_Goal.current?.innerHTML || "";
        const goalData = {
          goalName: goalName.trim(),
          estimatedTime: selectedDate
            ? selectedDate.format("DD/MM/YYYY")
            : null,
          category: "goal",
          subCategory: category,
          done: false,
          breakdown: updatedBreakdownContent,
          createdAt: new Date().toISOString(),
        };
        await addDoc(collection(db, userID), goalData);
      } else if (category === "Habit") {
        const goalData = {
          goalName: goalName.trim(),
          category: "goal",
          subCategory: category,
          done: false,
          createdAt: new Date().toISOString(),
        };
        await addDoc(collection(db, userID), goalData);
      }

      toast.success(`Goal (${category}) saved successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        setAddSection("");
      }, 1200);

      setGoalName("");
      setBreakdownContent("");
      setActiveGroups([]);
      setCategory("");
    } catch (e) {
      console.error("Error saving goal:", e);
      toast.error("Failed to save goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleAddGoal = () => {
    setDefaultCategory("");
    setAddSection("");
  };

  return (
    <div className="addGoal">
      <div className="panel">
        <button className="closeBtn" onClick={() => handleAddGoal()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="contentSection">
          {defaultCategory === "" && (
            <select
              value={category}
              onChange={handleCategoryChange}
              className="goal-dropdown"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="Habit">Habit</option>
              <option value="Project">Project</option>
            </select>
          )}
          <input
            type="text"
            value={goalName}
            onChange={handleInputChange}
            placeholder="Add a Goal name"
          />

          {activeGroups.includes("Breakdown") && (
            <Aditor_Checkbox
              ref={Aditor_Checkbox_Goal}
              className="Aditor_Checkbox_Goal"
              defaultValue={BreakdownContent}
            />
          )}

          {activeGroups.includes("Details") && (
            <>
              <p>Select a Date:</p>
              <DatePickerComponent
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </>
          )}
        </div>

        <div className="controlSection">
          {category === "Project" && (
            <>
              <button
                className={
                  activeGroups.includes("Breakdown") ? "btnActive" : ""
                }
                onClick={() => addSection("Breakdown")}
              >
                Breakdown
              </button>
              <button
                className={activeGroups.includes("Details") ? "btnActive" : ""}
                onClick={() => addSection("Details")}
              >
                Details
              </button>
            </>
          )}
          <button onClick={addGoal}>Save</button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddGoal;
