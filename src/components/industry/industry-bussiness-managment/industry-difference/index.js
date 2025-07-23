import React from "react";
import style from './agile.module.scss';
import Link from "next/link";
const IndustryDifference = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.flexImageBox} ${style.spacingLeft}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/notification-img.svg" alt="Notification"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Agile</h4>
<h3>Experience</h3>
<h2>the Difference</h2>
    <p>meMate is designed to facilitate collaboration with contractors at different levels. 
      It allows for easy file sharing and ensures clear, transparent communication and remuneration for all parties involved.</p>
      <Link href="/features/contractor-management-software">Contractors</Link>
</div>

</div>
</> 
  );
};

export default IndustryDifference;



