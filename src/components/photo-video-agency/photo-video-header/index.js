import React from 'react'
import './style.css'
import Link from "next/link";
const PhotoHeader = () => {
  return (
    <div className='photo-video-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img
            className="PhotoAndVideo"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/photographersAndVideo3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/photographersAndVideo2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/photographersAndVideo1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/photographersAndVideo3x.png'}
            // alt="contact us main image"
            // width={400} height={400}
          />
      <h1 className='photo-video-top-heading'>Software for Photo & Video Agencies</h1>
      <p className='photo-video-middle-heading'>Photo & Video <br></br>Agency</p>
      <p className='photo-video-heading-content'>meMate is designed to suit creative agencies that produce content. It is ideal for companies that need to manage employees and contractors to produce photo and video content, keep track of all variables and people, and ensure the project stays within budget. meMate – project management software for creative agencies.</p>
      <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='photo-video-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default PhotoHeader
