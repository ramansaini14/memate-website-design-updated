import "./style.css";
import PricingTable from "../../pricing/dark-pricing-table";
import Link from "next/link";
import TronRequestADemo from "../../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../../layout/hover-button/WhiteButtonBammer";


const SmartInvestment = () => {
  return (
    <div className="smart-investment-wrapper paddingSpaceTop">
        <div className="pricingHeadWrapF">
              <p className="smart-investment-headingF">Smart investment</p>
              <span className="smart-investment-bannerF gradientAnimenate">
                pricing
              </span>
              <div className="smart-investment-descriptionF">
                <span>
                  Plus, we provide a 14-day free trial because we believe our
                  software will become<br/> indispensable to your business.
                </span>
              </div>
            </div>
             <div className="dflexbannerbtn dflexbannerbtnFT dflexbannerbtnp">
                      <div className="request-btn">
                        <Link
                          href="https://app.memate.com.au/requestdemo"
                          target="_blank"
                          className="nav-btn--get-started  navbar-link"
                        >
                            <TronRequestADemo text="Book a Demo" />
                        </Link>
                      </div>
                      <div className="request-btn">
                        <Link
                          href="https://app.memate.com.au/onboarding"
                          target="_blank"
                          className="nav-btn--get-started  navbar-link"
                        >
                            <WhiteButtonBammer text="Start Free Trial"/>
                        </Link>
                      </div>
                </div>
     <PricingTable />
    </div>
  );
};

export default SmartInvestment;
