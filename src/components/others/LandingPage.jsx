import React, { useState, useEffect } from "react";
// import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import ActionPanel from "../ActionPanel.jsx";
import DisplayPanel from "../DisplayPanel.jsx";
import "./LandingPage.css";
import { useFullScreen } from "../../lib/FullScreenContext.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LandingPage() {
  useEffect(() => {
    const handleOnLoad = (e) => {
      const userLevel = localStorage.getItem("userLevel");
      const userID = localStorage.getItem("userID");
      if (userLevel == "Beginner") {
        navigate("/Domain");
      } else if (userLevel == "Intermediate" || userID) {
        navigate("/Landing");
      } else {
        navigate("/");
      }
    };

    handleOnLoad();
  }, []);

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");
  const [defaultCategory, setDefaultCategory] = useState("");

  const [addSection, setAddSection] = useState("");
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.key === "f") {
        e.preventDefault();
        toggleFullScreen();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [toggleFullScreen]);

  return (
    <>
      {/* <Header /> */}
      <div className={`actionPanel ${isFullScreen ? "active" : ""}`}>
        <ActionPanel
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          addSection={addSection}
          setAddSection={setAddSection}
        />
      </div>
      <div className={`contentPanel ${isFullScreen ? "active" : ""}`}>
        <DisplayPanel
          activeSection={activeSection}
          addSection={addSection}
          setAddSection={setAddSection}
          defaultCategory={defaultCategory}
          setDefaultCategory={setDefaultCategory}
        />
        <ToastContainer />
      </div>
    </>
  );
}

export default LandingPage;
