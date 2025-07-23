import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const PipeLineTool = () => {

  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <div className="sales-imageF">
        <LazyLoadImage
          alt="SME software Australia"
          src={Images.ContactSupplier}
          effect="blur" 
          type="image/svg+xml"
          className="filter-pipelineimage"
          />
      </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Centralised</p>
        <p className="sales-heading-salesF">Supplier contacts</p>
        <p className="sales-typeF">in one place</p>
        <p className="sales-description-salesF">
        Keep all your supplier contacts in one place with our<br/> centralised system. Easily store, access, 
        and manage<br/> contact information, ensuring quick communication and<br/> efficient 
        organisation. This feature helps you stay<br/> connected and maintain strong supplier relationships.
        </p>
      </div>
    </div>
  );
};

export default PipeLineTool;
