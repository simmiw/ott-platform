import React, { useState } from "react";
import "./login.scss";
import Header from "../header/header";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const onMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };
  const clearState = () => {
    setMobileNumber("");
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="login-container">
          <div className="heading">
            <div>
              {mobileNumber ? (
                <button className="clear-button" onClick={clearState}>
                  <LeftArrowIcon alt="left-arrow" />
                </button>
              ) : null}
            </div>
            <span className="heading-text">
              {mobileNumber ? "Continue using phone" : "Login to continue"}
            </span>
            {mobileNumber ? null : (
              <button type="button" className="email-or-fb-signin">
                Have a Facebook/Email account?
              </button>
            )}
          </div>
          {mobileNumber ? null : <div className="or-div">or</div>}
          <div className="phone-input-container">
            <span className="country-code">+91</span>
            <input
              value={mobileNumber}
              className="login-input"
              type="text"
              inputMode="numeric"
              placeholder="Enter your mobile number"
              onChange={onMobileNumberChange}
            />
          </div>
          {mobileNumber ? (
            <button className="submit-button">CONTINUE</button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Login;
