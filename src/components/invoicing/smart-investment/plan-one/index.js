import React from "react";
import "./style.css";
import Images from "../../../../assests/images";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const PlanOne = () => {
  return (
    <div className="invest-plan-one">
      <div className="plan-one-benefite">
        <div className="invest-plan-one-header">
          <img src={Images.investmentIcon} type="image/svg+xml" />
          <div className="invest-plan-one-heading">
            <p className="invest-plan-one-heading-top">For individuals</p>
            <p className="invest-plan-one-heading-bottom">Business</p>
          </div>
        </div>
        <div className="invest-plan-one-overview">
          <p className="invest-plan-one-overview-content">
            Essentials you need to run your company
          </p>
        </div>
        <div className="invest-plan-charges">
          <h1 className="plan-money">$99.85</h1>
          <p className="money-period">/monthly</p>
        </div>

        <div className="invest-plan-features">
          <p className="invest-plan-features-heading">What’s included</p>
          <div className="invest-plan-features-total-heading">
            <div className="invest-plan-data">
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Client Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Supplier Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Sales Pipeline</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Project Management</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Internal Chat</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Invoicing</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Statistic Reports</p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">
                  Profitability and Budgeting
                </p>
              </div>
              <div className="invest-whole-feature">
                <div className="invest-plan-tick">
                  <CheckCircleIcon
                    sx={{ width: "100%", height: "100%" }}
                    htmlColor="#29292B"
                  />
                </div>
                <p className="inest-plan-data-name">Expenses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="investment-plan-button">
          <button className="investment-plan-get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default PlanOne;
