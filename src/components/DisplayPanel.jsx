import GoalSection from "./others/GoalSection.jsx";
import NoteSection from "./others/NoteSection.jsx";
import TaskSection from "../icons/TaskSection.jsx";
import JournalSection from "./others/JournalSection.jsx";
import DailySpace from "./DailySpace/DailySpace.jsx";

function DisplayPanel({ activeSection }) {
  return (
    <>
      {activeSection === "dailyspace" && <DailySpace />}
      {/* {activeSection === "goal" && <GoalSection />}
      {activeSection === "note" && <NoteSection />}
      {activeSection === "task" && <TaskSection />}
      {activeSection === "journal" && <JournalSection />} */}
    </>
  );
}
export default DisplayPanel;
