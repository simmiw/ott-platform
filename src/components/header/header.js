import React, { useState } from "react";
import "./header.scss";
import image from "../../images/app-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [serachValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounce(setSearchValue(e.target.value), 200);
  };

  function debounce(fn, time) {
    let timer;
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn(...args);
      }, time);
    };
  }

  return (
    <>
      <div className="header">
        <img className="logo" src={image} alt="app-logo" />
        <div className="search-and-login">
          <div className="search-container">
            <input
              className="input-search"
              value={serachValue}
              placeholder="Search"
              onChange={handleChange}
            />
          </div>
          <Link to="/login">
            <button className="login-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
