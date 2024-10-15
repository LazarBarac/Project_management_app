import React, { forwardRef, useRef, useState } from "react";
import DatePicker from "react-date-picker";
import "./CreateProject.css";

export default function CreateProject({
  setCreateProject,
  input,
  handleChange,
  addItem,
  titleRef,
  descriptionRef,
  dateRef,
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const inputStyle =
    "bg-stone-300 border-4 border-t-0 border-x-0 border-neutral-400 h-10 mb-8 pl-4 text-wrap";
  const labelStyle = "w-full text-lg font-normal tracking-wider";
  return (
    <section className="w-full pr-52 flex flex-col ml-14">
      <div className="flex flex-row w-10/12 justify-end items-start pb-10">
        <button
          onClick={() => {
            setCreateProject(false);
          }}
          className="mr-10 font-semibold text-lg py-2 rounded-lg"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            addItem(
              titleRef.current.value,
              descriptionRef.current.value
              // dateRef.current.value
            );
            // console.log(titleRef.current.value);
            titleRef.current.value = "";
            descriptionRef.current.value = "";
          }}
          className="font-semibold text-lg text-white bg-black py-2 px-8 rounded-lg"
        >
          Save
        </button>
      </div>
      <form className="flex flex-col w-10/12 gap-2">
        <label className={labelStyle}>TITLE</label>
        <input
          ref={titleRef}
          name="titleInput"
          type="text"
          className={inputStyle}
          onChange={handleChange}
          value={input.value}
        />
        <label className={labelStyle}>DESCRIPTION</label>
        <textarea
          name="descriptionInput"
          type="text"
          ref={descriptionRef}
          className={inputStyle + " h-20 pt-2"}
          onChange={handleChange}
          value={input.value}
        />
        <label className={labelStyle}>DUE DATE</label>
        {/* <div
          className={
            inputStyle + " flex flex-row justify-between items-center pr-2.5"
          }
        > */}
        <DatePicker
          calendarIcon
          className="datePickerStyle"
          // ref={dateRef}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        {/* <span class="material-symbols-outlined">calendar_month</span>
        </div> */}
      </form>
    </section>
  );
}
