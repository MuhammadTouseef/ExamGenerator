import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { Navitems } from "./Navitems";
export const Sidenav = () => {
  const [drawer, setdrawer] = useState("");
  const draweropner = () => {
    drawer === "" ? setdrawer("open") : setdrawer("");
  };

  return (
    <>
      <div className="mob-header">
        <h1>Exam Generator</h1>
        <BiMenuAltRight size="60px" onClick={draweropner} />
      </div>
      <div className={`sidebar ${drawer}`}>
        <h1 className="logo">Exam Generator</h1>
        <Navitems title="Home" link="/dashboard" />
        <Navitems title="Past Paper Analysis" link="/home" />
        <Navitems title="Exam Generator" link="/dashboard" />
        <Navitems title="Attempt Exam" link="/home" />
        <Navitems title="Profile" link="/home" />
      </div>
    </>
  );
};
