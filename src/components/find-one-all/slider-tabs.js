import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick'; // Assuming you're using react-slick for the slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import TronButton from "../../layout/hover-button/tourn-but";
import SalesActive from "../../svg/SalesActive";
import Sales from "../../svg/Sales";
// import SalesImage from "../../svg/SalesImage";
import QuoteActive from "../../svg/QuoteActive";
import Quote from "../../svg/Quote";
// import InvoicingImage from "../../svg/InvoicingImage";
import ProfitabilityActive from "../../svg/ProfitabilityActive";
import Profitability from "../../svg/Profitability";
// import ProfitabilityImage from "../../svg/ProfitabilityImage";
import ManagementActive from "../../svg/ManagementActive";
import Management from "../../svg/Management";
// import ManagementImage from "../../svg/ManagementImage";
import Reporting from "../../svg/Reporting";
// import ReportingImage from "../../svg/ReportingImage";
import ReportingActive from "../../svg/ReportingActive";
import Communication from "../../svg/Communication";
// import CommunicationImage from "../../svg/CommunicationImage";
import CommunicationActive from "../../svg/CommunicationActive";
import Calculation from "../../svg/Calculation";
// import CalculationImage from "../../svg/CalculationImage";
import CalculationActive from "../../svg/CalculationActive";
import Scheduling from "../../svg/Scheduling";
// import SchedulingImage from "../../svg/SchedulingImage";
import SchedulingActive from "../../svg/SchedulingActive";
import Employees from "../../svg/Employees";
// import EmployeesImage from "../../svg/EmployeesImage";
import EmployeesActive from "../../svg/EmployeesActive";
import WhiteButtonBammer from '../../layout/hover-button/WhiteButtonBammer';

const SalesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Sales-image-banner.svg";
const CalculationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/calculation-image-main.svg";
const EmployeesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/employees-image-main.svg";
const SchedulingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/sheduling-image-main.svg";
const CommunicationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/communication-image-main.svg";
const ReportingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/reporting-image-main.svg";
const InvoicingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/invoicing-image-main.svg";
const ProfitabilityImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/profitablity-image-imag.svg";
const ManagementImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/managment-image-main.svg";


