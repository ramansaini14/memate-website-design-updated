import Link from 'next/link';
import style from "./mematefaqs.module.scss";
import "./style.css";
import { Helmet } from "react-helmet-async";
import QuestionAnswer from "./ans-questions";
import NewsSchema from "../blog/news-schema";
const arrowIconBack =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const MemateFaqsComponent = () => {
  const breadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://memate.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "meMate FAQs",
      "item": "https://memate.com.au/faqs"
    },
  ]
} ;

const article =  {
  type: "faqs",
  headline: "MeMate FAQs | Business Management Software Questions",
  author: "admin",
  publisherName: "MeMate FAQs",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  keywords: "MeMate FAQs | Business Management Software Questions",

} 


  return (
    <>
 
      <Helmet>
        <title>MeMate FAQs | Business Management Software Questions</title>
        <meta
          name="description"
          content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch."
        />
        <meta
          property="og:title"
          content="MeMate FAQs | Business Management Software Questions"
        />
        <meta
          property="og:description"
          content="Everything you want to know about MeMate — from features to onboarding. Quick answers for Aussie businesses making the switch.
    "
        />
      </Helmet>
      {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
      <div className="parent-blog">
        <div className="pageBreadcrumbsF">
          <ul className={style.linkstyleDisable}>
            <li>
              <a href="/" className={style.linkstyleDisable}>
                Home
              </a>
            </li>
            /
            <li>
              <a href="/" >
                meMate FAQs
              </a>
            </li>
          </ul>
          <a href="/" className="backButStories">
            <img src={arrowIconBack} alt="Arrow" /> Back
          </a>
        </div>
        <div className={`${style.mainMenuPagesF}`}>
          <div className={`titleHead ${style.mainHeadTitleF}`}>
            <h2>FAQs</h2>
            <div className={style.faqman}>
                 <img src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1748587435/faq-man_zfwpjv.png" alt="FAQ" />
            </div>

          </div>
          <QuestionAnswer />
        </div>
      </div>
    </>
  );
};

export default MemateFaqsComponent;
