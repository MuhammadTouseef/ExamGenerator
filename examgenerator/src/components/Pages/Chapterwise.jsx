import React from "react";
import { Pagetitle } from "../Pagetitle";

export const Chapterwise = () => {
  return (
    <>
      <Pagetitle title="Chapter Wise Exam" />
      <div className="sel-box f-center">
        <select name="ste" className="sel-inp">
          <option value="" disabled selected>
            Select Subject
          </option>
        </select>
        <br />
        <br />
        <select name="ste" className="sel-inp">
          <option value="" disabled selected>
            Select Chapters
          </option>
        </select>
        <div className="btn-box">
          <button className="btn">Generate Exam</button>
        </div>
      </div>
    </>
  );
};
