import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Productive</p>
        <p className="sales-heading-salesF">Individual </p>
        <p className="sales-typeF">Project Calendar</p>
        <p className="sales-description-salesF">
        Each office gets its own project schedule while <br></br>still being part of the overall business structure.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="location-based job management"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/productive-image.png"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
