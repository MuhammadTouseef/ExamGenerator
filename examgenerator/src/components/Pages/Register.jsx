import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [role, setrole] = useState("");
  const subfr = async () => {
    let data = {
      name: name,
      email: email,
      password: password,
      role: role,
    };

    try {
      var res = await axios.post("/api/v1/auth/register", data);
      if (res.data["success"] === true) {
        alert("Successfully Registered");
      } else {
        alert(`Failed To Register \n ${res["error"]}`);
      }
    } catch (error) {
      alert("Failed To Register");
    }
  };
  const regis = () => {
    if (name === "" || email === "" || password === "" || role === "") {
      alert("Please Fill All Fields to proceed");
    } else {
      subfr();
    }
  };

  return (
    <div className="loginpage f-center">
      <div className="loginform">
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Name"
          className="fofe"
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          className="fofe"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="fofe"
          onChange={(e) => setpassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Re type Password"
          className="fofe"
        />
        <select
          name="role"
          className="fofe"
          onChange={(e) => setrole(e.target.value)}
        >
          <option value="" disabled selected name="role">
            Select Role
          </option>
          <option value="Student">Student</option>
          <option value="Teacher">Teacher</option>
        </select>

        <button className="logbtn" onClick={regis}>
          Register
        </button>
        <Link to="/">Already have a Account? </Link>
        <hr />
      </div>
    </div>
  );
};
