import React, { useEffect, useState } from "react";
import style from "./pricing-module.module.scss";
import PricingLightTable from "./pricingtable/pricing-light-table";
import { Helmet } from "react-helmet-async";
import PricingTable from "./dark-pricing-table";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";
import Link from "next/link";


const PricingComponent = () => {
  return (
    <>
      <Helmet>
        <title>
        MeMate Pricing | Affordable Business Management Software
        </title>
        <meta
          name="description"
          content="Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees."
        />
        <meta
          property="og:title"
          content="MeMate Pricing | Affordable Business Management Software"
        />
        <meta
          property="og:description"
          content="Explore MeMate’s transparent pricing plans tailored for Australian small and medium businesses. Discover affordable ERP, CRM, and project management solutions with no hidden fees.
    "
        />
      </Helmet>
      <div
        className={`main-section ${style.mainsectionspace} ${style.mainSection}`}
      >
        <div className={style.mainheading}>pricing</div>
        <div className={style.mainimage}>
          <img
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/pricing3x.png'}
            alt="Pricing main image"
            width={380}
          />
        </div>
        <div className={style.midheading}>
          <h1>Affordable All-in-One Business Solutions | Pricing</h1>
        </div>
     
      </div>
           <div className={style.pricingsmallSec}>
          <h2>Simple, transparent pricing</h2>
          <p>
            We offer a 14-day free trial because we’re confident our software<br/>
            will become indispensable to your business
          </p>
           <div className="dflexbannerbtn dflexbannerbtnp">
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
        </div>
      <PricingTable />
      <PricingLightTable />

      <div className={style.questionText}>
        <h2>
          What you get is <br/> Affordable Pricing for Small Businesses &
          Startups
        </h2>
        <p>
          meMate is an indispensable business tool designed to run your
          business, saving you time and money. It identifies unprofitable
          activities, manages your employees and contractors, and keeps them
          motivated.{" "}
        </p>
        <br></br>{" "}
        <p>
          This unique application sets a new standard for Australian companies.
          When you try it, you will clearly see the benefits, and it will become
          a fundamental tool for you.
        </p>
      </div>
    </>
  );
};

export default PricingComponent;
