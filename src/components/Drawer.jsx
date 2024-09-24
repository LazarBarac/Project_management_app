import React from "react";

export default function Drawer({ className }) {
  return (
    <aside className={className}>
      <h2 className="text-2xl text-neutral-400 uppercase font-bold">
        Your Projects
      </h2>
      <button className="text-neutral-400">Add Project</button>
    </aside>
  );
}
