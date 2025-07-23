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
          alt="supplier management software"
          src={Images.SupplierTable} 
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Organised </p>
        <p className="sales-heading-salesF">Supplier</p>
        <p className="sales-typeF">database</p>
        <p className="sales-description-salesF">
        Keep your supplier information organised and accessible<br/> with our database feature. 
        Easily manage details, track <br/>orders, and improve communication with your 
        suppliers, all <br/>in one place. This tool helps you streamline your supply<br/> chain operations.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
