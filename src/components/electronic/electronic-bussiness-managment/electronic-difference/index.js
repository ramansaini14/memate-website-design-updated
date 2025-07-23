import React from "react";
import style from './agile.module.scss';
import Link from "next/link";
const ElectronicDifference = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.flexImageBox} ${style.spacingLeft}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Messages.svg" alt="Messages"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Seamless</h4>
<h3>Seamless</h3>
<h2>Communication 
and Task Management</h2>
    <p>meMate’s internal chat helps your team resolve issues quickly, while notes allow for effective 
      communication and information sharing. The task management feature 
      lets you run your entire business from one platform, keeping everything organised and efficient.</p>
      <Link href="/features/time-tracking-software">Chat</Link>
</div>

</div>
</> 
  );
};

export default ElectronicDifference;



