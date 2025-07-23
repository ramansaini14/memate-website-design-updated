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
      <div className="content-wrapperF ">
        <p className="sale-titleF">Helpful </p>
        <p className="sales-heading-salesF">Supplier </p>
        <p className="sales-typeF">management </p>
        <p className="sales-description-salesF">
        Our Supplier Management feature simplifies handling your <br/>supplier relationships. 
        It shows all previous and existing<br/> orders, 
        payment statuses, and overall turnover, helping you <br/>navigate exact expenses efficiently.
        </p>
      </div>
        <div className="sales-imageF">
          <LazyLoadImage
          alt="all-in-one business software"
          src={Images.HelpfullSupplier}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default CRMSalesTool;
