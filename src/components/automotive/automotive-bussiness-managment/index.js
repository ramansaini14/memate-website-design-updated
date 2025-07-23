import React from 'react'
import './style.css'
import AutomotiveEfficient from './automotive-efficient'
import AutomotiveIntuitive from './automotive-Intuitive'
import AutomotiveScheduling from './automotive-scheduling'
import AutomotiveContractor from './automotive-contractor'
import AutomotiveProfitability from './automotive-profitability'
import AutomotiveDatabase from './automotive-database'
import AutomativeWorkshop from './automative-workshop'
const AutomotiveBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <p className="industry-bussiness-management-heading">Business Management </p>
      <span className='industry-bussinees-content automotive-bussinees-content-wd gradientAnimenate'>software for auto detailing shops</span>
      <span className='industry-bussinees-content-2 gradientAnimenate'>MeMate is your solution.</span>
      <p className='industry-bussinees-content-2-description'>Here’s the solution for car wrapping and detailing businesses. We’ve designed and tested meMate specifically for you—robust, simple to use, and proven in the field.</p>
  
      <div className='industry-bussiness-category-wrapper'>
            <AutomotiveEfficient/>
            <AutomotiveIntuitive/>
            <AutomotiveScheduling/>
            <AutomotiveContractor/>
            <AutomotiveProfitability />
            <AutomotiveDatabase/>
            <AutomativeWorkshop/>
      </div>
    </div>
  )
}

export default AutomotiveBussinessManagement
