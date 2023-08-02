import React from "react";
import "./header.scss";
import image from "../../images/app-logo.svg";

const Header = () => {
  return (
    <>
      <img className="logo" src={image} alt="app-logo" />
    </>
  );
};

export default Header;
