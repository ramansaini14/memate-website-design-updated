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
          alt="job scheduling software"
          src={Images.proPowerful}
          effect="blur" 
          type="image/svg+xml"
          className="filter-pipelineimage"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Powerful</p>
        <p className="sales-heading-salesF">Management </p>
        <p className="sales-typeF">Tool   </p>
        <p className="sales-description-salesF">
        Send SMS or email updates to your clients, add<br></br> notes, link documentation, and keep a
         complete <br></br>record of the project with its entire history<br></br> available whenever you need it.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
