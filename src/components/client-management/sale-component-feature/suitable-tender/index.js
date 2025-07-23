import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
const SuitableTender = () => {
  return (
    <div className="suitable-tender-wrapper">
      <div className="content-wrapper">
        <p className="sale-title">Simplify</p>
        <p className="sales-heading-sales">Suitable</p>
        <p className="sales-type">for tenders</p>
        <p className="sales-description-sales">
          Optimise your tender management with our<br></br> tailored solution. Easily
          track and manage tender<br></br> opportunities, ensuring you never miss a
          deadline<br></br> and always submit your best bid.
        </p>
      </div>
      <div className="suitable-table-image-wrapper">
      <img src={Images.suitableImage} type="image/svg+xml" />
      <div className="suitable-image-menu-wrapper">
        <img src={Images.suitableMenu} type="image/svg+xml" />
      </div>
      </div>
    </div>
  );
};

export default SuitableTender;
