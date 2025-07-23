import React from 'react'
import './style.css'
import StartupsOrganise from './startups-organise'
import StartupsIntuitive from './startups-intuitive'
import StartupsSeamless from './automotive-scheduling'
import StartupsCustom from './startups-custom'
import StartupsMobileApp from './startups-mobileapp'
import StartupsEffective from './startups-effective'
import StartupsEssential from './startups-essential'
const StartupsBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className="industry-bussiness-management-heading">Business Management for</p>
      <span className='industry-bussinees-content gradientAnimenate'>  Startups and New Companies</span>
      {/* <div className='industry-bussiness-sub-content'>
        <p className='industry-bussiness-sub-content-heading'>Why MeMate works exceptionally well for creative agencies</p>
        <p className='industry-bussiness-sub-content-description'>Are you looking for the perfect project management <br></br>software for your creative agency?</p>
      
      </div> */}
      <span className='industry-bussinees-content-2 gradientAnimenate'>MeMate is your solution.</span>
      <p className='industry-bussinees-content-2-description'>meMate provides startups and new businesses with the tools to manage operations smoothly from the start. With features like project management, invoicing, expense tracking, and client communication, meMate helps you establish a strong foundation for your business growth.</p>
  
      <div className='industry-bussiness-category-wrapper'>
            <StartupsOrganise />
            <StartupsIntuitive/>
            <StartupsSeamless/>
            <StartupsCustom/>
            <StartupsMobileApp />
            <StartupsEffective/>
            <StartupsEssential/>
      </div>
    </div>
  )
}

export default StartupsBussinessManagement
