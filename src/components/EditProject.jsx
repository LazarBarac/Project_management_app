import React from "react";

export default function EditProject({ filteredListItem }) {
  const h2Styling = "text-2xl font-bold";
  const listItemStyle = "px-4 py-4 font-medium";
  const inputStyle =
    "bg-stone-300 w-3/5 h-8 my-4 mr-8 pl-4 text-wrap outline-offset-0";
  return (
    <section className="w-full pr-52 flex flex-col ml-14 mt-12">
      <header className="border-b-2 border-neutral-500 mb-6">
        <div className="flex flex-row justify-between mb-2">
          <h2 className={h2Styling}>Learning React</h2>
          <button className="text-neutral-700 bg-transparent text-xl font-medium">
            Delete
          </button>
        </div>
        <label className="text-neutral-400 inline-block mb-4 ">
          pickedDate
        </label>
        <p className="mb-4">Learn React</p>
        <p className="mb-4">Start with basics</p>
      </header>
      <main>
        <h2 className={h2Styling}>Tasks</h2>
        <div className="w-2/3">
          <input className={inputStyle} type="text" />
          <button className="font-medium">Add Task</button>
          <ul className="w-full bg-neutral-200 mt-10">
            <li className="flex flex-row justify-between ">
              <p className={listItemStyle}>List Item</p>
              <button className="pr-4 font-medium">Clear</button>
            </li>
          </ul>
        </div>
      </main>
    </section>
  );
}
