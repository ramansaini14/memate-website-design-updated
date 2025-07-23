import React from "react";
import style from './effective.module.scss';
import Link from "next/link";
const StartupsEffective = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Modern </h4>
<h3>Effective Communication </h3>
<h2>And Collaboration</h2>
    <p>With meMate, you can easily add notes, leave descriptions for suppliers and projects, and foster collaboration. 
      This builds accountability and ensures smooth communication within your company.</p>
      <Link href="/features/task-management-software">Task Management</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/startups-effective.svg" alt="startups-effective"/>
</div>
</div>
</> 
  );
};

export default StartupsEffective;

