import React from "react";
import { Card } from "../Card";
import { Pagetitle } from "../Pagetitle";

export const ExamHome = () => {
  return (
    <>
      <Pagetitle title="Exam Generator" />
      <div className="container fl-row hero-row">
        <Card title="Education Level" link="educationlevel" />
        <Card title="Education Board" link="education-board" />
      </div>

      <div className="container fl-row hero-row">
        <Card title="Standard Exam" link="standard-exam" />
        <Card title="Chapter Wise" link="chapter-exam" />
      </div>

      <div className="container fl-row hero-row">
        <Card title="Custom Exan" link="custom-exam" />
        <Card title="Difficulty Based" link="difficulty-exam" />
      </div>
    </>
  );
};
