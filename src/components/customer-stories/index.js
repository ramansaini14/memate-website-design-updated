import React from "react";
import "./style.css";
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';

const CustomerStoriesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesCamera.png";
const customersoriesProImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesPro.png";
const customersoriesEliteImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesElite.png";
const customersoriesBoatImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesBoat.png";
const customersoriesSortedImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/customersoriesSorted.jpg";

function CustomerStories() {
  return (
<>
<Helmet>
    <title>How Aussie Businesses Use MeMate | Customer Stories & Results</title>
    <meta name="description" content="Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results." />
    <meta property="og:title" content="How Aussie Businesses Use MeMate | Customer Stories & Results" />
      <meta property="og:description" content="Real stories from Aussie businesses using MeMate to run smoother. See how SMEs in trades, services, and more use MeMate to get results.
    " />
</Helmet>
<div className="parent-blog-page customerstoriespage">
      <div className="parent-blog">
        <div className="heading-container">
        <div className="heading-blog-description">
            <h1 className="heading-text-blog2">How MeMate Helps Businesses Run Better</h1>
          </div>
          <h2 className="heading-blog2">
          customer  <br></br>stories
          </h2>
          <div className="heading-blog-description">
            <h1 className="heading-text-blog2">Power of meMate Put to Work</h1>
          </div>
          <div className="small-headingF"> <p>How Small Businesses Use meMate in Their Everyday Activities to Increase Profitability</p></div>
       
        </div>
<div className="customerstoriesGrid">
<div className="innerGrid">
 <Link href='/customer-stories/camera-fix'><img
    className="img-container-stories"
    src={CustomerStoriesImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">Camera Fix</div>
              <div className="date-heading-title"><Link href='/customer-stories/camera-fix'>Empowering a Boutique Camera Repair Shop to Manage Business and Serve Over 100 Clients Monthly</Link></div>
             <Link href='/customer-stories/camera-fix' className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/pro-vinyl"><img
    className="img-container-stories"
    src={customersoriesProImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">
              <div className="category">PROvinyl</div>
              <div className="date-heading-title"><Link href="/customer-stories/pro-vinyl">Running a Car Wrapping Company on meMate</Link></div>
             <Link href="/customer-stories/pro-vinyl" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/elite-life"><img
    className="img-container-stories"
    src={customersoriesEliteImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Elite Life</div>
              <div className="date-heading-title"><Link href="/customer-stories/elite-life">Using meMate to Run a Private Membership Club</Link></div>
             <Link href="/customer-stories/elite-life" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/boat-wizard" ><img
    className="img-container-stories"
    src={customersoriesBoatImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Boat Wizard</div>
              <div className="date-heading-title"><Link href="/customer-stories/boat-wizard">We quote and invoice all our marine engineering services.</Link></div>
             <Link href="/customer-stories/boat-wizard" className="readMoreBut">Read More</Link>
            </div>
          </div>
<div className="innerGrid">
 <Link href="/customer-stories/sorted-media" ><img
    className="img-container-stories"
    src={customersoriesSortedImage}
    alt="Blog featured image"
  /></Link> 
            <div className="customerstoriesDetails">  
              <div className="category">Sorted Media</div>
              <div className="date-heading-title"><Link href="/customer-stories/sorted-media">Photography and Videography on Demand</Link></div>
             <Link href="/customer-stories/sorted-media" className="readMoreBut">Read More</Link>
            </div>
          </div>


       </div>
      </div>
    </div>
    </>

  );
}
export default CustomerStories;
