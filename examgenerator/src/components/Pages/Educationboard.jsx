import React from "react";
import { Pagetitle } from "../Pagetitle";

export const Educationboard = () => {
  return (
    <>
      <Pagetitle title="Board of Education" />
      <div className="sel-box f-center">
        <select name="cars" className="sel-inp">
          <option value="" disabled selected>
            Select Education Board
          </option>
        </select>
        <div className="btn-box">
          <button className="btn">Update</button>
        </div>
      </div>
    </>
  );
};
