import React from "react";
import style from './startups-intuitive.module.scss';
import Link from "next/link";
const StartupsIntuitive = () => {
  return (
<>

<div className={`${style.flexboxWrap} ${style.dubleimages} ${style.flexboxWrapstyle} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Intuitive</h4>
<h3>Quick and</h3>
<h2>Professional Quoting</h2>
    <p>With meMate, you can easily generate quotes by selecting preset services and products, sending a professional quote in under a minute. Plus, client details are automatically added to your database for future reference.</p>
      <Link href="/features/sales-management-tools">Sales</Link>
      
</div>
<div className={`${style.flexImageBox}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/startups-intuitive.svg" alt="startups-intuitive"/>

</div>
</div>
</> 
  );
};

export default StartupsIntuitive;

