import React from "react";
import "./style.css";
import Link from "next/link";
import { Helmet } from "react-helmet-async";
import SuccessStories from "../success-stories";
import NewsSchema from "../blog/news-schema";

const BoatWizard02 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/BoatWizard02.jpg";
const BoatWizard01 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/BoatWizard01.jpg";
const BoatWizard03 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/BoatWizard03.jpg";
const BoatWizard04 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/BoatWizard04.jpg";
const BoatWizard05 = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/BoatWizard05.jpg";
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


function BoatWizard() {
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
      "name": "Customer Stories",
      "item": "https://memate.com.au/customer-stories"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Boat Wizard",
      "item": "https://memate.com.au/customer-stories/boat-wizard"
    },
  ]
} ;

const article =  {
  type: "boat-wizard",
  headline: "Boat Wizard Case Study | Marine Service Business Software Success",
  author: "admin",
  publisherName: "Customer Stories",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  keywords: "Boat Wizard Case Study | Marine Service Business Software Success",

} 
  return (
    <>
    <Helmet>
    <title>Boat Wizard Case Study | Marine Service Business Software Success</title>
    <meta name="description" content="Discover how Boat Wizard streamlined their marine service operations using MeMate's business management software. Real-world success story for marine service businesses." />
    <meta property="og:title" content="Boat Wizard Case Study | Marine Service Business Software Success" />
      <meta property="og:description" content="Discover how Boat Wizard streamlined their marine service operations using MeMate's business management software. Real-world success story for marine service businesses.
    " />
</Helmet>
{article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
      <div className="parent-blog-page customerstoriespage">

        <div className="parent-blog">
          <div className="pageBreadcrumbs">
            <ul>
              <li><a href="/">Home</a></li>/<li> <Link className="MainPageLink" href="/customer-stories"> Customer Stories</Link></li>/<li> <Link href="/customer-stories/boat-wizard">Boat Wizard</Link></li>
            </ul>
            <Link href="/customer-stories" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
          <div className="customerstoriesGrid">
            <h1>How Boat Wizard Perform Their Marine Service Business with MeMate</h1>
            <div className="innerGrid imageOverlyText">
              <div><img
                className="img-container-stories"
                src={BoatWizard01}
                alt="Blog featured image"
              /></div>
              <div className="customerstoriesDetails">
                <div>
                  <div className="category">Boat Wizard</div>
                  <div className="date-heading-title"><span>We quote and invoice all our marine engineering services.</span></div>
                  <Link href="/customer-stories/boat-wizard" className="readMoreBut">Read More</Link>
                </div>
              </div>
            </div>
            <div className="gadientText3">
              <h2 className="centeredText">Boat Wizard is a marine mechanics company based in Sydney, Australia, specialising in servicing, repairing, upgrading, and maintaining boats and yachts. </h2>
            </div>
           

            <div className="innerGrid innerGridwrapper">
              <div><img
                className="img-container-stories"
                src={BoatWizard02}
                alt="Blog featured image"
              /></div>

            </div>
            <div className="wrapperText">
           
          <p>Managing complex projects, coordinating with subcontractors, and ensuring seamless operations are critical to our success. To achieve this, we rely on meMate, a comprehensive business management software that has become an essential part of our day-to-day operations.</p>
          <p>Our work involves a wide range of services, from routine maintenance to intricate repairs and upgrades on yachts. Each project varies in scope and requires careful planning, scheduling, and coordination, especially when working with subcontractors like electricians and plumbers. Keeping track of multiple projects, expenses, and timelines can be challenging without the right tools.</p>
            </div>





            <div className="innerGrid">
              <div><img
                className="img-container-stories"
                src={BoatWizard03}
                alt="Blog featured image"
              /></div>

            </div>
            <div className="wrapperText">
              <h3>meMate has become an unmatched tool in our business operations.</h3>
              <p>meMate has transformed how we manage our business. We use the software to quote customers based on various hourly rates, depending on the job, and then schedule the projects in the meMate calendar. </p>
<p>One of the standout features is the simple project management layout, which allows us to view all projects in one place, scheduled on a monthly timeline. The ability to attach tasks to projects functions like a Gantt chart but is much easier to use. This feature is especially valuable for long-term projects and those with multiple stages.</p>

            </div>




            <div className="innerGrid">
              <div><img
                className="img-container-stories"
                src={BoatWizard04}
                alt="Blog featured image"
              /></div>

            </div>
            <div className="wrapperText">
              <h3>We also leverage meMate’s work feature to manage our subcontractors.</h3>
              <p>It provides a clear, consolidated view of project expenses, making it easy to keep everything in check and visible in one window. This level of transparency is crucial for maintaining control over project costs and ensuring that everything runs smoothly.</p>
            <p>The recurring projects feature has been a blessing for our routine visits and service jobs. We can easily schedule these recurring tasks just once, and meMate takes care of the rest, ensuring that everything happens like clockwork.</p>
            <p>The team at meMate has done a fantastic job in developing this software. We are thrilled with the results and are happy to provide continuous feedback for improvements. Your commitment to listening to our needs and refining the software has made a significant difference in how we operate, and we look forward to continuing this partnership.</p>
            
            </div>


            <div className="innerGrid">
              <div><img
                className="img-container-stories"
                src={BoatWizard05}
                alt="Blog featured image"
              /></div>
            </div>
            <div className="wrapperText">
              <h3>The team at meMate has done a fantastic job in developing this software. </h3>
              <p>We are thrilled with the results and are happy to provide continuous feedback for improvements. Your commitment to listening to our needs and refining the software has made a significant difference in how we operate, and we look forward to continuing this partnership.</p>
             </div>
          </div>
          <div className="ccStories">
            <SuccessStories />
          </div>
        </div>
      </div>
    </>

  );
}
export default BoatWizard;

