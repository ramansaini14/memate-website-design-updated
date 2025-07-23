import React from "react";
import "./style.css";
import Link from "next/link";
import Heart from "../../svg/heart";
import { LazyLoadImage } from "react-lazy-load-image-component";
const FacebookIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-facebook.svg";
const LinkdinIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-linkdin.svg";
const InstagramIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/footer-instagram.svg";
const AppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/app-store-icon.svg";
const PlayStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/play-store-icon.svg";
const MacAppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/mac-app-store.svg";
const MicrosoftAppStoreIcon = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/microsoft-app-store.svg"

const Footer = () => {
  return (
    <>
  
    <div className="footer-section">
      <div className="main-footer">
        <div className="section1" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5200"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <div className="heading-section">
            <div>
              <p className="footer-heading">Down to Business &nbsp;
                {/* <span className="trade-mark">TM</span> */}
                </p>
            </div>
            <div className="footer-icons">
              <div><Link href="https://www.facebook.com/mematesoftware/"><img src={FacebookIcon} alt="FacebookIcon"/></Link></div>
              <div><Link href="https://www.instagram.com/memateapp/"><img src={InstagramIcon} alt="InstagramIcon" /></Link></div>
              <div><Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530"><img src={LinkdinIcon} alt="LinkdinIcon" /></Link></div>
            </div>
          </div>
          <div className="download-section">
            <div className="download-heading">Download</div>
            <div className="application-section">
              <p>Mobile Application for Employees and Contractors</p>
              <div className="application-icons">
                <div><Link href="https://play.google.com/store/apps/details?id=com.memate&pli=1"><img src={AppStoreIcon} alt="AppStoreIcon" /></Link></div>
                <div><Link href="https://apps.apple.com/in/app/memate/id1563935364"><img src={PlayStoreIcon} alt="PlayStoreIcon" /></Link></div>
              </div>
            </div>
            <div className="application-section">
              <p>Desktop Application for Business Management</p>
              <div className="application-icons">
                <div><img src={MacAppStoreIcon} alt="MacAppStoreIcon" /></div>
                <div><img src={MicrosoftAppStoreIcon} alt="MicrosoftAppStoreIcon" /></div>
              </div>
            </div>
            <div className="paragraph-section">
              <p>Apple and the Apple logo are trade marks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trade marks of Google LLC.</p>
            </div>
          </div>
        </div>
        <div className="section2" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="5500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
          <div className="footer-links">
            <div className="links">
              <p className="link-heading">Company</p>
              <div className="page-links">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target="_blank">Carreers</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Business Software</p>
              <div className="page-links" style={{width:"117px"}}>
                <Link href="/pricing">Plan and Pricing</Link>
                <Link href="/features">Features</Link>
                <Link href="/industries">Industries</Link>
                
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Features</p>
              <div className="page-links" style={{width:"141px"}}>
              <Link href="/features/client-management-software">Client Management</Link>
              <Link href="/features/supplier-management-software">Supplier Management</Link>
              <Link href="/features/sales-management-tools">Sales Pipeline</Link>
              <Link href="/features/project-management-software">Project Management</Link>
              <Link href="/features/team-communication-tools">Communication</Link>
              <Link href="/features/job-management-software">Schedule Jobs</Link>
              <Link href="/features/invoicing-software">Invoicing</Link>
              <Link href="/features/business-statistics-tools">Statistic</Link>
              <Link href="/features/business-reporting-tools">Reports</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Resources & Tools</p>
              <div className="page-links" style={{width:"118px"}}>
               <Link href="/knowledge-base">Knowledge Base</Link>
                <Link href="/customer-stories">Customer Stories</Link>
                <Link href="/supplier-database">Supplier Database</Link>
                <Link href="/brand">Brand</Link>
                <Link href="/sitemap">Sitemap</Link>
                <Link href="https://app.memate.com.au/requestdemo" target="_blank">Request a Demo</Link>
                <Link href="https://app.memate.com.au/onboarding" target="_blank">My Account</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Industries</p>
              <div className="page-links" style={{width: "181px"}}>
              <Link href="/industries/business-software-for-creative-agencies">Creative Agencies</Link>
              <Link href="/industries/software-for-electronic-repair-businesses">Electronic Repair Specialists</Link>
              <Link href="/industries/software-for-photo-video-agencies">Photo & Video Agency</Link>
              <Link href="/industries/business-software-for-automotive-industry">Automotive</Link>
              <Link href="/industries/business-management-software-for-startups">Startups</Link>
              <Link href="/industries/business-software-for-construction-industry">Construction</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Compare</p>
              <div className="page-links" style={{width: "149px"}}>
              <Link href="/">MeMate vs QuickBooks</Link>
              <Link href="/">MeMate vs Myob</Link>
              <Link href="/">MeMate Vs Jira</Link>
              <Link href="/">MeMate vs Monday</Link>
              <Link href="/">MeMate vs Trello</Link>
              <Link href="/">MeMate vs SalesForce</Link>
              <Link href="/">MeMate vs Airtable</Link>
              <Link href="/">MeMate vs Wrike</Link>
              <Link href="/memate-vs-servicem8">MeMate vs Servicem8</Link>
              <Link href="/">MeMate vs Reckon</Link>
              <Link href="/">MeMate vs Xero</Link>
              <Link href="/">MeMate vs ms Project</Link>
              <Link href="/">MeMate vs Sage</Link>
              <Link href="/">MeMate vs NetSuite</Link>
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Legal</p>
              <div className="page-links" style={{width: "142px"}}>
                <Link href="/terms">Terms And Conditions</Link>
                <Link href="/privacy">Privacy Policy</Link>
                {/* <Link href="/terms-of-use">Website Terms of Use</Link> */}
                {/* <Link href="/security">Security</Link> */}
                {/* <Link href="/legal">Legal</Link> */}
              </div>
            </div>

            <div className="links">
              <p className="link-heading">Support</p>
              <div className="page-links" style={{width: "109px"}}>
              <Link href="/contact-us">Contact Us</Link>
              <Link href="/delete-request">Delete Request</Link>
                <Link href="/memate-software-updates">Software Update </Link>
                <Link href="/faqs">FAQs</Link>
              </div>
            </div>

          </div>
        </div>

        <div className="section3 copyrightWrapper">
          <div className="copyright">
            {/* <p>© MeMate 2024 </p> */}
           <p>Copyright © 2022-2025 | meMate</p>
            <div className="copyright-links">
              <LazyLoadImage
                alt="contact MeMate"
                src="https://res.cloudinary.com/dn0jqjad3/image/upload/v1747717590/Powered-By_logo-stack_CMYK_ew121c.webp"
                effect="blur" 
              />
              </div>
          </div>
          <div className="copyrightright">
            <div className="copyright-links">With&nbsp;<Heart />&nbsp;from Sydney</div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
