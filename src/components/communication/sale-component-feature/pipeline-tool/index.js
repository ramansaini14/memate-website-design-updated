import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const PipeLineTool = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <div className="sales-imageF">
        <LazyLoadImage
            alt="communication tools for teams"
            src={Images.commDynamic}
            effect="blur" 
            type="image/svg+xml"
            className="filter-pipelineimage"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Dynamic</p>
        <p className="sales-heading-salesF">Integration with</p>
        <p className="sales-typeF">your team</p>
        <p className="sales-description-salesF">
        You can start a chat on meMate to discuss your <br></br>project, assign tasks 
        to your team, and use the <br></br>meMate mobile app to communicate seamlessly <br></br>on the go.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
