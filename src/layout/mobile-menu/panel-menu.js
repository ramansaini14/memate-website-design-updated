import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuImages from "../../assests/menu-images";
const RightBlackArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";
const RightColorArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/right-color-arrow.svg";







  const tabs = [
      { title: 'Legal', 
        contents: {
          Legal: [
          { content: "Terms & Conditions", link: "/terms"},
          { content: "Privacy", link: "/privacy" },
        ],
      },
        imgTab: `${menuImages.unselectedLegal}` 
     
      },
      { title: 'Resources', 
        contents: {
          linkResources: "/resources",
          "Resources & tools": [
            { content: "Supplier Database", link: "/supplier-database" },
          ],
          "MeMate Manual": [
            { content: "Knowledge Base", link: "/knowledge-base" },
            { content: "Brand", link: "/brand" },
          ],
          "Business Support": [
            { content: "Memate Wiki", link: "/memate-wiki" },
          ],
         
         
        },
        imgTab: `${menuImages.unselectedResources}` },
    
   
    ];
const items = [
  {
    title: "Features",
    linkTitle: "/features",
    imgtitle: `${menuImages.featureIcon}`,
    //heading:"Management",
    contents: {
      Management: [
        {
          content: "Client Management",
          link: "/features/client-management-software",
          img: `${menuImages.clientManagement}`,
        },
        {
          content: "Supplier Management",
          link: "/features/supplier-management-software",
          img: `${menuImages.supplierManagement}`,
        },
        {
          content: "Sales Pipeline",
          link: "/features/sales-management-tools",
          img: `${menuImages.salesPipeline}`,
        },
        {
          content: "Project Management",
          link: "/features/project-management-software",
          img: `${menuImages.projectManagement}`,
        },
      ],
      Productivity: [
        {
          content: "Reports",
          link: "/features/business-reporting-tools",
          img: `${menuImages.reports}`,
        },
        {
          content: "Profitability & Budgeting",
          link: "/features/profitability-and-budgeting-software",
          img: `${menuImages.profitAndBudget}`,
        },
        {
          content: "Employee Management",
          link: "/features/employee-management-tools",
          img: `${menuImages.emplyManage}`,
        },
        {
          content: "Contractor",
          link: "/features/contractor-management-software",
          img: `${menuImages.contractor}`,
        },
      ],
      Functionality: [
        {
          content: "Internal chat",
          link: "/features/internal-communication-tools",
          img: `${menuImages.internalChat}`,
        },
        {
          content: "Timesheet",
          link: "/features/time-tracking-software",
          img: `${menuImages.timeSheet}`,
        },
        {
          content: "Task Management",
          link: "/features/task-management-software",
          img: `${menuImages.taskManagement}`,
        },
      ],
      Technology: [
        {
          content: "Communication",
          link: "/features/team-communication-tools",
          img: `${menuImages.communicationIcon}`,
        },
        {
          content: "Scheduling",
          link: "/features/job-scheduling-software",
          img: `${menuImages.schduling}`,
        },
        {
          content: "Invoicing",
          link: "/features/invoicing-software",
          img: `${menuImages.invoicing}`,
        },
        {
          content: "Statistic",
          link: "/features/business-statistics-tools",
          img: `${menuImages.statistics}`,
        },
      ],
      Collaboration: [
        {
          content: "Schedule Jobs",
          link: "/features/job-management-software",
          img: `${menuImages.jobSchdule}`,
        },
        {
          content: "Fixed  or time tracker",
          link: "/features/time-tracking-tools",
          img: `${menuImages.jobHouly}`,
        },
        {
          content: "Job approval",
          link: "/features/job-approval-software",
          img: `${menuImages.jobApproval}`,
        },
        {
          content: "Multi Location",
          link: "/features/multi-location-management",
          img: `${menuImages.MultiLocation}`,
        },
      ],
      Value: [
        {
          content: "Calendar",
          link: "/features/calendar-timeline-management-software",
          img: `${menuImages.calendar}`,
        },
        {
          content: "Calculators",
          link: "/features/business-quote-calculator",
          img: `${menuImages.Calculators}`,
        },
      ],
    },
  },
  {
    title: "Industries",
    linkTitle: "/industries",
    imgtitle: `${menuImages.industriesIcon}`,
    contents: {
      Industries: [
        {
          content: "Creative Agencies",
          link: "/industries/business-software-for-creative-agencies",
          img: `${menuImages.creativeAgency}`,
        },
        {
          content: "Electronic Repair Specialists",
          link: "/industries/software-for-electronic-repair-businesses",
          img: `${menuImages.electronic}`,
        },
        {
          content: "Photo & Video Agency",
          link: "/industries/software-for-photo-video-agencies",
          img: `${menuImages.photoVideoAgency}`,
        },
        {
          content: "Automotive",
          link: "/industries/business-software-for-automotive-industry",
          img: `${menuImages.automotive}`,
        },
        {
          content: "Startups",
          link: "/industries/business-management-software-for-startups",
          img: `${menuImages.startUps}`,
        },
        {
          content: "Construction",
          link: "/industries/business-software-for-construction-industry",
          img: `${menuImages.construction}`,
        },
      ],
    },
  },
  {
    title: "News & Stories",
    imgtitle: `${menuImages.newsIconMobile}`,
    contents: {
      News: [
        {
          contentNews: "Our",
          boldText: "News",
          paraText: "Industry-related news to help you in business management.",
          button: "Read more",
          link: "/news",
        },
        {
          contentNews: "Customer",
          boldText: "Stories",
          paraText: "Read how other companies using memate",
          button: "Read more",
          link: "/customer-stories",
        },
        {
          contentNews: "Software",
          boldText: "Update",
          paraText:
            "Our Latest Software Updates, Releases, and Upcoming Development Features",
          button: "Read more",
          link: "/memate-software-updates",
        },
      ],
    },
  },
  {
    title: "About",
    imgtitle: `${menuImages.aboutMobileIcon}`,
    contents: {
      News: [
        {
          contentNews: "About",
          boldText: "Memate",
          button: "Read more",
          link: "/about",
        },
        {
          contentNews: "Our",
          boldText: "Careers",
          button: "Check Careers",
          link: "https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530",
        },
        {
          contentNews: "Contact",
          boldText: "Our team",
          button: "Contact",
          link: "/contact-us",
        },
      ],
    },
  },
];

