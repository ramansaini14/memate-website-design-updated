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
        <p className="sale-titleF">Secure </p>
        <p className="sales-heading-salesF">Shared</p>
        <p className="sales-typeF">Database</p>
        <p className="sales-description-salesF">
        Keep all client and supplier data centralized while<br></br> allowing each office to access necessary records <br></br>in real time.
        </p>
      </div>
      <div className="sales-imageF">
         <LazyLoadImage
            alt="multi-site business software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/secure-image02.png"
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default CRMSalesTool;
