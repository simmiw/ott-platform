import React, { useEffect, useState } from "react";
import "./trailer.scss";
import trailersData from "../../../mocks/trailers-data";

const TrailerList = () => {
  const [trailers, setTrailers] = useState(null);

  useEffect(() => {
    setTrailers(trailersData);
  }, []);

  return (
    <>
      {trailers ? (
        <>
          <div className="coming-soon-header">Coming Soon</div>
          <div className="trailer-list">
            {trailers.map((value) => {
              return (
                <div key={value.id} className="trailer">
                  <img src={value.imagepath} />
                  <span title={value.title} className="content-title">
                    {value.title}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </>
  );
};

export default TrailerList;
