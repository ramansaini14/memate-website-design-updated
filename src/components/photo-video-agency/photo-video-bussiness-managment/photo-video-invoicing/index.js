import React from "react";
import style from './invoicing.module.scss';
import Link from "next/link";
const PhotoInvoicing = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/photo-video-invoicing.svg" alt="photo-video-invoicing"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>User-friendly</h4>
<h3>Invoicing </h3>
<h2>Easy</h2>
    <p>Invoice your client with the click of a button once the quote is approved. 
      Add deposit payments and receive payments via debit or credit cards. Easily resend invoices with the 
      remaining due amount—all of this with a simple, easy-to-use solution.</p>
      <Link href="/features/invoicing-software">Invoice</Link>
</div>

</div>

</> 
  );
};

export default PhotoInvoicing;


