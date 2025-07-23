import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
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
            alt="KPI dashboard software"
            src={Images.reportAdvanced}
            effect="blur" 
            type="image/svg+xml"
            className="filter-pipelineimage"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Advanced</p>
        <p className="sales-heading-salesF">business </p>
        <p className="sales-typeF">overview    </p>
        <p className="sales-description-salesF">
        Get a real-time view of key business metrics,<br></br> including quote volumes, 
        payments, receivables,<br></br> invoices, and unpaid amounts. Easily compare<br></br> these 
        figures with last month’s performance to<br></br> track progress and trends.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
