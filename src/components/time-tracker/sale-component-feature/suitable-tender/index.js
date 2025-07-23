import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Reliable</p>
        <p className="sales-heading-salesF">Time Tracking</p>
        <p className="sales-typeF">and Reporting</p>
        <p className="sales-description-salesF">
        Track time for each shift and contractor in real<br/> time, with automated weekly reporting. 
        meMate <br/>provides tools for complete business automation, <br/>ensuring accurate time
         management and<br/> streamlined reporting processes.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="Aussie time clock solution"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-report.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
