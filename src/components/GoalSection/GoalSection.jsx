import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "/src/lib/firebase"; // Adjust if needed
import { getUser } from "/src/lib/user";
import "./GoalSection.css";

const GoalSection = ({ addSection }) => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const userID = getUser().uid; // Get user ID
        const querySnapshot = await getDocs(collection(db, userID));
        const goalList = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((goal) => goal.category === "goal");
        setGoals(goalList);
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, [addSection]);

  return (
    <div className="goalSection">
      {goals.length === 0 ? (
        <p>No goals added yet.</p>
      ) : (
        <div className="goalGrid">
          {goals.map((goal) => (
            <div key={goal.id} className="goalCard">
              <h3>{goal.goalName}</h3>
              {/* <p>{goal.breakdown}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalSection;
