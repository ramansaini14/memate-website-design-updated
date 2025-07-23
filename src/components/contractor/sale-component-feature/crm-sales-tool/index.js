import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Work</p>
        <p className="sales-typeF">scheduling</p>
        <p className="sales-description-salesF">
        With meMate, you can issue work contracts to<br/> individual 
        contractors in your organisation,<br/> allowing them to accept, complete, 
        and report<br/> work for approval directly through the meMate application.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="subcontractor management tools"
          src={Images.ContractorSche}
          effect="blur" 
          type="image/svg+xml"
          />

      </div>
    </div>
  );
};

export default CRMSalesTool;
