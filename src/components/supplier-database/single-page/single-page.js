import React from "react";
import "../style.css";
import style from "../supplier-module.module.scss";
import Link from 'next/link';
import EmailIcon from "../../../svg/EmailIcon";
import WebsiteUrlIcon from "../../../svg/WebsiteUrlIcon";
import AddressIcon from "../../../svg/AddressIcon";
import RequestToEdit from "./requesttoedit";
import { Helmet } from "react-helmet-async";
import NewsSchema from "../../blog/news-schema";
const googlemap =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/googlemap.svg";
const GlobIcon =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/glob-icon.svg";
const arrowIconBack =
  "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

function DataSingle({ slug, supplierData }) {
  const breadcrumbList = supplierData
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://memate.com.au/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Supplier database",
            item: "https://memate.com.au/supplier-database",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: supplierData.cname,
            item: `https://memate.com.au/supplier-database/${slug}`,
          },
        ],
      }
    : null;

  const article = supplierData
    ? {
        type: "supplierData",
        headline: supplierData.cname,
        datePublished: new Date(supplierData.created_at),
        dateModified: new Date(
          supplierData.updated_at || supplierData.created_at
        ),
        author: supplierData.author || "admin",
        publisherName: "Supplier Data",
        publisherLogo:
          "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
        keywords: supplierData.cname,
      }
    : null;

  return (
    <>
      <div className="parent-blog-page customerstoriespage">
        {/* <Helmet> */}
          {article && breadcrumbList && (
            <NewsSchema article={article} breadcrumbList={breadcrumbList} />
          )}
        {/* </Helmet> */}
        <div className="parent-blog">
          <div className="pageBreadcrumbs">
            <ul className={style.linkstyleDisable}>
              <li>
                <Link href="/" className={style.linkstyleDisable}>
                  Home
                </Link>
              </li>
              /
              <li>
                <Link
                  href="/supplier-database"
                  className={style.linkstyleDisable}
                >
                  Supplier Database
                </Link>
              </li>
              /
              <li>
                {" "}
                <i>{slug}</i>
              </li>
            </ul>
            <Link href="/supplier-database" className="backButStories">
              <img src={arrowIconBack} alt="Arrow BAck" /> Back
            </Link>
          </div>
          <div className={`databasesinglePage ${style.alphabetFilter}`}>
            <div className={style.databasesinglehead}>
              <div className={style.databasesLogo}>
                <img
                  src={supplierData.upload_url}
                  alt={`${supplierData.cname} `}
                />
              </div>
              <h2>{supplierData.cname}</h2>
            </div>

            <div className={style.detailsGrid}>
              <div className={`${style.detailsCol} ${style.detailsCoActive} `}>
                <div className={`${style.itemDatawrap} `}>
                  <div className={style.itemDatalist}>
                    <div className={style.left}>
                      <div className={style.leftimgLogo}>
                        <img
                          src={supplierData.upload_url}
                          alt={`${supplierData.cname}`}
                        />
                      </div>
                      <strong>{supplierData.cname}</strong>
                    </div>
                    <div className={style.right}>
                      <div className={style.roundBx}>
                        ABN: {supplierData.abn}{" "}
                      </div>
                      <div className={style.roundimg}>
                        <Link
                          href={`http://maps.google.com/?q=${supplierData.streetaddress}, ${supplierData.city}, ${supplierData.state}, ${supplierData.postcode}, ${supplierData.country}`}
                          target="_blank"
                        >
                          <img
                            src={googlemap}
                            alt={`${supplierData.streetaddress} `}
                          />
                        </Link>
                      </div>
                      <div className={style.roundimg}>
                        <Link href={supplierData.website} target="_blank">
                          <img src={GlobIcon} alt={`Website`} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.accInnercontent}>
                  <div className={style.accInnerhead}>
                    {/* <p><Link to={supplierData.main_industry?.slug}>{supplierData.main_industry?.title}</Link></p> */}
                    <p>
                      <>{supplierData.main_industry?.title}</>
                    </p>
                    <ul>
                      {supplierData.supplier_services_data?.map(
                        (service, idx) => (
                          <li key={idx}>
                            {/* <a href={`/services/${service.slug}`}>{service.title}</a> */}
                            <i>{service.title}</i>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className={style.accInneradd}>
                    <ul>
                      <li>
                        <Link
                          href={`http://maps.google.com/?q=${supplierData.streetaddress}, ${supplierData.city}, ${supplierData.state}, ${supplierData.postcode}, ${supplierData.country}`}
                          target="_blank"
                        >
                          <AddressIcon /> {supplierData.streetaddress},{" "}
                          {supplierData.city}, {supplierData.state},{" "}
                          {supplierData.postcode}
                        </Link>
                      </li>
                      <li>
                        <Link href={`mailto:${supplierData.email}`}>
                          <EmailIcon /> {supplierData.email}
                        </Link>
                      </li>
                      <li>
                        <Link href={supplierData.website} target="_blank">
                          <WebsiteUrlIcon /> {supplierData.website}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={style.detailsCol}>
                <h3>About</h3>
                <p>{supplierData?.discription}</p>
              </div>
            </div>
          </div>
          <div className="darkButtonstyleEdit">
            <RequestToEdit supplierData={supplierData} />
          </div>
        </div>
      </div>
    </>
  );
}
export default DataSingle;
