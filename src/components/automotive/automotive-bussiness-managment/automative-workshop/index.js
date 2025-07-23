import React from "react";
import style from './workshop.module.scss';
import Link from "next/link";
const AutomativeWorkshop = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.flexImageBox} ${style.spacingLeft}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-workshop-control.svg" alt="automative workshop"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Essential</h4>
<h3>Complete </h3>
<h2>Workshop <br></br>Control</h2>
    <p>Manage quotes, invoices, jobs, purchase orders, and more with full control over your workshop. 
      Every action is recorded in an interconnected system that ensures transparency and cannot be altered. 
      A clean, proven solution for streamlined performance.</p>
      <Link href="/features/invoicing-software">Invoicing </Link> 
</div>

</div>
</> 
  );
};

export default AutomativeWorkshop;



