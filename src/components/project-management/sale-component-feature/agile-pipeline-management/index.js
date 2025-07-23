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
            alt="project workflow software"
            src={Images.proCustomisable}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Customisable</p>
        <p className="sales-heading-salesF">Statuses &</p>
        <p className="sales-typeF">Project Highlights</p>
        <p className="sales-description-salesF">
        Utilise multiple tools to view project statuses,<br></br> customisable by colour and status name. 
        Multiple<br></br> filters allow you to quickly find and see exactly <br></br>what you’re looking for.
        </p>
      </div>
    </div>
  );
};

export default AgilePipeLineManagement;
