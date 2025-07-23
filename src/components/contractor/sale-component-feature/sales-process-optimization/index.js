import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Productive</p>
        <p className="sales-heading-salesF">Design</p>
        <p className="sales-typeF">and functionality</p>
        <p className="sales-description-salesF">
        Designed to centralise all your contractors in one <br/>place. Submit work to individuals or groups, set <br/>tasks at an hourly or 
        fixed rate, and monitor <br/>performance with ease.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="contractor CRM"
          src={Images.ContractorFuncti}
          effect="blur" 
          type="image/svg+xml"
          className="sales-process-optimization-image"
          />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
