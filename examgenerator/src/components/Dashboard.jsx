import React from "react";
import { MobHeader } from "./Navigation/MobHeader";
import { Sidenav } from "./Navigation/Sidenav";
import { Topbar } from "./Navigation/Topbar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ExamHome } from "./Pages/ExamHome";
import { CustomExam } from "./Pages/CustomExam";
import { Educationlevel } from "./Pages/Educationlevel";
import { Educationboard } from "./Pages/Educationboard";
import { Standardexam } from "./Pages/Standardexam";
import { Chapterwise } from "./Pages/Chapterwise";
import { Difficultybased } from "./Pages/Difficultybased";
export const Dashboard = () => {
  function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = localStorage.getItem("x-auth-token");
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }
  return (
    <div>
      <Sidenav />
      <div className="content">
        <Topbar />
        <div className="cont-sec">
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth redirectTo="/">
                  <ExamHome />
                </RequireAuth>
              }
            />
            <Route
              path="custom-exam"
              element={
                <RequireAuth redirectTo="/">
                  <CustomExam />
                </RequireAuth>
              }
            />
            <Route
              path="educationlevel"
              element={
                <RequireAuth redirectTo="/">
                  <Educationlevel />
                </RequireAuth>
              }
            />
            <Route
              path="education-board"
              element={
                <RequireAuth redirectTo="/">
                  <Educationboard />
                </RequireAuth>
              }
            />
            <Route
              path="standard-exam"
              element={
                <RequireAuth redirectTo="/">
                  <Standardexam />
                </RequireAuth>
              }
            />
            <Route
              path="chapter-exam"
              element={
                <RequireAuth redirectTo="/">
                  <Chapterwise />
                </RequireAuth>
              }
            />
            <Route
              path="difficulty-exam"
              element={
                <RequireAuth redirectTo="/">
                  <Difficultybased />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
