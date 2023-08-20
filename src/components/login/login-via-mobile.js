import React, { useState } from "react";
import "./login.scss";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";

const isValidMobile = (value) => {
  return /^\d+$/.test(value) && value.length === 10;
};

const LoginViaMobile = ({ toggleLoginType }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const onMobileNumberChange = (event) => {
    if (event.target.value.length <= 10) setMobileNumber(event.target.value);
  };

  const validateMobile = () => {
    if (mobileNumber === "") {
      setErrorMessage(null);
    } else {
      setErrorMessage(!isValidMobile(mobileNumber));
    }
  };
  
  const clearState = () => {
    setMobileNumber("");
  };

  return (
    <>
      <div className="main-login-container">
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
              {mobileNumber ? null : "Login to continue"}
              {mobileNumber ? "Continue using Phone" : null}
            </span>

            {mobileNumber ? null : (
              <button
                type="button"
                className="email-or-fb-signin"
                onClick={toggleLoginType}>
                Have a Facebook/Email account?
              </button>
            )}

            {mobileNumber ? null : <div className="or-div">OR</div>}

            <div className="phone-input-container">
              <span className="country-code">+91</span>
              <input
                value={mobileNumber}
                className="login-input"
                type="text"
                inputMode="numeric"
                placeholder="Enter your mobile number"
                onChange={onMobileNumberChange}
                onBlur={validateMobile}
              />
            </div>
            <div className="error-message">
              {errorMessage ? "Please enter valid mobile number" : null}
            </div>

            {mobileNumber ? (
              <button className="continue-button">CONTINUE</button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginViaMobile;
