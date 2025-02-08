import GoalSection from "./GoalSection/GoalSection.jsx";
import AddGoal from "./GoalSection/AddGoal.jsx";
import BulletJournal from "./BulletJournal/BulletJournal.jsx";
import NoteSection from "./others/NoteSection.jsx";
import TaskSection from "../icons/TaskSection.jsx";
import JournalSection from "./others/JournalSection.jsx";
import DailySpace from "./DailySpace/DailySpace.jsx";

function DisplayPanel({ activeSection, addSection, setAddSection }) {
  return (
    <>
      {activeSection === "goal" && <GoalSection addSection={addSection} />}
      {activeSection === "goal" && addSection === "goal" && (
        <AddGoal setAddSection={setAddSection} />
      )}
      {activeSection === "bulletJournal" && <BulletJournal />}
      {activeSection === "dailyspace" && <DailySpace />}
      {/* {activeSection === "note" && <NoteSection />}
      {activeSection === "task" && <TaskSection />}
      {activeSection === "journal" && <JournalSection />} */}
    </>
  );
}
export default DisplayPanel;
