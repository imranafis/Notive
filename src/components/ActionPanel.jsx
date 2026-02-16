import { useFullScreen } from "../lib/FullScreenContext";
import Logo from "/src/icons/N.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faBullseye,
  faListUl,
  faListCheck,
  faBook,
  faPlus,
  faCompress,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";

function ActionPanel({
  activeSection,
  setActiveSection,
  addSection,
  setAddSection,
}) {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const handleSectionChange = (panel) => {
    if (isFullScreen) {
      toggleFullScreen();
    }
    setActiveSection(panel);
    setAddSection("");
  };

  const handleAddChange = () => {
    console.log(addSection);
    console.log(activeSection);
    if (addSection != activeSection) {
      setAddSection(activeSection);
    } else {
      setAddSection("");
    }
  };

  return (
    <>
      <div className="sectionBtn" onClick={() => handleSectionChange("")}>
        <img src={Logo} />
      </div>

      <div className="sectionBtn" onClick={() => handleSectionChange("goal")}>
        <FontAwesomeIcon icon={faBullseye} />
      </div>
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("bulletJournal")}
      >
        <FontAwesomeIcon icon={faListUl} />
      </div>
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("taskSection")}
      >
        <FontAwesomeIcon icon={faListCheck} />
      </div>
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("dailyspace")}
      >
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("noteSection")}
      >
        <FontAwesomeIcon icon={faBook} />
      </div>
      <div className="sectionBtn" onClick={() => handleAddChange()}>
        <FontAwesomeIcon className="addBtn" icon={faPlus} />
      </div>

      {/* Minimize/Maximize Button */}
      <div className="sectionBtn" onClick={toggleFullScreen}>
        <FontAwesomeIcon
          icon={isFullScreen ? faCompress : faExpand}
          title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        />
      </div>
    </>
  );
}
export default ActionPanel;
