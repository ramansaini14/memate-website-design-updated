import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMIntelligent = () => {

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
         className="section1"
          alt="customer management system"
          src={Images.ClientTable}
          effect="blur" 
          type="image/svg+xml"
        />
        </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Intelligent </p>
        <p className="sales-heading-salesF">Clients</p>
        <p className="sales-typeF">management</p>
        <p className="sales-description-salesF">
        Keep all your existing clients or manage your prospective <br/>clients in one place. One of the most important CRM tools <br/>for small businesses is to keep your client database<br/> organised, secure, and well-structured. Easily accessible <br/>for marketing and statistics.
        </p>
      </div>
    </div>
  );
};

export default CMIntelligent;
