import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "/src/lib/firebase";
import { getUser } from "/src/lib/user";
import "./GoalSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStar, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import AddGoal from "./AddGoal.jsx";
import { toast } from "react-toastify";

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

        goalList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

        setHabits(goalList.filter((goal) => goal.subCategory === "habit"));
        setProjects(goalList.filter((goal) => goal.subCategory === "project"));
      } catch (error) {
        console.error("Error fetching goals:", error);
      }
    };

    fetchGoals();
  }, [addSection]);

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

                setHabits((prevHabits) =>
                  prevHabits.filter((goal) => goal.id !== goalId)
                );
                setProjects((prevProjects) =>
                  prevProjects.filter((goal) => goal.id !== goalId)
                );

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

  const toggleDropdown = (goalId, e) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === goalId ? null : goalId);
  };

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     setActiveDropdown(null);
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  const toggleStar = async (goal, e) => {
    e.stopPropagation();
    try {
      const userID = getUser().uid;
      const goalRef = doc(db, userID, goal.id);
      await updateDoc(goalRef, {
        star: !goal.star,
      });

      if (goal.subCategory === "habit") {
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

  const handleAddGoal = (category) => {
    setDefaultCategory(category);
    setAddSection(category);
    setSelectedItem(null);
    setActiveDropdown(null);
  };

  const handleViewGoal = (goal, fullScreen = false, e) => {
    // Check if the click originated from the goalActions area
    if (e && e.target.closest(".goalActions")) {
      return;
    }
    setSelectedItem(goal);
    setDefaultCategory(goal.subCategory);
    setAddSection("viewGoal");
    setFullScreenMode(fullScreen);
  };

  return (
    <>
      <div className="goalSection">
        {/* Habit Section */}
        <div className="goalSection Habit">
          <h2 className="goalLabel">Daily Task</h2>
          <div className="goalContainer">
            <div className="goalGrid">
              {habits.length === 0 ? (
                <p>No daily task added yet.</p>
              ) : (
                habits.map((goal) => (
                  <div
                    key={goal.id}
                    className="goalCard"
                    onClick={(e) => handleViewGoal(goal, false, e)}
                  >
                    <h3>{goal.goalName}</h3>
                    <div
                      className="goalActions"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon
                        className="starBtn"
                        icon={faStar}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStar(goal, e);
                        }}
                        style={{ color: goal.star ? "gold" : "black" }}
                      />
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
                  </div>
                ))
              )}
            </div>
            <FontAwesomeIcon
              className="addBtnHabit"
              icon={faPlus}
              onClick={() => handleAddGoal("habit")}
            />
          </div>
        </div>

        {/* Project Section */}
        <div className="goalSection Project">
          <h2 className="goalLabel">Project</h2>
          <div className="goalContainer">
            <div className="goalGrid">
              {projects.length === 0 ? (
                <p>No projects added yet.</p>
              ) : (
                projects.map((goal) => (
                  <div
                    key={goal.id}
                    className="goalCard"
                    onClick={(e) => handleViewGoal(goal, false, e)}
                  >
                    <h3>{goal.goalName}</h3>
                    <div
                      className="goalActions"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FontAwesomeIcon
                        className="starBtn"
                        icon={faStar}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleStar(goal, e);
                        }}
                        style={{ color: goal.star ? "gold" : "black" }}
                      />
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
                  </div>
                ))
              )}
            </div>
            <FontAwesomeIcon
              className="addBtnProject"
              icon={faPlus}
              onClick={() => handleAddGoal("project")}
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
