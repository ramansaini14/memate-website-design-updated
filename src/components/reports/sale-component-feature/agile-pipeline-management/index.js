import React from "react";
import Images from "../../../../assests/images";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
const AgilePipeLineManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <div className="sales-imageF">
        <LazyLoadImage
            alt="Aussie business insights software"
            src={Images.reportProactive}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Proactive</p>
        <p className="sales-heading-salesF">Department</p>
        <p className="sales-typeF">performance</p>
        <p className="sales-description-salesF">
        Each department’s performance is automatically<br></br> tracked based on project cost breakdowns,<br></br> 
        allowing you to identify strong and weak 
        products<br></br> or services. This helps you make informed <br></br>decisions to optimise your business.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
