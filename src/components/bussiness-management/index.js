import React from "react";
import Images from "../../assests/images";
import "./styles.css";
import Link from 'next/link';
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const BussinessManagement = () => { 
  return (
    <div className="home-page-content filtercolorbox">
      <div className="home-container-wrapper">
      <div
        className="home-page-section"
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="home-platform">
          <h1>Business management software.</h1>
          <h2>All-in-One Platform</h2>
        </div>
        <div className="gradientHeading gradiientColor header-text" 
  //    style={{
  //   backgroundImage: "linear-gradient(90deg, rgb(26, 178, 255) 0%, rgb(101, 178, 201) 45%, rgb(255, 178, 88) 65%, rgb(255, 178, 88) 100%)"
  // }}
        >
          to run your business
        </div>
      </div>
      
      <div className="image-wrapper">
        {/* <img src={Images.landingHero} /> */}
        <div className="macBook-image">
          <div className="big-img-mac">
            <div className="big-img-macMain">
              {/* <img src={Images.landingHero}  alt="Landing Hero" /> */}
              {/* <picture>
            <source srcSet={Images.landingHero} media="(min-width: 2000px)" />
            <source srcSet={Images.landingHero1x} media="(min-width: 1921px)" />
            <img src={Images.landingHero1x} alt="Landing Hero"/>
          </picture> */}
              {/* <link rel="preload" fetchpriority="high" as="image" href={`${Images.landingHero}`} type="image/webp"></link>
              <img src={Images.landingHero} alt="Business Management Software" fetchpriority="high"
               width="800"
              height="600"
              style={{ width: "100%", height: "auto" }}
              
              /> */}
           
              {/* <LazyLoadImage
            alt="Business Management Software"
            src={Images.landingHero}
            effect="blur"
            style={{ width: "100%", height: "auto" }}
          /> */}
          <img
  alt="Business Management Software"
  src={Images.landingHero}
  width="1200"
  height="600"
  style={{ width: '100%', height: 'auto' }}
  loading="eager"
/>
            </div>
            {/* <div className="iphone-image"> */}
              {/* <img
                src={Images.landingHeroiPhone}
                alt="landingHeroiPhone"
                data-aos="aos-fade"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="200"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="aos-fade"
              /> */}
              {/* iphone image  */}
              {/* <link rel="preload" fetchpriority="high" as="image" href={`${Images.landingHeroiPhone}`} type="image/webp"></link>
              <img src={Images.landingHeroiPhone}
                alt="landingHeroiPhone"
                data-aos="aos-fade"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="200"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="aos-fade"
              /> */}
            {/* </div> */}
            {/* <div className="create-new-text">
              <link rel="preload" fetchpriority="high" as="image" href={`${Images.landingHerotask3x}`} type="image/webp"></link>
              <img
              srcSet={`${Images.landingHerotask3x} 600w, ${Images.landingHerotask2x} 1200w, ${Images.landingHerotask1x} 1800w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
              src={Images.landingHerotask1x}
                alt="landingHerotask"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="300"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="aos-fade"
              />
            </div> */}
            {/* Removed as this is not in design anymore */}
            {/* <div className="create-new-model">
              <img
                src={Images.landingHeromodel}
                alt="landingHeromodel"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="aos-fade"
              />
            </div> */}

            {/* <div className="metric-item">
              <img
              srcSet={`${Images.landingHeroitem3x} 600w, ${Images.landingHeroitem2x} 1200w, ${Images.landingHeroitem1x} 1800w`}
                src={Images.landingHeroitem3x}
                alt="landingHeroitem"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="700"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="aos-fade"
              />
            </div> */}
          </div>
        </div>
      </div>
       </div>
      <div className="how-to-use">
        <p>Easy-to-Use Business Management Software: to Start, Run,<br/> and Succeed in Your Business </p>
        {/* <p>to Start, Run, and Succeed in Your Business</p> */}
      </div>
      <div className="businesses-mode fontFamilyRomanHead">
        <span>
         Made for Small to Medium Businesses & Business Projects, Offering Simplicity & Control
        </span>
      </div>
     

 <div className="dflexbannerbtn">
      <div className="request-btn">
        <Link
          href="https://app.memate.com.au/requestdemo"
          target="_blank"
          className="nav-btn--get-started  navbar-link"
        >
            <TronRequestADemo text="Request a Demo" />
        </Link>
      </div>
      <div className="request-btn">
        <Link
          href="https://app.memate.com.au/onboarding"
          target="_blank"
          className="nav-btn--get-started  navbar-link"
        >
            <WhiteButtonBammer text="Start Free Trial"/>
        </Link>
      </div>
</div>


    </div>
  );
};

export default BussinessManagement;
