import { useState } from "react";
import Login from "./components/loginBox/Login";
import SignUp from "./components/signUpBox/SignUp";
import "./App.css";
import Navbar from "./components/navbar/navbar";

function App() {
  const [loginSubmitToggle, setloginSubmitToggle] = useState(true);

  const toggleComponent = () => {
    setloginSubmitToggle(!loginSubmitToggle);
  };

  return (
    <>
      {loginSubmitToggle ? (
        <Login onToggle={toggleComponent} />
      ) : (
        <SignUp onToggle={toggleComponent} />
      )}
    </>
  );
}

export default App;
