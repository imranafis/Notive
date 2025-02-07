import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file

import { getUser } from "/src/lib/user";

import Aditor_Checkbox from "../../../../lib/Aditor_Checkbox.jsx";
import Aditor_Point from "../../../../lib/Aditor_Point.jsx";
import RadioGroup from "../../../others/RadioGroup";
import Tag from "../../../Tag/Tag";
import "./addTask.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

const AddTask = ({ setActivePanel }) => {
  const Aditor_Task_Point = useRef(null);
  const Aditor_Task_Checkbox = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];
  const [inputValue, setInputValue] = useState("");

  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [activeSection, setActiveSection] = useState(null);
  const [activeOption, setActiveOption] = useState("notes");

  const [notesContent, setNotesContent] = useState("");
  const [stepsContent, setStepsContent] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggles the section
  };
  const toggleOption = (option) => {
    // Save the current content before switching
    if (activeOption === "notes" && Aditor_Task_Point.current) {
      setNotesContent(Aditor_Task_Point.current.innerHTML);
    } else if (activeOption === "steps" && Aditor_Task_Checkbox.current) {
      setStepsContent(Aditor_Task_Checkbox.current.innerHTML);
    }

    setActiveOption(option); // Toggle to new option
  };

  const levelOptions = [
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
  ];

  const priorityOptions = [
    { id: "categoryP", value: "P0", label: "P0", bubbleClass: "large" },
    { id: "categoryP", value: "P1", label: "P1", bubbleClass: "medium" },
    { id: "categoryP", value: "P2", label: "P2", bubbleClass: "small" },
  ];

  const handleRadioChange = (option) => {
    if (option.id === "categoryL") {
      console.log(option.value);
      setSelectedLevel(option.value);
    } else if (option.id === "categoryP") {
      console.log(option.value);
      setSelectedPriority(option.value);
    }
  };

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    //   if (e.key == "Enter") {
    //     e.preventDefault();
    //     Aditor_Task_Point.current.querySelector(".inputContent").focus();
    //   }
  };

  const handlePanelChange = () => {
    setActivePanel("");
  };

  const add = async () => {
    if (!inputValue.trim()) {
      alert("Task name is required!");
      return;
    }

    try {
      const userID = getUser().uid; // Get user data from localStorage

      const taskData = {
        name: inputValue.trim(),
        priority: selectedPriority,
        size: selectedLevel,
        tags: addedTags,
        notes: notesContent,
        steps: stepsContent,
        createdAt: new Date().toISOString(),
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, userID), taskData);
      console.log("Document written with ID: ", docRef.id);

      // Reset form state and collapse all sections
      setInputValue("");
      setAddedTags([]);
      setSelectedPriority("");
      setSelectedLevel("");
      setNotesContent("");
      setStepsContent("");
      setActiveSection(null); // Collapse all sections
      setActiveOption("notes"); // Reset to default option
      alert("Task saved successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to save task. Please try again.");
    }
  };

  return (
    <div className="addTask">
      <div className="backBtn">
        <FontAwesomeIcon icon={faBackward} onClick={handlePanelChange} />
      </div>
      <div className="taskName">
        <p>Task Name :</p>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <button
        // id="activateBtn"
        className={`details ${activeSection === "details" ? "activate" : ""}`}
        onClick={() => {
          toggleSection("details");
        }}
      >
        <i
          className={`fa-solid  ${
            activeSection === "details" ? "fa-angle-down" : "fa-angle-right"
          }`}
        ></i>
        Details
      </button>

      <div className="detailsSection">
        {activeSection === "details" && (
          <>
            <div className="switchBtn">
              <button
                className="noteBtn"
                onClick={() => {
                  toggleOption("notes");
                }}
              >
                Notes
              </button>
              <button
                className="stepBtn"
                onClick={() => {
                  toggleOption("steps");
                }}
              >
                Steps
              </button>
            </div>

            {activeOption === "notes" ? (
              <Aditor_Point
                ref={Aditor_Task_Point}
                className="Aditor_Task_Point"
                defaultValue={notesContent}
              />
            ) : (
              <Aditor_Checkbox
                ref={Aditor_Task_Checkbox}
                className="Aditor_Task_Checkbox"
                defaultValue={stepsContent}
              />
            )}
          </>
        )}
      </div>

      <button
        // id="activateBtn"
        className={`taskDetails ${
          activeSection === "taskDetails" ? "activate" : ""
        }`}
        onClick={() => toggleSection("taskDetails")}
      >
        <i
          className={`fa-solid  ${
            activeSection === "taskDetails" ? "fa-angle-down" : "fa-angle-right"
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
              options={priorityOptions}
              onRadioChange={handleRadioChange}
            />
            <p>Task Size :</p>
            <RadioGroup
              name="taskCategory"
              options={levelOptions}
              onRadioChange={handleRadioChange}
            />
            <Tag
              tagSuggestions={tagSuggestions}
              onTagChange={handleTagChange}
            ></Tag>
          </>
        )}
      </div>

      <div className="controlBtn">
        <button id="saveBtn" onClick={add}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTask;
