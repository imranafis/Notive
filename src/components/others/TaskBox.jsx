import React, { useState, useRef } from "react";
import "./TaskBox.css"; // Import styles

const TaskBox = ({ status: initialStatus, onStatusChange }) => {
  const [status, setStatus] = useState(initialStatus ?? "unchecked");

  const timerRef = useRef(null);
  const longPressTriggeredRef = useRef(false); // Track long press state

  const handleClick = () => {
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }

    let newStatus;
    if (status === "unchecked") {
      newStatus = "working";
    } else if (status === "working") {
      newStatus = "unchecked";
    } else if (status === "checked") {
      newStatus = "unchecked";
    } else {
      newStatus = "unchecked"; // Fallback
    }

    setStatus(newStatus);
    onStatusChange(newStatus);
  };

  const handleLongPressStart = () => {
    timerRef.current = setTimeout(() => {
      setStatus("checked");
      onStatusChange("checked");
      longPressTriggeredRef.current = true; // Mark long press triggered
    }, 600);
  };

  const handleLongPressEnd = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <div
      className={`task-box ${status}`}
      onClick={handleClick}
      onMouseDown={handleLongPressStart}
      onMouseUp={handleLongPressEnd}
      onMouseLeave={handleLongPressEnd}
      onTouchStart={handleLongPressStart}
      onTouchEnd={handleLongPressEnd}
      onTouchMove={handleLongPressEnd} // Cancel on scroll
    ></div>
  );
};

export default TaskBox;
