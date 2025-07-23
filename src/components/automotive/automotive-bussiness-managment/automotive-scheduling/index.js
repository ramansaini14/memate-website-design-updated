import React from "react";
import style from './scheduling.module.scss';
import Link from "next/link";
const AutomotiveScheduling = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
<img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-robust.svg" alt="automative-robust" />

</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Robust</h4>
<h3>Project Scheduling </h3>
<h2>and Management</h2>
    <p>Schedule projects with full details and book appointments to reduce no-shows. 
      The unique project management dashboard provides 
      a clear view of all active work, ensuring efficient oversight.</p>
      <Link href="/features/project-management-software">Project Management</Link>
</div>

</div>
</> 
  );
};

export default AutomotiveScheduling;

