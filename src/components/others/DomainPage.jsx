import React, { useState } from "react";
import Header from "./Header";
import { getUser } from "../../lib/user.js";
import RadioGroup from "./RadioGroup";
import { useNavigate } from "react-router-dom";

import "./DomainPage.css";

const domainOptions = [
  {
    id: "categoryD1",
    value: "Goal oriented",
    label: "Goal oriented",
    bubbleClass: "large",
  },
  {
    id: "categoryD2",
    value: "Make the most of everyday",
    label: "Make the most of everyday",
    bubbleClass: "medium",
  },
  {
    id: "categoryD3",
    value: "Organize your mind",
    label: "Organize your mind",
    bubbleClass: "small",
  },
];

function DomainPage() {
  const navigate = useNavigate();
  const [selectedDomain, setSelectedDomain] = useState("");
  const [isSelected, setIsSelected] = useState(false);

  const DemoSection = () => {
    console.log("Not ready yet!!!!");
  };

  const handleRadioChange = (option) => {
    console.log("Selected option:", option);
    setSelectedDomain(option.value);
    setIsSelected(true);
  };
  

  const handleGo = () => {
    localStorage.setItem("userLevel", "Intermediate");
    navigate("/Landing");
  };

  return (
    <>
      <Header>
        <div onClick={DemoSection}>Demo</div>
      </Header>
      <div className="domain-panel">
        <div className="domainContainer">
          <div className="welcome-domain">
            <p>Hello {getUser().name},</p>
            <p>Welcome to Notive - Your Next Chapter Begins Here.</p>
            <p>Dream, Plan, Achieve.</p>
          </div>
          <RadioGroup
            title="Choose your adventure type:"
            name="domainOptions"
            options={domainOptions}
            onRadioChange={handleRadioChange}
          />
        </div>
        <div className={`Go ${isSelected ? "active" : ""}`} onClick={handleGo}>
          Go
        </div>
      </div>
      <div className="domainAnimation-panel">
        {isSelected && selectedDomain === "Goal oriented" && (
          <h1>{selectedDomain}</h1>
        )}
        {isSelected && selectedDomain === "Make the most of everyday" && (
          <h1>{selectedDomain}</h1>
        )}
        {isSelected && selectedDomain === "Organize your mind" && (
          <h1>{selectedDomain}</h1>
        )}
      </div>
    </>
  );
}

export default DomainPage;
