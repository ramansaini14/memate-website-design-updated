import React from "react";
import style from './industry.module.scss';
import Link from "next/link";
const IndustryPowerfulStreamline = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamlined-02.svg" alt="streamlined-02"/>
  <img className={style.last} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/streamlined-01.svg" alt="streamlined-01"/>
</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Powerful</h4>
<h3>Streamlined</h3>
<h2>Project Management</h2>
    <p> MeMate offers powerful project management capabilities, allowing you to efficiently track and manage all 
      your creative projects. From initial concept to final delivery, our software ensures that your team stays 
      organised and productive throughout the entire creative workflow.</p>
      <Link href="/features/project-management-software">Management</Link>
</div>
</div>
</>


  
  );
};

export default IndustryPowerfulStreamline;
