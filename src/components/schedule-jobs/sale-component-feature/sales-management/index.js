import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="job tracking tool"
          src={Images.jobPlanning}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Shift Scheduling and</p>
        <p className="sales-typeF">Planning</p>
        <p className="sales-description-salesF">
        With meMate, you can schedule jobs seamlessly from one mobile device to your dashboard. 
        The meMate Work application is designed to collaborate effectively with all your contractors and employees. Schedule shifts and jobs, 
        while using the application as a clock-in/clock-out time tracker to generate accurate timesheets.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
