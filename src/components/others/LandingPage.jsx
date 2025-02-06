import React, { useState, useEffect } from "react";
// import Header from "./Header.jsx";
import ActionPanel from "../ActionPanel.jsx";
import DisplayPanel from "../DisplayPanel.jsx";
import "./LandingPage.css";
import { useFullScreen } from "../../lib/FullScreenContext.jsx";

function LandingPage() {
  const [activeSection, setActiveSection] = useState("");
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
        <ActionPanel setActiveSection={setActiveSection} />
      </div>
      <div className={`contentPanel ${isFullScreen ? "active" : ""}`}>
        <DisplayPanel activeSection={activeSection} />
      </div>
    </>
  );
}

export default LandingPage;
