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

import { getUser } from "/src/lib/user";

import { toast } from "react-toastify";

import { initializeAditor, initializeAditorCheckbox } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./GoalSection.css";

function AddGoal({
  setAddSection,
  defaultCategory,
  setDefaultCategory,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
  onClose,
}) {
  const addGoalRef = useRef(null);

  const Aditor_Goal = useRef(null);
  const Aditor_Goal_Checkbox = useRef(null);
  const [goalName, setGoalName] = useState("");
  const [category, setCategory] = useState("Habit");
  const [activeSection, setActiveSection] = useState([]);
  const [Note, setNote] = useState("");
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (addGoalRef.current && !addGoalRef.current.contains(event.target)) {
  //       handleCloseGoal();
  //     }
  //   }

  //   // Bind the event listener
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     // Unbind the event listener on clean up
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [onClose]); // Add onClose to dependency array

  // useEffect(() => {
  //   console.log(selectedItem);
  //   if (selectedItem) {
  //     // const newActiveSections = [];
  //     // if (selectedItem.note) newActiveSections.push("note");
  //     // if (selectedItem.breakdown) newActiveSections.push("breakdown");
  //     // if (selectedItem.estimatedTime) newActiveSections.push("details");

  //     // setActiveSection(newActiveSections);
  //     if (selectedItem.subCategory === "Habit") {
  //       setGoalName(selectedItem.goalName);
  //       setNote(selectedItem.note);
  //     } else if (selectedItem.subCategory === "Project") {
  //       // Convert Firestore Timestamp to Day.js
  //       const estimatedTime = selectedItem.estimatedTime
  //         ? dayjs(selectedItem.estimatedTime.toDate()) // Convert if it's a Timestamp
  //         : null;

  //       setSelectedDate(estimatedTime);
  //       setGoalName(selectedItem.goalName);
  //       setNote(selectedItem.note);
  //       setBreakdownContent(selectedItem.breakdown);
  //     }
  //   }

  //   if (Aditor_Goal.current && !Aditor_Goal.current.innerHTML.trim()) {
  //     initializeAditor(Aditor_Goal.current, selectedItem?.note || "");
  //   }
  //   if (
  //     Aditor_Goal_Checkbox.current &&
  //     !Aditor_Goal_Checkbox.current.innerHTML.trim()
  //   ) {
  //     initializeAditorCheckbox(
  //       Aditor_Goal_Checkbox.current,
  //       selectedItem?.breakdown || ""
  //     );
  //   }

  //   // Automatically expand sections if data exists
  // }, [activeSection, selectedItem]);

  // useEffect(() => {
  //   onClose();
  // }, [setAddSection]);

  useEffect(() => {
    if (Aditor_Goal.current && !Aditor_Goal.current.innerHTML.trim()) {
      initializeAditor(Aditor_Goal.current, selectedItem?.note || "");
    }
    if (
      Aditor_Goal_Checkbox.current &&
      !Aditor_Goal_Checkbox.current.innerHTML.trim()
    ) {
      initializeAditorCheckbox(
        Aditor_Goal_Checkbox.current,
        selectedItem?.breakdown || ""
      );
    }
  }, [activeSection]);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.subCategory === "habit") {
        setGoalName(selectedItem.goalName);
        setNote(selectedItem.note);
      } else if (selectedItem.subCategory === "project") {
        // Convert Firestore Timestamp to Day.js
        const estimatedTime = selectedItem.estimatedTime
          ? dayjs(selectedItem.estimatedTime.toDate()) // Convert if it's a Timestamp
          : null;

        setSelectedDate(estimatedTime);
        setGoalName(selectedItem.goalName);
        setNote(selectedItem.note);
        setBreakdownContent(selectedItem.breakdown);
      }

      // Dynamically set active sections based on content
      // setActiveSection((prev) => {
      const newActiveSections = [];

      const parser = new DOMParser();
      const docNote = parser.parseFromString(selectedItem.note, "text/html");
      const noteContent = docNote.querySelector(".inputContent")?.innerText;
      const docbreakdown = parser.parseFromString(
        selectedItem.breakdown,
        "text/html"
      );
      const breakdownContent =
        docbreakdown.querySelector(".inputContent")?.innerText;

      // const updatedSections = [...prev];
      if (
        selectedItem.note &&
        !newActiveSections.includes("note") &&
        noteContent != ""
      ) {
        newActiveSections.push("note");
      }
      if (
        selectedItem.breakdown &&
        !newActiveSections.includes("breakdown") &&
        breakdownContent != ""
      ) {
        newActiveSections.push("breakdown");
      }
      if (
        selectedItem.estimatedTime &&
        !newActiveSections.includes("details")
      ) {
        newActiveSections.push("details");
      }
      // return updatedSections;
      setActiveSection(newActiveSections);

      // });
    }
  }, [selectedItem]);

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
    setActiveSection([]);
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
          Aditor_Goal_Checkbox.current?.innerHTML || "";

        goalData.estimatedTime = selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null;
        goalData.breakdown = updatedBreakdownContent;
      }

      await addDoc(collection(db, userID), goalData);

      toast.success(`Goal ${category} saved successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        setAddSection("");
      }, 1200);

      setGoalName("");
      setNote("");
      setBreakdownContent("");
      setActiveSection([]);
      setCategory("Goal");
      setSelectedDate("");
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

    if (!selectedItem) {
      toast.error("No goal selected to update!", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, selectedItem.id);
      const updatedNoteContent = Aditor_Goal.current?.innerHTML || "";

      const updatedGoalData = {
        goalName: goalName.trim(),
        category: "goal",
        subCategory: category,
        done: false,
        note: updatedNoteContent,
        createdAt: new Date().toISOString(),
      };

      if (category === "project") {
        const updatedBreakdownContent =
          Aditor_Goal_Checkbox.current?.innerHTML || "";
        updatedGoalData.estimatedTime = selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null;
        updatedGoalData.breakdown = updatedBreakdownContent;
      }

      await updateDoc(goalRef, updatedGoalData);

      toast.success(`Goal ${category} updated successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        resetForm();
        setAddSection(""); // Hide the form
      }, 1200);
    } catch (e) {
      console.error("Error updating goal:", e);
      toast.error("Failed to update goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const deleteGoal = async () => {
    if (!selectedItem) return;

    toast.warn(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          textAlign: "center",
        }}
      >
        <p>Are you sure you want to delete this goal?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const goalRef = doc(db, userID, selectedItem.id);
                await deleteDoc(goalRef);
                toast.success("Goal deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 500,
                });

                setTimeout(() => {
                  resetForm();
                  setAddSection(""); // Hide the form
                }, 1000);
              } catch (error) {
                console.error("Error deleting goal:", error);
                toast.error("Failed to delete goal. Please try again.", {
                  position: "bottom-right",
                  autoClose: 1000,
                });
              }
            }}
            style={{
              backgroundColor: "#28a745",
              color: "white",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss()}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              padding: "8px 16px",
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
  };

  const handleCloseGoal = () => {
    onClose(); // Call the passed onClose function
  };

  const addActiveSection = (section) => {
    setActiveSection((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const resetForm = () => {
    setGoalName("");
    setNote("");
    setBreakdownContent("");
    setActiveSection([]);
    setCategory("Goal");
    setSelectedDate("");
    setSelectedItem(null);
  };

  return (
    <div
      className={`addGoal ${fullScreenMode ? "fullScreen" : ""}`}
      ref={addGoalRef}
    >
      <div className="panel">
        <button className="closeBtn" onClick={() => handleCloseGoal()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {/* <div className="contentSection"> */}
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
          className="goalName"
          value={goalName}
          onChange={handleInputChange}
          placeholder={`Add a ${category} name`}
        />

        {/* </div> */}

        {/* <div className="controlSection"> */}
        <button
          className={`note ${activeSection.includes("note") ? "activate" : ""}`}
          onClick={() => addActiveSection("note")}
        >
          <i
            className={`fa-solid ${
              activeSection.includes("note")
                ? "fa-angle-down"
                : "fa-angle-right"
            }`}
          ></i>
          Note
        </button>

        {/* {activeSection === "details" && ( */}
        <div
          ref={Aditor_Goal}
          className={`Aditor_Goal ${
            activeSection.includes("note") ? "active" : ""
          }`}
        />
        {category === "project" && (
          <>
            <button
              className={`breakdown ${
                activeSection.includes("breakdown") ? "activate" : ""
              }`}
              onClick={() => addActiveSection("breakdown")}
            >
              <i
                className={`fa-solid ${
                  activeSection.includes("breakdown")
                    ? "fa-angle-down"
                    : "fa-angle-right"
                }`}
              ></i>
              Breakdown
            </button>

            {/* {activeSection === "breakdown" && ( */}
            <div
              ref={Aditor_Goal_Checkbox}
              className={`Aditor_Goal_Checkbox ${
                activeSection.includes("breakdown") ? "active" : ""
              }`}
            />
            <button
              className={`details ${
                activeSection.includes("details") ? "activate" : ""
              }`}
              onClick={() => addActiveSection("details")}
            >
              <i
                className={`fa-solid ${
                  activeSection.includes("details")
                    ? "fa-angle-down"
                    : "fa-angle-right"
                }`}
              ></i>
              Details
            </button>

            {activeSection.includes("details") && (
              <>
                <p>Deadline:</p>
                <DatePickerComponent
                  selectedDate={selectedDate ? dayjs(selectedDate) : null}
                  setSelectedDate={(newValue) => setSelectedDate(newValue)}
                />
              </>
            )}
          </>
        )}

        <div className="controlBtn">
          {selectedItem ? (
            <>
              <button onClick={updateGoal} className="updateBtn">
                Save
              </button>
              <button onClick={deleteGoal} className="deleteBtn">
                Delete
              </button>
            </>
          ) : (
            <button onClick={addGoal} className="saveBtn">
              Save
            </button>
          )}
        </div>
        {/* </div> */}
      </div>

      {/* <ToastContainer /> */}
    </div>
  );
}

export default AddGoal;
