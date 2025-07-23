import React from 'react'
import './style.css'
import Link from "next/link";
const ElectronicHeader = () => {
  return (
    <div className='electronic-header-wrapper' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <img
            className="electronicImage"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/ElectronicRepair3x.png'}
            alt="contact us main image"
            // width={400} height={400}
          />
      <h1 className='electronic-top-heading'>Repair Shop Management Software for Electronics Businesses<br/>
      operate efficiently</h1>
      <p className='electronic-middle-heading'>Electronic <br></br>Repair <br></br>Specialists</p>
      <p className='electronic-heading-content'>With MeMate, you can effortlessly communicate with clients and effortlessly submit jobs, all from a centralised and streamlined interface. Say goodbye to scattered systems and embrace the convenience of MeMate for unparalleled business management in the  electronics repair industry.</p>
      <Link href="https://app.memate.com.au/requestdemo" target="_blank"><button className='electronic-heading-button'>Book a Demo</button></Link>
    </div>
  )
}

export default ElectronicHeader
