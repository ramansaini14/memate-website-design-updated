import React from "react";
import FeatureCard from "../card";
import './style.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import Understand from "../../../svg/Understand";
const MeMateWorkForce = () => {
  return (
    <div className="workforce-container mainOperationRight mainOperationspace"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1700"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="In-depth"
          topHeading="Understand"
          mainHeading="your workforce"
          className="shadowRightline1 shadowLeftline1"
          description="Efficiently track employee and subcontractor hours with real-time updates on their progress. Our system also streamlines timesheet and invoice submissions."
          cardButton="See All Features "
          maxImage={
            <LazyLoadImage
                  alt="All-in-one business platform"
                  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-understand-min.png"
                  effect="blur" 
                />
            // <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-understand-min.png'} alt="All-in-one business platform"/>
          }
        />
      </div>
    </div>
  );
};

export default MeMateWorkForce;
