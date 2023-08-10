import React, { useState } from "react";
import "./login.scss";
import Header from "../header/header";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import { ReactComponent as FbLogo } from "../../icons/facebook-logo.svg";
import { ReactComponent as GreaterThanIcon } from "../../icons/greaterthan-icon.svg";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailButton, setEmailButton] = useState("");

  const onMobileNumberChange = (event) => {
    if (event.target.value.length <= 10) setMobileNumber(event.target.value);
  };
  const clearState = () => {
    setMobileNumber("");
    setEmailButton("");
  };

  const loginViaEmail = (event) => {
    setEmail(event.target.value);
  };
  const emailOrFBLogin = (event) => {
    setEmailButton(event.target);
  };

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="login-container">
          <div className="heading">
            <div>
              {mobileNumber || emailButton ? (
                <button className="clear-button" onClick={clearState}>
                  <LeftArrowIcon alt="left-arrow" />
                </button>
              ) : null}
            </div>
            <span className="heading-text">
              {mobileNumber || emailButton ? null : "Login to continue"}
              {mobileNumber ? "Continue using phone" : null}
              {emailButton ? "Have an Email or Facebook account?" : null}
            </span>
            {mobileNumber || emailButton ? null : (
              <button
                onClick={emailOrFBLogin}
                type="button"
                className="email-or-fb-signin"
              >
                Have a Facebook/Email account?
              </button>
            )}
            <div className="input-login-container">
              <div className="email-container">
                {emailButton ? (
                  <input
                    value={email}
                    type="text"
                    className="email-input"
                    placeholder="Enter your email"
                    onChange={loginViaEmail}
                  />
                ) : null}
              </div>
            </div>
          </div>
          {mobileNumber || emailButton ? (
            <button className="submit-button">
              CONTINUE
              <GreaterThanIcon alt="greaterthan-icon" />
            </button>
          ) : null}
          {mobileNumber ? null : <div className="or-div">OR</div>}

          {emailButton ? null : (
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
          )}

          {emailButton ? (
            <button className="login-with-fb">
              <FbLogo alt="fb-logo" /> LOGIN WITH FACEBOOK
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Login;
