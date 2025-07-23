import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="timesheet software Australia"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/time-traker-comprehensive.svg"
            effect="blur" 
            type="image/svg+xml"
            className="filter-pipelineimage"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Comprehensive</p>
        <p className="sales-heading-salesF">Contractors</p>
        <p className="sales-typeF">job scheduling</p>
        <p className="sales-description-salesF">
        Schedule jobs for contractors and view all<br/> assignments in a 
        single calendar. Track the time <br/>spent on each job, monitor job 
        statuses, and <br/>review notes for seamless contractor <br/>management.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
