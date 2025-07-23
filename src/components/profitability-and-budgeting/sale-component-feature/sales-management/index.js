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
            alt="profitability tracking software"
            src={Images.budEfficient}
            effect="blur" 
            type="image/svg+xml"
            />
      </div>
      <div className="content-wrapperF">
        <p className="sale-titleF">Efficient</p>
        <p className="sales-heading-salesF">Quotation  </p>
        <p className="sales-typeF">system   </p>
        <p className="sales-description-salesF">
        In meMate, we developed the quotation system to <br></br>set a budget for each position, 
        calculating every<br></br> margin or markup. This allows your business to <br></br>
        turn those figures into operational profit, providing <br></br>clear financial insight from the start.
       </p>
      </div>
    </div>
  );
};

export default SalesManagement;
