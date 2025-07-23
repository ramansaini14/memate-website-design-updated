import React from "react";
import "./style.css";
import FeatureCard from "../card";
import { LazyLoadImage } from "react-lazy-load-image-component";
const MeMateFinanceInsights = () => {
  return (
    <div className="efficiency-section-wrapper mainOperationRight"  data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1400"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="efficiency-section">
        <FeatureCard
          subHeading="Finance"
          topHeading="Real-time financial"
          mainHeading="insights"
           className="shadowRightline2 shadowLeftline2"
          description="Oversee company performance by product or service type. Reward managers based on actual performance, and view transparent, easy-to-understand statistics."
          cardButton="See All Features "
          maxImage={
             <LazyLoadImage
                                                        alt="Financial Reporting Software"
                                                        src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-real-time-min.png"
                                                        effect="blur" 
                                                      />
            // <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-real-time-min.png'} alt="Financial Reporting Software"/>
          }
        />
      </div>
    </div>
  );
};

export default MeMateFinanceInsights;
