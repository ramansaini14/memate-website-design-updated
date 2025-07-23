import React from "react";
import style from './efficient.module.scss';
import Link from "next/link";
const AutomotiveEfficient = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting.svg" alt="accurate-quoting"/>
  <img className={style.last} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/accurate-quoting01.svg" alt="accurate-quoting01"/>
</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Efficient</h4>
<h3>Fast and</h3>
<h2>Accurate Quoting</h2>
    <p>Quote your customers in seconds using preset products and services, ensuring accuracy and eliminating the risk of underquoting.</p>
      <Link href="/features/sales-management-tools">Sales Pipeline</Link>
</div>
</div>
</>


  
  );
};

export default AutomotiveEfficient;
