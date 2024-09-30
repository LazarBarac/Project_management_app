import React from "react";
import imgNoProjects from "../assets/no-projects.png";

export default function StartingPageCreateProject({
  className,
  setCreateProject,
}) {
  return (
    <div className={className}>
      <img src={imgNoProjects} alt="no-projects" className="w-20 mt-8" />
      <h1 className="mt-8 text-2xl font-black text-stone-500">
        No Project Selected
      </h1>
      <label className="mt-3 text-xl font-semibold text-stone-500">
        Select a project or get started with a new one
      </label>
      <button
        onClick={() => {
          setCreateProject(true);
        }}
        className="w-48 h-14 bg-neutral-800 mt-8 rounded-lg text-lg text-neutral-400 font-semibold"
      >
        Create new project
      </button>
    </div>
  );
}
