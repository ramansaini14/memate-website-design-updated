import React from 'react'
import './style.css'
import Link from 'next/link'
const AutomotiveHeader = () => {
  return (
    <div className='automotive-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img
            className="autoMotive"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/CarDetailing3x.png'}
            // alt="contact us main image"
            // width={400} height={400}
          />
     <h1 className='startup-top-heading'>Business Management Software for the Automotive Industry</h1>
      <p className='startup-middle-heading'>For Car<br/> Wrapping & <br/>Detailing  </p>
      <p className='startup-heading-content'>meMate streamlines operations for car wrapping and detailing services, managing workflows, contractors, and customer communication—all in one easy-to-use platform.</p>
      <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='startup-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default AutomotiveHeader
