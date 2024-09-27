import StartingPageCreateProject from "./components/StartingPageCreateProject";
import Drawer from "./components/Drawer";
import { createPortal } from "react-dom";

import { useState } from "react";
import CreateProject from "./components/CreateProject";

function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal((wasModal) => !wasModal);
    showModal ? console.log("DA") : console.log("NE");
  }

  return (
    <div className="flex w-full flex-col h-screen">
      <div className="w-full bg-transparent h-20"></div>
      <main className="flex flex-row h-full">
        <Drawer
          openModal={openModal}
          className="container flex flex-col w-1/4 justify-start items-left pt-14 gap-4 bg-black rounded-r-xl pl-10"
        />
        {showModal ? (
          <CreateProject />
        ) : (
          <StartingPageCreateProject
            openModal={openModal}
            className="flex flex-col justify-start items-center w-full"
          />
        )}
      </main>
    </div>
  );
}
export default App;
