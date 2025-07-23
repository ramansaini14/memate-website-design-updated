import React from "react";
import style from './financial.module.scss';
import Link from "next/link";
const FinanicalManagement = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Powerful and simple</h4>
<h3>Simplified </h3>
<h2>Financial Management</h2>
    <p>Budgeting is made easy in meMate. Based on your quote, you can track the initial project budget at 
      all times and control ongoing expenses and time spent on the project, ensuring you stay on target.</p>
      <Link href="/features/business-statistics-tools">Statistics</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  className={style.spaceImgTop} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/macbook-pro+mockup.svg" alt="macbook"/>
</div>
</div>
</> 
  );
};

export default FinanicalManagement;

