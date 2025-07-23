import React from "react";
import style from './packages.module.scss';
import Link from "next/link";
const Photopackages = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Dynamic</h4>
<h3>customisable packages </h3>
<h2>And templates</h2>
    <p>Experience customisable packages and templates with tailored preset calculations for all your services. 
      Set hourly rates or cost of sales with margins defined separately for each product or service. This allows you to quote 
      confidently and have your entire company’s products and services organised in one place.</p>
      <Link href="/features/client-management-software">Management</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/photo-video-packages.svg" alt="photo-video-packages"/>
</div>
</div>
</> 
  );
};

export default Photopackages;

