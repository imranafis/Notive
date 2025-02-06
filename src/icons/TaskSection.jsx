import React, { useState, useRef } from "react";
import Aditor_Point from "../lib/Aditor_Point.jsx";
import Aditor_Checkbox from "../lib/Aditor_Checkbox.jsx";
import Tag from "../components/Tag/Tag.jsx";
import RadioGroup from "../components/others/RadioGroup.jsx";

function TaskSection() {
  const Aditor_Task_Point = useRef(null);
  const Aditor_Task_Checkbox = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];
  const [inputValue, setInputValue] = useState("");

  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const [activeSection, setActiveSection] = useState(null); // Manages which section is active

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section); // Toggles the section
  };

  const levelOptions = [
    {
      id: "categoryLarge",
      value: "large",
      label: "Large",
      bubbleClass: "large",
      extra: "*",
    },
    {
      id: "categoryMedium",
      value: "medium",
      label: "Medium",
      bubbleClass: "medium",
      extra: "***",
    },
    {
      id: "categorySmall",
      value: "small",
      label: "Small",
      bubbleClass: "small",
      extra: "*****",
    },
  ];

  const priorityOptions = [
    { id: "categoryP0", value: "P0", label: "P0", bubbleClass: "large" },
    { id: "categoryP1", value: "P1", label: "P1", bubbleClass: "medium" },
    { id: "categoryP2", value: "P2", label: "P2", bubbleClass: "small" },
  ];

  const handleRadioChange = (option) => {
    if (option.name === "categoryL") {
      console.log(option.value);
      setSelectedLevel(option.value);
    } else if (option.name === "categoryP") {
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

  const addTask = () => {
    console.log(selectedLevel);
    console.log(selectedPriority);
    // console.log(Aditor_Task_Point);
    // console.log("Added Tags: ", addedTags);
    // console.log(Aditor_Journal.current.querySelector(".aditor").innerHTML);
  };
  return (
    <div className="taskContainer">
      <div className="contentSection">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a Task name"
        />
        {activeSection === "details" && (
          <>
            <Aditor_Point
              ref={Aditor_Task_Point}
              className="Aditor_Task_Point"
            />
            <Aditor_Checkbox
              ref={Aditor_Task_Checkbox}
              className="Aditor_Task_Checkbox"
            />
          </>
        )}
        {activeSection === "priority" && (
          <RadioGroup
            title="Pick a Priority"
            name="category"
            options={priorityOptions}
            onRadioChange={handleRadioChange}
          />
        )}
        {activeSection === "level" && (
          <RadioGroup
            title="Pick a Level"
            name="category"
            options={levelOptions}
            onRadioChange={handleRadioChange}
          />
        )}
      </div>
      <div className="controlSection">
        <div className="topButtons">
          <button
            id="activateBtn"
            className={activeSection === "details" ? "activate" : ""}
            onClick={() => toggleSection("details")}
          >
            Details
          </button>

          <button
            id="activateBtn"
            className={activeSection === "priority" ? "activate" : ""}
            onClick={() => toggleSection("priority")}
          >
            Priority
          </button>
          <button
            id="activateBtn"
            className={activeSection === "level" ? "activate" : ""}
            onClick={() => toggleSection("level")}
          >
            Task Size
          </button>
        </div>
        <div className="bottomButtons">
          <Tag
            tagSuggestions={tagSuggestions}
            onTagChange={handleTagChange}
          ></Tag>
          <button id="activateBtn" onClick={addTask}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskSection;
