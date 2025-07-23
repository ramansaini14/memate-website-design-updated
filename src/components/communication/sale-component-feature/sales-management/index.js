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
          alt="business chat tools"
          src={Images.commReliable}
          effect="blur" 
          type="image/svg+xml"
          />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Reliable</p>
        <p className="sales-heading-salesF">Send, resend and <br></br>Remind</p>
        <p className="sales-typeF">about quotes</p>
        <p className="sales-description-salesF">
        There’s nothing better than starting with clear and<br></br> transparent communication.
         Send quotes for<br></br> approval with automatic reminders directly from<br></br> your 
         meMate system with just one click.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
