import "./style.css";
import MiddleSection from "./brand-middle-section";
import style from './brand-module.module.scss';
import { Helmet } from 'react-helmet-async';
import { useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const BrandComponent = () => {

  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
     <Helmet>
    <title>MeMate Brand Assets | Logos, Guidelines & Media Kit</title>
    <meta name="description" content="Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date." />
    <meta property="og:title" content="MeMate Brand Assets | Logos, Guidelines & Media Kit" />
      <meta property="og:description" content="Download official MeMate logos, colours, and branding guidelines. Access our media kit for press, partners, or promotional use. Simple, approved, and up to date." />
    </Helmet>
    {/* <div className="pageBreadcrumbs">
            <ul className={style.linkstyleDisable}>
              <li><Link to='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link to='/supplier-database' className={style.linkstyleDisable}>Supplier database</Link></li>/<li> <Link>Brand</Link></li>
            </ul>
            <Link to='/supplier-database' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
            </div>  */}
      <div className={`kb-main-section ${style.mainHeadinstyle}`}>
      <h2 className="latest-update-text latest-brandMain latest-update-head memate-brand headerPadding">
      brand <br></br>overview
      </h2>
      <h1 className="heading-text-blog">MeMate Brand Assets & Media Kit</h1>
      </div>
      <MiddleSection />
      <div>

      </div>
    </>
  );
};

export default BrandComponent;
