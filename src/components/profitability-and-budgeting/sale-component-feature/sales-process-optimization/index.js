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
        <p className="sale-titleF">Powerful</p>
        <p className="sales-heading-salesF">projects  </p>
        <p className="sales-typeF">overview  </p>
        <p className="sales-description-salesF">
        View all your projects on one screen, including the <br></br>cost of sales, 
        contracts, invoices, and operational <br></br>expenses allocated to each project. This provides <br></br>a 
        truly unique system that calculates the exact<br></br> operational profit for each project.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="track margins and profit"
            src={Images.budPowerful}
            effect="blur" 
            type="image/svg+xml"
            className="sales-process-optimization-image"
            />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
