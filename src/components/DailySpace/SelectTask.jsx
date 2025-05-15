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
import { db } from "/src/lib/firebase"; // Adjust path if needed
import { getUser } from "/src/lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import TaskBox from "/src/components/others/TaskBox";
import { toast } from "react-toastify";

import "./DailySpace.css";

const SelectTask = ({ setActivePanel }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const userID = getUser().uid;

        // Query Firestore where Category is 'task'
        const tasksQuery = query(
          collection(db, userID),
          where("Category", "==", "task")
        );
        const querySnapshot = await getDocs(tasksQuery);

        const tasksList = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .filter((doc) => doc.status === "unchecked");
        setTasks(tasksList);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);
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

  return (
    <div className="selectTask">
      <div className="selectTaskBar">
        <div className="backBtn">
          <FontAwesomeIcon
            icon={faBackward}
            onClick={() => setActivePanel("")}
          />
        </div>

        <h2>Select Tasks</h2>
      </div>
      <div className="taskGrid">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="taskItem">
              {/* TaskBox Component to Handle State */}
              <TaskBox
                status={task.status}
                onStatusChange={(newStatus) =>
                  handleTaskStatusChange(task.id, newStatus)
                }
              />
              <span>{task.name}</span>
            </li>
          ))
        ) : (
          <p>No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default SelectTask;
