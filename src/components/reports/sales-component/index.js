import Link from "next/link";
import "./style.css";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
const SalesComponent = () => {
  return (
  <>
    <div className="sales-component-wrapper salesfeaturesWrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
       <h1 className="h1tagsseo h1tagsseof fontWeight">Business Reporting Software for Aussie Businesses</h1>
       <div className="sales-headingF">reports  </div>
      <div className="sales-componet-content-wrapperF client-component-para">
     
        <div className="sales-component-contentF">
        <span>
        meMate provides a quick and easy overview of your business activities, goals, and monthly targets. Its user-friendly interface allows you to easily compare performance and track progress. </span>
        
        </div>

        <div className="sales-component-button-wrapper">
        <div  className="request-btn request-btn-center">
                <Link href="https://app.memate.com.au/requestdemo" target="_blank" className="nav-btn--get-started navbar-link"><TronRequestADemo text="Request a Demo" /></Link>
              </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default SalesComponent;
