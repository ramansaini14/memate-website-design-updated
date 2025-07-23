import React from "react";
import "./style.css";
import Link from "next/link";
import WhiteNormalButton from "../../../layout/hover-button/WhiteNormalButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MeMateFeatureStreamline = () => {
  return (
    <div className="feature-section-container request-btn-update">
      <div className="features-section">
        <div className="memate heading-margin">
          <div className="mainHeadingH2">Memate</div>
          <span className="gradientAnimenate">features</span>
        </div>
        <div
          className="all-in-one"
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1200"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="stream-line">
            <div className="main-operation shadowRightline shadowLeftline">
              <div className="operation-left">
                <p className="all-text">All-in-one</p>
                <div className="smallH2Heading">Streamline</div>
                <div className="mediumHeadText">operations</div>

                <div className="operation-desp">
                  <p>
                    Our software provides robust workflows, ensuring managers
                    follow firm guidelines. It guarantees every project is
                    transparent and accountable, and all business activities are
                    accurately reflected in the system, keeping everything
                    secure.
                  </p>
                </div>
                <div className="request-btn request-btn-bg">
                  <Link
                    href="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started get-started-border-box  navbar-link"
                  >
                    <WhiteNormalButton text="Book a Demo" />
                  </Link>
                </div>
              </div>
              <div className="operation-right">
                <span className="gradientAnimenate gradiientColor"> memate </span>
                <div className="max-image">
                   <LazyLoadImage
                        alt="sales management software"
                        src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-memate-feature-girl-min.png'}
                        effect="blur" 
                      />
                  {/* <img src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-memate-feature-girl-min.png'} alt="sales management software" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeMateFeatureStreamline;
