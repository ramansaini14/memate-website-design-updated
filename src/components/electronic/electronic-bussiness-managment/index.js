import React from 'react'
import './style.css'
import ElectronicPowerfulStreamline from './electronic-powerful-streamline'
import ElectronicWorkFlowSolution from './electronic-workflow-solution'
import TailoredMarketing from './electronic-tailored-marketing'
import FinanicalManagement from './electronic-financial-management'
import ClientCollaboration from './electronic-client-colaboration'
import ScalableCustomizable from './electronic-scalable-customizable'
import ElectronicDifference from './electronic-difference'
const ElectronicBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className="industry-bussiness-management-heading">Business Management</p>
      <span className='industry-bussinees-content industry-bussinees-content-wd gradientAnimenate'>software for repair shops</span>
      {/* <div className='industry-bussiness-sub-content'>
        <p className='industry-bussiness-sub-content-heading'>Why MeMate works exceptionally well for creative agencies</p>
        <p className='industry-bussiness-sub-content-description'>Are you looking for the perfect project management <br></br>software for your creative agency?</p>
      
      </div> */}
      <span className='industry-bussinees-content-2 gradientAnimenate'>MeMate is your solution.</span>
      <p className='industry-bussinees-content-2-description'>Meet MeMate, a complete solution built with repair shops in mind. Whether you’re fixing cameras, phones, 
        computers, or any other electronics, our software is tailored to make your business run smoother and more efficiently.</p>
        <br/>
      <p className='industry-bussinees-content-2-description'>From small shops to large, complex operations, MeMate is easy to use and seamlessly integrates into your daily workflow, helping 
        you stay organised and on top of everything.</p>
      <div className='industry-bussiness-category-wrapper'>
            <ElectronicPowerfulStreamline/>
            <ElectronicWorkFlowSolution/>
            <TailoredMarketing/>
            <FinanicalManagement/>
            <ClientCollaboration/>
            <ScalableCustomizable/>
            <ElectronicDifference/>
      </div>
    </div>
  )
}

export default ElectronicBussinessManagement
