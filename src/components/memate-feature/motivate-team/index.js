import React from "react";
import "./style.css";
import Link from "next/link";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import PowerfulMotivateImage from "../../../svg/PowerfulMotivateImage";
const MeMateFeatureMotivateTeam = () => {
  return (
    <div
      className="motivate-team-wrapper"
      data-aos="fade-up"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1500"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="efficiency-section">
        <div className="all-in-one ">
          <div className="strean-line ">
            <div className="boost-profits shadowRightline1 shadowLeftline1">
              <div className="operation-left">
                <p className="all-text">Powerful</p>
                <div className="smallH2Heading">Motivate</div>
                <div className="mediumHeadText">your team</div>
                <div className="operation-desp">
                  <p>
                    Motivate your team by showing real-time results and
                    potential rewards for achieving targets. Encourage your
                    employees and contractors to perform at their best.
                  </p>
                </div>
                <div className="request-btn request-btn-bg">
                  <Link
                    href="/features"
                    className="nav-btn--get-started get-started-border-box navbar-link"
                  >
                    <WhiteNormalButton text="See All Features " />
                  </Link>
                </div>
              </div>
              <div className="operation-right">
                <div className="motivate-image motivate-imagespace motivateImageSetter">
                  {
                    <LazyLoadImage
                alt="Australian business software company"
                src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-motivate-min.png'}
                effect="blur" 
              />
                    // <img src={"https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-motivate-min.png"} alt="Australian business software company"/>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureMotivateTeam;
