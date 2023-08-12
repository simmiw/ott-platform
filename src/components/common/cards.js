import React, { useState,useEffect } from "react";
import "./common.css";
import cardsData from "./cardsData";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cardsData);
  }, []);

  return (
    <>
      {data.map((value) => {
        return (
          <div className="card-list">
            <div className="card">
              <img className="card" src={value.imagepath} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
