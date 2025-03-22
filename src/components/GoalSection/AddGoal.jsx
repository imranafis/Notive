import React, { useState, useRef, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  Timestamp,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import DatePickerComponent from "../../lib/DatePickerComponent.jsx";
import dayjs from "dayjs";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUser } from "/src/lib/user";

import { initializeAditorX } from "aditorx";

import { initializeAditor, initializeAditorCheckbox } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./GoalSection.css";

function AddGoal({
  setAddSection,
  defaultCategory,
  setDefaultCategory,
  selectedGoal,
  setSelectedGoal,
}) {
  const Aditor_Goal = useRef(null);
  const Aditor_Checkbox_Goal = useRef(null);
  const [goalName, setGoalName] = useState("");
  const [category, setCategory] = useState("Habit");
  const [activeGroups, setActiveGroups] = useState([]);
  const [Note, setNote] = useState("");
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    console.log(selectedGoal);
    if (selectedGoal) {
      if (selectedGoal.subCategory === "Habit") {
        setGoalName(selectedGoal.goalName);
        setNote(selectedGoal.note);
      } else if (selectedGoal.subCategory === "Project") {
        // Convert Firestore Timestamp to Day.js
        const estimatedTime = selectedGoal.estimatedTime
          ? dayjs(selectedGoal.estimatedTime.toDate()) // Convert if it's a Timestamp
          : null;

        setSelectedDate(estimatedTime);
        setGoalName(selectedGoal.goalName);
        setNote(selectedGoal.note);
        setBreakdownContent(selectedGoal.breakdown);
      }
    }

    if (Aditor_Goal.current && !Aditor_Goal.current.innerHTML.trim()) {
      initializeAditor(Aditor_Goal.current, selectedGoal?.note || "");
    }
    if (
      Aditor_Checkbox_Goal.current &&
      !Aditor_Checkbox_Goal.current.innerHTML.trim()
    ) {
      initializeAditorCheckbox(
        Aditor_Checkbox_Goal.current,
        selectedGoal?.breakdown || ""
      );
    }
  }, [activeGroups, selectedGoal]);

  // useEffect(() => {
  //   if (selectedGoal && Aditor_Goal.current) {
  //     const note = selectedGoal.note;
  //     console.log(selectedGoal.note);
  //     initializeAditorX(Aditor_Goal.current, note);
  //   }
  // }, [activeGroups]);

  // useEffect(() => {
  //   if (Aditor_Checkbox_Goal.current) {
  //     initializeAditorCheckbox(Aditor_Checkbox_Goal.current, "");
  //   }
  //   if (Aditor_Goal.current) {
  //     initializeAditor(Aditor_Goal.current, "");
  //   }
  // }, [activeGroups]);

  const addSection = (section) => {
    setActiveGroups((prev) =>
      prev.includes(section) ? prev : [...prev, section]
    );
  };

  const handleInputChange = (e) => {
    setGoalName(e.target.value);
  };

  useEffect(() => {
    if (defaultCategory) {
      setCategory(defaultCategory);
    }
  }, [defaultCategory]);

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
      const updatedNoteContent = Aditor_Goal.current?.innerHTML || "";

      const goalData = {
        goalName: goalName.trim(),
        category: "goal",
        subCategory: category,
        done: false,
        note: updatedNoteContent,
        createdAt: new Date().toISOString(),
      };

      if (category === "Project") {
        const updatedBreakdownContent =
          Aditor_Checkbox_Goal.current?.innerHTML || "";

        goalData.estimatedTime = selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null;
        goalData.breakdown = updatedBreakdownContent;
      }

      await addDoc(collection(db, userID), goalData);

      toast.success(`Goal (${category}) saved successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        setAddSection("");
      }, 1200);

      setGoalName("");
      setNote("");
      setBreakdownContent("");
      setActiveGroups([]);
      setCategory("Goal");
    } catch (e) {
      console.error("Error saving goal:", e);
      toast.error("Failed to save goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const updateGoal = async () => {
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

    if (!selectedGoal) {
      toast.error("No goal selected to update!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, selectedGoal.id);
      const updatedNoteContent = Aditor_Goal.current?.innerHTML || "";

      const updatedGoalData = {
        goalName: goalName.trim(),
        category: "goal",
        subCategory: category,
        done: false,
        note: updatedNoteContent,
        createdAt: new Date().toISOString(),
      };

      if (category === "Project") {
        const updatedBreakdownContent =
          Aditor_Checkbox_Goal.current?.innerHTML || "";

        updatedGoalData.estimatedTime = selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null;
        updatedGoalData.breakdown = updatedBreakdownContent;
      }

      await updateDoc(goalRef, updatedGoalData);

      toast.success(`Goal (${category}) updated successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        setAddSection("");
      }, 1200);

      setGoalName("");
      setNote("");
      setBreakdownContent("");
      setActiveGroups([]);
      setCategory("Goal");
    } catch (e) {
      console.error("Error updating goal:", e);
      toast.error("Failed to update goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const deleteGoal = async () => {
    if (!selectedGoal) return;
    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, selectedGoal.id);
      await deleteDoc(goalRef);

      toast.success("Goal deleted successfully!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      setTimeout(() => setAddSection(""), 1200);
    } catch (error) {
      console.error("Error deleting goal:", error);
      toast.error("Failed to delete goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const handleCloseGoal = () => {
    setDefaultCategory("");
    setAddSection("");
    setSelectedGoal(null);
  };

  return (
    <div className="addGoal">
      <div className="panel">
        <button className="closeBtn" onClick={() => handleCloseGoal()}>
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
            placeholder={`Add a ${category} name`}
          />

          {/* <div ref={Aditor_Goal} className="Aditor_Goal" /> */}
          {activeGroups.includes("Note") && (
            <div ref={Aditor_Goal} className="Aditor_Goal" />
          )}
          {activeGroups.includes("Breakdown") && (
            <div ref={Aditor_Checkbox_Goal} className="Aditor_Checkbox_Goal" />
          )}

          {activeGroups.includes("Details") && (
            <>
              <p>Select a Date:</p>
              <DatePickerComponent
                selectedDate={selectedDate ? dayjs(selectedDate) : null}
                setSelectedDate={(newValue) => setSelectedDate(newValue)}
              />
            </>
          )}
        </div>

        <div className="controlSection">
          <button
            className={activeGroups.includes("Note") ? "btnActive" : ""}
            onClick={() => addSection("Note")}
          >
            Note
          </button>
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
          {selectedGoal ? (
            <>
              <button onClick={updateGoal} className="updateBtn">
                Update
              </button>
              <button onClick={deleteGoal} className="deleteBtn">
                Delete
              </button>
            </>
          ) : (
            <button onClick={addGoal}>Save</button>
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default AddGoal;
