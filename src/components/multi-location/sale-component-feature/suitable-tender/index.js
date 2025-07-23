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
        <p className="sale-titleF">Centralised</p>
        <p className="sales-heading-salesF">Chat & </p>
        <p className="sales-typeF">To-Do List</p>
        <p className="sales-description-salesF">
        Enable smooth communication and task<br></br> management across all locations with a shared <br></br>chat and task system.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
          alt="branch management software"
          src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/centralised-image.png"
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default SuitableTender;
