import React, { useState, useEffect } from "react";
import "./common.scss";
import cardsData from "./cardsData";

const Cards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(cardsData);
  }, []);

  return (
    <>
      {data ? (
        <div className="card-list">
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
