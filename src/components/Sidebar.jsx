import React from "react";

export default function Sidebar({
  setCreateProject,
  setEditTask,
  filteredListItem,
  handleItemClick,
}) {
  const sidebarStyle =
    "container flex flex-col w-1/4 justify-start items-left pt-14 gap-4 bg-black rounded-r-xl pl-10";

  return (
    <aside className={sidebarStyle}>
      <h2 className="text-2xl text-neutral-400 uppercase font-bold">
        Your Projects
      </h2>
      <button
        onClick={() => {
          setCreateProject(true);
          setEditTask(false);
        }}
        className="w-36 h-10 mt-4  text-neutral-400 bg-neutral-800 rounded-lg font-semibold"
      >
        + Add Project
      </button>
      <ul className="flex flex-col gap-2">
        {filteredListItem.map((listItem) => (
          <li
            className="text-white bg-neutral-800 px-2 py-1 w-4/5 rounded-md"
            key={listItem.id}
          >
            <button
              className="w-full text-left"
              onClick={() => {
                setEditTask(true);
                setCreateProject(false);
                handleItemClick(listItem);
              }}
            >{`${listItem.title}`}</button>
          </li>
        ))}
      </ul>
      /
    </aside>
  );
}
