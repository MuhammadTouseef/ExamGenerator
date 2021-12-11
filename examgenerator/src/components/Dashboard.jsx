import React from "react";
import { MobHeader } from "./Navigation/MobHeader";
import { Sidenav } from "./Navigation/Sidenav";
import { Topbar } from "./Navigation/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExamHome } from "./Pages/ExamHome";
import { CustomExam } from "./Pages/CustomExam";
import { Educationlevel } from "./Pages/Educationlevel";
import { Educationboard } from "./Pages/Educationboard";
import { Standardexam } from "./Pages/Standardexam";
import { Chapterwise } from "./Pages/Chapterwise";
import { Difficultybased } from "./Pages/Difficultybased";
export const Dashboard = () => {
  return (
    <div>
      <Sidenav />
      <div className="content">
        <Topbar />
        <div className="cont-sec">
          <Routes>
            <Route path="/" element={<ExamHome />} />
            <Route path="custom-exam" element={<CustomExam />} />
            <Route path="educationlevel" element={<Educationlevel/>} />
            <Route path="education-board" element={<Educationboard/>} />
            <Route path="standard-exam" element={<Standardexam/>} />
            <Route path="chapter-exam" element={<Chapterwise/>} />
            <Route path="difficulty-exam" element={<Difficultybased/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
