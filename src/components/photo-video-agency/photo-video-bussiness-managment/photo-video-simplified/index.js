import React from "react";
import style from './simplified.module.scss';
import Link from "next/link";
const PhotoSimplified = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Economical</h4>
<h3>Simplified </h3>
<h2>Shift Management 
Capabilities</h2>
    <p>Easily manage shifts for your team with meMate’s built-in shift management features. Assign, track, 
      and adjust work schedules seamlessly, ensuring that 
      everyone is where they need to be, on time, and with full visibility into availability.</p>
      <Link href="/features/team-communication-tools">Management</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/photo-video-simplified.svg" alt="photo-video-simplified"/>
</div>
</div>
</> 
  );
};

export default PhotoSimplified;

