import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SuitableTender = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="4000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Convenient</p>
        <p className="sales-heading-salesF">Classic</p>
        <p className="sales-typeF">Reporting</p>
        <p className="sales-description-salesF">
        If you need classic profit and loss reports or<br></br> project cost reports, 
        you can access them easily <br></br>with meMate. If there’s something 
        missing, just<br></br> reach out to us, and we’ll develop the custom<br></br> reporting you need.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="Small Business Data Tools"
            src={Images.reportConvenient}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
    </div>
  );
};

export default SuitableTender;
