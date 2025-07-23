import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "./style.css";
import Link from 'next/link';
import { LazyLoadImage } from "react-lazy-load-image-component";
// import CustomerStoriesImage from "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-camera-fix-min.jpg";
// import customersoriesProImage from "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-pro-min.jpg";
// import customersoriesEliteImage from "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-elite-min.jpg";
// import customersoriesBoatImage from "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boat-min.jpg";
// import customersoriesSortedImage from "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-sorted-min.jpg";


const SliderStories = () => {
    const settings = {
        className: "center",
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: "60px",
        dots: false,
        autoplay: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        speed: 500,
      
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 480, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
      

  return (
    <div className="slider-container sliderSectionShadowl slider-containerF" id="slider-container" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <Slider {...settings}>
        <div className="slider-item">
          <Link href='/customer-stories/camera-fix'>
           <LazyLoadImage
                                alt="electronics repair business software example"
                                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-camera-fix-min.jpg"
                                effect="blur" 
                              />
          {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-camera-fix-min.jpg" alt="electronics repair business software example"/> */}
          </Link> 
          <div className="customerstoriesitem">
              <div className="category sequel_sans_roman_head">Camera Fix</div>
              <div className="date-heading-title "><Link className="sequel_sans_roman_head" href='/customer-stories/camera-fix'>Empowering Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
            </div>
            <div className="customerBrandlogo">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747218896/img-logo_vnuajz.png" alt="Camera Fix Logo"  style={{ width: '175.888px' }}/>
        </div>
        </div>
        <div className="slider-item">
        <Link href='/customer-stories/pro-vinyl'>
        <LazyLoadImage
                                alt="car wrap business management software"
                                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-pro-min.jpg"
                                effect="blur" 
                              />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-pro-min.jpg" alt="car wrap business management software"/> */}
        </Link> 
        <div className="customerstoriesitem">
              <div className="category sequel_sans_roman_head">PROvinyl</div>
              <div className="date-heading-title "><Link className="sequel_sans_roman_head" href='/customer-stories/pro-vinyl'>Running a Car Wrapping Company on meMate</Link></div>
            </div>
            <div className="customerBrandlogo">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747223666/provinyl-logo_aezk46.png" alt="Camera Fix Logo"  style={{ width: '175.888px' }}/>
        </div>
        </div>
        <div className="slider-item">
        <Link href='/customer-stories/elite-life'>
        <LazyLoadImage
              alt="software for exclusive membership services"
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-elite-min.jpg"
              effect="blur" 
            />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-elite-min.jpg" alt="software for exclusive membership services"/> */}
        </Link> 
        <div className="customerstoriesitem">
              <div className="category sequel_sans_roman_head">Elite Life</div>
              <div className="date-heading-title"><Link className="sequel_sans_roman_head" href='/customer-stories/elite-life'>Using meMate to Run a Private Membership Club</Link></div>
            </div>
             <div className="customerBrandlogo">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747223665/img-logo-elfinance-200x65_olwawn.png" alt="Camera Fix Logo"  style={{ width: '175.888px' }}/>
        </div>
        </div>
        <div className="slider-item">
        <Link href='/customer-stories/boat-wizard'>
        <LazyLoadImage
              alt="marine service business software case study"
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boat-min.jpg"
              effect="blur" 
            />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-boat-min.jpg" alt="marine service business software case study"/> */}
        </Link> 
        <div className="customerstoriesitem">
              <div className="category sequel_sans_roman_head">Boat Wizard</div>
              <div className="date-heading-title"><Link className="sequel_sans_roman_head" href='/customer-stories/boat-wizard'>We quote and invoice all our marine engineering services.</Link></div>
            </div>
             <div className="customerBrandlogo">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747224322/img-logo-w_1_1_fsfbgn.png" alt="Camera Fix Logo"  style={{ width: '175.888px' }}/>
        </div>
        </div>
        <div className="slider-item">
        <Link href='/customer-stories/sorted-media'>
         <LazyLoadImage
              alt="photography business management software case study"
              src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-sorted-min.jpg"
              effect="blur" 
            />
        {/* <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-sorted-min.jpg" alt="photography business management software case study"/> */}
        </Link> 
        <div className="customerstoriesitem">
              <div className="category sequel_sans_roman_head">Sorted Media</div>
              <div className="date-heading-title"><Link className="sequel_sans_roman_head" href='/customer-stories/sorted-media'>Photography and Videography on Demand</Link></div>
            </div>
             <div className="customerBrandlogo">
            <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747223666/logo-sorted-min-200x93_1_oz8oy2.png" alt="Camera Fix Logo"  style={{ width: '175.888px' }}/>
        </div>
        </div>
     
      </Slider>
    </div>
  );
};

export default SliderStories;
