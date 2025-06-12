import React, { useState, useRef, useEffect } from "react";
import {
  collection,
  addDoc,
  getDoc,
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

import {
  initializeAditor,
  initializeAditorCheckbox,
  initializeAditorDate,
} from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import "./GoalSection.css";

function AddGoal({
  addSection,
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

  const Aditor_DailyGoal = useRef(null);
  const DailyNoteRef = useRef(null);
  const allDailyNoteDivsRef = useRef([]);

  const Aditor_Goal_Checkbox = useRef(null);
  const [goalName, setGoalName] = useState("");
  const [category, setCategory] = useState("habit");
  const [activeSection, setActiveSection] = useState([]);
  const [Note, setNote] = useState("");
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const [status, setStatus] = useState("unchecked");

  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const todayKey = `${monthDayYear} | ${weekday}`;

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
    if (
      Aditor_DailyGoal.current &&
      !Aditor_DailyGoal.current.innerHTML.trim()
    ) {
      initializeAditorDate(Aditor_DailyGoal.current);
    }
  }, [activeSection]);

  useEffect(() => {
    if (selectedItem) {
      if (selectedItem.subCategory === "habit") {
        setGoalName(selectedItem.goalName);
        setNote(selectedItem.note);
        setStatus(selectedItem.daily ? "checked" : "unchecked");
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

      // Auto-expand daily note section when viewing daily task
      if (addSection === "viewDailyTask") {
        if (!newActiveSections.includes("dailyNote")) {
          newActiveSections.push("dailyNote");
        }
      }

      setActiveSection(newActiveSections);

      // Load today's daily note content for viewDailyTask mode
      if (DailyNoteRef.current && selectedItem.dailyNotes?.[todayKey]) {
        DailyNoteRef.current.innerHTML = selectedItem.dailyNotes[todayKey];
      }
    }
  }, [selectedItem, addSection]);

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

      if (category == "habit") {
        const goalData = {
          goalName: goalName.trim(),
          category: "goal",
          subCategory: category,
          done: false,
          daily: status == "checked" ? true : false,
          status: "unchecked",
          doneDate: "",
          note: updatedNoteContent,
          createdAt: new Date().toISOString(),
        };
        await addDoc(collection(db, userID), goalData);
      }

      if (category === "project") {
        const updatedBreakdownContent =
          Aditor_Goal_Checkbox.current?.innerHTML || "";
        const goalData = {
          goalName: goalName.trim(),
          category: "goal",
          subCategory: category,
          done: false,
          note: updatedNoteContent,
          breakdown: updatedBreakdownContent,
          createdAt: new Date().toISOString(),
          estimatedTime: selectedDate
            ? Timestamp.fromDate(new Date(selectedDate))
            : null,
        };

        await addDoc(collection(db, userID), goalData);
      }

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
      setStatus("unchecked");
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

      // Get existing goal data to avoid erasing anything
      const goalSnap = await getDoc(goalRef);
      if (!goalSnap.exists()) throw new Error("Goal not found.");

      const existingData = goalSnap.data();
      const updatedNoteContent = Aditor_Goal.current?.innerHTML || "";

      // Start with existing daily notes
      const updatedDailyNotes = { ...(existingData.dailyNotes || {}) };

      // Capture ALL edited daily notes from the refs
      if (allDailyNoteDivsRef.current) {
        Object.entries(allDailyNoteDivsRef.current).forEach(
          ([dateKey, element]) => {
            if (element && element.innerHTML) {
              updatedDailyNotes[dateKey] = element.innerHTML;
            }
          }
        );
      }

      // Capture today's note from DailyNoteRef (used in viewDailyTask mode)
      if (DailyNoteRef.current) {
        updatedDailyNotes[todayKey] = DailyNoteRef.current.innerHTML || "";
      }

      // Prepare update data
      const updatedGoalData = {
        ...existingData, // Preserve all existing fields
        goalName: goalName.trim(),
        note: updatedNoteContent,
        dailyNotes: updatedDailyNotes,
        daily: status === "checked",
        updatedAt: new Date().toISOString(),
      };

      // Handle project-specific fields
      if (category === "project") {
        const updatedBreakdownContent =
          Aditor_Goal_Checkbox.current?.innerHTML || "";
        updatedGoalData.breakdown = updatedBreakdownContent;
        updatedGoalData.estimatedTime = selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : existingData.estimatedTime; // Preserve existing if not changed
      }

      await updateDoc(goalRef, updatedGoalData);

      toast.success(`Goal ${category} updated successfully!`, {
        position: "bottom-right",
        autoClose: 2000,
      });

      setTimeout(() => {
        resetForm();
        setAddSection("");
      }, 1200);
    } catch (e) {
      console.error("Error updating goal:", e);
      toast.error("Failed to update goal. Please try again.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  const updateDailyGoal = async () => {
    try {
      // Get existing note data from Firestore
      const userID = getUser().uid;
      const goalRef = doc(db, userID, selectedItem.id);
      const goalSnap = await getDoc(goalRef);

      if (goalSnap.exists()) {
        const existingNoteHTML = goalSnap.data().note || "";
        const updatedDailyNoteContent =
          Aditor_DailyGoal.current?.innerHTML || "";

        // Parse both HTML strings into DOM
        const parser = new DOMParser();
        const existingDoc = parser.parseFromString(
          existingNoteHTML,
          "text/html"
        );
        const updatedDoc = parser.parseFromString(
          updatedDailyNoteContent,
          "text/html"
        );

        // Get `.aditor` from existing note
        const existingAditor = existingDoc.querySelector(".aditor");

        // Get all `.line` divs from updated note
        const newLines = updatedDoc.querySelectorAll(".line");

        // Append new lines to existing .aditor
        newLines.forEach((line) => {
          existingAditor?.appendChild(line.cloneNode(true));
        });

        // Use dropdown from original note
        const dropdownMenu = existingDoc.querySelector(".dropdownMenu");
        const updatedNoteHTML =
          existingAditor.outerHTML +
          (dropdownMenu ? dropdownMenu.outerHTML : "");

        // Prepare updated data
        const updatedGoalData = {
          goalName: goalName.trim(),
          category: "goal",
          subCategory: category,
          done: false,
          daily: status == "checked" ? true : false,
          status: "unchecked",
          checkedDate: "",
          note: updatedNoteHTML,
          createdAt: new Date().toISOString(),
        };

        // Update Firestore
        await updateDoc(goalRef, updatedGoalData);
      }
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

  const handleClick = () => {
    if (status == "unchecked") {
      setStatus("checked");
    } else if (status == "checked") {
      setStatus("unchecked");
    }
  };

  return (
    <div
      className={`addGoal ${fullScreenMode ? "fullScreen" : ""}`}
      ref={addGoalRef}
    >
      {addSection == "viewDailyTask" && (
        <div className="panel">
          <button className="closeBtn" onClick={() => handleCloseGoal()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <input
            type="text"
            className="goalName"
            value={goalName}
            onChange={handleInputChange}
            placeholder={`Add a ${category} name`}
          />

          <button
            className={`dailyNoteBtn ${
              activeSection.includes("dailyNote") ? "activate" : ""
            }`}
            onClick={() => addActiveSection("dailyNote")}
          >
            <i
              className={`fa-solid ${
                activeSection.includes("dailyNote")
                  ? "fa-angle-down"
                  : "fa-angle-right"
              }`}
            ></i>
            Daily Note ({monthDayYear})
          </button>

          <div
            ref={DailyNoteRef}
            className={`dailyNote ${
              activeSection.includes("dailyNote") ? "active" : ""
            }`}
            contentEditable={true}
          ></div>

          <div className="controlBtn">
            <button onClick={updateGoal} className="updateBtn">
              Save
            </button>
            <button onClick={deleteGoal} className="deleteBtn">
              Delete
            </button>
          </div>
        </div>
      )}
      {addSection != "viewDailyTask" && (
        <div className="panel">
          <button className="closeBtn" onClick={() => handleCloseGoal()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {defaultCategory === "" && (
            <select
              value={category}
              onChange={handleCategoryChange}
              className="goal-dropdown"
            >
              <option value="" disabled>
                Select Category
              </option>
              <option value="habit">Habit</option>
              <option value="project">Project</option>
            </select>
          )}
          <input
            type="text"
            className="goalName"
            value={goalName}
            onChange={handleInputChange}
            placeholder={`Add a ${category} name`}
          />

          <button
            className={`note ${
              activeSection.includes("note") ? "activate" : ""
            }`}
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

          <div
            ref={Aditor_Goal}
            className={`Aditor_Goal ${
              activeSection.includes("note") ? "active" : ""
            }`}
          />
          {category === "habit" && (
            <>
              <div className="dailyCheckbox">
                <div className="label">Daily Check:</div>
                <div
                  className={`task-box ${status}`}
                  onClick={handleClick}
                ></div>
              </div>

              {selectedItem?.dailyNotes && (
                <div className="dailyNotesSection">
                  <button
                    className={`dailyNoteBtn ${
                      activeSection.includes("dailyNotes") ? "activate" : ""
                    }`}
                    onClick={() => addActiveSection("dailyNotes")}
                  >
                    <i
                      className={`fa-solid ${
                        activeSection.includes("dailyNotes")
                          ? "fa-angle-down"
                          : "fa-angle-right"
                      }`}
                    ></i>
                    Daily Notes
                  </button>

                  <div
                    className={`dailyNotes ${
                      activeSection.includes("dailyNotes") ? "active" : ""
                    }`}
                  >
                    {Object.keys(selectedItem.dailyNotes).length === 0 ? (
                      <p>No daily note available</p>
                    ) : (
                      Object.entries(selectedItem.dailyNotes).map(
                        ([date, note]) => (
                          <div key={date}>
                            <p>
                              <strong>{date}</strong>
                            </p>
                            <div
                              className="dailyNoteDisplay"
                              contentEditable={true}
                              ref={(el) => {
                                if (el) {
                                  allDailyNoteDivsRef.current[date] = el;
                                }
                              }}
                              dangerouslySetInnerHTML={{ __html: note }}
                            />
                          </div>
                        )
                      )
                    )}
                  </div>
                </div>
              )}
            </>
          )}
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
                  Update
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
        </div>
      )}
    </div>
  );
}

export default AddGoal;
