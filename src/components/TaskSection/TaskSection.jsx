import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  Timestamp,
  doc,
  deleteDoc,
  query,
  where,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import { getUser } from "/src/lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import TaskBox from "/src/components/others/TaskBox";

import "./TaskSection.css";
import { toast } from "react-toastify";

import dayjs from "dayjs";

const TaskSection = ({
  addSection,
  setAddSection,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
  setFullScreenMode,
}) => {
  const [tasks, setTasks] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [filterMode, setFilterMode] = useState("all"); // "all", "tasks", or goalId
  const [goalNames, setGoalNames] = useState({}); // Map of goalId to goalName
  const [uniqueGoals, setUniqueGoals] = useState([]); // Array of unique goalIds with their names

  const fetchTasks = async () => {
    try {
      const userID = getUser().uid;
      const tasksQuery = query(
        collection(db, userID),
        where("category", "==", "task")
      );
      const querySnapshot = await getDocs(tasksQuery);

      const tasksList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        isProjectTask: doc.data().goalId ? true : false,
      }));
      setTasks(tasksList);

      // Fetch goal names for all project tasks
      await fetchGoalNames(tasksList, userID);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const fetchGoalNames = async (tasksList, userID) => {
    try {
      const goalMap = {};
      const goalsSet = new Set();

      // Collect unique goalIds from project tasks
      for (const task of tasksList) {
        if (task.isProjectTask && task.goalId) {
          goalsSet.add(task.goalId);
        }
      }

      // Fetch goal documents to get goalName
      for (const goalId of goalsSet) {
        try {
          const goalRef = doc(db, userID, goalId);
          const goalSnap = await getDoc(goalRef);
          if (goalSnap.exists()) {
            const goalName = goalSnap.data().goalName || "Unnamed Goal";
            goalMap[goalId] = goalName;
          }
        } catch (error) {
          console.error(`Error fetching goal ${goalId}:`, error);
          goalMap[goalId] = "Unknown Goal";
        }
      }

      setGoalNames(goalMap);

      // Create array of unique goals with their names
      const goals = Array.from(goalsSet).map((goalId) => ({
        goalId,
        goalName: goalMap[goalId],
      }));
      setUniqueGoals(goals);
    } catch (error) {
      console.error("Error fetching goal names:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [addSection]);

  const updateProjectTaskStatusChange = async (
    userID,
    goalId,
    lineId,
    newStatus
  ) => {
    try {
      const breakdownRef = doc(db, userID, goalId);
      const breakdownSnap = await getDoc(breakdownRef);
      const breakdown = breakdownSnap.data().breakdown;

      const parser = new DOMParser();
      const docRef = parser.parseFromString(breakdown, "text/html");

      const lineElement = docRef.querySelector(`#${lineId}`);
      if (!lineElement) return;

      const mainSpan = lineElement.querySelector(".Head .checkboxLabel span");
      if (mainSpan) {
        mainSpan.classList.remove("checked", "unchecked");
        mainSpan.classList.add(newStatus);
      }

      const subLine = lineElement.querySelector(".sub-line");
      if (subLine) {
        const subSpans = lineElement.querySelectorAll(
          ".sub-Head .checkboxLabel span"
        );
        subSpans.forEach((span) => {
          span.classList.remove("checked", "unchecked");
          span.classList.add(newStatus);
        });
      }

      const newBreakdown = docRef.body.innerHTML;
      console.log(newBreakdown);
      await updateDoc(breakdownRef, {
        breakdown: newBreakdown,
      });
    } catch (error) {
      console.error("Error updating task status in breakdown:", error);
    }
  };

  const deleteProjectTask = async (userID, goalId, lineId) => {
    try {
      const breakdownRef = doc(db, userID, goalId);
      const breakdownSnap = await getDoc(breakdownRef);
      const breakdown = breakdownSnap.data().breakdown;

      const parser = new DOMParser();
      const docRef = parser.parseFromString(breakdown, "text/html");

      const lineElement = docRef.querySelector(`#${lineId}`);

      if (lineElement && lineElement.parentNode) {
        lineElement.parentNode.removeChild(lineElement);
      }

      const newBreakdown = docRef.body.innerHTML;

      await updateDoc(breakdownRef, {
        breakdown: newBreakdown,
      });
    } catch (error) {
      console.error("Failed to delete project task line:", error);
    }
  };

  const handleTaskStatusChange = async (taskId, newStatus) => {
    try {
      const userID = getUser().uid;
      const taskRef = doc(db, userID, taskId);
      const taskSnap = await getDoc(taskRef);
      const goalId = taskSnap.data().goalId;

      if (goalId && (newStatus === "checked" || newStatus === "unchecked")) {
        const lineId = taskSnap.id;
        updateProjectTaskStatusChange(userID, goalId, lineId, newStatus);
      }

      const updateData = {
        status: newStatus,
        doneDate: newStatus === "checked" ? dayjs().format("DD-MM-YY") : "",
      };

      await updateDoc(taskRef, updateData);
    } catch (error) {
      console.error("Failed to update task status:", error);
      toast.error("Failed to update status. Please try again.");
    }
  };

  const toggleDropdown = (taskId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === taskId ? null : taskId);
  };

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
                const taskSnap = await getDoc(taskRef);
                const goalId = taskSnap.data().goalId;

                if (goalId) {
                  const lineId = taskSnap.id;
                  deleteProjectTask(userID, goalId, lineId);
                  await deleteDoc(taskRef);
                } else {
                  await deleteDoc(taskRef);
                }

                setTasks(tasks.filter((task) => task.id !== taskId));

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

  const getFilteredTasks = () => {
    if (filterMode === "tasks") {
      return tasks.filter((task) => !task.isProjectTask);
    } else if (filterMode !== "all") {
      // filterMode is a goalId
      return tasks.filter((task) => task.goalId === filterMode);
    } else {
      return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <>
      <div className="taskSection">
        <div className="taskHeader">
          <h2>Tasks</h2>
          <div className="filterDropdownContainer">
            <div
              className="filterBtn"
              onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            >
              <i className="fa-solid fa-filter"></i>
            </div>
            {filterDropdownOpen && (
              <div className="filterDropdown">
                <div
                  className={`filterDropdownItem ${
                    filterMode === "all" ? "active" : ""
                  }`}
                  onClick={() => {
                    setFilterMode("all");
                    setFilterDropdownOpen(false);
                  }}
                >
                  All
                </div>
                <div
                  className={`filterDropdownItem ${
                    filterMode === "tasks" ? "active" : ""
                  }`}
                  onClick={() => {
                    setFilterMode("tasks");
                    setFilterDropdownOpen(false);
                  }}
                >
                  Undefined Projects
                </div>
                {uniqueGoals.map((goal) => (
                  <div
                    key={goal.goalId}
                    className={`filterDropdownItem ${
                      filterMode === goal.goalId ? "active" : ""
                    }`}
                    onClick={() => {
                      setFilterMode(goal.goalId);
                      setFilterDropdownOpen(false);
                    }}
                  >
                    {goal.goalName}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="taskContainer">
          <div className="taskGrid">
            {filteredTasks.length === 0 ? (
              <p>
                No{" "}
                {filterMode === "tasks"
                  ? "Tasks"
                  : filterMode === "all"
                  ? "Tasks"
                  : `${goalNames[filterMode]} Tasks`}{" "}
                available
              </p>
            ) : (
              filteredTasks.map((task) => (
                <div key={task.id} className="taskItem">
                  <TaskBox
                    status={task.status}
                    onStatusChange={(newStatus) =>
                      handleTaskStatusChange(task.id, newStatus)
                    }
                  />
                  <span onClick={(e) => handleViewTask(task, false, e)}>
                    {task.name}
                    {task.isProjectTask && (
                      <span className="projectTaskBadge">Project</span>
                    )}
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
        </div>
      </div>
    </>
  );
};

export default TaskSection;
