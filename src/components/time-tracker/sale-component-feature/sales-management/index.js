import React from "react";
import "./style.css";
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
        alt="employee time tracking tool"
        src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/traker-iPhone-mockup.svg"
        effect="blur" 
        type="image/svg+xml"
        />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Advanced</p>
        <p className="sales-heading-salesF">Replace Clock-In<br/>Clock-Out </p>
        <p className="sales-typeF">Devices</p>
        <p className="sales-description-salesF">
        meMate replaces all your traditional clock-in and<br/> clock-out time-tracking devices. With the meMate<br/> mobile 
        app, tracking shifts becomes simpler and <br/>more efficient, streamlining workforce time <br/>management in your office.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
