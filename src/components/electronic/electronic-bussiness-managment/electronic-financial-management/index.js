import React from "react";
import style from './financial.module.scss';
import Link from "next/link";
const FinanicalManagement = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Detailed</h4>
<h3>Parts and </h3>
<h2>Expense Tracking</h2>
    <p>meMate enables you to account for all parts and link expenses directly to each active project. 
      This feature allows you to easily control the budget for every repair and get a clear view of the 
      operational profitability, ensuring efficient cost management and financial oversight.</p>
      <Link href="/features/time-tracking-tools">Expense</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  className={style.spaceImgTop} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/MacbookPromockup.svg" alt="MacbookPromockup"/>
</div>
</div>
</> 
  );
};

export default FinanicalManagement;

