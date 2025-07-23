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
            alt="contractor job tracking"
            src={Images.ContractorSystem}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Versatile</p>
        <p className="sales-heading-salesF">new</p>
        <p className="sales-typeF">System</p>
        <p className="sales-description-salesF">
        The system is designed to assist your contractors<br/> by reminding them about shifts, jobs, and <br/>payments. 
        This helps both the company and<br/> contractors work seamlessly, stay motivated, and<br/> collaborate in one space.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
