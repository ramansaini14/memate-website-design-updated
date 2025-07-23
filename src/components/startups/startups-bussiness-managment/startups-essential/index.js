import React from "react";
import style from './essential.module.scss';
import Link from "next/link";
const StartupsEssential = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.flexImageBox} ${style.spacingLeft}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/startups-essential.svg" alt="startups-essential"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Essential</h4>
<h3>Essential </h3>
<h2>Store Intellectual 
Property</h2>
    <p>meMate uses statistics to store all vital information about your company’s performance, 
      while securely storing files for your intellectual property. This transparency and easy access 
      to records adds value to your business operations and boosts overall efficiency.</p>
      <Link href="/features/business-reporting-tools">Reports </Link>
</div>

</div>
</> 
  );
};

export default StartupsEssential;



