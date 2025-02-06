import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import "./dailySpace.css";
import TodaysTask from "./TodaysTask/TodaysTask.jsx";

function DailySpace() {
  const [activePanel, setActivePanel] = useState("");

  // Get current date
  const currentDate = new Date();

  // Format date components
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",  
    day: "numeric",  
    year: "numeric", 
  });

  // Combine date into desired format
  const displayDate = `${monthDayYear} | ${weekday}`;

  return (
    <div className="dailySpace">
      <div className="actionPanel-dailySpace">
        {/* Display the formatted date */}
        <div className="displayDate">{displayDate}</div>
   

        <div className="taskBar">
          <FontAwesomeIcon icon={faAnglesRight} />
          Today's Task
          <FontAwesomeIcon icon={faPlus} className="taskPlus"
          onClick={() => setActivePanel("todaysTask")}/>
        </div>
        <div className="taskContainer">No task yet</div>
        {/* <div
          className={`actionBtn ${activePanel === "dailyRoute" ? "active" : ""}`}
          onClick={() => setActivePanel("dailyRoute")}
        >
          Daily Route
        </div>
        <div
          className={`actionBtn ${activePanel === "taskList" ? "active" : ""}`}
          onClick={() => setActivePanel("taskList")}
        >
          Task List
        </div>
        <div
          className={`actionBtn ${activePanel === "goalProgress" ? "active" : ""}`}
          onClick={() => setActivePanel("goalProgress")}
        >
          Goal Progress
        </div> */}
      </div>
      <div className="contentPanel-dailySpace">
        {activePanel === "todaysTask" && <TodaysTask />}
      </div>
    </div>
  );
}

export default DailySpace;
