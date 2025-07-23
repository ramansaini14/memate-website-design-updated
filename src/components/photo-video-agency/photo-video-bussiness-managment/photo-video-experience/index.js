import React from "react";
import style from './experience.module.scss';
import Link from "next/link";
const PhotoExperience = () => {
  return (
<>
<div className={`${style.flexboxWrap} ${style.bgContentWrap} ${style.sectionTopSpace}`}>
<div className={`${style.flexImageBox} ${style.spacingLeft}`}>
  <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/photo-video-experience.svg" alt="photo-video-experience"/>
</div>
<div className={`${style.spacingRight} ${style.flexContentWrap}`}>
<h4>Collaborative</h4>
<h3>Experience</h3>
<h2>The Control</h2>
    <p>View the complete history of your clients’ projects, supplier transactions, and subcontractor 
      activities all in one place. Create a job, assign it to your contractors, and track their
       performance effortlessly. We make it easy for you to stay organised and in control.</p>
      <Link href="/features/project-management-software">Management</Link>
</div>

</div>
</> 
  );
};

export default PhotoExperience;



