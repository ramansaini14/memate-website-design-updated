import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobilep" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
            alt="digital job approvals"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-comprehensive-img.svg"
            effect="blur" 
            type="image/svg+xml"
            className="filter-pipelineimage"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Collaborative</p>
        <p className="sales-heading-salesF">Comprehensive </p>
        <p className="sales-typeF">Job Details</p>
        <p className="sales-description-salesF">
        Every submitted job in meMate includes all<br/> necessary information, such as the initial 
        planned <br/>budget, planned time, actual cost, and actual time<br/> spent. This ensures managers have 
        complete and <br/>clear data for informed decision-making during<br/> the approval process.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
