import React from "react";
import style from './tailore.module.scss';
import Link from "next/link";
const TailoredMarketing = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-insightful.svg" alt="industries-insightful"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Insightful</h4>
<h3>Comprehensive</h3>
<h2>Repair History</h2>
    <p>meMate keeps a complete history of all repairs, item IDs, and customer details in one organised place. 
      Nothing is overlooked, and everything stays in order, 
      giving you full accountability and easy access to past records whenever you need them.</p>
      <Link href="/features/client-management-software">Clients</Link>
</div>

</div>
</> 
  );
};

export default TailoredMarketing;