const PanelMenu = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const pathname = usePathname();
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState(null);

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Defensive Link wrapper
  const SafeLink = ({ href, children, ...props }) => {
    if (!href || typeof href !== 'string') return <span>{children}</span>;
    return <Link href={href} {...props}>{children}</Link>;
  };

  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
           <div
                  className={`accordion-header ${
                    isOpen1  ? "" : "active"
                  }`}
           onClick={() => {
                setIsOpen1(!isOpen1);
              }}
          >
            <SafeLink href="/about">
              <span>About</span>
            </SafeLink>
            {isOpen1 ? (
              <img
                src={RightBlackArrow}
                alt="RightColorArrow"
               className={isOpen1  ? "" : "rotate"}
             
              style={{ transform: "rotate(-90deg)" }}
              />
            ) : (
              <img
                src={RightColorArrow }
                alt="RightBlackArrow"
            
               style={{ transform: "rotate(90deg)" }}
              />
            )}
          </div>
        </div>
        {!isOpen1 && (
          <>
            {items.map((item, index) => (
              <div key={index} className="accordion-item">
                <div
                  className={`accordion-header ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  <SafeLink href={item.linkTitle}>
                    <span>
                      <img src={item.imgtitle} alt={item.title} />
                      {item.title}
                    </span>
                  </SafeLink>{" "}
                  {activeIndex === index ? (
                    <img
                      src={RightColorArrow}
                      alt="RightColorArrow"
                      className={activeIndex === index ? "rotate" : ""}
                    />
                  ) : (
                    <img
                      src={RightBlackArrow}
                      alt="RightBlackArrow"
                      style={{ transform: "rotate(-90deg)" }}
                    />
                  )}
                </div>
                {activeIndex === index && (
                  <div className={`accordion-content ${item.title}`}>
                    <ul>
                      {Object.keys(item.contents).map((sectionKey) => (
                        <li key={sectionKey} className={sectionKey}>
                          <strong>{sectionKey}</strong>
                          <ul className="orderList">
                            {item.contents[sectionKey].map((contentItem, i) => (
                              <li key={i} className={`list${i}`}>
                                <SafeLink
                                  href={contentItem.link}
                                  className={
                                    pathname === contentItem.link
                                      ? "navbar-item-active"
                                      : ""
                                  }
                                  rel="noopener noreferrer"
                                >
                                  {contentItem.img ? (
                                    <img
                                      src={contentItem.img}
                                      alt={contentItem.content}
                                    />
                                  ) : (
                                    <div className="newsWrapMobile">
                                      <div className="newsWrapbox">
                                        <p>
                                          {" "}
                                          {contentItem.contentNews}
                                          <span>{contentItem.boldText}</span>
                                        </p>
                                        <p className="first-news-description">
                                          {" "}
                                          {contentItem.paraText &&
                                            contentItem.paraText}
                                        </p>
                                        {contentItem.button && (
                                          <button className="first-news-button">
                                            {contentItem.button}
                                          </button>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                  {contentItem.content}
                                </SafeLink>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <div className='listMobileWrap'>
       <div className='listMobileTab'>
    
      <div className="tab-buttons">
      <ul>
        {tabs.map((tab, index) => (
          <li key={index}
          className={index === activeTab ? 'currentTab' : ''}
          onClick={() => handleTabClick(index)}><span><img src={tab.imgTab} alt='imgTab'/>{tab.title}</span></li>
        ))}
        <li className="linkspaceMobile"><span><a href="/contact-us"><img src={menuImages.unselectedSales} alt='unselectedSales'/>Contact Sales</a></span></li>
        <li><span><img src={menuImages.unselectedWatchDemo} alt='unselectedWatchDemo' />Watch demo</span></li>
         </ul>
      </div>
      </div>
          <div className="tab-content resourceMobileIcon">
      {activeTab !== null && tabs[activeTab]?.contents ? (
        <ul>
          {Object.keys(tabs[activeTab].contents).map((sectionKey) => (
            <li key={sectionKey} className={sectionKey}>
          
              {sectionKey === "linkResources" ? (
                <SafeLink href={tabs[activeTab].contents.linkResources}>
                  <strong>{sectionKey}</strong>
                </SafeLink>
              ) : (
                <>
                  <ul>
                  
                    {Array.isArray(tabs[activeTab].contents[sectionKey]) && 
                      tabs[activeTab].contents[sectionKey].map((contentItem, i) => (
                        <li key={i}>
                          <SafeLink
                            href={contentItem.link}
                            className={`resource${i} ${pathname === contentItem.link ? "navbar-item-active" : ""}`}
                            rel="noopener noreferrer"
                          >
                            {contentItem.content}
                          </SafeLink>
                        </li>
                      ))
                    }
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </div> 
       </div>
          </>
          
        )}
      </div>
    </>
  );
};

export default PanelMenu;
