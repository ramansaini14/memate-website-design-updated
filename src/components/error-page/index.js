import React from 'react'
import style from './404Page.module.scss';
import Images from "../../assests/images";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Helmet } from 'react-helmet-async';
import { Button } from 'react-scroll';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const PageNotFound = ({redirects}) => {
  const router = useRouter();
  const handleClickBack = () => {
    if (window.history.length > 2) {
      window.history.go(-redirects);
    } else {
      router.push("/");
    }
  }
  return (
    <>
      <Helmet>
        <title>404 Error - Page Not Found | Memate</title>
        <meta name="description" content="Oops! The page you’re looking for doesn’t exist. It might have been moved, renamed, or deleted. Return to the homepage or use the navigation menu to find what you need." />
        <meta property="og:title" content="404 Error - Page Not Found | Memate" />
        <meta property="og:description" content="Oops! The page you’re looking for doesn’t exist. It might have been moved, renamed, or deleted. Return to the homepage or use the navigation menu to find what you need.
    " />
      </Helmet>
      <div className={`${style.Errorpage}`}>
        <div className={`${style.imgText}`}>
          <h1>404</h1>
          <img className={style.images} src={Images.PngwingPic} alt={Images.PngwingPic} />
        </div>
        <div className={`${style.TextHead}`}>
          <h2>We can’t find this page</h2>
          <p>The page you are looking for doesn't exist or has been moved.</p>
          <div className={`${style.button}`}>
          <Button onClick={handleClickBack}><img src={arrowIconBack} alt="Arrow" /> <span style={{color: 'black'}}>Back</span></Button>
          <Link href="/" >Home</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageNotFound