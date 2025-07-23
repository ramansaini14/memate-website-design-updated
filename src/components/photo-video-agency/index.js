import React from 'react'
import './style.css';
import PhotoHeader from './photo-video-header';
import PhotoBussinessManagement from './photo-video-bussiness-managment';
import PhotoCrousel from './photo-video-crousel';
import PhotoMoreSpecific from './photo-video-more-specific';
import PhotoQuesitonAndAns from './photo-video-question-ans';
import ReadMoreData from './photo-video-read-more';


const PhotoPageContent = ({postsLatestMainIndustry}) => {
  return (
    <>
    <div className='industry-page-wrapper'>
      <div className='industry-page-parent'>
        <PhotoHeader/>
        <PhotoBussinessManagement/>
        <PhotoCrousel/>
        <PhotoMoreSpecific/>
        <ReadMoreData postsLatestReadMore={postsLatestMainIndustry}/>
        <PhotoQuesitonAndAns/>
      </div>
    </div>
    </>
  )
}

export default PhotoPageContent
