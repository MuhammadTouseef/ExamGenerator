import React from "react";
import { Card } from "../Card";
import { Pagetitle } from "../Pagetitle";

export const ExamHome = () => {
  return (
    <>
      <Pagetitle title="Exam Generator" />
      <div className="container fl-row hero-row">
        <Card title="Education Level" link="#" />
        <Card title="Education Board" link="#" />
      </div>

      <div className="container fl-row hero-row">
        <Card title="Standard Exam" link="#" />
        <Card title="Chapter Wise" link="#" />
      </div>

      <div className="container fl-row hero-row">
        <Card title="Custom Exan" link="#" />
        <Card title="Difficulty Based" link="#" />
      </div>
    </>
  );
};
