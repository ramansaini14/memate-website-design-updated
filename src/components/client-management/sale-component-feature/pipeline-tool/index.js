import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMSmart = () => {

  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
          className="filter-pipelineimage"
          alt="	manage clients online"
          src={Images.ClientBusiness}
          effect="blur" 
          type="image/svg+xml"
        />  
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Smart</p>
        <p className="sales-heading-salesF">Tool for Small </p>
        <p className="sales-typeF">business  </p>
        <p className="sales-description-salesF">
        In meMate, we display all necessary information for every <br/>client automatically, 
        including total  turnover, average <br/>income per day, total amount of  orders, and order<br/> frequency. 
        This helps you navigate your marketing <br/>
        activities in the best  client management CRM in Australia.
        </p>
      </div>
    </div>
  );
};

export default CMSmart;
