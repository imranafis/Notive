import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust path if needed
import { getUser } from "/src/lib/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import TaskBox from "./TaskBox"; // Import the TaskBox component
import "./TaskSection.css";

const TaskSection = ({ addSection, setAddSection }) => {
  const [tasks, setTasks] = useState([]);
  const [taskStatuses, setTaskStatuses] = useState({}); // Track statuses per task

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

  return (
    <div className="TaskSection">
      {/* <div className="backBtn">
        <FontAwesomeIcon icon={faBackward} onClick={() => setActivePanel("")} />
      </div> */}

      <h2>Tasks</h2>
      <ul className="taskList">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id} className="taskItem">
              {/* TaskBox Component to Handle State */}
              <TaskBox
                status={taskStatuses[task.id] || "unchecked"}
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
      </ul>
    </div>
  );
};

export default TaskSection;
