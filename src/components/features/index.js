import style from './features.module.scss';
import './style.css';
import Iconsdata from "../../assests/icons";
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';



const FeaturesComponent = () => {
   const featuresData = [
      {
        category: 'Management',
        items: [
          {
            icon: Iconsdata.ClientManagement,
            title: 'Client Management',
            link:'/features/client-management-software',
            description: 'Keep all your client details in one place with complete order history, discounts, and contacts.',

          },
          {
            icon: Iconsdata.SupplierManagement,
            title: 'Supplier Management',
            link:'/features/supplier-management-software',
            description: 'Maintain a supplier list for your company, accessible to management, with a complete expense history.',
          },
          {
            icon: Iconsdata.SalePipline,
            title: 'Sales Pipeline',
            link:'/features/sales-management-tools',
            description: 'Manage quotes with custom calculators, follow-ups, approvals, and a sales pipeline.',
          },
          {
            icon: Iconsdata.ManagementDashboard,
            title: 'Project Management',
            link:'/features/project-management-software',
            description: 'View all your jobs on one screen with a timeline, complete project information, history, and more.',
          },
        ],
      },
      {
        category: 'Technology',
        items: [
          {
            icon: Iconsdata.techCommunication,
            title: 'Communication',
            link:'/features/team-communication-tools',
            description: 'Send automated updates via emails and SMS. Keep all communication history in the project.',
          },
          {
            icon: Iconsdata.techScheduling,
            title: 'Scheduling',
            link:'/features/job-scheduling-software',
            description: 'Monitor profitability in real-time, including expenses, timesheets, and cost of goods.',
          },
          {
            icon: Iconsdata.techInvoicing,
            title: 'Invoicing',
            link:'/features/invoicing-software',
            description: 'Convert quotes into invoices with one click and receive payments with automated follow-ups.',
          },
          {
            icon: Iconsdata.techStatistic,
            title: 'Statistic',
            link:'/features/business-statistics-tools',
            description: 'Motivate your management with a simple, real-time target system.',
          },
        ],
      },
      {
        category: 'Productivity',
        items: [
          {
            icon: Iconsdata.ProdReports,
            title: 'Reports',
            link:'/features/business-reporting-tools',
            description: 'Access over 20 built-in reports to assist with your business analytics.',
          },
          {
            icon: Iconsdata.ProdProfitability,
            title: 'Profitability & Budgeting',
            link:'/features/profitability-and-budgeting-software',
            description: 'Monitor the profitability of each order in real-time, including expenses, timesheets, and the cost of goods.',
          },
          {
            icon: Iconsdata.ProdEmployeey,
            title: 'Employee Management',
            link:'/features/employee-management-tools',
            description: 'Onboard your employees and keep contacts and details in one place.',
          },
          {
            icon: Iconsdata.ProdContractor,
            title: 'Contractor',
            link:'/features/contractor-management-software',
            description: 'Create a list of trusted contractors with a complete history of cooperation and ratings for better collaboration.',
          },
        ],
      },
      {
        category: 'Collaboration',
        items: [
          {
            icon: Iconsdata.collabSchedule,
            title: 'Schedule Jobs',
            link:'/features/job-management-software',
            description: 'Easily create jobs for your contractors, send them individually or in groups, link them to orders, and track profitability.',
          },
          {
            icon: Iconsdata.collabFixed,
            title: 'Fixed  or time tracker ',
            link:'/features/time-tracking-tools',
            description: 'Pay contractors based on a preset agreement, whether fixed payment, time tracker, or hourly.',
          },
          {
            icon: Iconsdata.collabApproval,
            title: 'Job approval',
            link:'/features/job-approval-software',
            description: 'Approve submitted work with one simple click and manage invoices from your contractors in one system.',
          },
          {
            icon: Iconsdata.collabLocation,
            title: 'Multi Location',
            link:'/features/multi-location-management',
            description: 'Create a separate management dashboard for multiple offices or locations.',
          },
        ],
      },
      {
        category: 'Functionality',
        items: [
          {
            icon: Iconsdata.funInternal,
            title: 'Internal chat',
            link:'/features/internal-communication-tools',
            description: 'Facilitate all communication within the company.',
          },
          {
            icon: Iconsdata.funTimesheet,
            title: 'Time sheet',
            link:'/features/time-tracking-software',
            description: 'Automatically receive timesheets from your staff, based on scheduled shifts and time trackers.',
          },
          // {
          //   icon: Iconsdata.funNews,
          //   title: 'News',
          //   link:'/features/your-business-news-management',
          //   description: 'Create a team with your company news feed and updates.',
          // },
          {
            icon: Iconsdata.funTask,
            title: 'Task management',
            link:'/features/task-management-software',
            description: 'Utilize a task to-do list feature to improve efficiency.',
          },
        ],
      },
      {
        category: 'Value',
        items: [
          {
            icon: Iconsdata.valueCalendar,
            title: 'Calendar',
            link:'/features/calendar-timeline-management-software',
            description: 'View all jobs, shifts, holidays, and unavailability on one company calendar.',
          },
          {
            icon: Iconsdata.valueCalculators,
            title: 'Calculators',
            link:'/features/business-quote-calculator',
            description: 'Hourly or fixed pricing and add margins or markups to calculate the cost for the customer.',
          },

        ],
      },

    ];

  return (
    <>
     <Helmet>
    <title>Features | Business Management Software and Workflow Automation Tools in Australia</title>
    <meta name="description" content="Discover the comprehensive features of MeMate, Australia’s top business management software. From CRM for small businesses to project management features and workflow automation tools, we have it all." />
    <meta property="og:title" content="Features | Business Management Software and Workflow Automation Tools in Australia" />
      <meta property="og:description" content="Discover the comprehensive features of MeMate, Australia’s top business management software. From CRM for small businesses to project management features and workflow automation tools, we have it all." />
</Helmet>
      <div className={style.mainMenuPages}>
        <div className={`sales-component-wrapper salesfeaturesWrapper ${style.mainHeadTitle}`}>
         <h1 className="h1tagsseo h1tagsseof fontWeight">Technology from the future, solving today’s problems.</h1>
          <h2>features</h2>
          <span>
          Here are meMate’s main features to help you quickly understand if it will be suitable for your<br/> business.
          </span>
        </div>

        <h4 className={style.h4Heading}>No need to juggle ten different apps. MeMate gives you the full toolkit — from client management to quoting, scheduling, and getting paid — all in one spot.</h4>

        {featuresData.map((featureCategory, categoryIndex) => (
          <div key={categoryIndex} className={style.mainGridWrap}>
            <h2 data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">{featureCategory.category}</h2>
            <div className={style.mainGridwtapFlex}>
              {featureCategory.items.map((item, itemIndex) => (
              <Link data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom" href={item.link}>
                <div key={itemIndex} className={`itemFlex  ${style.itemFlex}`}>
                  <div className={style.itemicon}>
                    <img
                      className={`withoutHover ${style.withoutHover}`}
                      src={item.icon}
                      alt={item.title}
                    />
                  </div>
                  <div className={style.itemText}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturesComponent;
