import React, { useState } from "react";
import "./todaysTask.css";
import AddTask from "./AddTask";
import SelectTask from "./SelectTask"; // Import SelectTask component
import { useFullScreen } from "../../../lib/FullScreenContext";

function TodaysTask() {
  const { isFullScreen, toggleFullScreen } = useFullScreen();
  const [activePanel, setActivePanel] = useState("");

  const handlePanelChange = (panel) => {
    setActivePanel(panel);
  };

  return (
    <div className="todaysTask">
      <div
        className={`actionPanel-todaysTask ${
          activePanel !== "" ? "unactive" : ""
        }`}
      >
        <div className="task-options">
          <div
            className="actionBtn"
            onClick={() => handlePanelChange("addTask")}
          >
            Add Task
          </div>

          <div
            className="actionBtn"
            onClick={() => handlePanelChange("selectTask")}
          >
            Select Task
          </div>
        </div>
      </div>

      <div
        className={`contentPanel-todaysTask ${
          activePanel === "addTask" ? "active" : ""
        }`}
      >
        {activePanel === "addTask" && (
          <AddTask setActivePanel={setActivePanel} />
        )}
      </div>

      <div
        className={`contentPanel-todaysTask ${
          activePanel === "selectTask" ? "active" : ""
        }`}
      >
        {activePanel === "selectTask" && (
          <SelectTask setActivePanel={setActivePanel} />
        )}
      </div>
    </div>
  );
}

export default TodaysTask;
