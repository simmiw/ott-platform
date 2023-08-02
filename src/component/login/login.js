import React from "react";
import "./login.scss";
import Header from "../header/header";
const Login = () => {
  return (
    <>
      <Header />
      <div class="main-container">
        <div clasName="login-container">
          <span className="heading-text">Login to countiune</span>
          <button type="button" className="email-or-fb-signin">
            Have a Facebook/Email account?
          </button>
          <div className="or-div">or</div>
          <div className="phone-number-container">
            <div>
              <span className="country-code">+ 91</span>
              <input
                type="text"
                tabIndex
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Enter your mobile number"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
