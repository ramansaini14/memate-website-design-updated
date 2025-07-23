import React from "react";
import "./style.css";
// import Images from "../../assests/images";
import Link from 'next/link';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import ZeroScreenShot from "../../svg/ZeroScreenShot";


const ZeroOfferOnboarding = () => {

  return (
    <div className="onboarding-section onboarding-section12" >
      <div className="onboarding-section-content">
        <div className="offer-opt1">
          <div className="sab-heading">
            <div className="h2HeadingHome"> We offer <span className="shadow">zero</span> fees for</div>
            <div className="headingSimmer">onboarding</div>
            <p>
           Plus, we provide a  <em className="em sequel_sans_semi_bold_head">14-day</em>  free trial because we believe our software will become indispensable to your business.
            </p>
            <div className="button-container butcontainerzero">
              <Link href="https://app.memate.com.au/requestdemo"><button className="book-a-demo">Book a Demo</button></Link>
              <Link href="https://app.memate.com.au/onboarding"><button className="book-a-demo">Start Free Trial</button></Link>
            </div>
          </div>
          <div className="offer-screen-shot" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1100"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
            <div className="zeroshadowLeft"></div>
            <LazyLoadImage
                                        alt="ERP System"
                                        src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-onboarding-min.png'}
                                        effect="blur" 
                                        style={{ width: "100%", height: "auto" }}
                                      />
            {/* <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-onboarding-min.png" 
                 width="800"
     height="600"
     style={{width: "100%", height: "auto"}}
                alt="ERP System"/> */}
<div className="zeroshadowRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZeroOfferOnboarding;