// SliderTab Component
const SliderTab = () => {
  const tabs = [
    { 
      label: "Sales", 
      image: SalesImage, 
      iconIamgeActive: <SalesActive alt="Sales active icon" />, 
      iconIamge: <Sales alt="Sales icon" />, 
      head: 'Sales', 
      para: 'Manage every step of the sales process—quotes, proposals, follow-ups, and approvals—through a simple, efficient pipeline', 
      link: '/features/sales-management-tools' 
    },
    { 
      label: "Invoicing", 
      image: InvoicingImage, 
      iconIamgeActive: <QuoteActive alt="Quote active icon" />, 
      iconIamge: <Quote alt="Quote icon" />, 
      head: 'Quoting & Invoicing', 
      para: 'Create invoices, receive payments, and set reminders. Send quotes for customers to accept and follow up effortlessly.', 
      link: '/features/invoicing-software' 
    },
    { 
      label: "Profitability", 
      image: ProfitabilityImage, 
      iconIamgeActive: <ProfitabilityActive alt="Profitability active icon" />, 
      iconIamge: <Profitability alt="Profitability icon" />, 
      head: 'Profitability', 
      para: 'Budgeting, real-time operational profit tracking for each project, and expense management, even for long-term projects, make this an indispensable tool.', 
      link: '/features/profitability-and-budgeting-software' 
    },
    { 
      label: "Management", 
      image: ManagementImage, 
      iconIamgeActive: <ManagementActive alt="Management active icon" />, 
      iconIamge: <Management alt="Management icon" />, 
      head: 'Management', 
      para: 'See every ongoing project on one screen with exceptional clarity and functionality', 
      link: '/features/task-management-software' 
    },
    { 
      label: "Reporting", 
      image: ReportingImage, 
      iconIamgeActive: <ReportingActive alt="Reporting active icon" />, 
      iconIamge: <Reporting alt="Reporting icon" />, 
      head: 'Reporting', 
      para: 'Real-time profitability, goals, and statistics. Multiple, yet simple business overviews with detailed accounting insights.', 
      link: '/features/business-reporting-tools' 
    },
    { 
      label: "Communication", 
      image: CommunicationImage, 
      iconIamgeActive: <CommunicationActive alt="Communication active icon" />, 
      iconIamge: <Communication alt="Communication icon" />, 
      head: 'Communication', 
      para: 'Communicate with your team and clients in just a few clicks. Send notifications via SMS, provide quotes, or update project status with ease.', 
      link: '/features/team-communication-tools' 
    },
    { 
      label: "Calculation", 
      image: CalculationImage, 
      iconIamgeActive: <CalculationActive alt="Calculation active icon" />, 
      iconIamge: <Calculation alt="Calculation icon" />, 
      head: 'Calculation', 
      para: 'Create instant, accurate quotes and budgets with pre-configured products and services', 
      link: '/features/contractor-management-software' 
    },
    { 
      label: "Scheduling", 
      image: SchedulingImage, 
      iconIamgeActive: <SchedulingActive alt="Scheduling active icon" />, 
      iconIamge: <Scheduling alt="Scheduling icon" />, 
      head: 'Scheduling & Work Management', 
      para: 'Workforce management, timesheets, and job approvals—everything you need to efficiently manage your team.', 
      link: '/features/job-management-software' 
    },
    { 
      label: "Employees", 
      image: EmployeesImage, 
      iconIamgeActive: <EmployeesActive alt="Employees active icon" />, 
      iconIamge: <Employees alt="Employees icon" />, 
      head: 'Employees and Contractors', 
      para: 'Time tracking and contractor management, as well as job assignment and communication, are made easier with our mobile application.', 
      link: '/features/employee-management-tools' 
    }
  ];

  const [selectedTab, setSelectedTab] = useState(3);
  const sliderRef = useRef(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  // useEffect(() => {
  //   tabs.forEach(tab => {
  //     const img = new Image();
  //     img.src = tab.image;
  //   });
  // }, []);

  const handleTabClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const triggerFadeIn = () => {
    // setFadeClass(""); 
    // setTimeout(() => {
    //   setFadeClass("fade-in"); 
    // }, 50);
  };

  const tabSliderSettings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "30px",
    initialSlide: 3,
    speed: 1300,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => {
      setSelectedTab(next);
      triggerFadeIn();
    },
    postSlide: (index) => {
      if (index === tabs.length - 1) {
        setTimeout(() => {
          sliderRef.current.slickGoTo(0);
        }, 10000);
      }
    },
    useTransform: false, 
  };

  return (
    <div className="slider-container sliderTabWrapper sliderTabWrapperApp">
      <Slider ref={sliderRef} {...tabSliderSettings} className="tab-slider">
        {tabs.map((tab, index) => (
          <div
            key={index}
            role="tabpanel"
            className={`tab-item ${index === selectedTab ? "active" : ""}`}
            onClick={() => handleTabClick(index)}
          >
            <div className="boxCenterMode">
              <p>
                {index === selectedTab ? (
                  tab.iconIamgeActive 
                ) : (
                  tab.iconIamge 
                )}
                <span>{tab.label}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
      <div 
        className="large-image-container" 
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1400"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          key={selectedTab}  
          src={tabs[selectedTab].image}
          alt={tabs[selectedTab].label}
          className={`large-image ${fadeClass}`}
          type="image/svg+xml"
        />
             <div className="how-to-use">
        <p>{tabs[selectedTab].head}</p>
      </div>
      <div className="businesses-mode">
        <span>
        {tabs[selectedTab].para}
        </span>
      </div>
      </div>
      <div className="request-btn request-btnApp" style={{marginTop: "0"}}>
        <Link href={tabs[selectedTab].link} className="nav-btn--get-started get-started-border-box navbar-link"><WhiteButtonBammer text="Find more" /></Link>
      </div> 
    </div>
  );
};

export default SliderTab;
