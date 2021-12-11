import React from "react";
import { Pagetitle } from "../Pagetitle";

export const Standardexam = () => {
  return (
    <>
      <Pagetitle title="Standard Exam" />
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
            Select Year
          </option>
        </select>
        <div className="btn-box">
          <button className="btn">Generate</button>
        </div>
      </div>
    </>
  );
};
