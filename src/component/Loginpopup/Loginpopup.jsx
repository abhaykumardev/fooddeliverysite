import React, { useState } from "react";
import "./login.css";

const Loginpopup = ({ setShowLogin }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
   <div className="login-popup-overlay">
  <div className={`login-popup ${isSignup ? "slide-signup" : "slide-login"}`}>

    {/* Close Button */}
    <button className="close-btn" onClick={() => setShowLogin(false)}>✕</button>

    {/* Tab Switch */}
    <div className="tab-switch">
      <button 
        className={!isSignup ? "active" : ""}
        onClick={() => setIsSignup(false)}
      >
        Login
      </button>

      <button 
        className={isSignup ? "active" : ""}
        onClick={() => setIsSignup(true)}
      >
        Sign Up
      </button>
    </div>

    {/* NEW WRAPPER — THIS FIXES THE LAYOUT */}
    <div className="form-slider-container">
      <div className="form-slider">

        {/* LOGIN FORM */}
        <form className="form login-form">
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Log in to continue your food journey.</p>

          <div className="input-group">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <button className="login-btn">Login</button>
        </form>

        {/* SIGNUP FORM */}
        <form className="form signup-form">
          <h2 className="title">Create Account</h2>
          <p className="subtitle">Join us and order your favorites.</p>

          <div className="input-group">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <input type="tel" placeholder="Phone Number" />
            
          </div>

          <div className="terms">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to the Terms & Conditions</label>
          </div>

          <button className="login-btn">Sign Up</button>
        </form>

      </div>
    </div>
    {/* END WRAPPER */}

  </div>
</div>

  );
};

export default Loginpopup;
