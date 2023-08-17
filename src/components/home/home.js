import React from "react";
import Header from "../header/header";
import Cards from "../common/cards";
import TrailerList from "../common/trailer-list";
import Carousel from "../common/carousel";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main-container">
        <Carousel />
        <TrailerList />
        <Cards />
      </div>
    </>
  );
};

export default Home;
