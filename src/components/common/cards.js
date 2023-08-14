import React, { useState, useEffect } from "react";
import "./common.scss";
import cardsData from "./cards-data";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cardsData);
  }, []);

  return (
    <>
      {data ? (
        <div className="card-list">
          <div className="disney-original-header"> Dinsney+ Original</div>
          {data.map((value) => {
            return (
              <div key={value.id} className="card">
                <img src={value.imagepath} />
              </div>
            );
          })}
        </div>
      ) : null}

      {data ? (
        <div className="card-list">
          <div className="made-in-india-header"> Made In India</div>
          {data.map((value) => {
            return (
              <div key={value.id} className="card">
                <img src={value.imagepath} />
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};

export default Cards;
