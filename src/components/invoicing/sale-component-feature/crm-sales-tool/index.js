import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CRMSalesTool = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Automated </p>
        <p className="sales-heading-salesF">invoice  </p>
        <p className="sales-typeF">management   </p>
        <p className="sales-description-salesF">
        All your invoices are in one place, with easy<br></br> options to mark partial or full payments. A simple<br></br> 
         follow-up button helps you reduce the time spent<br></br>  chasing overdue invoices for your business.
        </p>
      </div>
     <div className="sales-imageF">
      <LazyLoadImage
          alt="automate invoices Australia"
          src={Images.invoAutomated}
          effect="blur" 
          type="image/svg+xml"
          />
        </div>
    </div>
  );
};

export default CRMSalesTool;
