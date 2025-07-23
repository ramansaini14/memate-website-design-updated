import React from 'react'
import './style.css';
import IndustryHeader from './industry-header';
import IndustryBussinessManagement from './industry-bussiness-managment';
import IndustryCrousel from './industry-crousel';
import IndustryMoreSpecific from './industry-more-specific';
import IndustyQuesitonAndAns from './industry-question-ans';
import ReadMoreData from './industry-read-more';


const IndustryPageContent = ({postsLatestMainIndustry}) => {
 
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <IndustryHeader/>
        <IndustryBussinessManagement/>
        <IndustryCrousel/>
        <IndustryMoreSpecific/>
        <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/>
        <IndustyQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default IndustryPageContent
