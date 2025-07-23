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
          alt="contractor scheduling software"
          src={Images.ContractorTeam}
          effect="blur" 
          type="image/svg+xml"
          className="filter-pipelineimage"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Collaborative</p>
        <p className="sales-heading-salesF">System</p>
        <p className="sales-typeF">for your team </p>
        <p className="sales-description-salesF">
        Submit work to contractors, approve upon <br/>completion, 
        and automatically receive their<br/> invoice.
         Assign contracts like any other job or task <br/>within the project with a simple click.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
