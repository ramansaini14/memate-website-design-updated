import React from "react";
import style from './intuitive.module.scss';
import Link from "next/link";
const AutomotiveIntuitive = () => {
  return (
<>

<div className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Intuitive</h4>
<h3>Quote Follow-Up</h3>
<h2>and Acceptance </h2>
    <p>Easily follow up on quotes and let customers accept with a single click, reducing miscommunication and streamlining payments for a smoother process.</p>
      <Link href="/features/business-quote-calculator">Calculators</Link>
      
</div>
<div className={`${style.flexImageBox}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/intuitive-inovice.svg" alt="intuitive-inovice"/>

</div>
</div>
</> 
  );
};

export default AutomotiveIntuitive;

