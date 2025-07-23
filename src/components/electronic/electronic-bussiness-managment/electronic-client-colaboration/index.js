import React from "react";
import style from './agile.module.scss';
import Link from "next/link";
const ClientCollaboration = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-quotation.svg" alt="Quotation"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Configurable</h4>
<h3>Quotation</h3>
<h2>System</h2>
    <p>meMate’s quotation system allows you to generate quotes within minutes using 
      preset services and parts with predefined margins or markups. This ensures accurate, quick quoting, 
      helping you avoid underestimating costs while maintaining profitability</p>
      <Link href="/features/internal-communication-tools">Internal Chat</Link>
</div>

</div>

</> 
  );
};

export default ClientCollaboration;


