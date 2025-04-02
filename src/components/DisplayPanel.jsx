import React, { useState } from "react";

import GoalSection from "./GoalSection/GoalSection.jsx";
import AddGoal from "./GoalSection/AddGoal.jsx";
import BulletJournal from "./BulletJournal/BulletJournal.jsx";
import NoteSection from "./others/NoteSection.jsx";
import TaskSection from "./TaskSection/TaskSection.jsx";
import JournalSection from "./others/JournalSection.jsx";
import DailySpace from "./DailySpace/DailySpace.jsx";
import AddTask from "./TaskSection/AddTask.jsx";

function DisplayPanel({
  activeSection,
  addSection,
  setAddSection,
  defaultCategory,
  setDefaultCategory,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {activeSection === "goal" && (
        <>
          <GoalSection
            addSection={addSection}
            setAddSection={setAddSection}
            defaultCategory={defaultCategory}
            setDefaultCategory={setDefaultCategory}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
          {addSection === "goal" && (
            <AddGoal
              setAddSection={setAddSection}
              defaultCategory={""}
              setDefaultCategory={setDefaultCategory}
              selectedItem={null}
              setSelectedItem={setSelectedItem}
              onClose={() => {
                setDefaultCategory("");
                setAddSection("");
                setSelectedItem(null);
              }}
            />
          )}
        </>
      )}
      {activeSection === "bulletJournal" && <BulletJournal />}
      {activeSection === "dailyspace" && <DailySpace />}
      {activeSection === "taskSection" && (
        <>
          <TaskSection addSection={addSection} setAddSection={setAddSection} />
          {addSection === "taskSection" && (
            <AddTask setAddSection={setAddSection} />
          )}
        </>
      )}
      {/* {activeSection === "note" && <NoteSection />} */}
      {/* {activeSection === "journal" && <JournalSection />} */}
    </>
  );
}
export default DisplayPanel;
