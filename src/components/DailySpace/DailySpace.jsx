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

import "./dailySpace.css";

//
import SelectTask from "./SelectTask.jsx";
import TaskBox from "/src/components/others/TaskBox.jsx";
import dayjs from "dayjs";

const DailySpace = ({
  addSection,
  setAddSection,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
}) => {
  const [activePanel, setActivePanel] = useState("");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [taskMenuOpen, setTaskMenuOpen] = useState(false);

  const [workingTasks, setWorkingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [dailyTasks, setDailyTasks] = useState([]);
  const [doneDailyTasks, setDoneDailyTasks] = useState([]);

  const handleTaskStatusChange = async (itemId, newStatus, itemCategory) => {
    const today = dayjs().format("DD-MM-YY");

    try {
      const userID = getUser().uid;
      const itemRef = doc(db, userID, itemId);

      if (itemCategory === "task") {
        await updateDoc(itemRef, {
          status: newStatus,
          doneDate: newStatus === "checked" ? today : "",
        });
        fetchTasks();
      } else if (itemCategory === "goal") {
        await updateDoc(itemRef, {
          status: newStatus,
          doneDate: newStatus === "checked" ? today : "",
        });
        fetchDailyTasks();
      }
    } catch (error) {
      console.error("Failed to update task status:", error);
      toast.error("Failed to update status. Please try again.");
    }
  };

  const fetchTasks = async () => {
    try {
      const userID = getUser().uid;
      const tasksQuery = query(
        collection(db, userID),
        where("category", "==", "task")
      );
      const snapshot = await getDocs(tasksQuery);

      const today = dayjs().format("DD-MM-YY");
      const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setWorkingTasks(tasks.filter((t) => t.status === "working"));
      setDoneTasks(tasks.filter((t) => t.doneDate === today));
    } catch (error) {
      console.error("Error fetching working tasks:", error);
    }
  };
  const fetchDailyTasks = async () => {
    try {
      const userID = getUser().uid;

      const tasksQuery = query(
        collection(db, userID),
        where("category", "==", "goal")
      );
      const snapshot = await getDocs(tasksQuery);

      const tasks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDailyTasks(tasks.filter((t) => t.daily && t.doneDate == ""));
      setDoneDailyTasks(tasks.filter((t) => t.daily && t.doneDate !== ""));
    } catch (error) {
      console.error("Error fetching daily tasks:", error);
    }
  };

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

  const handleDeleteGoal = async (goalId) => {
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
        <p>Are you sure you want to delete this goal?</p>
        <div>
          <button
            onClick={async () => {
              try {
                const userID = getUser().uid;
                const goalRef = doc(db, userID, goalId);
                await deleteDoc(goalRef);

                toast.dismiss(toastId);
                toast.success("Goal deleted successfully!", {
                  position: "bottom-right",
                  autoClose: 1000,
                });
              } catch (error) {
                console.error("Error deleting goal:", error);
                toast.dismiss(toastId);
                toast.error("Failed to delete goal. Please try again.", {
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

  const handleViewGoal = (goal, fullScreen = false, e) => {
    // Check if the click originated from the goalActions area
    if (e && e.target.closest(".goalActions")) {
      return;
    }
    setSelectedItem(goal);
    // setDefaultCategory(goal.subCategory);
    setAddSection("viewDailyTask");
    // setFullScreenMode(fullScreen);
  };

  const handleViewTask = (task, fullScreen = false, e) => {
    if (e && e.target.closest(".taskActions")) {
      return;
    }
    setSelectedItem(task);
    setAddSection("viewTask");
    //setFullScreenMode(fullScreen);
  };
  const toggleDropdown = (itemId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemId ? null : itemId);
  };

  useEffect(() => {
    fetchDailyTasks();
    fetchTasks();
  }, [activePanel]);

  // useEffect(() => {
  // }, [activePanel]);

  return (
    <div className="dailySpace">
      <div className="displayDate">{displayDate}</div>
      <div className="taskBar">
        <FontAwesomeIcon icon={faAnglesRight} />
        Daily Focus
      </div>

      <div className="taskContainer">
        {dailyTasks.length === 0 ? (
          <p>No working tasks available</p>
        ) : (
          dailyTasks.map((goal) => (
            <div key={goal.id} className="taskItem">
              <TaskBox
                status={goal.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(goal.id, newStatus, "goal")
                }
              />
              <span onClick={(e) => handleViewGoal(goal, false, e)}>
                {goal.goalName}
              </span>

              <div className="dropdown-container">
                <FontAwesomeIcon
                  className="menuBtn"
                  icon={faEllipsisV}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(goal.id, e);
                  }}
                />
                {activeDropdown === goal.id && (
                  <div
                    className="dropdown-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal);
                      }}
                    >
                      View
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal, true);
                      }}
                    >
                      View in Full
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteGoal(goal.id);
                      }}
                    >
                      Delete
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        // handleDeleteGoal(goal.id);
                      }}
                    >
                      Info
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
      <div className="taskContainer">
        {doneDailyTasks.length != 0 &&
          doneDailyTasks.map((goal) => (
            <div key={goal.id} className="taskItem">
              <TaskBox
                status={goal.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(goal.id, newStatus, "goal")
                }
              />
              <span onClick={(e) => handleViewGoal(goal, false, e)}>
                {goal.goalName}
              </span>

              <div className="dropdown-container">
                <FontAwesomeIcon
                  className="menuBtn"
                  icon={faEllipsisV}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(goal.id, e);
                  }}
                />
                {activeDropdown === goal.id && (
                  <div
                    className="dropdown-menu"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal);
                      }}
                    >
                      View
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal, true);
                      }}
                    >
                      View in Full
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewGoal(goal);
                      }}
                    >
                      Edit
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteGoal(goal.id);
                      }}
                    >
                      Delete
                    </div>
                    <div
                      className="dropdown-item"
                      onClick={(e) => {
                        e.stopPropagation();
                        // handleDeleteGoal(goal.id);
                      }}
                    >
                      Info
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      <div className="taskBar">
        <FontAwesomeIcon icon={faAnglesRight} />
        Today's Task
        <div className="taskBarMenu">
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="taskMenuIcon"
            onClick={() => setTaskMenuOpen(!taskMenuOpen)}
          />
          {taskMenuOpen && (
            <div
              className="taskMenuDropdown"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="dropdown-item"
                onClick={() => {
                  setActivePanel("SelectTask");
                  setTaskMenuOpen(false);
                }}
              >
                Select Task
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  setAddSection("AddTask");
                  setTaskMenuOpen(false);
                }}
              >
                Add Task
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="taskContainer">
        {workingTasks.length === 0 ? (
          <p>No daily tasks available</p>
        ) : (
          workingTasks.map((task) => (
            <div key={task.id} className="taskItem">
              <TaskBox
                status={task.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(task.id, newStatus, "task")
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
      <div className="taskContainer">
        {doneTasks.length !== 0 &&
          doneTasks.map((task) => (
            <div key={task.id} className="taskItem">
              <TaskBox
                status={task.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(task.id, newStatus, "task")
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
          ))}
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
