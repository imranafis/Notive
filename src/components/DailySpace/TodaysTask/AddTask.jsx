import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust the path to your firebase.js file
import { getUser } from "/src/lib/user";
import Aditor_Checkbox from "../../../lib/Aditor_Checkbox.jsx";
import Aditor_Point from "../../../lib/Aditor_Point.jsx";
import RadioGroup from "../../others/RadioGroup.jsx";
import Tag from "../../Tag/Tag.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./addTask.css";
import { Category } from "@mui/icons-material";

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
    setActiveSection(activeSection === section ? null : section);
  };

  const toggleOption = (option) => {
    if (activeOption === "notes" && Aditor_Task_Point.current) {
      setNotesContent(Aditor_Task_Point.current.innerHTML);
    } else if (activeOption === "steps" && Aditor_Task_Checkbox.current) {
      setStepsContent(Aditor_Task_Checkbox.current.innerHTML);
    }
    setActiveOption(option);
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

  const handlePanelChange = () => {
    setActivePanel("");
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
        notes: notesContent,
        steps: stepsContent,
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, userID), taskData);

      // Reset form state
      setInputValue("");
      setAddedTags([]);
      setSelectedPriority("");
      setSelectedLevel("");
      setNotesContent("");
      setStepsContent("");
      setActiveSection(null);
      setActiveOption("notes");

      toast.success("Task saved successfully!", { position: "bottom-right" });
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Failed to save task. Please try again.", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div className="addTask">
      <ToastContainer />
      <div className="backBtn">
        <FontAwesomeIcon icon={faBackward} onClick={handlePanelChange} />
      </div>
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

      <div className="detailsSection">
        {activeSection === "details" && (
          <>
            <div className="switchBtn">
              <button className="noteBtn" onClick={() => toggleOption("notes")}>
                Notes
              </button>
              <button className="stepBtn" onClick={() => toggleOption("steps")}>
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
        className={`taskDetails ${
          activeSection === "taskDetails" ? "activate" : ""
        }`}
        onClick={() => toggleSection("taskDetails")}
      >
        <i
          className={`fa-solid ${
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
