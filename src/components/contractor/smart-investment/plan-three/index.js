import React from "react";
import Images from "../../../../assests/images";
import './style.css'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PlanThree = () => {
  return (
    <div className="invest-plan-one">
      <div className="plan-one-benefite">
        <div className="invest-plan-one-header">
          <img src={Images.investmentIcon} type="image/svg+xml" />
          <div className="invest-plan-one-heading">
            <p className="invest-plan-one-heading-top">For</p>
            <p className="invest-plan-one-heading-bottom">Entreprise</p>
          </div>
        </div>
        <div className="invest-plan-one-overview">
          <p className="invest-plan-one-overview-content">Let's talk</p>
        </div>
        <div className="invest-plan-charges">
          <h1 className="plan-money">Contact Us</h1>
        </div>
        <div className="plan-three-content-overview">
            <p className="plan-three-content">Unlimited Customisation to Your Needs</p>
        </div>

        <div className="plan-three-features">
            <p className="plan-three-features-have">Complete Package</p>
            <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Custom Integrations</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Unique Workflows</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Custom Calculator</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Advanced Reporting</p>
              </div>

              <div className="invest-whole-feature-three">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name-three">Custom Features Especially for Your Industry</p>
              </div>
        </div>

        <div className="investment-plan-button-three">
          <button className="investment-plan-get-started-three">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlanThree;
