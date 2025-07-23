import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PlanTwo = () => {
  return (
    <div className="invest-plan-two">
      <div className="plan-one-benefite">
        <div className="invest-plan-one-header">
          <img src={Images.investmentIcon} type="image/svg+xml" />
          <div className="invest-plan-one-heading">
            <p className="invest-plan-two-header-top">For startups</p>
            <p className="invest-plan-two-heading-top">Business + Work</p>
          </div>
          <div className="popular-plan"><p>Popular</p></div>
        </div>
        <div className="invest-plan-one-overview">
          <p className="invest-plan-two-overview-content">
            Everything in Business + Employee and Contractor Management.
          </p>
        </div>
        <div className="invest-plan-charges">
          <h1 className="plan-money-two">$162.17</h1>
          <p className="money-period-two">/monthly</p>
        </div>
        <div className="invest-plan-features">
          <p className="invest-plan-features-heading-two">What’s included</p>
          <div className="invest-plan-features-total-heading">
            <div className="invest-plan-data">
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#ffffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Employee Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#fffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Time Sheets & Tracker</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#fffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Contractor Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#fffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Job Scheduling</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#fffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Company News</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#ffffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Task Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#ffffff"
                  />
                </div>
                <p className="inest-plan-data-name-two">Company Calendar</p>
              </div>
             
            </div>
          </div>
        </div>
         <div className="investment-plan-button">
          <button className="investment-plan-get-started-two">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlanTwo;
