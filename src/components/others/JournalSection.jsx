import React, { useState, useRef } from "react";
import Aditor from "../../lib/Aditor.jsx";

import Tag from "../Tag/Tag.jsx";

function JournalSection() {
  const Aditor_Journal = useRef(null);

  const [addedTags, setAddedTags] = useState([]);
  const tagSuggestions = ["YESTERDAY", "TODAY", "TOMORROW"];

  const handleTagChange = (newTags) => {
    setAddedTags(newTags);
  };

  const addJournal = () => {
    console.log(Aditor_Journal);
    console.log("Added Tags: ", addedTags);
    // console.log(Aditor_Journal.current.querySelector(".aditor").innerHTML);
  };
  return (
    <div className="journalContainer">
      <div className="contentSection">
        <Aditor ref={Aditor_Journal} className="Aditor_Journal"></Aditor>
      </div>
      <div className="controlSection">
        <Tag
          tagSuggestions={tagSuggestions}
          onTagChange={handleTagChange}
        ></Tag>
        <button id="activateBtn" onClick={addJournal}>
          Save
        </button>
      </div>
    </div>
  );
}

export default JournalSection;
