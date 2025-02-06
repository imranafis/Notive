import React, { useState, useRef } from "react";
import Aditor from "../../lib/Aditor.jsx";
import Tag from "../Tag/Tag.jsx";

function NoteSection() {
  const Aditor_Note = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];
  const [inputValue, setInputValue] = useState("");

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      Aditor_Note.current.querySelector(".inputContent").textContent ==
      "write something ....."
        ? (Aditor_Note.current.querySelector(".inputContent").textContent = "")
        : "";
      Aditor_Note.current.querySelector(".inputContent").focus();
    }
  };

  const addNote = () => {
    console.log(Aditor_Note);
    console.log("Added Tags: ", addedTags);
    // console.log(Aditor_Journal.current.querySelector(".aditor").innerHTML);
  };
  return (
    <div className="noteContainer">
      <div className="contentSection">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a note name (Optional)"
        />
        <Aditor ref={Aditor_Note} className="Aditor_Note"></Aditor>
      </div>
      <div className="controlSection">
        <Tag
          tagSuggestions={tagSuggestions}
          onTagChange={handleTagChange}
        ></Tag>
        <button id="activateBtn" onClick={addNote}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NoteSection;
