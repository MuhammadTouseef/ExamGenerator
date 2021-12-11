import React from "react";
import { Pagetitle } from "../Pagetitle";

export const Difficultybased = () => {
  return (
    <>
      <Pagetitle title="Difficulty Based Exam" />
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
            Select Difficulty Level
          </option>
        </select>
        <div className="btn-box">
          <button className="btn">Generate Exam</button>
        </div>
      </div>
    </>
  );
};
