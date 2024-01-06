import React, { useState } from "react";
import "./Topbar.css";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const Topbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSigUpClick = () => {
    setIsSignUpOpen(true);
  }

  return (
    <div className={`topbarwithoutcart ${isLoginOpen || isSignUpOpen ? 'overlay' : ''}`}>
      <h1 className="topbarwithoutcart_heading">Welcome To Rurazz</h1>
      <div className="buttonswithoutcar">
        <button className="login_button" onClick={handleLoginClick}>
          Login
        </button>
        <button className="signup_button" onClick={handleSigUpClick}>Sign Up</button>
      </div>
      {isLoginOpen && <Login setIsLoginOpen={setIsLoginOpen} />}
      {isSignUpOpen && <SignUp setIsSignUpOpen={setIsSignUpOpen} />}
    </div>
  );
};

export default Topbar;
