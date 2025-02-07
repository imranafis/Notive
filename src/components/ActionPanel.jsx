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
      //console
    }
    setActiveSection(panel);
  };
  const handleAddChange = () => {
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
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("dailyspace")}
      >
        <FontAwesomeIcon icon={faClock} />
        {/* <img src={dailyBtn}/> */}
      </div>
      <div className="sectionBtn" onClick={() => handleSectionChange("goal")}>
        {/* <img src={goalBtn}/> */}
        <FontAwesomeIcon icon={faBullseye} />
      </div>
      <div className="sectionBtn" onClick={() => handleSectionChange("note")}>
        {/* <img src={noteBtn}/> */}
        <FontAwesomeIcon icon={faListUl} />
      </div>
      <div className="sectionBtn" onClick={() => handleSectionChange("task")}>
        {/* <img src={taskBtn}/> */}
        <FontAwesomeIcon icon={faListCheck} />
      </div>
      <div
        className="sectionBtn"
        onClick={() => handleSectionChange("journal")}
      >
        <FontAwesomeIcon icon={faBook} />
        {/* <img src={journalBtn}/> */}
      </div>
      <div className="sectionBtn" onClick={() => handleAddChange()}>
        <FontAwesomeIcon className="addBtn" icon={faPlus} />
        {/* <img src={dailyBtn}/> */}
      </div>

      {/* <img src={spaceBtn} className="spaceBtn" /> */}
    </>
  );
}
export default ActionPanel;
