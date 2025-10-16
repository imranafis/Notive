import React, { useState, useRef } from "react";
import "./TaskBox.css";

const TaskBox = ({
  status: initialStatus,
  onStatusChange,
  isNormalTask = false,
}) => {
  const [status, setStatus] = useState(initialStatus ?? "unchecked");
  const timerRef = useRef(null);
  const longPressTriggeredRef = useRef(false);
  const clickTimeoutRef = useRef(null);
  const clickCountRef = useRef(0);

  const handleClick = () => {
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }

    clickCountRef.current += 1;

    if (clickCountRef.current === 1) {
      clickTimeoutRef.current = setTimeout(() => {
        // Single click logic
        let newStatus;

        if (isNormalTask) {
          newStatus = status === "checked" ? "unchecked" : "checked";
        } else {
          if (status === "unchecked") {
            newStatus = "working";
          } else if (status === "working") {
            newStatus = "unchecked";
          } else if (status === "checked") {
            newStatus = "unchecked";
          } else {
            newStatus = "unchecked";
          }
        }

        setStatus(newStatus);
        onStatusChange(newStatus);
        clickCountRef.current = 0;
      }, 300);
    } else if (clickCountRef.current === 2) {
      clearTimeout(clickTimeoutRef.current);
      // Double click logic
      setStatus("checked");
      onStatusChange("checked");
      clickCountRef.current = 0;
    }
  };

  const handleLongPressStart = () => {
    timerRef.current = setTimeout(() => {
      setStatus("checked");
      onStatusChange("checked");
      longPressTriggeredRef.current = true;
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
      onTouchMove={handleLongPressEnd}
    ></div>
  );
};

export default TaskBox;
