import StartingPageCreateProject from "./components/StartingPageCreateProject";
import Drawer from "./components/Drawer";
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

  //STA DA RADIM SA OVIM
  const [listItems, setListItems] = useState([]);

  function addItem(listItem) {
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
        <Drawer
          listItems={listItems}
          setCreateProject={setCreateProject}
          className="container flex flex-col w-1/4 justify-start items-left pt-14 gap-4 bg-black rounded-r-xl pl-10"
        />
        {createProject ? (
          <CreateProject
            addItem={addItem}
            input={input}
            handleChange={handleChange}
            setCreateProject={setCreateProject}
          />
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
