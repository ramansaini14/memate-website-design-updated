import "./style.css";
import SliderTab from "./slider-tabs";
import SliderTabMobile from "./slider-mobile";
import CenterMode from "./CenterMode";


const FindOneApplication = () => {
  return (
    <>
    
      <div className="one-application-wrappers" >
      <div className="one-application-sec" >
        <div className="application-heading">
          <h3>One application</h3>
        </div>
        <div className="to-replace-bold-text">
          <span className="replace-text replace-text-fonts gradientAnimenate">
            to replace them all
          </span><br></br>
          {/* <span className="replace-text gradientAnimenate">
            them all
          </span> */}
        </div>
      </div>
      
      <div className="desktop-slider">
      {/* <SliderTab /> */}
      <CenterMode />
      </div>
      <div className="mobile-slider">
      <SliderTabMobile />
      </div>
      </div>
     
    </>
  );
};

export default FindOneApplication;
