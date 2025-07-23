import React from 'react'
import './style.css';
import StartupsHeader from './startups-header';
import StartupsBussinessManagement from './startups-bussiness-managment';
import StartupsCrousel from './startups-crousel';
import StartupsMoreSpecific from './startups-more-specific';
import StartupsQuesitonAndAns from './startups-question-ans';
import ReadMoreData from './startups-read-more';


const StartupsPageContent = ({postsLatestMainIndustry}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <StartupsHeader/>
        <StartupsBussinessManagement/>
        <StartupsCrousel/>
        <StartupsMoreSpecific/>
        <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/>
        <StartupsQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default StartupsPageContent
