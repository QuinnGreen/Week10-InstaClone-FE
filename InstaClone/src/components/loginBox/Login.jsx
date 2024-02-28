import "./Login.css";
import { useState } from "react";
import { login } from "../../utils/fetch";
//
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

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
    } catch (error) {
      console.error("Login failed:", error);
      setLoginStatus("error");
    }
  };

  return (
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
          <p>------- Or -------</p>
          <p>
            Log in with <button>Clonebook</button>
          </p>
        </form>
        <div className="signupPrompt">
          <p>
            Don't have an account? <button>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
