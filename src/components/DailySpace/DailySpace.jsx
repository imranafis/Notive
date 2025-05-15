import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {
  collection,
  addDoc,
  updateDoc,
  Timestamp,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import { getUser } from "/src/lib/user";

import { toast } from "react-toastify";

import "./DailySpace.css";

//
import SelectTask from "./SelectTask.jsx";
import TaskBox from "/src/components/others/TaskBox.jsx";

const DailySpace = ({
  addSection,
  setAddSection,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
  setFullScreenMode,
}) => {
  const [activePanel, setActivePanel] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [workingTasks, setWorkingTasks] = useState([]);

  const handleTaskStatusChange = async (taskId, newStatus) => {
    // setTaskStatuses((prevStatuses) => ({
    //   ...prevStatuses,
    //   [taskId]: newStatus,
    // }));

    try {
      const userID = getUser().uid;
      const taskRef = doc(db, userID, taskId);
      await updateDoc(taskRef, { status: newStatus });
    } catch (error) {
      console.error("Failed to update task status:", error);
      toast.error("Failed to update status. Please try again.");
    }
  };

  const fetchWorkingTasks = async () => {
    try {
      const userID = getUser().uid;
      const tasksQuery = query(
        collection(db, userID),
        where("Category", "==", "task")
      );
      const snapshot = await getDocs(tasksQuery);
      const tasks = snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((task) => task.status === "working");

      setWorkingTasks(tasks);
    } catch (error) {
      console.error("Error fetching working tasks:", error);
    }
  };

  useEffect(() => {
    fetchWorkingTasks();
  }, [activePanel, handleTaskStatusChange]); // refresh when modal closes

  // Format date
  const currentDate = new Date();
  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const monthDayYear = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const displayDate = `${monthDayYear} | ${weekday}`;

  const handleDeleteTask = async (taskId) => {
    const toastId = toast.warn(
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p>Are you sure you want to delete this task?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const taskRef = doc(db, userID, taskId);
                await deleteDoc(taskRef);
                await deleteDoc(taskRef);
                setWorkingTasks((prev) =>
                  prev.filter((task) => task.id !== taskId)
                );

                toast.dismiss(toastId);
                toast.success("Task deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 1000,
                });
              } catch (error) {
                console.error("Error deleting task:", error);
                toast.dismiss(toastId);
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
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Yes
          </button>
          <button
            onClick={() => toast.dismiss(toastId)}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              padding: "8px 16px",
              border: "none",
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

    setActiveDropdown(null);
  };

  const handleViewTask = (task, fullScreen = false, e) => {
    if (e && e.target.closest(".taskActions")) {
      return;
    }
    setSelectedItem(task);
    setAddSection("viewTask");
    setFullScreenMode(fullScreen);
  };
  const toggleDropdown = (taskId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === taskId ? null : taskId);
  };

  return (
    <div className="dailySpace">
      <div className="displayDate">{displayDate}</div>

      <div className="taskBar">
        <FontAwesomeIcon icon={faAnglesRight} />
        Today's Task
        <FontAwesomeIcon
          icon={faPlus}
          className="taskPlus"
          onClick={() => setActivePanel("SelectTask")}
        />
      </div>
      <div className="taskContainer">
        {workingTasks.length === 0 ? (
          <p>No working tasks available</p>
        ) : (
          workingTasks.map((task) => (
            <div key={task.id} className="taskItem">
              <TaskBox
                status={task.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(task.id, newStatus)
                }
              />
              <span onClick={(e) => handleViewTask(task, false, e)}>
                {task.name}
              </span>

              <div className="dropdown-container">
                <FontAwesomeIcon
                  className="menuBtn"
                  icon={faEllipsisV}
                  onClick={(e) => toggleDropdown(task.id, e)}
                />
                {activeDropdown === task.id && (
                  <div
                    className="dropdown-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(null);
                        handleViewTask(task);
                      }}
                    >
                      View
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(null);
                        handleViewTask(task, true);
                      }}
                    >
                      View in Full
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveDropdown(null);
                        handleViewTask(task);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTask(task.id);
                      }}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal popup */}
      {activePanel === "SelectTask" && (
        <div className="popupOverlay">
          <div className="popupContent">
            <SelectTask setActivePanel={setActivePanel} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DailySpace;
