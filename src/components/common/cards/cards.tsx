import React, { useState, useEffect } from "react";
import "./cards.scss";
import cardsData from "../../../mocks/cards-data";

interface CardsData {
  title: string;
  imagepath: string;
  id: number;
  description: string;
}

const Cards = () => {
  const [data, setData] = useState<CardsData[]>([]);

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
