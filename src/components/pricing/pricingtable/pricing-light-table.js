import React from "react";
import "./pricing-light-table.scss";
// import TronButton from "../../../layout/hover-button/tourn-but";
import Link from 'next/link';
// import HeaderButtonWithGradient from "../../../layout/hover-button/HeaderButtonWithGradient";
// import BlackBigHeaderButtonWithGradient from "../../../layout/hover-button/BlackBigHeaderButtonWithGradient";
import BigHeaderButtonWithGradient from "../../../layout/hover-button/BigHeaderButtonWithGradient";
const pricingboll =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingboll.png";
const checkIcon =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/checkIcon.svg";
const pricingTah =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/pricingTah.svg";
const PricingLightTable = () => {
  return (
    <div className="pricing-table-container">
      <table className="pricingtableWrapper">
        <thead>
          <tr>
            <th></th>
            <th>
              <div className="plan-header">
                <div className="flexbox">
                  <div className="iconbox">
                    <img src={pricingboll} alt={pricingboll} />
                  </div>
                </div>
                <h3>Business</h3>
                <h2>
                  $99.85 <span>/monthly</span>
                </h2>
                <p>Essentials you need to run your company</p>
                <div className="request-btn request-btn-bg">
                  <Link
                    href="https://app.memate.com.au/onboarding"
                    target="_blank"
                    className="nav-btn--get-started navbar-link"
                  >
                    <BigHeaderButtonWithGradient text="Get started" background="black" color='white'/>
                  </Link>
                </div>
                {/* <a href="https://dev.memate.com.au/onboarding" target="_blank">Get started</a> */}
              </div>
            </th>
            <th className="imp-plan">
              <div className="plan-header">
                <div className="flexbox">
                  <div className="iconbox">
                    <img src={pricingboll} alt={pricingboll} />
                  </div>
                  {/* <div className="badge">Popular</div> */}
                </div>
                <h3>Business + Work</h3>
                <h2>
                  <strong className="gradientAnimenate">$162.17 </strong>
                  <span>/monthly</span>
                </h2>
                <p>
                  Everything in Business + Employee and Contractor Management
                </p>
                <div
                  id="request-btn-pricing"
                  className="request-btn request-btn-bg"
                >
                  <Link
                    href="https://app.memate.com.au/onboarding"
                    target="_blank"
                    className="nav-btn--get-started get-started-border-box  navbar-link"
                  >
                    <BigHeaderButtonWithGradient text="Get started" background="white" color='black'/>
                  </Link>
                </div>
                {/* <a className="getstartedBtnPricing"  href="https://dev.memate.com.au/onboarding" target="_blank">Get started</a> */}
              </div>
            </th>
            <th>
              <div className="plan-header">
                <div className="flexbox">
                  <div className="iconbox">
                    <img src={pricingboll} alt={pricingboll} />
                  </div>
                </div>
                <h3>Enterprise</h3>
                <h2>Contact us</h2>
                <p>Unlimited Customization to Your Needs</p>
                {/* <a href="/contact-us" target="_blank">Contact us</a> */}
                <div className="request-btn request-btn-bg">
                  <Link
                    href="/contact-us"
                    target="_blank"
                    className="nav-btn--get-started navbar-link"
                  >
                    <BigHeaderButtonWithGradient text="Contact us" background="black" color='white'/>
                  </Link>
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="tdPaddingStyle">
          <tr>
            <td>
              Sales Management
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Quotation
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Quote Calculation
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Supplier Database
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Project Management
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Cost Management
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Real Time Profitability
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Executive Statistic{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Monthly Targets{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              SMS
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Emails
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Invoicing
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Expenses
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              Mobile Application
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Employee Management{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Contractor database{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Job Scheduling{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Shift Management
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Chat
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>Contractor Payment Management</td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              Your own local server set up{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Customisations for your industry
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>{" "}
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              Custom workflow{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              Unique integrations{" "}
              <sup>
                <img src={pricingTah} alt="pricingTah" />
              </sup>
            </td>
            <td>-</td>
            <td>-</td>
            <td>
              <img src={checkIcon} alt="checkIcon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PricingLightTable;
