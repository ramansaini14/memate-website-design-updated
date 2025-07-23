import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMDynamic = () => {

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
            className=""
            alt="Australian CRM system"
            src={Images.ClientInformation}
            effect="blur" 
            type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF ">
        <p className="sale-titleF">Dynamic</p>
        <p className="sales-heading-salesF">Detailed</p>
        <p className="sales-typeF">client information </p>
        <p className="sales-description-salesF">
        You can add multiple client locations, including<br/> detailed company descriptions, 
        key personnel,<br/> and addresses formatted to Australian standards.<br/> We’ve thought of everything.
        </p>
      </div>
    </div>
  );
};

export default CMDynamic;
