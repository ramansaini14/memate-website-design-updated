import React from "react";
// import Images from "../../assests/images";
import "./style.css";
import SkyNews from "../../svg/SkyNews";
import TheAustralian from "../../svg/TheAustralian";
import AbcDotCom from "../../svg/AbcDotCom";
import TheGardian from "../../svg/TheGardian";
const FeaturedOn = () => {
  return (
    <div className="featured-section" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="featured-text">
        <p>Featured on:</p>
        <div className="brand-names">
          {/* <img src={Images.skyNews} /> */}
          <SkyNews type="image/svg+xml"/>
          {/* <img src={Images.theAustralian} type="image/svg+xml" /> */}
          <TheAustralian type="image/svg+xml"/>
          {/* <img src={Images.abc} type="image/svg+xml" /> */}
          <AbcDotCom type="image/svg+xml"/>
          {/* <img src={Images.theGuardian} type="image/svg+xml" /> */}
          <TheGardian type="image/svg+xml"/>
        </div>
      </div>
    </div>
  );
};

export default FeaturedOn;
