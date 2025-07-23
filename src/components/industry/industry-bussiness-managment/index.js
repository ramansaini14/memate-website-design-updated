import React from 'react'
import './style.css'
import IndustryPowerfulStreamline from './industry-powerful-streamline'
import IndustryWorkFlowSolution from './industry-workflow-solution'
import TailoredMarketing from './industry-tailored-marketing'
import FinanicalManagement from './industry-financial-management'
import ClientCollaboration from './industry-client-colaboration'
import ScalableCustomizable from './indusry-scalable-customizable'
import IndustryDifference from './industry-difference'
const IndustryBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className="industry-bussiness-management-heading">Business Management</p>
      <span className='industry-bussinees-content gradientAnimenate'>Software for creatives</span>
      <div className='industry-bussiness-sub-content'>
        <p className='industry-bussiness-sub-content-heading'>Why MeMate works exceptionally well for creative agencies</p>
        <p className='industry-bussiness-sub-content-description'>Are you looking for the perfect project management <br></br>software for your creative agency?</p>
      </div>
      <span className='industry-bussinees-content-2 gradientAnimenate'>Look no further than MeMate.</span>
      <p className='industry-bussinees-content-2-description'>Our comprehensive solution is designed specifically for agencies, including marketing agencies, advertising agencies, design agencies, and digital agencies.</p>
      <div className='industry-bussiness-category-wrapper'>
            <IndustryPowerfulStreamline/>
            <IndustryWorkFlowSolution/>
            <TailoredMarketing/>
            <FinanicalManagement/>
            <ClientCollaboration/>
            <ScalableCustomizable/>
            <IndustryDifference/>
      </div>
    </div>
  )
}

export default IndustryBussinessManagement
