import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="Aussie staff management solution"
          src={Images.employeeAdvanced}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Advanced</p>
        <p className="sales-heading-salesF">meMate</p>
        <p className="sales-typeF">Work Application</p>
        <p className="sales-description-salesF">
        The meMate Work Application is designed to <br></br>keep each team member informed about <br></br>everything happening in your company. 
        It <br></br>features a built-in to-do list and calendar for seamless and<br></br> comfortable workflow management.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
