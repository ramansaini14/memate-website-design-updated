import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
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
                alt="sales workflow software"
                src={Images.pipeLineManagement}
                effect="blur" 
                type="image/svg+xml"
                />
      </div>
      <div className="content-wrapperF">
        <p className="sale-title">Agile</p>
        <p className="sales-heading-salesF">Pipeline</p>
        <p className="sales-typeF">management</p>
        <p className="sales-description-salesF">
        Streamline your sales process with our intuitive<br /> pipeline management tool. View all stages of your <br />sales funnel in one place, making it easy to track<br /> progress, manage leads, and close deals faster.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
