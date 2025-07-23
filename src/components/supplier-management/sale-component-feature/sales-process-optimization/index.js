import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SalesProcessOptimiation = () => {

  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF ">
        <p className="sale-titleF">Insightful</p>
        <p className="sales-heading-salesF">Help</p>
        <p className="sales-typeF">your managers </p>
        <p className="sales-description-salesF">
        Quickly find your preferred suppliers with just a few clicks.<br/> This feature allows management to easily 
        access and<br/> select the suppliers you need, streamlining your workflow<br/> and saving time.
        </p>
      </div>
       <div className="sales-imageF">
        <LazyLoadImage
                  alt="project management features"
                  src={Images.Insightful}
                  effect="blur" 
                  type="image/svg+xml"
                  className="section2 sales-process-optimization-image"
                  />
      </div>
    </div>
  );
};

export default SalesProcessOptimiation;
