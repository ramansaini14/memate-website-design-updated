import React from "react";
import style from './mobileapp.module.scss';
import Link from "next/link";
const StartupsMobileApp = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/startups-mobileapp.svg" alt="startups-mobileapp"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Dynamic</h4>
<h3> Mobile App for </h3>
<h2>Contractors and 
Employees</h2>
    <p>meMate offers a dedicated app for your contractors and employees to take shifts and accept jobs directly from your business. This essential feature is perfect for managing multiple 
      team members, and we’ve designed the process to be simple and efficient.</p>
      <Link href="/features/job-management-software">Schedule Jobs</Link>
</div>

</div>

</> 
  );
};

export default StartupsMobileApp;


