import React from "react";
import style from './profitability.module.scss';
import Link from "next/link";
const AutomotiveProfitability = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automotive-profitability.svg" alt="automotive-profitability"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Strategic</h4>
<h3>Expense and  </h3>
<h2>Profitability Tracking</h2>
    <p>Allocate material expenses to each project to clearly see the profitability of every vehicle. Assign employees and contractors to 
      track time and money spent on each project for a comprehensive view of costs.</p>
      <Link href="/features/business-reporting-tools">Reports</Link>
</div>

</div>

</> 
  );
};

export default AutomotiveProfitability;


