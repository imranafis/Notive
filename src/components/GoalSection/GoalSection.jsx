import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust if needed
import { getUser } from "/src/lib/user";
import "./GoalSection.css";

const GoalSection = ({ addSection }) => {
  const [habits, setHabits] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const userID = getUser().uid;
        const querySnapshot = await getDocs(collection(db, userID));
        const goalList = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((goal) => goal.category === "goal");

        // Sort the goals by createdAt in descending order
        goalList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        // Separate goals based on subCategory
        setHabits(goalList.filter((goal) => goal.subCategory === "Habit"));
        setProjects(goalList.filter((goal) => goal.subCategory === "Project"));
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, [addSection]);

  return (
    <div className="goalSection">
      {/* Habit Section */}
      <div className="goalContainer habit">
        <h2 className="goalLabel">Habit</h2>
        <div className="goalGrid">
          {habits.length === 0 ? (
            <p>No habits added yet.</p>
          ) : (
            habits.map((goal) => (
              <div key={goal.id} className="goalCard">
                <h3>{goal.goalName}</h3>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Project Section */}
      <div className="goalContainer project">
        <h2 className="goalLabel">Project</h2>
        <div className="goalGrid">
          {projects.length === 0 ? (
            <p>No projects added yet.</p>
          ) : (
            projects.map((goal) => (
              <div key={goal.id} className="goalCard">
                <h3>{goal.goalName}</h3>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalSection;
