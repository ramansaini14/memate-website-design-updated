import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
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
        <p className="sale-titleF">Modern </p>
        <p className="sales-heading-salesF">targets    </p>
        <p className="sales-typeF">reports   </p>
        <p className="sales-description-salesF">
        Set monthly targets for your team and let them <br></br>track their results in real time. 
        Clear and objective<br></br> targets are essential 
        for motivating both<br></br> management and sales teams, and meMate<br></br> makes it easy to monitor progress.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="financial reporting software"
          src={Images.reportModern}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default CRMSalesTool;
