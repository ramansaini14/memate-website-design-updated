import React from "react";
import style from './organise.module.scss';
import Link from 'next/link';
const StartupsOrganise = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/startups-organise.svg" alt="startups-organise"/>

</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Fast</h4>
<h3>Organise </h3>
<h2>Your Products and Services</h2>
    <p>meMate is the perfect solution for setting up your business. Create departments and sub-departments, categories and subcategories, and outline costs or time estimates for each service. It’s a streamlined way to structure your offerings and get your business started on the right track.</p>
      <Link href="/features/business-quote-calculator">Calculators</Link>
</div>
</div>
</>


  
  );
};

export default StartupsOrganise;
