import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { handleValidate } from "../../helpers/validate";

export default function Register() {
  // eslint-disable-next-line no-unused-vars
  // ======================= State =======================
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    usernameError: "",
    emailError: "",
    PasswordError: "",
    confirmPasswordError: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [ConfirmPasswordVisible, setconfirmPasswordVisible] = useState(false);
  // ======================= other methods  =======================

  useEffect(() => {
    console.log("user from register ", user);
  }, [user]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setconfirmPasswordVisible(!ConfirmPasswordVisible);
  };

  const handleChange = (ele) => {
    if (ele.name === "email") {
      setUser({ ...user, email: ele.value });
    } else if (ele.name === "password") {
      setUser({ ...user, password: ele.value });
    } else if (ele.name === "userName") {
      setUser({ ...user, userName: ele.value });
    } else if (ele.name === "name") {
      setUser({ ...user, name: ele.value });
    } else if (ele.name === "confirmPassword") {
      setUser({ ...user, confirmPassword: ele.value });
    }
  };

  // ======================= template =======================

  return (
    <div>
      <form>
        <h2>
          {" "}
          If you have an accout please log in <Link to="/login">Login</Link>
        </h2>
        <div className="mb-3">
          Name :
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            onChange={(e) => handleChange(e.target)}
            onBlur={(e) => handleValidate(e.target, setErrors, errors, user)}
          />
        </div>
        <p className="text-danger">{errors.nameError}</p>

        {/* userName  */}
        <div className="mb-3">
          User name :
          <input
            required
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="username"
            onChange={(e) => handleChange(e.target)}
            onBlur={(e) => handleValidate(e.target, setErrors, errors, user)}
          />
        </div>
        <p className="text-danger">{errors.usernameError}</p>

        {/* email */}
        <div className="mb-3">
          Email address :
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

        {/* password */}
        <div className="mb-3">
          Password :
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

        {/* consfirm password  */}
        <div className="mb-3">
          confirm Password :
          <input
            type={ConfirmPasswordVisible ? "text" : "password"}
            className="form-control"
            id="exampleInputPassword1"
            name="cofirmPassword"
            onChange={(e) => handleChange(e.target)}
            onBlur={(e) => handleValidate(e.target, setErrors, errors, user)}
          />
          <button
            type="button"
            className="btn btn-link"
            onClick={toggleConfirmPasswordVisibility}
          >
            {ConfirmPasswordVisible ? "Hide" : "Show"} Password
          </button>
        </div>
        <p className="text-danger">{errors.confirmPasswordError}</p>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
