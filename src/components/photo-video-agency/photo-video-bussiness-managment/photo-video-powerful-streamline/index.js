import React from "react";
import style from './photo-masterful.module.scss';
import Link from "next/link";
const PhotoMasterful = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap}`}>
<div className={style.flexImageBox}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-masterful.svg" alt="masterful"/>
  <img className={style.last} src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industries-masterful01.svg" alt="masterful-01"/>
</div>
<div className={`${style.flexContentWrap} ${style.spacingRight}`}>
<h4>Fast</h4>
<h3>Masterful</h3>
<h2>Project Management</h2>
    <p>Imagine managing a project that involves taking photos and videos across multiple locations with multiple 
      contractors. With meMate, it’s a breeze. You can 
      easily add tasks and assign jobs from one place with just a few clicks, streamlining your entire workflow.</p>
      <Link href="/features/project-management-software">Management</Link>
</div>
</div>
</>


  
  );
};

export default PhotoMasterful;
