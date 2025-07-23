import React, { useState } from "react";
import style from './tabs-comp.module.scss';
import ToolTip from "./tool-tip";
const data = [
    {
      category: "Client Management",
      meMate: "Comprehensive client details, history, and contacts in one place.",
      meMateM8: "Basic client management focused on job details and communication.",
      service: "Comprehensive client details, history, and contacts in one place.",
      serviceM8: "Basic client management focused on job details and communication.",
      toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Supplier Management",
      meMate: "Complete supplier list with expense history.",
      meMateM8: "Not a dedicated feature.",
      service: "omplete supplier list with expense history.",
      serviceM8: "Not a dedicated feature.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Project Management",
      meMate: "Advanced project management with timelines, expenses, and history.",
      meMateM8: "Job management with a focus on checklists and job completion",
      service: "dvanced project management with timelines, expenses, and history.",
      serviceM8: "Job management with a focus on checklists and job completion",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Quoting & Invoicing",
      meMate: "Quotes, invoices, and automated follow-ups.",
      meMateM8: "Quoting and invoicing directly from the field.",
      service: "Quotes, invoices, and automated follow-ups.",
      serviceM8: "Quoting and invoicing directly from the field.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Communication",
      meMate: "Automated updates via email/SMS with templates.",
      meMateM8: "Email, SMS, and on-the-way messages.",
      service: "Automated updates via email/SMS with templates.",
      serviceM8: "Email, SMS, and on-the-way messages.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Scheduling",
      meMate: "Job scheduling with profitability tracking. ",
      meMateM8: "Job dispatch with real-time staff visibility on the map.",
      service: "Job scheduling with profitability tracking.",
      serviceM8: "Job dispatch with real-time staff visibility on the map.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Reporting",
      meMate: "Over 20 built-in reports for business analytics. ",
      meMateM8: "Basic job reports, focused on job history and invoicing.",
      service: "Over 20 built-in reports for business analytics.",
      serviceM8: "Basic job reports, focused on job history and invoicing.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Employee Management",
      meMate: "Onboard employees with contact details in one place.",
      meMateM8: "Focused on field staff location and job allocation",
      service: "Onboard employees with contact details in one place.",
      serviceM8: "Focused on field staff location and job allocation",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Collaboration",
      meMate: "Manage jobs, fixed or hourly payment trackers, job approvals.",
      meMateM8: "Manage jobs, track staff locations, and communicate via app.",
      service: "Manage jobs, fixed or hourly payment trackers, job approvals.",
      serviceM8: "Manage jobs, track staff locations, and communicate via app.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Functionality",
      meMate: "Task management, internal chat, timesheets. ",
      meMateM8: "Limited to job-related tasks, checklist completion, and forms.",
      service: "Task management, internal chat, timesheets.",
      serviceM8: "Limited to job-related tasks, checklist completion, and forms.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Value Add-ons",
      meMate: "Calendar, calculators for pricing, budgeting.",
      meMateM8: "Online booking, asset management, and accounting integration.",
      service: "Calendar, calculators for pricing, budgeting.",
      serviceM8: "Online booking, asset management, and accounting integration.",
       toolTip: "Basic client management focused on job details and communication."
    },
    {
      category: "Best For",
      meMate: "Established businesses with an office-based workflow.",
      meMateM8: "On-the-go tradespeople needing field flexibility. ",
      service: "Established businesses with an office-based workflow.",
      serviceM8: "On-the-go tradespeople needing field flexibility.",
       toolTip: "Basic client management focused on job details and communication."
    },
   
  ];
const ComparisonTabs = () => {
    const [selectedTab, setSelectedTab] = useState("meMate");
  return (
    <div className={style.tabsComparison}>
    <div className={style.tabsComparisonFlex}>
      <button
        className={`${style.tabsButton} ${selectedTab === "meMate tabsButtonActive" ? `${style.tabsButtonDark}` : `${style.tabsButtonActive}`}`}
        onClick={() => setSelectedTab("meMate")}>
      <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg" alt="service8 logo" />
      </button>
      <button
        className={`${style.tabsButton} ${selectedTab === "serviceM8" ? `${style.tabsButtonDark}` :`${style.serviceM8}`}`}
        onClick={() => setSelectedTab("serviceM8")}>
       <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/media/serviem8-logo.png" alt="service8" />
      </button>
    </div>
    <div className={style.tabsTableWrap}>
      <table>
        {/* <thead>
          <tr>
            <th>Feature</th>
            <th>{selectedTab === "meMate" ? "Me Mate" : "ServiceM8"}</th>
          </tr>
        </thead> */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td><span className={style.toolTip}>{item.category} <ToolTip toolTip= {item.meMate} /></span></td>
              <td><em><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="url(#paint0_radial_1399_219667)"/>
  <path d="M5.47656 10.6466L8.06258 13.2326L14.5276 6.76758" stroke="white" strokeWidth="1.54843" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <radialGradient id="paint0_radial_1399_219667" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-1.24043 0.973162) rotate(41.5468) scale(24.1358 391.369)">
      <stop offset="0.00154351" stopColor="#1AB3FF"/>
      <stop offset="1" stopColor="#FFB258"/>
    </radialGradient>
  </defs>
  </svg><p>{selectedTab === "meMate" ? item.meMate : item.service}</p></em></td>
                <td><em><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20Z" fill="#29292B"/>
    <path d="M5.47656 10.6466L8.06257 13.2326L14.5276 6.76758" stroke="white" strokeWidth="1.93554" strokeLinecap="round" strokeLinejoin="round"/>
  </svg><p>{selectedTab === "meMate" ? item.meMateM8 : item.serviceM8}</p></em></td>     
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ComparisonTabs