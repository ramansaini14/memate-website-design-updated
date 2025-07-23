import React from 'react'
import style from './thankyou.module.scss';
import Images from "../../assests/images";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Helmet } from 'react-helmet-async';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
// import './thankyou.css'

const ThankYouComponents  = () => {

  const router = useRouter();

  return (
   <>
    <Helmet>
    <title>Thank You | Your Request Has Been Successfully Submitted</title>
    <meta name="description" content="Thank you for submitting your request to MeMate. Our team has 
    received your inquiry and will get back to you shortly to assist with your needs." />
    <meta property="og:title" content="Thank You | Your Request Has Been Successfully Submitted" />
    <meta property="og:description" content="Thank you for submitting your request to MeMate. Our team has 
    received your inquiry and will get back to you shortly to assist with your needs." />
  </Helmet>
    <div className={`${style.Errorpage}`}>
    <div className={`${style.imgText}`}>
        <h3>thank <br></br> You </h3>
        <img className={style.images} src={Images.koalaTransparent} alt={Images.koalaTransparent} />
      </div>
    <div className={`${style.TextHead}`}>
        <h1 className='h1tagsseo fontSize42-2'>Thank You for Reaching Out to MeMate!</h1>
        <p className='fontAndText'>Your support means the world to us. We’re excited to continue this journey together!</p>
        <div className={`${style.button}`}>
        <Link href="#" onClick={() => router.back()} ><img src={arrowIconBack} alt="Arrow" /> <span className='ssMDFont'>Back</span></Link>
        <Link href="/" > <span className='ssMDFontBlack'>Home</span></Link>
      </div>
      </div>
      </div> 
   </> 
  )
}

export default ThankYouComponents 