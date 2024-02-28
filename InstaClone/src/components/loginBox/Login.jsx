import "./Login.css";
import { useState } from "react";
// import { login } from "../../utils/fetch";
// onSubmit={handleSubmit}
const Login = () => {
  return (
    <div className="wrapperLogin">
      <div className="loginBox">
        <h2 className="loginTitle">Clonestagram</h2>
        <form className="loginForm">
          <input
            className="loginInput"
            placeholder="Username"
            // value={username}
            // onChange={(e) => changeHandler(e, setUsername)}
          />
          <input
            className="loginInput"
            placeholder="Password"
            type="password"
            // value={password}
            // onChange={(e) => changeHandler(e, setPassword)}
          />
          <button className="sub-but" type="submit">
            Login
          </button>
          <p>------- Or -------</p>
          <p>Log in with Facebook</p>
        </form>
        <div className="signupPrompt">
          <p>
            Don't have an account?<button>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
