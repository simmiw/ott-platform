import React, { useState } from "react";
import "./login.scss";
import { ReactComponent as LeftArrowIcon } from "../../icons/left-arrow.svg";
import { ReactComponent as FbLogo } from "../../icons/facebook-logo.svg";

const LoginViaEmail = ({ toggleLoginType }) => {
  const [email, setEmail] = useState("");

  const loginViaEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <div className="main-login-container">
        <div className="login-container">
          <div className="heading">
            <div>
              <button className="clear-button" onClick={toggleLoginType}>
                <LeftArrowIcon alt="left-arrow" />
              </button>
            </div>

            <span className="heading-text">
              Have an Email or Facebook account?
            </span>

            <div className="input-login-container">
              <div className="email-container">
                <input
                  value={email}
                  type="text"
                  className="email-input"
                  placeholder="Enter your email"
                  onChange={loginViaEmail}
                />
              </div>
            </div>
            <button className="continue-button">CONTINUE</button>
            <div className="or-div">OR</div>
            <button className="login-with-fb">
              <FbLogo alt="fb-logo" /> <span>LOGIN WITH FACEBOOK</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginViaEmail;
