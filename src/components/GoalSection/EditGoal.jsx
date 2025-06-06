import React, { useState, useEffect, useRef } from "react";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase";
import DatePickerComponent from "../../lib/DatePickerComponent.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash, faSave } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "/src/lib/user";
import { initializeAditor, initializeAditorCheckbox } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./GoalSection.css";

function EditGoal({ goalId, setEditGoal }) {
  const Aditor_Goal = useRef(null);
  const Aditor_Checkbox_Goal = useRef(null);
  const [goalData, setGoalData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchGoalData = async () => {
      if (!goalId) return;

      console.log("Fetching goal with ID:", goalId);

      try {
        const userID = getUser().uid;
        const docRef = doc(db, userID, goalId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Goal Data:", docSnap.data()); // Debugging
          setGoalData(docSnap.data());
        } else {
          console.log("No such goal found!");
        }
      } catch (error) {
        console.error("Error fetching goal:", error);
      }
    };

    fetchGoalData();
  }, [goalId]);

  useEffect(() => {
    if (Aditor_Checkbox_Goal.current) {
      initializeAditorCheckbox(
        Aditor_Checkbox_Goal.current,
        goalData?.breakdown || ""
      );
    }
    if (Aditor_Goal.current) {
      initializeAditor(Aditor_Goal.current, goalData?.note || "");
    }
  }, [goalData]);

  const handleUpdateGoal = async () => {
    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, goalId);
      const updatedNoteContent = Aditor_Goal.current?.innerHTML || "";
      const updatedBreakdownContent =
        Aditor_Checkbox_Goal.current?.innerHTML || "";

      await updateDoc(goalRef, {
        goalName: goalData.goalName,
        estimatedTime: selectedDate ? selectedDate.toISOString() : null,
        note: updatedNoteContent,
        breakdown:
          goalData.subCategory === "Project" ? updatedBreakdownContent : "",
      });

      toast.success("Goal updated successfully!");
      setEditGoal(null);
    } catch (error) {
      console.error("Error updating goal:", error);
      toast.error("Failed to update goal.");
    }
  };

  const handleDeleteGoal = async () => {
    try {
      const userID = getUser().uid;
      await deleteDoc(doc(db, userID, goalId));
      toast.success("Goal deleted successfully!");
      setEditGoal(null);
    } catch (error) {
      console.error("Error deleting goal:", error);
      toast.error("Failed to delete goal.");
    }
  };

  if (!goalData) return <p>Loading goal...</p>;

  return (
    <div className="editGoal">
      <div className="panel">
        <button className="closeBtn" onClick={() => setEditGoal(null)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="contentSection">
          <input
            type="text"
            value={goalData.goalName}
            onChange={(e) =>
              setGoalData({ ...goalData, goalName: e.target.value })
            }
            placeholder="Goal Name"
          />
          <div ref={Aditor_Goal} className="Aditor_Goal" />
          {goalData.subCategory === "Project" && (
            <div ref={Aditor_Checkbox_Goal} className="Aditor_Checkbox_Goal" />
          )}
          {goalData.subCategory === "Project" && (
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
          <button onClick={handleUpdateGoal}>
            <FontAwesomeIcon icon={faSave} /> Update
          </button>
          <button onClick={handleDeleteGoal} className="deleteBtn">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditGoal;
