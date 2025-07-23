import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Detailed</p>
        <p className="sales-heading-salesF">Job, Shift,</p>
        <p className="sales-typeF">Claim Linking</p>
        <p className="sales-description-salesF">
        Link jobs, shifts, and claims to existing projects in<br/> meMate to maintain complete control over 
        project budgets. <br/>This feature keeps all records organised<br/> in one place, ensuring seamless tracking and<br/> financial oversight.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="	job confirmation software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/claim-linking-img.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
