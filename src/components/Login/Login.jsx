/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { handleValidate } from "../../helpers/validate";
import { Link, useNavigate, Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../store/slice/isLogged";
export default function LogIn() {
  // ======================================= setstate =======================================
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // ======================================= useEffect =======================================
  const isLogged = useSelector((state) => state.isLogged.isLogged);
  const [errors, setErrors] = useState({
    emailError: "",
    PasswordError: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // ======================================= useEffect =======================================
  const handleLogin = (value) => {
    event.preventDefault();
    dispatch(logIn(value));
    console.log("from log in ", isLogged);
    if (value) {
      console.log("ay hamada");
      navigate("/");
    }
  };
  // ======================================= useEffect =======================================
  useEffect(() => {
    console.log(user);
    console.log("this is the islogged", isLogged);
  }, [user]);

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
      <div className="container">
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

          <button className="btn btn-primary" onClick={() => handleLogin(true)}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
