import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";
const SalesProcessOptimiation = () => {
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Modern</p>
        <p className="sales-heading-salesF">Ways of  </p>
        <p className="sales-typeF">communication </p>
        <p className="sales-description-salesF">
        Use our mobile application to receive notes from<br/> contractors and employees, store photos, and<br/> keep all communication organized within the<br/> project card.
        </p>
      </div>
      <div className="sales-imageF">
        <LazyLoadImage
            alt="team messaging platform"
            src={Images.commModern}
            effect="blur" 
            type="image/svg+xml"
            className="sales-process-optimization-image"
            />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
