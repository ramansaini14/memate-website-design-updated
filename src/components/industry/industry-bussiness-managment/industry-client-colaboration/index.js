import React from "react";
import style from './agile.module.scss';
import Link from "next/link";
const ClientCollaboration = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/agile-main.svg" alt="agile-main"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Agile</h4>
<h3>Client Collaboration</h3>
<h2>Made Easy</h2>
    <p>Update clients via SMS or email directly from the project card, with the entire 
      communication history stored in one place. meMate ensures timely communication and updates are effortlessly managed.</p>
      <Link href="/features/client-management-software">Clients</Link>
</div>

</div>
</> 
  );
};

export default ClientCollaboration;


