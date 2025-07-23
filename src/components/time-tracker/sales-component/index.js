import Link from 'next/link';
import "./style.css";
import TronButton from "../../../layout/hover-button/tourn-but";
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
       <h1 className="h1tagsseo h1tagsseof fontWeight">Track Time, Stay on Budget, Keep Teams Accountable</h1>
       <div className="sales-headingF">time tracking</div>
      <div className="sales-componet-content-wrapperF client-component-para">
        <div className="sales-component-contentF">
        <span>
        With meMate, you can track time for all your employees and contractors using our specially designed mobile application. 
        This feature combines the functionality of time tracking tools with real-time time tracking, allowing you to monitor work 
        hours accurately. Whether you’re managing a small business or a large team, meMate provides work hour tracking 
        solutions that include employee time management and time tracking and reporting for seamless workforce oversight.</span>
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
