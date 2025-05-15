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
import { getUser } from "/src/lib/user";
import { initializeAditor, initializeAditorCheckbox } from "/src/lib/aditor.js";
import "/src/lib/aditor.css";
import RadioGroup from "../others/RadioGroup.jsx";
import Tag from "../Tag/Tag.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./AddTask.css";

const AddTask = ({
  setAddSection,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
  onClose,
}) => {
  const Aditor_Task = useRef(null);
  const Aditor_Task_Checkbox = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];
  const [inputValue, setInputValue] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [activeSection, setActiveSection] = useState([]);
  const [Note, setNote] = useState("");
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (selectedItem) {
      // console.log(selectedItem.priority);
      // First set all the state values
      setInputValue(selectedItem.name || "");
      setSelectedPriority(selectedItem.priority || "");
      setSelectedLevel(selectedItem.size || "");
      setAddedTags(selectedItem.tags || []);
      setNote(selectedItem.note || "");
      setBreakdownContent(selectedItem.breakdown || "");
      setSelectedDate(
        selectedItem.deadline ? dayjs(selectedItem.deadline.toDate()) : null
      );

      // Then initialize editors
      if (Aditor_Task.current) {
        initializeAditor(Aditor_Task.current, selectedItem.note || "");
      }
      if (Aditor_Task_Checkbox.current) {
        initializeAditorCheckbox(
          Aditor_Task_Checkbox.current,
          selectedItem.breakdown || ""
        );
      }

      // Finally set active sections
      const newActiveSections = [];
      const parser = new DOMParser();
      const docNote = parser.parseFromString(
        selectedItem.note || "",
        "text/html"
      );
      const noteContent = docNote.querySelector(".inputContent")?.innerText;
      const docbreakdown = parser.parseFromString(
        selectedItem.breakdown || "",
        "text/html"
      );
      const breakdownContent =
        docbreakdown.querySelector(".inputContent")?.innerText;

      if (selectedItem.note && noteContent) {
        newActiveSections.push("note");
      }
      if (selectedItem.breakdown && breakdownContent) {
        newActiveSections.push("breakdown");
      }
      if (
        selectedItem.priority ||
        selectedItem.size ||
        selectedItem.tags ||
        selectedItem.deadline
      ) {
        newActiveSections.push("details");
      }
      setActiveSection(newActiveSections);
    } else {
      // Reset for new task
      resetForm();
      if (Aditor_Task.current) initializeAditor(Aditor_Task.current, "");
      if (Aditor_Task_Checkbox.current)
        initializeAditorCheckbox(Aditor_Task_Checkbox.current, "");
    }
  }, [selectedItem]);
  const addSection = (section) => {
    setActiveSection((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const handleRadioChange = (option) => {
    if (option.id === "categoryL") {
      setSelectedLevel(option.value);
    } else if (option.id === "categoryP") {
      setSelectedPriority(option.value);
    }
  };

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = async () => {
    if (!inputValue.trim()) {
      toast.error("Task name is required!", { position: "bottom-right" });
      return;
    }

    try {
      const userID = getUser().uid;
      const updatedNoteContent = Aditor_Task.current?.innerHTML || "";
      const updatedBreakdownContent =
        Aditor_Task_Checkbox.current?.innerHTML || "";

      const taskData = {
        name: inputValue.trim(),
        priority: selectedPriority,
        Category: "task",
        size: selectedLevel,
        tags: addedTags,
        note: updatedNoteContent,
        status: "unchecked",
        breakdown: updatedBreakdownContent,
        deadline: selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, userID), taskData);

      resetForm();
      toast.success("Task saved successfully!", { position: "bottom-right" });
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to save task. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  const updateTask = async () => {
    if (!inputValue.trim()) {
      toast.error("Task name is required!", { position: "bottom-right" });
      return;
    }

    if (!selectedItem) {
      toast.error("No task selected to update!", { position: "bottom-right" });
      return;
    }

    try {
      const userID = getUser().uid;
      const taskRef = doc(db, userID, selectedItem.id);
      const updatedNoteContent = Aditor_Task.current?.innerHTML || "";
      const updatedBreakdownContent =
        Aditor_Task_Checkbox.current?.innerHTML || "";

      const updatedTaskData = {
        name: inputValue.trim(),
        priority: selectedPriority,
        size: selectedLevel,
        tags: addedTags,
        note: updatedNoteContent,
        breakdown: updatedBreakdownContent,
        deadline: selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null,
      };

      await updateDoc(taskRef, updatedTaskData);

      resetForm();
      toast.success("Task updated successfully!", { position: "bottom-right" });
      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (e) {
      console.error("Error updating task: ", e);
      toast.error("Failed to update task. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  const deleteTask = async () => {
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
        <p>Are you sure you want to delete this task?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const taskRef = doc(db, userID, selectedItem.id);
                await deleteDoc(taskRef);
                toast.success("Task deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 500,
                });

                setTimeout(() => {
                  resetForm();
                  onClose();
                }, 1000);
              } catch (error) {
                console.error("Error deleting task:", error);
                toast.error("Failed to delete task. Please try again.", {
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

  const resetForm = () => {
    setInputValue("");
    setAddedTags([]);
    setSelectedPriority("");
    setSelectedLevel("");
    setNote("");
    setBreakdownContent("");
    setActiveSection([]);
    setSelectedDate(null);
    setSelectedItem(null);
  };

  const handleCloseTask = () => {
    onClose();
  };

  return (
    <div className={`AddTask ${fullScreenMode ? "fullScreen" : ""}`}>
      <div className="panel">
        <button className="closeBtn" onClick={handleCloseTask}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="taskName">
          <p>Task Name :</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <button
          className={`note ${activeSection.includes("note") ? "activate" : ""}`}
          onClick={() => addSection("note")}
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
          ref={Aditor_Task}
          className={`Aditor_Task ${
            activeSection.includes("note") ? "active" : ""
          }`}
        />

        <button
          className={`breakdown ${
            activeSection.includes("breakdown") ? "activate" : ""
          }`}
          onClick={() => addSection("breakdown")}
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
          ref={Aditor_Task_Checkbox}
          className={`Aditor_Task_Checkbox ${
            activeSection.includes("breakdown") ? "active" : ""
          }`}
        />

        <button
          className={`details ${
            activeSection.includes("details") ? "activate" : ""
          }`}
          onClick={() => addSection("details")}
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

        <div className="taskDetails">
          {activeSection.includes("details") && (
            <>
              <p>Priority :</p>
              <RadioGroup
                name="priorityCategory"
                selectedValue={selectedPriority}
                options={[
                  {
                    id: "categoryP",
                    value: "P0",
                    label: "P0",
                    bubbleClass: "large",
                  },
                  {
                    id: "categoryP",
                    value: "P1",
                    label: "P1",
                    bubbleClass: "medium",
                  },
                  {
                    id: "categoryP",
                    value: "P2",
                    label: "P2",
                    bubbleClass: "small",
                  },
                ]}
                onRadioChange={handleRadioChange}
              />

              <p>Task Size :</p>
              <RadioGroup
                name="taskCategory"
                selectedValue={selectedLevel}
                options={[
                  {
                    id: "categoryL",
                    value: "large",
                    label: "Large",
                    bubbleClass: "large",
                    extra: "*",
                  },
                  {
                    id: "categoryL",
                    value: "medium",
                    label: "Medium",
                    bubbleClass: "medium",
                    extra: "***",
                  },
                  {
                    id: "categoryL",
                    value: "small",
                    label: "Small",
                    bubbleClass: "small",
                    extra: "*****",
                  },
                ]}
                onRadioChange={handleRadioChange}
              />

              <Tag
                tagSuggestions={tagSuggestions}
                onTagChange={handleTagChange}
                initialTags={addedTags}
              />

              <p>Deadline:</p>
              <DatePickerComponent
                selectedDate={selectedDate}
                setSelectedDate={(newValue) => setSelectedDate(newValue)}
              />
            </>
          )}
        </div>

        <div className="controlBtn">
          {selectedItem ? (
            <>
              <button onClick={updateTask} className="updateBtn">
                Save
              </button>
              <button onClick={deleteTask} className="deleteBtn">
                Delete
              </button>
            </>
          ) : (
            <button onClick={addTask} className="saveBtn">
              Save
            </button>
          )}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default AddTask;
