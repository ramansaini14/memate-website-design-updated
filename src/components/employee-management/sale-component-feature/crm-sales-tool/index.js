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
        <p className="sale-titleF">Centralised </p>
        <p className="sales-heading-salesF">Smart  </p>
        <p className="sales-typeF">Timesheets  </p>
        <p className="sales-description-salesF">
        No need for third-party applications—everything<br></br> can be 
        done within meMate. Your team can submit<br></br> their time, and the meMate Work 
        Application <br></br>automatically generates timesheets based 
        on <br></br>every approved time entry from the previous<br></br> week.
        </p>
      </div>
     <div className="sales-imageF">
      <LazyLoadImage
          alt="employee scheduling software"
          src={Images.CentralisedClient}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
    </div>
  );
};

export default CRMSalesTool;
