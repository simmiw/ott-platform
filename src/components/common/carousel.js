import React, { useEffect, useState } from "react";
import bannerData from "../../mocks/banner-data";
import "./carousel.scss";
import { ReactComponent as PreviousIcon } from "../../icons/previous-icon.svg";

const Carousel = () => {
  const [carouselBanner, setCarouselBanner] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    setCarouselBanner(bannerData);
  }, []);

  const handleClick = () => {
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const previousBanner = () => {
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  return (
    <>
      {carouselBanner ? (
        <div className="carousel-container">
          <button
            className="previous-button"
            disabled={selectedImageIndex <= carouselBanner.length - 3}
            onClick={previousBanner}>
            <PreviousIcon />
          </button>
          <div
            className="carousel"
            style={{ left: `${selectedImageIndex * -100}%` }}>
            {carouselBanner.map((banner) => {
              return (
                <div key={banner.id} className="carousel-banner">
                  <img src={banner.imagepath} alt="carousel-banner" />
                </div>
              );
            })}
          </div>
          <button
            className="forward-button"
            disabled={selectedImageIndex >= carouselBanner.length - 1}
            onClick={handleClick}>
            <PreviousIcon />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
