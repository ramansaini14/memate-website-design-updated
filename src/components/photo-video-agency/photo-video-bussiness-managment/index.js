import React from 'react'
import './style.css'
import PhotoMasterful from './photo-video-powerful-streamline'
import PhotoCreative from './photo-video-creative'
import PhotoStrategicChat from './photo-video-chat'
import PhotoSimplified from './photo-video-simplified'
import PhotoInvoicing from './photo-video-invoicing'
import Photopackages from './photo-video-packages'
import PhotoExperience from './photo-video-experience'
const PhotoBussinessManagement = () => {
  return (
    <div className='industry-bussiness-management-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      {/* <img
            className="PhotoAndVideo"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'}
            alt="contact us main image"
            // width={400} height={400}
          /> */}
      <p className="industry-bussiness-management-heading">Business Management </p>
      <span className='industry-bussinees-content photo-agency-wb gradientAnimenate'>software for photographers & videographers </span>
      {/* <div className='industry-bussiness-sub-content'>
        <p className='industry-bussiness-sub-content-heading'>Why MeMate works exceptionally well for creative agencies</p>
        <p className='industry-bussiness-sub-content-description'>Are you looking for the perfect project management <br></br>software for your creative agency?</p>
      
      </div> */}
      <span className='industry-bussinees-content-2 gradientAnimenate'>meMate is your solution.</span>
      <p className='industry-bussinees-content-2-description'>Introducing our comprehensive solution, meticulously crafted specifically for companies offering photo and video services. Whether you specialise in photography, videography, or content production, our software is designed to empower your business.</p>
  
      <div className='industry-bussiness-category-wrapper'>
            <PhotoMasterful/>
            <PhotoCreative/>
            <PhotoStrategicChat/>
            <PhotoSimplified/>
            <PhotoInvoicing />
            <Photopackages/>
            <PhotoExperience/>
      </div>
    </div>
  )
}

export default PhotoBussinessManagement
