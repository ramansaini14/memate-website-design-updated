import React from "react";
import "./style.css";
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
        <p className="sale-titleF">Secure</p>
        <p className="sales-heading-salesF">Geolocation </p>
        <p className="sales-typeF">Monitoring</p>
        <p className="sales-description-salesF">
        meMate includes a geolocation system to monitor<br/> contractors working outside the office. 
        It provides <br/>accurate data on where a job starts and finishes,<br/> helping 
        you manage shifts and track on-site work<br/> efficiently.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="approval workflow software"
            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/job-geolocation-img.svg"
            effect="blur" 
            type="image/svg+xml"
            className="geolocation"
            />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
