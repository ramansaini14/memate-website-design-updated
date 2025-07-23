import { useState, useEffect } from 'react';  
import "./style.css";
import MiddleSection from "./knowledge-base-middle-section";
import { Helmet } from 'react-helmet-async';
const KnowledgeBaseMain = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/knowledgeBaseMain.png";

const KnowledgeBaseComponent = () => {


  return (
    <>
    <Helmet>
    <title>MeMate Knowledge Base | User Guides & Support Docs</title>
    <meta name="description" content="Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system." />
    <meta property="og:title" content="MeMate Knowledge Base | User Guides & Support Docs" />
      <meta property="og:description" content="Learn how to use MeMate with step-by-step tutorials, setup guides, and feature walkthroughs. Everything you need to get the most out of your system." />
</Helmet>
      <div className="kb-main-section">
        <div className="kb-main-heading">knowledge <br /> base</div>
        <h1 className="metatags">MeMate Help Centre & User Documentation</h1>
        <div className="kb-main-image KnowledgeBaseMain">
          <img src={KnowledgeBaseMain} alt="contact us main image"  />
        </div>
      </div>
      <MiddleSection />
      <div>
      </div>
    </>
  );
};

export default KnowledgeBaseComponent;
