import React from "react";
import style from './scalable.module.scss';
import Link from "next/link";
const ScalableCustomizable = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Simplify</h4>
<h3>Scalable</h3>
<h2>and Customisable</h2>
    <p>meMate allows agencies to manage separate locations or multiple departments with ease, thanks to a multi-location system. 
      You can keep offices or brands distinct while sharing knowledge and calculators across teams. With the built-in results and tracking system, 
      you can monitor performance, scale your operations, and streamline workflows—all with just a few clicks.</p>
      <Link href="/features/profitability-and-budgeting-software">Profitability</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  className={style.spaceImgTop} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/scalable-main.svg" alt="scalable"/>
</div>
</div>
</> 
  );
};

export default ScalableCustomizable;

