import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SalesActive from "../../svg/SalesActive";
import Sales from "../../svg/Sales";
import QuoteActive from "../../svg/QuoteActive";
import Quote from "../../svg/Quote";
import ProfitabilityActive from "../../svg/ProfitabilityActive";
import Profitability from "../../svg/Profitability";
import ManagementActive from "../../svg/ManagementActive";
import Management from "../../svg/Management";
import Reporting from "../../svg/Reporting";
import ReportingActive from "../../svg/ReportingActive";
import Communication from "../../svg/Communication";
import CommunicationActive from "../../svg/CommunicationActive";
import Calculation from "../../svg/Calculation";
import CalculationActive from "../../svg/CalculationActive";
import Scheduling from "../../svg/Scheduling";
import SchedulingActive from "../../svg/SchedulingActive";
import Employees from "../../svg/Employees";
import EmployeesActive from "../../svg/EmployeesActive";
import WhiteButtonBammer from '../../layout/hover-button/WhiteButtonBammer';
import Link from "next/link";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const SalesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-sales-banner-min.png";
// const SalesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/Sales-image-banner.svg";
const CalculationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-calculation-min.png";
const EmployeesImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-employees-min.png";
const SchedulingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-scheduling-min.png";
const CommunicationImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-communication-min.png";
const ReportingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-reporting-min.png";
const InvoicingImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-Quote-invoice-min.png";
const ProfitabilityImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-profitability-min.png";
const ManagementImage = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/img-management-min.png";

const tabs = [
    { 
       label: "Sales",
      // image1x: SalesImage,
      // image2x: SalesImage,
      // image3x: SalesImage,
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
      link: '/features/business-quote-calculator' 
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
      // image1x: EmployeesImage,
      // image2x: EmployeesImage,
      // image3x: EmployeesImage, 
      iconIamgeActive: <EmployeesActive alt="Employees active icon" />, 
      iconIamge: <Employees alt="Employees icon" />, 
      head: 'Employees and Contractors', 
      para: 'Time tracking and contractor management, as well as job assignment and communication, are made easier with our mobile application.', 
      link: '/features/employee-management-tools' 
    }
  ];

function  CenterMode() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);





 const updateSlideFocus = () => {
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide) => {
      const isHidden = slide.getAttribute("aria-hidden") === "true";
      const focusables = slide.querySelectorAll("a, button, input, select, textarea");
      focusables.forEach((el) => {
        el.setAttribute("tabindex", isHidden ? "-1" : "0");
      });
    });
  };

  useEffect(() => {
    updateSlideFocus();
    const timer = setTimeout(updateSlideFocus, 200); // small delay to wait for DOM update
    return () => clearTimeout(timer);
  }, [currentIndex]);






  const mainSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    asNavFor: nav2,
    beforeChange: (_, next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false
        }
      }
    ]
  };

  const navSettings = {
    slidesToShow: 9,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  };






  
  return (
    <div className="oneappwrap large-image-container-wrap" style={{ padding: "40px" }}>
      <Slider {...navSettings} ref={slider2} className="sliderTabWrapper" style={{ marginTop: "20px" }}>
        {tabs.map((tab, index) => (
          <div key={index} role="tabpanel" className="boxCenterModew">
            <div className="boxCenterMode">
              <p>
                {index === currentIndex ? tab.iconIamgeActive : tab.iconIamge}
                <span>{tab.label}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...mainSettings} ref={slider1}>
        {tabs.map((tab, index) => (
             <div 
        className="large-image-container"
            role="group"
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${tabs.length}`}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1400"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom">
          <div key={index}>
             <LazyLoadImage
              alt={tab.label}
              src={tab.image}
              // width={800}
              // height={600}
              effect="blur" 
              style={{ width: "100%", height: "auto" }}
            />
            {/* <img
              src={tab.image}
              alt={tab.label}
              className="large-image"
              width="800"
              height="600"
              type="image/svg+xml" loading="lazy"
              style={{ width: "100%", height: "auto" }}
            /> */}
            {/* <img
            srcSet={`${tab.image3x} 600w, ${tab.image2x} 1200w, ${tab.image1x} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={tab.image1x}
            alt={tab.label}
            className="large-image"
            style={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
          /> */}
            <div style={{ padding: "20px", textAlign: "center" }}>
                <div className="how-to-use">
              <p>{tab.head}</p>
              </div>
               <div className="businesses-mode">
              <span>{tab.para}</span>
              </div>
             <div className="request-btn request-btnApp" style={{marginTop: "0"}}>
        <Link href={tab.link} className="nav-btn--get-started get-started-border-box navbar-link"><WhiteButtonBammer text="Find more" /></Link>
      </div> 
            </div>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}





export default CenterMode;
