import React from "react";
import "./style.css";
import FeatureCard from "../card";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MemateFeatureBoastEfficiency = () => {
  return (
    <div
      className="efficiency-section-container mainOperationRight"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1300"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Dashboard"
          topHeading="Boost Profits"
          mainHeading="& efficiency"
          className="shadowRightline1 shadowLeftline1"
          description="See the real-time costs and time spent on each product or service, and adjust pricing by viewing operational profits in real time."
          cardButton="See All Features"
          
          maxImage={
            <LazyLoadImage
                                            alt="Business management software Australia"
                                            src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boost-profile-min.png"
                                            effect="blur" 
                                          />
            // <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boost-profile-min.png'} alt="Business management software Australia"/>
          }
        />
      </div>
    </div>
  );
};

export default MemateFeatureBoastEfficiency;
