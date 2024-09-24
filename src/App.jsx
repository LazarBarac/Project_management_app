import CreateProject from "./components/CreateProject";
import Drawer from "./components/Drawer";

function App() {
  return (
    <div className="flex w-full flex-col h-screen">
      <div className="w-full bg-transparent h-20"></div>
      <main className="flex flex-row h-full">
        <Drawer className="container flex flex-col w-1/4 justify-start items-left pt-14 gap-4 bg-black rounded-r-xl pl-10" />
        <CreateProject className="flex flex-col justify-start items-center w-full" />
      </main>
    </div>
  );
}

export default App;
