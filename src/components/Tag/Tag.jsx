import React, { useState, useEffect, useRef } from "react";
import "./tag.css";

function Tag({ tagSuggestions, onTagChange, initialTags }) {
  const [addedTag, setAddedTag] = useState([]);
  const addedTagsRef = useRef(null);

  const [selectedTag, setSelectedTag] = useState(null);

  const [isActive, setIsActive] = useState(false);
  const [isSuggestionBoxVisible, setIsSuggestionBoxVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] =
    useState(tagSuggestions);

  const tagBtn = useRef(null);
  const inputRef = useRef(null);
  const suggestionBoxRef = useRef(null);

  const tagContainerToggle = () => {
    setIsActive(!isActive);
  };

  const addTag = (value) => {
    if (!addedTag.includes(value)) {
      const newTags = [...addedTag, value];
      setAddedTag(newTags);
      onTagChange(newTags);
      setInputValue("");
      setSelectedTag(null);
    }
  };

  const removeTag = (value) => {
    const newTags = addedTag.filter((tag) => tag !== value);
    setAddedTag(newTags);
    onTagChange(newTags);
  };

  const handleTagClick = (tag) => {
    addTag(tag);
    setIsSuggestionBoxVisible(false);
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setInputValue(input);

    const filtered = tagSuggestions.filter((tag) => tag.startsWith(input));

    setFilteredSuggestions(filtered);
    setIsSuggestionBoxVisible(filtered.length > 0);
  };
  const handleInputFocus = () => {
    setFilteredSuggestions(tagSuggestions);
    setIsSuggestionBoxVisible(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      if (inputValue.trim()) {
        addTag(inputValue.trim());
        setInputValue("");
      }
    }

    if (e.key === "Backspace" && inputValue === "") {
      const len = addedTag.length;

      if (selectedTag === null) {
        setSelectedTag(len - 1);
      } else if (selectedTag >= 0) {
        removeTag(addedTag[selectedTag]);
        setSelectedTag(null);
      }
    }
  };

  // Scroll to the last tag when a new tag is added
  useEffect(() => {
    if (addedTagsRef.current) {
      addedTagsRef.current.scrollLeft = addedTagsRef.current.scrollWidth;
    }

    if (initialTags.length > 0) {
      setAddedTag(initialTags);
    }
  }, [addedTag]);

  // Click outside detection
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionBoxRef.current &&
        !suggestionBoxRef.current.contains(e.target) &&
        inputRef.current &&
        !inputRef.current.contains(e.target)
      ) {
        setIsSuggestionBoxVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="tagSection">
        <button
          ref={tagBtn}
          className={`tagBtn ${isActive ? "active" : ""}`}
          onClick={tagContainerToggle}
        >
          {isActive ? <i className="fa-solid fa-check"></i> : "Tag"}
        </button>

        <div
          ref={addedTagsRef}
          className={`addedTags ${isActive ? "" : "active"}`}
        >
          {addedTag.map((item, index) => (
            <button
              key={index}
              className={`tag ${selectedTag === index ? "selected" : ""}`}
              onClick={() => removeTag(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className={`tagInputDiv ${isActive ? "active" : ""}`}>
          <input
            type="text"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            id="tagInput"
            placeholder="Use 'Space' to add multiple tag"
            autoComplete="off"
            // onInput={(e) => (e.target.value = e.target.value.toUpperCase())}
          />
        </div>

        {isSuggestionBoxVisible && (
          <div ref={suggestionBoxRef} className="suggestionBox">
            <ul className="suggestionList">
              {filteredSuggestions.map((tag, index) => (
                <li key={index} onClick={() => handleTagClick(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Tag;
