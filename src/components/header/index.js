import { useEffect, useState, useRef } from "react";
import menuImages from "../../assests/menu-images";
import Images from "../../assests/images";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  MenuAbout,
  MenuFeature,
  MenuIndustry,
  MenuLegal,
  MenuNews,
  MenuRessources,
} from "./menu";
import "./style.css";
import MenuData from "../../layout/mobile-menu/menu-data";
import TronButton from "../../layout/hover-button/tourn-but";
import MemateLogoHeaderAbout from "../../svg/MemateLogoHeaderAbout";
import FeatureMain from "../../svg/FeatureMain";
import Industrymain from "../../svg/Industrymain";
import AboutMain from "../../svg/AboutMain";
import NewsAndStoriesmain from "../../svg/NewsAndStoriesmain";
import LegalActiveSVG from "../../svg/LegalActiveSVG";
import LegalInactiveSVG from "../../svg/LegalInactiveSVG";
import ResourcesInactiveSVG from "../../svg/ResourcesInactiveSVG";
import ResourcesActiveSVG from "../../svg/ResourcesActiveSVG";
import FAQSVG from "../../svg/FAQSVG";
import ContactSalesSVG from "../../svg/ContactSalesSVG";
import WatchDemoSVG from "../../svg/WatchDemoSVG";
import HeaderButtonWithGradient from "../../layout/hover-button/HeaderButtonWithGradient";
import TronRequestADemo from "../../layout/hover-button/TronRequestADemo";
import WhiteButtonBammer from "../../layout/hover-button/WhiteButtonBammer";

const DownBlackArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";
const DownColorArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-color-arrow.svg";
const RightColorArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/right-color-arrow.svg";
const RightBlackArrow =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/down-black-arrow.svg";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef(null);
  const aboutButtonRef = useRef(null);

  const handleLogoClick = () => router.push("/");

  const menuItemList = [
    {
      id: 1,
      label: <Link href="/features">Features</Link>,
      selectedIcon: menuImages.featureImage,
      // unselectedIcon: menuImages.featureImageUnselected,
      unselectedIcon: <FeatureMain />,
    },
    {
      id: 2,
      label: <Link href="/industries">Industries</Link>,
      selectedIcon: menuImages.industrySelected,
      // unselectedIcon: menuImages.industryUnSelected,
      unselectedIcon: <Industrymain />,
    },
    {
      id: 3,
      label: <a>News & Stories</a>,
      selectedIcon: menuImages.newStorySelected,
      // unselectedIcon: menuImages.newStoryUnSelected,
      unselectedIcon: <NewsAndStoriesmain />,
    },
    {
      id: 4,
      label: <Link href="/about">About</Link>,
      selectedIcon: menuImages.aboutSelected,
      // unselectedIcon: menuImages.aboutUnselected,
      unselectedIcon: <AboutMain />,
    },
  ];

  useEffect(() => {
    const pathToMenuId = {
      "/features": 1,
      "/industries": 2,
      "/your-business-news-management": 3,
      // "/news": 3,
      "/customer-stories": 3,
      "/memate-software-updates": 3,
      "/about": 4,
      // "/contact-us": 4,
      "/legal": 5,
      "/terms-and-conditions": 5,
      "/privacy": 5,
      "/terms-of-use": 5,
      "/security": 5,
      "/resources": 6,
      "/supplier-database": 6,
      "/knowledge-base": 6,
      "/delete-request": 6,
      "/memate-wiki": 6,
    };

    const matchedId =
      Object.entries(pathToMenuId).find(([path]) =>
        pathname.startsWith(path)
      )?.[1] || 1;

    setSelectedMenuItem(matchedId);
  }, [pathname]);

  const renderContent = () => {
    const handleSubItemClick = (menuId) => setSelectedMenuItem(menuId);

    switch (selectedMenuItem) {
      case 1:
        return <MenuFeature onSubItemClick={() => handleSubItemClick(1)} />;
      case 2:
        return <MenuIndustry onSubItemClick={() => handleSubItemClick(2)} />;
      case 3:
        return <MenuNews onSubItemClick={() => handleSubItemClick(3)} />;
      case 4:
        return <MenuAbout onSubItemClick={() => handleSubItemClick(4)} />;
      //done till here
      case 5:
        return <MenuLegal onSubItemClick={() => handleSubItemClick(5)} />;
      case 6:
        return <MenuRessources onSubItemClick={() => handleSubItemClick(6)} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target)
      ) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuRef, aboutButtonRef]);

  return (
    <div>
      <MenuData />
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-wrapper" onClick={handleLogoClick}>
            <img src={Images.logo} alt="logo" type="image/svg+xml" />
          </div>

          <div className="header-navbar-container">
            <div
              ref={aboutButtonRef}
              className={`navbar-item navbar-item-flex-item rightAboutArrow ${
                (pathname === "/about", showDropDown)
                  ? "navbar-item-active"
                  : ""
              }`}
              onClick={() => setShowDropDown((prev) => !prev)}
            >
              <p>About</p>
              {showDropDown ? (
                <img src={DownColorArrow} alt="DownColorArrow" />
              ) : (
                <img src={DownBlackArrow} alt="DownBlackArrow" />
              )}
            </div>

            <div
              className={`navbar-item ${
                pathname === "/pricing" ? "navbar-item-active" : ""
              }`}
            >
              <Link href="/pricing" className="navbar-link">
                <p>Pricing</p>
              </Link>
            </div>

            <div
              className={`navbar-item ${
                pathname === "/news" ? "navbar-item-active" : ""
              }`}
            >
              <Link href="/news" className="navbar-link">
                <p>News</p>
              </Link>
            </div>

            <div
              className={`navbar-item ${
                pathname === "/contact-us" ? "navbar-item-active" : ""
              }`}
              style={{ marginRight: "0px" }}
            >
              <Link href="/contact-us" className="navbar-link">
                <p>Contact us</p>
              </Link>
            </div>
          </div>
          <div className="dflexbannerbtn dflexbannerHeaderbtn dflexbannerbtnp">
                <div className="request-btn">
                  <Link
                    href="https://app.memate.com.au/requestdemo"
                    target="_blank"
                    className="nav-btn--get-started  navbar-link"
                  >
                       <WhiteButtonBammer text="Request a Demo"/>
                  </Link>
                </div>
                <div className="navbar-log-in">
            
            <Link
              href="https://app.memate.com.au/"
              target="_blank"
              className="nav-btn--get-started navbar-link"
            >
              <TronButton text="Log In" />
            </Link>
          </div>
          </div>
          {/* <div className="navbar-log-in">
            
            <Link
              href="https://app.memate.com.au/"
              target="_blank"
              className="nav-btn--get-started navbar-link"
            >
              <TronButton text="Log In" />
            </Link>
          </div> */}

          {showDropDown && (
            <div ref={menuRef} className="header-menu-wrapper">
              <div className="header-menu-header-div">
                <div className="header-menu-header-div-menu">
                  {menuItemList.map((menu) => {
                    return (
                      <div
                        key={menu.id}
                        style={{ cursor: "pointer" }}
                        className={
                          selectedMenuItem === menu.id
                            ? "header-menu-item"
                            : "header-menu-item-unselected"
                        }
                        onMouseEnter={() => setSelectedMenuItem(menu.id)}
                        // onMouseLeave={() => setSelectedMenuItem(menu.id)}
                      >
                        <div
                          className={
                            selectedMenuItem === menu.id
                              ? "header-menu-icon-wrapper"
                              : "header-menu-icon-wrapper"
                          }
                        >
                          {/* <p */}
                          {menu.unselectedIcon}
                          {/* alt={menu.unselectedIcon} */}
                          {/* // /> */}
                          <p
                            style={{
                              marginLeft: `${menu.id === 3 ? "6px" : ""}`,
                            }}
                            className={
                              selectedMenuItem === menu.id
                                ? "header-menu-item-name-selected"
                                : "header-menu-item-name-unselected"
                            }
                          >
                            {menu?.label}
                          </p>
                        </div>

                        <div
                          className={
                            selectedMenuItem === menu.id
                              ? "menu-next-icon-wrapper"
                              : "menu-next-icon-wrapper-unselected"
                          }
                        >
                          {selectedMenuItem === menu.id ? (
                            <img src={RightColorArrow} alt="RightColorArrow" />
                          ) : (
                            <img
                              src={RightBlackArrow}
                              alt="RightBlackArrow"
                              style={{ transform: "rotate(-90deg)" }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="header-menu-header-div-menu-component">
                  {renderContent()}
                </div>
                <div className="header-menu-header-div-memate-component">
                  {/* <img src={Images.logo} alt="logo" type="image/svg+xml" /> */}
                  {/* <picture > */}
                  <MemateLogoHeaderAbout alt="logo" type="image/svg+xml" />
                  {/* </picture> */}
                  <div className="header-menu-memate-feature">
                    <div className="header-menu-feature">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-text">
                        Easy to Learn and Use
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">Remote Acess</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">Workflow</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">
                        Single database
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">
                        Build for Australia
                      </p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">CRM & ERP</p>
                    </div>

                    <div className="header-menu-features">
                      <img src={menuImages.meMateCheck} alt="meMateCheck" />
                      <p className="header-menu-feature-texts">Reporting</p>
                    </div>
                  </div>
                  <div className="request-a-button-wrapper">
                    <Link
                      href="https://app.memate.com.au/requestdemo"
                      >
                      <HeaderButtonWithGradient
                        text="Request a Demo"
                        borderVal="black"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="header-menu-footer-div">
                <div className="header-menu-footer-left-content">
                  <div
                    className="header-footer-legal"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedMenuItem(5);
                    }}
                  >
                    {selectedMenuItem === 5 ? (
                      <LegalActiveSVG />
                    ) : (
                      <LegalInactiveSVG />
                    )}

                    <p
                      className={
                        selectedMenuItem === 5
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Legal
                    </p>
                  </div>
                  <div
                    className="header-footer-legal"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setSelectedMenuItem(6);
                    }}
                  >
                    {selectedMenuItem === 6 ? (
                      <ResourcesActiveSVG />
                    ) : (
                      <ResourcesInactiveSVG />
                    )}

                    <p
                      className={
                        selectedMenuItem === 6
                          ? "header-footer-legal-text-selected"
                          : "header-footer-legal-text"
                      }
                    >
                      Resources
                    </p>
                  </div>
                  <div
                    className={`header-footer-legal header-footer-faqs ${
                      pathname === "/faqs"
                        ? "header-footer-legal-text-selected"
                        : ""
                    }`}
                    style={{ cursor: "pointer" }}
                  >
                    <Link href="/faqs">
                      {/* <img
      src={location.pathname === "/faqs" ? menuImages.selectedLegal : menuImages.unselectedLegal}
      alt="faqs-icon"
    /> */}
                      <FAQSVG />

                      <p
                        className={
                          pathname === "/faqs"
                            ? "header-footer-legal-text-selected"
                            : "header-footer-legal-text"
                        }
                      >
                        &nbsp; FAQs
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="header-menu-footer-left-content">
                  <div className="header-footer-legal">
                    {/* <img src={menuImages.unselectedSales} alt="unselectedSales" /> */}
                    <ContactSalesSVG />
                    <Link href="/contact-us">
                      {" "}
                      <p className="header-footer-legal-text">
                        Contact Sales
                      </p>{" "}
                    </Link>
                  </div>
                  <div className="header-footer-legal">
                    {/* <img
                      src={menuImages.unselectedWatchDemo} alt="unselectedWatchDemo"
                      style={{ marginTop: "-2px" }}
                    /> */}
                    <WatchDemoSVG />
                   
                      {" "}
                      <p className="header-footer-legal-text">
                        Watch demo
                      </p>{" "}
                    
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
