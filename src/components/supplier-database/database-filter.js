import React, { useState } from "react";
import style from "./supplier-module.module.scss";
import "./style.css";
import Link from 'next/link';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WebsiteUrlIcon from "../../svg/WebsiteUrlIcon";
import EmailIcon from "../../svg/EmailIcon";
import AddressIcon from "../../svg/AddressIcon";
import Images from "../../assests/blog-images";
const FilterIcon =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/search-filter.svg";
// const LogoFilter = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo-filter.svg";
const googlemap =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/googlemap.svg";
const GlobIcon =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/glob-icon.svg";

const DataBase = ({
  supplier = [],
  search,
  loading,
  totalSupplier,
  onNext,
  searchTerm,
  setSearchTerm,
  activeLetter,
  setActiveLetter,
}) => {
  const [expandedPanel, setExpandedPanel] = useState(false);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    <div>
      <div
        className={style.searchfilterBox}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="1500"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div className={style.searchIcon}>
          <img className="search_logo" src={FilterIcon} alt="filter Icon" />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search"
            aria-label="Search suppliers"
          />
        </div>
      </div>

      <div
        className={style.alphabetbox}
        style={{ marginBottom: "10px" }}
        data-aos="fade-up"
        data-aos-offset="50"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <span className={style.spanDisplay}>Display</span>
        <div className={style.allButFilter}>
          <button className={style.active} onClick={() => setActiveLetter("")}>
            All
          </button>
          <button disabled>#</button>
        </div>
        {alphabet.map((letter) => (
          <button
            onClick={() => setActiveLetter(letter)}
            key={letter}
            style={{
              marginRight: "5px",
              backgroundColor: activeLetter === letter ? "lightblue" : "white",
            }}
          >
            {letter}
          </button>
        ))}
      </div>

      <ul className={style.alphabetFilter}>
        {supplier.length > 0 ? (
          supplier.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="50"
              data-aos-duration="2500"
              data-aos-mirror="true"
              data-aos-once="false"
              data-aos-anchor-placement="top-bottom"
            >
              <Accordion
                className={`${style.alphabetlist} ${
                  expandedPanel === index ? style.activeAccordion : ""
                }`}
                expanded={expandedPanel === index}
                onChange={handleAccordionChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                  className={`${style.itemDatawrap} ${
                    expandedPanel === index ? style.activeSummary : ""
                  }`}
                >
                  <Typography component="div" className={style.itemDatalist}>
                  <div className={style.left}>
                     <div className={style.leftimgLogo}>
                       <img
                        src={item.upload_url || Images.blogImgempty}
                        alt={`${item.cname}`}
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = Images.blogImgempty;
                        }}
                      />
                     </div>
                      <b>{item.cname}</b>
                    </div>

                    <div className={style.right}>
                      {item.abn && (
                       <div className={`${style.roundBx} ${style.roundBx12}`}>ABN: {item.abn}</div>
                      )}
                      <div className={style.roundimg}>
                        {" "}
                        <Link href={item.website} target="_blank">
                          <img src={GlobIcon} alt={`${GlobIcon}`} />
                        </Link>
                      </div>
                      <div className={style.roundimg}>
                        <Link
                          href={`http://maps.google.com/?q=${item.streetaddress}, ${item.city}, ${item.state}, ${item.postcode}, ${item.country}`}
                          target="_blank"
                        >
                          <img src={googlemap} alt={`${item.streetaddress}`} />
                        </Link>
                      </div>
                    </div>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={style.accInnercontent}>
                  <div className={style.accInnerhead}>
                 <p><>{item.main_industry?.title}</></p>
                  <ul>
                  {item.supplier_services_data?.map((service, idx) => (
                    <li key={idx}>
                      {service.title}
                    </li>
                  ))}
                </ul>
                  </div>
                  <div className={style.accInneradd}>
                    <ul>
                      <li>
                        <Link
                          href={`http://maps.google.com/?q=${item.streetaddress}, ${item.city}, ${item.state}, ${item.postcode}, ${item.country}`}
                          target="_blank"
                        >
                          <AddressIcon />{item.streetaddress}, {item.city}, {item.state}, {item.postcode}
                        </Link>
                      </li>
                      <li>
                        <Link href={`mailto:${item.email}`}><EmailIcon /> {item.email}</Link>
                      </li>
                      <li>
                        <Link href={item.website} target="_blank">
                        <WebsiteUrlIcon /> {item.website}
                        </Link>
                      </li>
                    </ul>
                   <Link
                     href={`/supplier-database/${item?.slug || 'no-slug'}-${item?.city ? item.city.toLowerCase() : 'unknown'}`}
                      className={style.detailsSupplyersbut}>
                      View Details
                    </Link>
                  </div>
                </AccordionDetails>
              </Accordion>
            </li>
          ))
        ) : (
          <p>No suppliers found</p>
        )}
      </ul>

      {totalSupplier > supplier?.length && (
        <button onClick={onNext} className={style.loadmoreSupplyersbut}>
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default DataBase;
