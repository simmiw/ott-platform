import React from "react";
import "./login.scss";
import Header from "../header/header";
const Login = () => {
  return (
    <>
      <Header />
      <div class="main-container">
        <div clasName="login-container">
          <div className="heading">
          <span className="heading-text">Login to continue</span>
          <button type="button" className="email-or-fb-signin">
            Have a Facebook/Email account?
          </button>
          </div>
          <div className="or-div">or</div>
          <div className="phone-input-container">
            <span className="country-code">+91</span>
            <input
              className="login-input"
              type="text"
              inputMode="numeric"
              placeholder="Enter your mobile number"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
