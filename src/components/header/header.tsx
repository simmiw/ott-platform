import React, { useState } from "react";
import "./header.scss";
import SearchIcon from "../../icons/searchIcon";
import { Link } from "react-router-dom";
import debounce from "../../utils/debounce";
import appLogo from "../../images/appLogo.svg";

const Header = () => {
  const [serachValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debounce(setSearchValue(e.target.value), 200);
  };

  return (
    <>
      <div className="header">
        <img src={appLogo} />
        <div className="search-and-login">
          <div className="search-container">
            <input
              className="input-search"
              value={serachValue}
              placeholder="Search"
              onChange={handleChange}
            />
            <SearchIcon />
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
