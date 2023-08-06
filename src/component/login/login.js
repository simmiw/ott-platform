import React, { useState } from "react";
import "./login.scss";
import Header from "../header/header";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const[emailButton, setEmailButton]= useState("")

  const onMobileNumberChange = (event) => {
    if (event.target.value.length <= 10) setMobileNumber(event.target.value);
  };
  const clearState = () => {
    setMobileNumber("");
    setEmail("");
  };

  const loginViaEmail = (event) => {
    setEmail(event.target.value);
  };
  const emailOrFBLogin =(event)=>{
    setEmailButton(event.target)

  }

  return (
    <>
      <Header />
      <div className="main-container">
        <div className="login-container">
          <div className="heading">
            <div>
              {mobileNumber ||emailButton ? (
                <button className="clear-button" onClick={clearState}>
                  <LeftArrowIcon alt="left-arrow" />
                </button>
              ) : null}

            </div>
            <span className="heading-text">
              {mobileNumber ? "Continue using phone" : "Login to continue"}
              {emailButton
                ? "Have an Email or Facebook account?"
                : null}
            </span>
            {mobileNumber || emailButton ? null : (
              <button
                onClick={emailOrFBLogin }
                type="button"
                className="email-or-fb-signin">
                Have a Facebook/Email account?
              </button>
            )}
            <div className="input-login-container">
              <span className="input-login-text ">
                Have an Email or Facebook account?
              </span>
              <div className="email-container">
              {emailButton? (
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
          {mobileNumber && emailButton ? (
            <button className="submit-button">CONTINUE</button>
          ) : null}
        </div>
      </div>
    </>
  );
};
export default Login;
