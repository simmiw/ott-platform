import { useEffect, useState } from "react";
import "./carousel.scss";

import PreviousIcon from "../../../icons/previousIcon";

interface BannerData {
  id: number;
  title: string;
  imagepath: string;
  contentType: string;
  genere: string;
  description: string;
}

const Carousel = () => {
  const [carouselBanner, setCarouselBanner] = useState<BannerData[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const bannerData: BannerData[] = [
    {
      id: 1,
      imagepath:
        "https://e1.pxfuel.com/desktop-wallpaper/389/621/desktop-wallpaper-watch-criminal-justice-season-1-full-hotstar-criminal-justice-web-series.jpg",
      title: "Hostel",
      contentType: "Movie",
      genere: "Drama",
      description:
        "A hostel is a student second home, but what happens when this safe place turns into a torture house? A gripping thriller, depicting the effects of ragging.",
    },
    {
      id: 2,
      imagepath:
        "https://e1.pxfuel.com/desktop-wallpaper/639/516/desktop-wallpaper-disney-plus-disney-hotstar.jpg",
      title: "Run Baby Run",
      contentType: "Movie",
      genere: "Acion",
      description:
        "Venu, works for Reuters as a cameraman. While on an assignment, he meets Renuka, his ex-lover and together, they have to investigate a murder mystery.",
    },
    {
      id: 3,
      imagepath:
        "https://e0.pxfuel.com/wallpapers/532/63/desktop-wallpaper-dil-bechara-release-today.jpg",
      title: "Sanju",
      contentType: "Movie",
      genere: "Biopic",
      description:
        "A heartwarming, real-life story of actor Sanjay Dutt throwing light on his complicated relationships, his addictions and his endearing approach towards living life the ‘Dutt’ size.",
    },
  ];

  useEffect(() => setCarouselBanner(bannerData), []);

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
            disabled={selectedImageIndex === 0}
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
            disabled={selectedImageIndex === carouselBanner.length - 1}
            onClick={handleClick}>
            <PreviousIcon />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Carousel;
