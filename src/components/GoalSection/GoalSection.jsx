import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore"; // Added updateDoc
import { db } from "/src/lib/firebase"; // Adjust if needed
import { getUser } from "/src/lib/user";
import "./GoalSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import AddGoal from "./AddGoal.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GoalSection = ({
  addSection,
  setAddSection,
  defaultCategory,
  setDefaultCategory,
  selectedItem,
  setSelectedItem,
}) => {
  const [habits, setHabits] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [fullScreenMode, setFullScreenMode] = useState(false);

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

  const handleAddGoal = (category) => {
    setDefaultCategory(category);
    setAddSection(category);
    setSelectedItem(null);
    setActiveDropdown(null); // Close any open dropdowns
  };

  // const handleEditGoal = (goal) => {
  //   setSelectedItem(goal);
  //   setDefaultCategory(goal.subCategory);
  //   setAddSection(goal.subCategory);
  //   setActiveDropdown(null); // Close any open dropdowns
  // };

  const handleDeleteGoal = async (goalId) => {
    try {
      toast.warn(
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the buttons horizontally
            alignItems: "center", // Center the buttons vertically
            flexDirection: "column", // Stack the buttons vertically
            gap: "10px", // Space between the buttons
          }}
        >
          <p>Are you sure you want to delete this goal?</p>
          <div>
            <button
              onClick={async () => {
                try {
                  const userID = getUser().uid;
                  const goalRef = doc(db, userID, selectedItem.id);
                  await deleteDoc(goalRef);
                  toast.success("Goal deleted successfully!", {
                    position: "bottom-right",
                    autoClose: 500,
                  });
                  setTimeout(() => setAddSection(""), 1000);
                } catch (error) {
                  console.error("Error deleting goal:", error);
                  toast.error("Failed to delete goal. Please try again.", {
                    position: "bottom-right",
                    autoClose: 1000,
                  });
                }
              }}
              style={{
                backgroundColor: "#28a745" /* Green */,
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
              onClick={() => toast.dismiss()}
              style={{
                backgroundColor: "#dc3545" /* Red */,
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
          autoClose: false,
          closeOnClick: false,
          draggable: false,
          pauseOnHover: false,
          hideProgressBar: true,
        }
      );

      setActiveDropdown(null); // Close the dropdown
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  const toggleDropdown = (goalId, e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    setActiveDropdown(activeDropdown === goalId ? null : goalId);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleStar = async (goal, e) => {
    e.stopPropagation(); // Prevent triggering the card click event
    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, goal.id);
      await updateDoc(goalRef, {
        star: !goal.star, // Toggle the star status
      });

      // Update local state
      if (goal.subCategory === "Habit") {
        setHabits(
          habits.map((h) => (h.id === goal.id ? { ...h, star: !h.star } : h))
        );
      } else {
        setProjects(
          projects.map((p) => (p.id === goal.id ? { ...p, star: !p.star } : p))
        );
      }
    } catch (error) {
      console.error("Error updating star status:", error);
      toast.error("Failed to update star status", {
        position: "bottom-right",
        autoClose: 1000,
      });
    }
  };

  const handleViewGoal = (goal, fullScreen = false) => {
    setSelectedItem(goal);
    setDefaultCategory(goal.subCategory);
    setAddSection("add");
    setFullScreenMode(fullScreen); // Set full screen mode
  };

  // ... (keep all other existing functions the same)
  return (
    <>
      <div className="goalSection">
        {/* Habit Section */}
        <div className="goalSection Habit">
          <h2 className="goalLabel">Habit</h2>
          <div className="goalContainer">
            <div className="goalGrid">
              {habits.length === 0 ? (
                <p>No habits added yet.</p>
              ) : (
                habits.map((goal) => (
                  <div
                    key={goal.id}
                    className="goalCard"
                    onClick={() => handleViewGoal(goal)}
                  >
                    <h3>{goal.goalName}</h3>
                    <div className="goalActions">
                      <FontAwesomeIcon
                        className="starBtn"
                        icon={faStar}
                        onClick={(e) => toggleStar(goal, e)}
                        style={{ color: goal.star ? "gold" : "black" }}
                      />
                      <div className="dropdown-container">
                        <FontAwesomeIcon
                          className="menuBtn"
                          icon={faEllipsisV}
                          onClick={(e) => toggleDropdown(goal.id, e)}
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
                              View Info
                            </div>
                            <div
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewGoal(goal, true); // Full screen mode
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
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <FontAwesomeIcon
              className="addBtnHabit"
              icon={faPlus}
              onClick={() => handleAddGoal("Habit")}
            />
          </div>
        </div>

        <div className="goalSection Project">
          <h2 className="goalLabel">Project</h2>
          <div className="goalContainer">
            <div className="goalGrid">
              {projects.length === 0 ? (
                <p>No habits added yet.</p>
              ) : (
                projects.map((goal) => (
                  <div
                    key={goal.id}
                    className="goalCard"
                    onClick={() => handleViewGoal(goal)}
                  >
                    <h3>{goal.goalName}</h3>
                    <div className="goalActions">
                      <FontAwesomeIcon
                        className="starBtn"
                        icon={faStar}
                        onClick={(e) => toggleStar(goal, e)}
                        style={{ color: goal.star ? "gold" : "black" }}
                      />
                      <div className="dropdown-container">
                        <FontAwesomeIcon
                          className="menuBtn"
                          icon={faEllipsisV}
                          onClick={(e) => toggleDropdown(goal.id, e)}
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
                              View Info
                            </div>
                            <div
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewGoal(goal, true); // Full screen mode
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
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <FontAwesomeIcon
              className="addBtnHabit"
              icon={faPlus}
              onClick={() => handleAddGoal("Habit")}
            />
          </div>
        </div>
      </div>

      {/* AddGoal Component */}
      {defaultCategory !== "" && addSection !== "" && (
        <AddGoal
          setAddSection={setAddSection}
          defaultCategory={defaultCategory}
          setDefaultCategory={setDefaultCategory}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          fullScreenMode={fullScreenMode}
          onClose={() => {
            setDefaultCategory("");
            setAddSection("");
            setSelectedItem(null);
            setFullScreenMode(false);
          }}
        />
      )}
    </>
  );
};

export default GoalSection;
