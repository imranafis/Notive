import React, { useState } from "react";
import GoalSection from "./GoalSection/GoalSection.jsx";
import AddGoal from "./GoalSection/AddGoal.jsx";
import BulletJournal from "./BulletJournal/BulletJournal.jsx";
import NoteSection from "./NoteSection/NoteSection.jsx";
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
  const [fullScreenMode, setFullScreenMode] = useState(false);

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
              addSection={addSection}
              setAddSection={setAddSection}
              defaultCategory={defaultCategory}
              setDefaultCategory={setDefaultCategory}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              fullScreenMode={fullScreenMode}
              onClose={() => {
                setDefaultCategory("");
                setAddSection("");
                setSelectedItem(null);
                setFullScreenMode(false);
              }}
            />
          )}
        </>
      )}
      {activeSection === "bulletJournal" && <BulletJournal />}
      {activeSection === "dailyspace" && (
        <>
          <DailySpace
            addSection={addSection}
            setAddSection={setAddSection}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            fullScreenMode={fullScreenMode}
            setFullScreenMode={setFullScreenMode}
          />
          {addSection === "viewTask" && (
            <AddTask
              addSection={"viewTask"}
              setAddSection={setAddSection}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              fullScreenMode={fullScreenMode}
              onClose={() => {
                setAddSection("");
                setSelectedItem(null);
                setFullScreenMode(false);
              }}
            />
          )}
          {addSection === "viewDailyTask" && (
            <AddGoal
              addSection={"viewDailyTask"}
              setAddSection={setAddSection}
              defaultCategory={defaultCategory}
              setDefaultCategory={"habit"}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              fullScreenMode={fullScreenMode}
              onClose={() => {
                setDefaultCategory("");
                setAddSection("");
                setSelectedItem(null);
                setFullScreenMode(false);
              }}
            />
          )}
        </>
      )}
      {activeSection === "taskSection" && (
        <>
          <TaskSection
            addSection={addSection}
            setAddSection={setAddSection}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            fullScreenMode={fullScreenMode}
            setFullScreenMode={setFullScreenMode}
          />
          {(addSection === "taskSection" || addSection === "viewTask") && (
            <AddTask
              setAddSection={setAddSection}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              fullScreenMode={fullScreenMode}
              onClose={() => {
                setAddSection("");
                setSelectedItem(null);
                setFullScreenMode(false);
              }}
            />
          )}
        </>
      )}

      {activeSection === "noteSection" && <NoteSection />}
      {/* {activeSection === "journal" && <JournalSection />} */}
    </>
  );
}

export default DisplayPanel;
