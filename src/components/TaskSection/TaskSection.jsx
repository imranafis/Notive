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
  getDocs,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import { getUser } from "/src/lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import TaskBox from "./TaskBox";
import AddTask from "./AddTask";
import "./TaskSection.css";
import { toast } from "react-toastify";

const TaskSection = ({
  addSection,
  setAddSection,
  selectedItem,
  setSelectedItem,
  fullScreenMode,
  setFullScreenMode,
}) => {
  const [tasks, setTasks] = useState([]);
  const [taskStatuses, setTaskStatuses] = useState({});
  const [activeDropdown, setActiveDropdown] = useState(null);
  // const [fullScreenMode, setFullScreenMode] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userID = getUser().uid;
        const tasksQuery = query(
          collection(db, userID),
          where("Category", "==", "task")
        );
        const querySnapshot = await getDocs(tasksQuery);

        const tasksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [addSection]);

  const handleTaskStatusChange = (taskId, newStatus) => {
    setTaskStatuses((prevStatuses) => ({
      ...prevStatuses,
      [taskId]: newStatus,
    }));
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
                await deleteDoc(taskRef);

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

  return (
    <>
      <div className="taskSection">
        <h2>Tasks</h2>
        <div className="taskContainer">
          <div className="taskGrid">
            {tasks.length === 0 ? (
              <p>No tasks available</p>
            ) : (
              tasks.map((task) => (
                <div key={task.id} className="taskItem">
                  <TaskBox
                    status={taskStatuses[task.id] || task.status || "unchecked"}
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
                            handleViewTask(task);
                          }}
                        >
                          View
                        </div>
                        <div
                          className="dropdown-item"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewTask(task, true);
                          }}
                        >
                          View in Full
                        </div>
                        <div
                          className="dropdown-item"
                          onClick={(e) => {
                            e.stopPropagation();
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

      {addSection && (
        <AddTask
          setAddSection={setAddSection}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          fullScreenMode={fullScreenMode}
          onClose={() => {
            setAddSection("");
            setSelectedItem(null);
            setFullScreenMode(false);
          }}
        />
      )}
    </>
  );
};

export default TaskSection;
