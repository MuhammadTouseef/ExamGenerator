import React from "react";
import { Pagetitle } from "../Pagetitle";

export const CustomExam = () => {
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
       
        <input type="text" name="" id="" className="sel-inp" placeholder="Enter No.of MCQ's" />
        <br />
       
        <input type="text" name="" id="" className="sel-inp" placeholder="Enter No.of Short" />
        <br />
       
        <input type="text" name="" id="" className="sel-inp" placeholder="Enter No.of Long" />
        <div className="btn-box">
          <button className="btn">Generate Exam</button>
        </div>
      </div>
    </>
  );
};
