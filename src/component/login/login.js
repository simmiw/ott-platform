import React from "react";
import "./login.scss";
import image from "../../images/app-logo.svg";

function Login() {
  return (
    <>
      <img className="logo" src={image} alt="app-logo" />
      <span className="login-text">Login to countiune</span>
    </>
  );
}
export default Login;
