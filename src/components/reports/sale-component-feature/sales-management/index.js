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
          alt="reporting tools for small business"
          src={Images.reportInsightful}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Insightful</p>
        <p className="sales-heading-salesF">Executive    </p>
        <p className="sales-typeF"> reports      </p>
        <p className="sales-description-salesF">
        At meMate, we strive to make things easier <br></br>without compromising functionality. Our executive <br></br>reports are designed 
        based on feedback from<br></br> business owners and continuous surveys,<br></br> ensuring they meet the real needs of your<br></br> business.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
