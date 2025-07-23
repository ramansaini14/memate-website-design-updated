import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesManagement = () => {
  return (
    <div className="sales-management-wrapper-dataF flextMobile" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="sales-imageF">
        <LazyLoadImage
          alt="	sales tracking tools"
          src={Images.leadsTable}
          effect="blur" 
          type="image/svg+xml"
          />
      </div> 
      <div className="content-wrapperF">
        <p className="sale-titleF">Leads</p>
        <p className="sales-heading-salesF">Sales</p>
        <p className="sales-typeF">management</p>
        <p className="sales-description-salesF">
        The Sales tab functions as a central hub for all 
        your active<br/> sales, requests, quotes, drafts, and 
        proposals. It’s a <br/>simplified version of a sales 
        pipeline for any business.
        </p>
      </div>
    </div>
  );
};

export default SalesManagement;
