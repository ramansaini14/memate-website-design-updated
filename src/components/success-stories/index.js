import React from "react";
import "./style.css";

import SliderStories from "./center-mode";
import Link from 'next/link';
// import TronButton from "../../layout/hover-button/tourn-but";
// import WhiteButton from "../../layout/hover-button/WhiteButton";
import WhiteButtonWithoutGradient from "../../layout/hover-button/WhiteButtonWithoutGradient";

const SuccessStories = () => {
  return (
   <>
    <div className="slider-section1 slider-section1FF" >
      <div className="success-stories1">
        <div className="bottom-management" data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="2800"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          <div className="SStoriesHead sequel_sans">Success Stories</div>
          <p>Here are a few stories from Australian companies using Memate<br /> and how it has worked for them.</p>
          <div className="request-btn request-btn-center" data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom">
        <Link href='/customer-stories' className="nav-btn--get-started get-started-border-box navbar-link"><WhiteButtonWithoutGradient text="Real Examples" /></Link>
        {/* 171 */}
      </div>
          {/* <Link to="/customer-stories"><button>All Stories</button></Link> */}
        </div>
        <SliderStories />
      </div>
    </div>
   </>
  );
};

export default SuccessStories;
