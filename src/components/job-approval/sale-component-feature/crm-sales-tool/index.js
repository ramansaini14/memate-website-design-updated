import React from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Organised </p>
        <p className="sales-heading-salesF">Claims</p>
        <p className="sales-typeF">System</p>
        <p className="sales-description-salesF">
        Every job assigned to a contractor in meMate <br/>requires approval upon completion. Once<br/> approved, 
        the job is added to the payment <br/>schedule for the following week, ensuring <br/>accurate and timely processing.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="work approval system"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-claims-img.svg"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMSalesTool;
