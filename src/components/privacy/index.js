// import { useState, useEffect } from 'react';  
import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";
import StickyBox from "react-sticky-box";
import MiddleSection from "./privacy-middle-section";
import style from './privacy-module.module.scss';
import NewsSchema from "../blog/news-schema";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
// import '../App.css'

const PrivacyComponent = () => {
 const breadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://memate.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Privacy",
      "item": "https://memate.com.au/privacy"
    },
  ]
} ;

const article =  {
  type: "privacy",
  headline: "Privacy Policy | MeMate Business Management Software",
  author: "admin",
  publisherName: "Terms of use",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  keywords: "Privacy Policy | MeMate Business Management Software",

} 


  return (
    <>
     <Helmet>
    <title>Privacy Policy | MeMate Business Management Software</title>
    <meta name="description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
    <meta property="og:title" content="Privacy Policy | MeMate Business Management Software" />
      <meta property="og:description" content="Learn how MeMate collects, stores, and protects your data. Our privacy policy explains your rights and how we keep your business information safe." />
</Helmet>
 {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
         <div className="conditionWrrapperF">
                     <div className="pageBreadcrumbs">
                          <ul>
                            <li><a href="/">Home</a></li>/<li> <a className="MainPageLink" href="/privacy">Privacy</a></li>
                          </ul>
                          <a href="/" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</a>
                        </div>
                <div className="tmsheadF">
                 <p className="tos-section-headingF" id="section1">
                   memate
                 </p>
                <h1 className="blackH1Tag">Privacy</h1>
             </div>
             </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default PrivacyComponent;
