import React from "react";
import style from './custom.module.scss';
import Link from 'next/link';
const StartupsCustom = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Innovative</h4>
<h3>Custom Project Status </h3>
<h2>And Stages</h2>
    <p>Create custom statuses and stages for your projects, keeping clients updated via SMS or email. Add stages, 
      assign tasks, and control everything from one easy-to-use screen in meMate.</p>
      <Link href="/features/client-management-software">Management</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/custom-1921.svg" alt="custom 1921"/>
</div>
</div>
</> 
  );
};

export default StartupsCustom;

