import React, { useState, useRef } from "react";
import Aditor from "../../lib/Aditor.jsx";
import Aditor_Checkbox from "../../lib/Aditor_Checkbox.jsx";

function GoalSection() {
  const Aditor_Goal = useRef(null);

  const Aditor_Goal_Checkbox = useRef(null);

  const [inputValue, setInputValue] = useState("");

  const [activeGroup, setActiveGroup] = useState(null);

  const toggleSection = (section) => {
    setActiveGroup(activeGroup === section ? null : section);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    //   if (e.key == "Enter") {
    //     e.preventDefault();
    //     Aditor_Goal_Point.current.querySelector(".inputContent").focus();
    //   }
  };

  const addGoal = () => {
    console.log(selectedLevel);
    console.log(selectedPriority);
    // console.log(Aditor_Goal_Point);
    // console.log("Added Tags: ", addedTags);
    // console.log(Aditor_Journal.current.querySelector(".aditor").innerHTML);
  };
  return (
    <div className="goalContainer">
      <div className="contentSection">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a Goal name"
        />
        {activeGroup === "details" && (
          <>
            <Aditor ref={Aditor_Goal} className="Aditor_Goal" />
          </>
        )}
        {activeGroup === "roadmap" && (
          <>
            <Aditor_Checkbox
              ref={Aditor_Goal_Checkbox}
              className="Aditor_Goal_Checkbox"
            />
          </>
        )}
      </div>
      <div className="controlSection">
        <div className="topButtons">
          <button
            id="activateBtn"
            className={`${activeGroup === "details" ? "activate" : ""}`}
            onClick={() => toggleSection("details")}
          >
            Details
          </button>
          <button
            id="activateBtn"
            className={`${activeGroup === "roadmap" ? "active" : ""}`}
            onClick={() => toggleSection("roadmap")}
          >
            Roadmap
          </button>
        </div>
        <div className="bottomButtons">
          <button id="activateBtn" onClick={addGoal}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoalSection;
