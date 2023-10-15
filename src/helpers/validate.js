/* these functions for input validation  */

/* 
 -validate name 
 -validate username
 -validate email 
 -validate password
 -validate confirmPassword 

*/

export const handleValidate = (ele, setError, errorState, userState) => {
  var regex = /^[a-zA-Z]{2,5}(@)(gmail|yahoo)(.com)$/;
  // ====================== email ======================
  if (ele.name === "email") {
    setError({
      ...errorState,
      emailError:
        ele.value.length === 0
          ? "Email is Required"
          : regex.test(ele.value)
          ? ""
          : "Invalid Email",
    });
  }

  // ====================== Password ======================
  else if (ele.name === "password") {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;

    setError({
      ...errorState,
      PasswordError:
        ele.value.length === 0
          ? "Password is Required"
          : !passwordRegex.test(ele.value)
          ? " password should contain one Lowercase , one uppercase , one digit , one spechial Character and More than 8   "
          : "",
    });
  }

  // ====================== cofirmPassword ======================
  else if (ele.name === "cofirmPassword") {
    console.log("print the current user pass ", userState.password);
    setError({
      ...errorState,
      confirmPasswordError:
        ele.value.length === 0
          ? "cofirmPassword is Required"
          : ele.value != userState.password
          ? "cofirmPassword should match the password "
          : "",
    });
  }
  // ====================== validate name ======================
  else if (ele.name === "name") {
    setError({
      ...errorState,
      nameError:
        ele.value.length === 0
          ? "name is  Required "
          : ele.value.length < 4
          ? " Your name should be more than 4"
          : "",
    });
  }
  // ====================== validate username ======================
  else if (ele.name === "username") {
    setError({
      ...errorState,
      usernameError:
        ele.value.length === 0
          ? "username is  Required "
          : /\s/.test(ele.value)
          ? "User name should not contain spacea"
          : ele.value.length < 4
          ? " your user name  should be more than 4"
          : "",
    });
  }
};
