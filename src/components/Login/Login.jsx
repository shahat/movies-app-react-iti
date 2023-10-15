/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { handleValidate } from "../../helpers/validate";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const [errors, setErrors] = useState({
    emailError: "",
    PasswordError: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (ele) => {
    if (ele.name === "email") {
      setUser({ ...user, email: ele.value });
    } else if (ele.name === "password") {
      setUser({ ...user, password: ele.value });
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <form>
        <h2>
          If you Dont have an accout please log in{" "}
          <Link to="/register">Register</Link>
        </h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={(e) => handleChange(e.target)}
            onBlur={(e) => handleValidate(e.target, setErrors, errors, user)}
          />
        </div>
        <p className="text-danger">{errors.emailError}</p>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={(e) => handleChange(e.target)}
            onBlur={(e) => handleValidate(e.target, setErrors, errors, user)}
          />
          <button
            type="button"
            className="btn btn-link"
            onClick={togglePasswordVisibility}
          >
            {passwordVisible ? "Hide" : "Show"} Password
          </button>
        </div>
        <p className="text-danger">{errors.PasswordError}</p>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}
