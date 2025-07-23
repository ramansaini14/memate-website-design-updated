import React from "react";
import Images from "../assests/images";
import style from "./coming-soon-module.css";
import { Helmet } from "react-helmet-async";

const ComingSoon = () => {
  return (
    <>
      <Helmet>
        <title>Coming Soon</title>
        
      </Helmet>
      <div
        className={`ComingSonnBg`}
        style={{ backgroundImage: `url(${Images.backgroundPattern})` }}
      >
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          coming <br></br>soon
        </h1>
        {/* <p
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          We couldn’t wait to launch our updated website, so a few sections are
          still under construction. Stay tuned—new content is on its way!
        </p> */}
        {/* <img
          src={Images.comingsoonPic}
          alt={Images.comingsoonPic}
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        /> */}
         <img
            className="commingSoonLogo"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/comingSoon3x.png'}
            // alt="contact us main image"
            // width={400} height={400}
          />
      </div>
    </>
  );
};

export default ComingSoon;
