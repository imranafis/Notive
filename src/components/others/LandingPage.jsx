import React, { useState, useEffect } from "react";
// import Header from "./Header.jsx";
import ActionPanel from "../ActionPanel.jsx";
import DisplayPanel from "../DisplayPanel.jsx";
import "./LandingPage.css";
import { useFullScreen } from "../../lib/FullScreenContext.jsx";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("");
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
        />
      </div>
    </>
  );
}

export default LandingPage;
