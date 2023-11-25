import React, { useState } from "react";
import "./login.scss";
import LeftArrowIcon from "../../icons/leftArrow";

interface ChildComponentProps {
  toggleLoginType: () => void;
}

const isValidMobile = (value: string) => {
  return /^\d+$/.test(value) && value.length === 10;
};

const LoginViaMobile: React.FC<ChildComponentProps> = ({ toggleLoginType }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onMobileNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length <= 10) setMobileNumber(event.target.value);
  };

  const validateMobile = () => {
    if (mobileNumber === "") {
      setErrorMessage(null);
    } else {
      setErrorMessage(
        isValidMobile(mobileNumber) ? "Please enter valid mobile number" : null
      );
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
                  <LeftArrowIcon />
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
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
                placeholder="Enter your mobile number"
                onChange={onMobileNumberChange}
                onBlur={validateMobile}
              />
            </div>
            <div className="error-message">{errorMessage}</div>

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
