import StartingPageCreateProject from "./components/StartingPageCreateProject";
import Sidebar from "./components/Sidebar";
import { createPortal } from "react-dom";

import { useState } from "react";
import CreateProject from "./components/CreateProject";
import EditProject from "./components/EditProject";

function App() {
  //User input for creating Projects
  const [input, setInput] = useState("");

  function handleChange(e) {
    const value = e.target.value;
    setInput((values) => ({ ...values, [value]: value }));
  }

  //State for displaying CreateProject Section
  const [createProject, setCreateProject] = useState(false);

  const [editTask, setEditTask] = useState(false);

  //STA DA RADIM SA OVIM
  const [listItems, setListItems] = useState([]);
  const filteredListItem = listItems.filter(
    (listItem) => listItem.trim() !== ""
  );

  function addItem(listItem) {
    if (listItem !== "" || listItem !== " ")
      setListItems((prevItems) => [...prevItems, listItem]);
  }

  // const [editTask, setEditTask] = useState(true);
  // function showEditTask() {
  //   setEditTask((wasEditTask) => !wasEditTask);
  // }

  return (
    <div className="flex w-full flex-col h-screen">
      <div className="w-full bg-transparent h-20"></div>
      <main className="flex flex-row h-full">
        <Sidebar
          setCreateProject={setCreateProject}
          setEditTask={setEditTask}
          filteredListItem={filteredListItem}
        />
        {createProject ? (
          <CreateProject
            addItem={addItem}
            input={input}
            handleChange={handleChange}
            setCreateProject={setCreateProject}
          />
        ) : editTask ? (
          <EditProject filteredListItem={filteredListItem} />
        ) : (
          <StartingPageCreateProject
            setCreateProject={setCreateProject}
            className="w-full pr-52 flex flex-col justify-start items-center ml-14"
          />
        )}
      </main>
    </div>
  );
}

export default App;
