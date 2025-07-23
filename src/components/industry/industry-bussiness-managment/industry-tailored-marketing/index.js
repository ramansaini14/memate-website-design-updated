import React from "react";
import style from './tailore.module.scss';
import Link from "next/link";
const TailoredMarketing = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/tailored-main-img.svg" alt="tailored-main"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Ads Agencies</h4>
<h3>Tailored</h3>
<h2>for Marketing Agencies</h2>
    <p>Our calculation system allows you to preset packages and services, including all the different offerings your agency provides. This helps you quote your 
      customers faster than anyone else, streamlining the entire process.</p>
      <Link href="/features/business-quote-calculator">Calculators</Link>
</div>

</div>
</> 
  );
};

export default TailoredMarketing;

