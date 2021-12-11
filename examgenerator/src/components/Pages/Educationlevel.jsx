import React from "react";
import { Pagetitle } from "../Pagetitle";

export const Educationlevel = () => {
  return (
    <>
      <Pagetitle title="Educaation Level" />
      <div className="sel-box f-center">
        <select name="cars" className="sel-inp">
          <option value="" disabled selected>
            Select Education Level
          </option>
        </select>
        <div className="btn-box">
        <button className="btn">
Update
        </button>
        </div>

      </div>
    </>
  );
};
