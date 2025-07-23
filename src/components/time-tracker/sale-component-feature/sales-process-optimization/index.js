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
        <p className="sales-heading-salesF">Project</p>
        <p className="sales-typeF">Time Tracking</p>
        <p className="sales-description-salesF">
        Connect your business projects with the time<br/> spent by your team. 
        meMate allows you to monitor <br/>and control the hours dedicated to each project,<br/> ensuring 
        better time management and resource<br/> allocation.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="time tracking for contractors"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-Productive.svg"
            effect="blur" 
            type="image/svg+xml"
            className="sales-process-optimization-image"
            />
    </div>
    </div>
  );
};

export default SalesProcessOptimiation;
