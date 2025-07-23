

 import Link from 'next/link';
import style from './sitemap.module.scss';

const SitemapComponent = () => {


  return (
    <>
    <div className={style.sitemapHEad}>
      <h1>Sitemap memate.com.au</h1>
    </div>
    <div className={style.sitemapPageList}>
     <ul>
      <li>
        <h3>Core Pages</h3>
        <Link href="/about">About</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact-us">Contact us</Link>
        <Link href="/faqs">Faqs</Link>
        <Link href="/brand">Brand</Link>
      </li>
      <li>
        <h3>Features</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>MANAGEMENT</h4>
            <Link href="/features/client-management-software">Client Management</Link>
            <Link href="/features/supplier-management-software">Supplier Management</Link>
            <Link href="/features/sales-management-tools">Sales Pipeline</Link>
            <Link href="/features/project-management-software">Project Management</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>PRODUCTIVITY</h4>
            <Link href="/features/business-reporting-tools">Reports</Link>
            <Link href="/features/profitability-and-budgeting-software">Profitability & Budgeting</Link>
            <Link href="/features/employee-management-tools">Employee Management</Link>
            <Link href="/features/contractor-management-software">Contractor</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>FUNCTIONALITY</h4>
            <Link href="/features/internal-communication-tools">Internal chat</Link>
            <Link href="/features/time-tracking-software">Time Sheet</Link>
            {/* <Link href="/features/your-business-news-management">Features News</Link> */}
            <Link href="/features/task-management-software">Task Management</Link>
        </div>
        </div>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>TECHNOLOGY</h4>
            <Link href="/features/team-communication-tools">Communication</Link>
            <Link href="/features/job-scheduling-software">Scheduling</Link>
            <Link href="/features/invoicing-software">Invoicing</Link>
            <Link href="/features/business-statistics-tools">Statistic</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>COLLABORATION</h4>
            <Link href="/features/job-management-software">Schedule Jobs</Link>
            <Link href="/features/time-tracking-tools">Fixed or time tracker</Link>
            <Link href="/features/job-approval-software">Job approval</Link>
            <Link href="/features/multi-location-management">Multi Location</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>VALUE</h4>
            <Link href="/features/calendar-timeline-management-software">Calendar</Link>
            <Link href="/features/business-quote-calculator">Calculators</Link>
        </div>
        </div>
        
      </li>
      <li>
        <h3>Industry Pages</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>INDUSTRIES</h4>
            <Link href="/industries/business-software-for-creative-agencies">Creative Agencies</Link>
            <Link href="/industries/software-for-electronic-repair-businesses">Electronic Repair Specialists</Link>
            <Link href="/industries/software-for-photo-video-agencies">Photo & Video Agency</Link>
            <Link href="/industries/business-software-for-automotive-industry">Automotive</Link>
            <Link href="/industries/business-management-software-for-startups">Startups</Link>
            <Link href="/industries/business-software-for-construction-industry">Construction</Link>
        </div>
        </div>
      </li>
      <li>
        <h3>Content Hubs</h3>
            <Link href="/news">News</Link>
            <Link href="/memate-wiki">Memate Wiki</Link>
            <Link href="/resources">Resources</Link>
      </li>
      {/* <li>
        <h3>About</h3>
            <Link href="/about">About Memate</Link>
            <Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target='_blank'>Our Careers</Link>
            <Link href="/contact-us">Our Team</Link>
      </li> */}
      <li>
        <h3>Legal</h3>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy</Link>
      </li>
      <li>
        <h3>RESOURCES</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
          <h4>RESOURCES & TOOLS</h4>
            <Link href="/supplier-database">Supplier Database</Link>
            <Link href="/knowledge-base">Knowledge Base</Link>
            <Link href="/brand">Brand</Link>
        </div>
        <div className={style.sitemapGridItem}>
          <h4>MEMATE WIKI</h4>
            <Link href="/memate-wiki">Memate Wiki</Link>
        </div>
        </div>
      </li>
      <li>
        <h3>Company</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" target='_blank'>Carreers</Link>
      </li>
      <li>
           <h3>Business Software</h3>
            <Link href="/pricing">Plan and Pricing</Link>
            <Link href="/features">Features</Link>
            <Link href="/industries">Industries</Link>
      </li>
   

      <li>
        <h3>COMPARE</h3>
        <div className={style.sitemapGrid}>
        <div className={style.sitemapGridItem}>
            <Link href="#">MeMate vs QuickBooks</Link>
            <Link href="#">MeMate vs Myob</Link>
            <Link href="#">MeMate Vs Jira</Link>
            <Link href="#">MeMate vs Monday</Link>
            <Link href="#">MeMate vs Trello</Link>
            <Link href="#">MeMate vs SalesForce</Link>
            <Link href="#">MeMate vs Airtable</Link>
           
        </div>
        <div className={style.sitemapGridItem}>
           <Link href="#">MeMate vs Wrike</Link>
            <Link href="/memate-vs-servicem8">MeMate vs Servicem8</Link>
            <Link href="#">MeMate vs Reckon</Link>
            <Link href="#">MeMate vs Xero</Link>
            <Link href="#">MeMate vs ms Project</Link>
            <Link href="#">MeMate vs Sage</Link>
            <Link href="#">MeMate vs NetSuite</Link>
        </div>
        </div>
      </li>
      <li>
           <h3>Support</h3>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/delete-request">Delete Request</Link>
            <Link href="/memate-software-updates">Software Update</Link>
            <Link href="/faqs">FAQs</Link>
      </li>
     </ul>
    </div>
    </>
  );
};

export default SitemapComponent;
