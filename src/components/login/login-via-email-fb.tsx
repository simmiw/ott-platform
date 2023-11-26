import React, { useState } from "react";
import "./login.scss";
import LeftArrowIcon from "../../icons/leftArrow";
import FbLogo from "../../icons/fbLogo";

interface ChildComponentProps {
  toggleLoginType: () => void;
}

const LoginViaEmail:React.FC<ChildComponentProps> = ({ toggleLoginType}) => {
  const [email, setEmail] = useState<string>("");

  const loginViaEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  return (
    <>
      <div className="main-login-container">
        <div className="login-container">
          <div className="heading">
            <div>
              <button className="clear-button" onClick={toggleLoginType}>
                <LeftArrowIcon />
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
              <FbLogo /> <span>LOGIN WITH FACEBOOK</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginViaEmail;
