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

const NAV_ITEMS = [
  { id: "dailyspace", icon: faClock, label: "Daily Space" },
  { id: "goal", icon: faBullseye, label: "Goals" },
  { id: "bulletJournal", icon: faListUl, label: "Bullet Journal" },
  { id: "taskSection", icon: faListCheck, label: "Tasks" },
  { id: "noteSection", icon: faBook, label: "Notes" },
];

function ActionPanel({
  activeSection,
  setActiveSection,
  addSection,
  setAddSection,
}) {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  const handleSectionChange = (panel) => {
    if (isFullScreen) toggleFullScreen();
    setActiveSection(panel);
    setAddSection("");
  };

  const handleAddChange = () => {
    setAddSection(addSection !== activeSection ? activeSection : "");
  };

  return (
    <>
      {/* Logo / Home */}
      <div className="sectionBtn" onClick={() => handleSectionChange("")}>
        <img src={Logo} alt="Home" />
      </div>

      <div className="actionBtns">
        {/* Nav items */}
        {NAV_ITEMS.map(({ id, icon, label }) => (
          <div
            key={id}
            className={`sectionBtn ${activeSection === id ? "active" : ""}`}
            onClick={() => handleSectionChange(id)}
          >
            <FontAwesomeIcon icon={icon} />
            {!isFullScreen && <span className="sectionLabel">{label}</span>}
          </div>
        ))}
      </div>

      {/* Add button */}
      <div className="sectionBtn" onClick={handleAddChange}>
        <FontAwesomeIcon className="addBtn" icon={faPlus} />
      </div>

      {/* Fullscreen toggle */}
      <div className="sectionBtn" onClick={toggleFullScreen}>
        <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} />
      </div>
    </>
  );
}

export default ActionPanel;
