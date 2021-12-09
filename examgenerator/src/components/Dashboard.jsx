import React from "react";
import { MobHeader } from "./Navigation/MobHeader";
import { Sidenav } from "./Navigation/Sidenav";
import { Topbar } from "./Navigation/Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ExamHome } from "./Pages/ExamHome";
import { CustomExam } from "./Pages/CustomExam";
export const Dashboard = () => {
  return (
    <div>
      <Sidenav />
      <div className="content">
        <Topbar />
        <div className="cont-sec">
          <Routes>
            <Route path="/" element={<ExamHome />} />
            <Route path="custom" element={<CustomExam />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
