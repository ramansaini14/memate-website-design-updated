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
        <p className="sale-titleF">Comprehensive</p>
        <p className="sales-heading-salesF">Budget </p>
        <p className="sales-typeF">management </p>
        <p className="sales-description-salesF">
        Keep track of your budget and operational profit<br></br> with ease. All linked expenses and jobs assigned <br></br>to contractors or 
        time logged by employees are<br></br> automatically reflected in real-time.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="project timeline tool"
          src={Images.proComprehensive}
          effect="blur" 
          type="image/svg+xml"
          className="sales-process-optimization-image"
          />
          </div>
    </div>
  );
};

export default SalesProcessOptimiation;
