import React from "react";
import style from './database.module.scss';
import Link from "next/link";
const AutomotiveDatabase = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.spacingLeft} ${style.flexContentWrap}`}>
<h4>Intelligent </h4>
<h3>Supplier and Client</h3>
<h2>Database Management</h2>
    <p>Track all your history with suppliers and clients using a comprehensive database. Motivate your team by 
      setting target results and rewarding top-performing workers for their achievements.</p>
      <Link href="/features/supplier-management-software">Supplier Management</Link>
      
</div>
<div className={style.flexImageBox}>
  <img  src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/automative-database-management.svg" alt="database-management"/>
</div>
</div>
</> 
  );
};

export default AutomotiveDatabase;

