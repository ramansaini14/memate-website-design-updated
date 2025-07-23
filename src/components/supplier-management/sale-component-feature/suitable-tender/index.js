import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SuitableTender = () => {
 

  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3300"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF ">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Supplier</p>
        <p className="sales-typeF">reports</p>
        <p className="sales-description-salesF">
        Get a clear supplier overview that highlights where you <br/>spend the most. This feature helps you identify key<br/> suppliers, 
        allowing you to make informed executive<br/> decisions based on spending patterns.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="software features for tradies"
            src={Images.SupplierReport}
            effect="blur" 
            type="image/svg+xml"
            className=""
            />
      </div>
    </div>
  );
};

export default SuitableTender;
