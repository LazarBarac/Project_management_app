import React from "react";

export default function Drawer({ className }) {
  return (
    <aside className={className}>
      <h2 className="text-2xl text-neutral-400 uppercase font-bold">
        Your Projects
      </h2>
      <button className="w-36 h-10 mt-4  text-neutral-400 bg-neutral-800 rounded-lg font-semibold">
        + Add Project
      </button>
    </aside>
  );
}
