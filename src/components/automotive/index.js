import React from 'react'
import './style.css';
import AutomotiveHeader from './automotive-header';
import AutomotiveBussinessManagement from './automotive-bussiness-managment';
import AutomotiveCrousel from './automotive-crousel';
import AutomotiveMoreSpecific from './automotive-more-specific';
import AutomotiveQuesitonAndAns from './automotive-question-ans';
import ReadMoreData from './automotive-read-more';


const AutomotivePageContent = ({postsLatestMainIndustry}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <AutomotiveHeader/>
        <AutomotiveBussinessManagement/>
        <AutomotiveCrousel/>
        <AutomotiveMoreSpecific/>
        <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/>
        <AutomotiveQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default AutomotivePageContent
