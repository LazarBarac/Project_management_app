import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "./CreateProject.css";

export default function CreateProject() {
  const [selectedDate, setSelectedDate] = useState(null);

  const inputStyle =
    "bg-stone-300 border-4 border-t-0 border-x-0 border-neutral-400 h-10 mb-8 pl-4 text-wrap";
  const labelStyle = "w-full text-lg font-normal tracking-wider";
  return (
    <section className="flex flex-col justify-start items-center w-full pr-52">
      <div className="flex flex-row w-10/12 justify-end items-start pb-10">
        <button className="pr-10 font-semibold text-lg py-2 px-8 rounded-lg">
          Cancel
        </button>
        <button className="font-semibold text-lg text-white bg-black py-2 px-8 rounded-lg">
          Save
        </button>
      </div>
      <form className="flex flex-col w-10/12 gap-2">
        <label className={labelStyle}>TITLE</label>
        <input type="text" className={inputStyle} />
        <label className={labelStyle}>DESCRIPTION</label>
        <textarea type="text" className={inputStyle + " h-20 pt-2"} />
        <label className={labelStyle}>DUE DATE</label>
        <div
          className={
            inputStyle + " flex flex-row justify-between items-center pr-2.5"
          }
        >
          <DatePicker
            className="datePickerStyle"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <span class="material-symbols-outlined">calendar_month</span>
        </div>
      </form>
    </section>
  );
}
