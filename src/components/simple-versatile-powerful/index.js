import React from "react";
import PostCard from "./post";
import Images from "../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SimpleVersatilePowerful = () => {
  return (
    <div className="simple-box ">
      <div className="section-heading">
        <div className="simpleH2Heading sequel_sans">Simple. Versatile. Powerful.</div>
      </div>
      <div className="powerful-client-wrapper " data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="2500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
        <div className="powerful-client shadowRightline4 shadowLeftline4">
          <PostCard
            userImage={
               <LazyLoadImage
                  alt="Built for regular business owners"
                  src={Images.owners}
                  effect="blur" 
                />
            // <img src={Images.owners} alt="Built for regular business owners" type="image/svg+xml" />
          }
            storiesDisp="Built for regular business owners"
          />
          <PostCard
            userImage={
              <LazyLoadImage
                  alt="Suitable for 90% of all industries"
                  src={Images.industries}
                  effect="blur" 
                />
            // <img src={Images.industries} alt="Suitable for 90% of all industries" type="image/svg+xml" />
          }
            storiesDisp="Suitable for 90% of all industries"
          />
          <PostCard
            userImage={
              <LazyLoadImage
                  alt="Redefining the way business operates"
                  src={Images.business}
                  effect="blur" 
                />
            // <img src={Images.business} alt="Redefining the way business operates" type="image/svg+xml" />
          }
            storiesDisp="Redefining the way business operates"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleVersatilePowerful;
