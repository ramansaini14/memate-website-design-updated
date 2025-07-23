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
                alt="sales pipeline software"
                src={Images.filterPipeline}
                effect="blur" 
                type="image/svg+xml"
                className="filter-pipelineimage"
                />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Salesforce for small business</p>
        <p className="sales-heading-salesF">Sales</p>
        <p className="sales-typeF">pipeline</p>
        <p className="sales-description-salesF">
        Designed with small businesses in mind, this <br/>software provides all possible scenarios for your<br/> ongoing sales activities and helps you navigate <br/>them with ease.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
