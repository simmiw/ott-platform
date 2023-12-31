import React, { useState, useEffect } from "react";
import "./cards.scss";
import cardsData from "../../../mocks/cards-data";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cardsData);
  }, []);

  return (
    <>
      {data ? (
        <>
          <div className="disney-original-header"> Disney+ Original</div>
          <div className="card-list">
            {data.map((value) => {
              return (
                <div key={value.id} className="card">
                  <img src={value.imagepath} />
                </div>
              );
            })}
          </div>
        </>
      ) : null}

      {data ? (
        <>
          <div className="made-in-india-header"> Made In India</div>
          <div className="card-list">
            {data.map((value) => {
              return (
                <div key={value.id} className="card">
                  <img src={value.imagepath} />
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Cards;
