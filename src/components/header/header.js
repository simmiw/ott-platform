import React, { useState } from "react";
import "./header.scss";
import image from "../../images/app-logo.svg";
import { ReactComponent as SearchIcon } from "../../icons/search-icon.svg";
import { Link } from "react-router-dom";

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

const Header = () => {
  const [serachValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    debounce(setSearchValue(e.target.value), 200);
  };

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
            <SearchIcon alt="Search" />
          </div>
          <button className="subscribe-button">SUBSCRIBE</button>
          <select className="language-selection">
            <option>English</option>
            <option>Hindi</option>
          </select>
          <Link to="/login">
            <button className="login-button">LOGIN</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
