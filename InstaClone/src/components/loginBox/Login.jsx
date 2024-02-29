import React, { useState } from "react";
import { login } from "../../utils/fetch";
import PicPage from "../picPage/PicPage.jsx";
import "./Login.css";

const Login = ({ onToggle }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const changeHandler = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Hello from login handlesubmit");
    try {
      const userData = await login(username, password);
      console.log(userData);
      setLoginStatus("success");
      setShowLoginForm(false); // Hide the login form after successful login
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("error");
    }
  };

  return (
    <div className="selector">
      {showLoginForm ? (
        <div className="wrapperLogin">
          <img src=".\src\assets\home-phones.png" alt="" srcset="" />
          <div className="loginBox">
            <h2 className="loginTitle">Clonestagram</h2>
            <form className="loginForm" onSubmit={handleSubmit}>
              <input
                className="loginInput"
                placeholder="Username"
                value={username}
                onChange={(e) => changeHandler(e, setUsername)}
              />
              <input
                className="loginInput"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => changeHandler(e, setPassword)}
              />
              <button className="sub-but" type="submit">
                Login
              </button>
              {loginStatus === "success" && (
                <p className="login-success-message">Login successful.</p>
              )}
              {loginStatus === "error" && (
                <p className="login-error-message">
                  Login failed. Please try again.
                </p>
              )}
            </form>
            <p>------- Or -------</p>
            <p>
              Log in with <button>Clonebook</button>
            </p>
            <div className="signupPrompt">
              <p>
                Don't have an account?{" "}
                <button onClick={onToggle}>Sign up</button>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <PicPage />
      )}
    </div>
  );
};

export default Login;
