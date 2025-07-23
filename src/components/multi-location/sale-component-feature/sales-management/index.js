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
          alt="manage multiple business locations"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/accessible-image01.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Accessible</p>
        <p className="sales-heading-salesF">Share Templates </p>
        <p className="sales-typeF">Across Offices </p>
        <p className="sales-description-salesF">
        Standardise your operations by sharing templates<br></br> for quotes, invoices, and reports across all<br></br> locations.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
