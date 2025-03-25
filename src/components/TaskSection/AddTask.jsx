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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TaskSection.css";

const AddTask = ({ setAddSection }) => {
  const Aditor_Task = useRef(null);
  const Aditor_Task_Checkbox = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];
  const [inputValue, setInputValue] = useState("");

  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [activeSection, setActiveSection] = useState(null);

  const [Note, setNote] = useState("");
  const [BreakdownContent, setBreakdownContent] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (Aditor_Task.current && !Aditor_Task.current.innerHTML.trim()) {
      initializeAditor(Aditor_Task.current, "");
    }
    if (
      Aditor_Task_Checkbox.current &&
      !Aditor_Task_Checkbox.current.innerHTML.trim()
    ) {
      initializeAditorCheckbox(Aditor_Task_Checkbox.current, "");
    }
  }, []);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
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

  const add = async () => {
    if (!inputValue.trim()) {
      toast.error("Task name is required!", { position: "bottom-right" });
      return;
    }

    try {
      const userID = getUser().uid;

      const taskData = {
        name: inputValue.trim(),
        priority: selectedPriority,
        Category: "task",
        size: selectedLevel,
        tags: addedTags,
        note: Note,
        status: "unchecked",
        breakdown: BreakdownContent,
        deadline: selectedDate
          ? Timestamp.fromDate(new Date(selectedDate))
          : null,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, userID), taskData);

      // Reset form state
      setInputValue("");
      setAddedTags([]);
      setSelectedPriority("");
      setSelectedLevel("");
      setNote("");
      setBreakdownContent("");
      setActiveSection(null);
      setSelectedDate("");

      toast.success("Task saved successfully!", { position: "bottom-right" });
      setTimeout(() => {
        setAddSection("");
      }, 1200);
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to save task. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  const handleCloseTask = () => {
    setAddSection("");
  };

  return (
    <div className="addTask">
      <div className="panel">
        <button className="closeBtn" onClick={() => handleCloseTask()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="taskName">
          <p>Task Name :</p>
          <input type="text" value={inputValue} onChange={handleInputChange} />
        </div>
        <button
          className={`details ${activeSection === "details" ? "activate" : ""}`}
          onClick={() => toggleSection("details")}
        >
          <i
            className={`fa-solid ${
              activeSection === "details" ? "fa-angle-down" : "fa-angle-right"
            }`}
          ></i>
          Details
        </button>

        {/* {activeSection === "details" && ( */}
        <div
          ref={Aditor_Task}
          className={`Aditor_Task ${
            activeSection == "details" ? "active" : ""
          }`}
        />
        {/* )} */}

        <button
          className={`breakdown ${
            activeSection === "breakdown" ? "activate" : ""
          }`}
          onClick={() => toggleSection("breakdown")}
        >
          <i
            className={`fa-solid ${
              activeSection === "breakdown" ? "fa-angle-down" : "fa-angle-right"
            }`}
          ></i>
          Breakdown
        </button>

        {/* {activeSection === "breakdown" && ( */}
        <div
          ref={Aditor_Task_Checkbox}
          className={`Aditor_Task_Checkbox ${
            activeSection == "breakdown" ? "active" : ""
          }`}
        />
        {/* )} */}

        <button
          className={`taskDetails ${
            activeSection === "taskDetails" ? "activate" : ""
          }`}
          onClick={() => toggleSection("taskDetails")}
        >
          <i
            className={`fa-solid ${
              activeSection === "taskDetails"
                ? "fa-angle-down"
                : "fa-angle-right"
            }`}
          ></i>
          Task details
        </button>

        <div className="taskSection">
          {activeSection === "taskDetails" && (
            <>
              <p>Priority :</p>
              <RadioGroup
                name="priorityCategory"
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
              />

              <p>Deadline:</p>
              <DatePickerComponent
                selectedDate={selectedDate ? dayjs(selectedDate) : null}
                setSelectedDate={(newValue) => setSelectedDate(newValue)}
              />
            </>
          )}
        </div>

        <div className="controlBtn">
          <button id="saveBtn" onClick={add}>
            Save
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AddTask;
