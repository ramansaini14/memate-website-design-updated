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
        <p className="sale-titleF">Detailed</p>
        <p className="sales-heading-salesF">conversion </p>
        <p className="sales-typeF">reports</p>
        <p className="sales-description-salesF">
        Track your conversions in real time—from <br></br>catching requests to processing quotes and <br></br>
        turning them into projects. See exact numbers at<br></br> each stage, empowering you to 
        make informed<br></br> executive decisions.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="performance tracking tools"
            src={Images.reportDetailed}
            effect="blur" 
            type="image/svg+xml"
            className="sales-process-optimization-image"
            />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
