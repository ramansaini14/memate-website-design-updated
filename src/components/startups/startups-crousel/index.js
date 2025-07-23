import React, { useState, useEffect } from "react";
import "./style.css";
import IndustryImages from "../../../assests/industry-images";

const carouselData = [
  {
    heading: "MeMate has been a game-changer for our private membership club.",
    logoText: "EL",
    title: "Elite Life",
    subtitle: "Head of Design, Layers",
    rating: 5
  },
  {
    heading: "This app has revolutionized our workflow and productivity.",
    logoText: "SP",
    title: "Super Productivity",
    subtitle: "CEO, Productivity Hub",
    rating: 4
  },
  {
    heading: "An invaluable tool for modern business needs.",
    logoText: "MM",
    title: "Modern Minds",
    subtitle: "Manager, Innovation Hub",
    rating: 5
  }
];

const StartupsCrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const currentSlide = carouselData[currentIndex];

  return (
    <div
      className="industry-crousel-wrapper"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="2000"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="industry-crousel-content">
        <span className="industry-crousel-heading">
          {currentSlide.heading}
        </span>
        <div className="industry-crousel-body-content">
          <div className="industry-circle-logo">
            <span>{currentSlide.logoText}</span>
          </div>

          <p className="industry-crousel-1-heading">{currentSlide.title}</p>
          <p className="industry-crousel-1-sub-heading">{currentSlide.subtitle}</p>
          <div className="industry-crousel-star-rating">
            {[...Array(currentSlide.rating)].map((_, i) => (
              <img
                key={i}
                src={IndustryImages.starIcon}
                style={{ height: "20px", width: "20px" }}
                alt="star"
              />
            ))}
          </div>
          <div className="crousel-indication">
            {carouselData.map((_, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? "crousel-selected-page"
                    : "crousel-non-selected-page"
                }
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupsCrousel;
