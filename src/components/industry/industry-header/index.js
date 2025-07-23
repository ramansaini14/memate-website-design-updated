import React from 'react'
import './style.css'
import Link from "next/link";
const IndustryHeader = () => {
  return (
    <div className='industry-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div>
      <img
            className="motivationImage"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/Marketing3x.png'}
            alt="contact us main image"
            width={400} height={400}
          />
      </div>
      <div></div>
      
      <h1 className='industry-top-heading'>Agency Management Software for Creative Agencies</h1>
      <p className='industry-middle-heading'>marketing & <br></br>creative <br></br>agencies</p>
      <p className='industry-heading-content'>MeMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
      <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='industry-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default IndustryHeader
