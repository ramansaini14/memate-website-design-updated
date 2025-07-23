import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CMIntuitive = () => {
  
  return (
    <div className="sales-management-wrapper-dataF" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="content-wrapperF">
        <p className="sale-titleF">Intuitive</p>
        <p className="sales-heading-salesF">Client relationship</p>
        <p className="sales-typeF">management <br></br> database</p>
        <p className="sales-description-salesF">
        The structured database of clients is of great value to the<br/> business and helps with business 
        growth. meMate is<br/> designed with firm CRM capabilities to help your<br/> management keep the database clean, safe, 
        and <br/>accessible. It also allows them to upload new clients quickly<br/> and easily.
        </p>
      </div>
        <div className="sales-imageF">
          <LazyLoadImage
                    alt="client management software"
                    src={Images.ClientRelationship}
                    effect="blur" 
                    type="image/svg+xml"
                  />

        </div>
    </div>
  );
};

export default CMIntuitive;
