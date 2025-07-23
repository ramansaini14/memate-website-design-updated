import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link, animateScroll as scroll } from "react-scroll";
import StickyBox from "react-sticky-box";
import NewsSchema from "../blog/news-schema";

const knowledgeData = [
  {
    id: 1,
    name: "Website Terms of Use",
    description: `
      <p class='paraTextTos'>Use of this website is subject to the terms of this Website Terms of Use, as amended from time to time. If you do not agree to these terms, you should immediately cease using this website. The terms of this Website Terms of Use do not exclude, restrict, or modify:</p>
      <ul class="listMargin">
         <li class="paraTextTos">the application of any provision of the Australian Consumer Law (whether applied as a law of the Commonwealth or any State or Territory of Australia) (ACL); </li>
         <li class="paraTextTos">the exercise of any right or remedy conferred by the ACL; or </li>
         <li class="paraTextTos">the liability of meMate for a failure to comply with any applicable consumer guarantees where to do so would:</li>
         <li class="paraTextTos">contravene the ACL; or</li>
         <li class="paraTextTos">cause any part of this Website Terms of Use to be void. </li>
      </ul>
      <p class='paraTextTos'>Notice regarding representations, documents, and other website content
     Subject to the above and to the extent permitted by law:</p>
       <ul class="listMargin">
         <li class="paraTextTos">meMate makes no representations, conditions, or warranties of any kind, express or implied, as to the operation or results of this website, or the accuracy, correctness, or reliability of the information, content, or documentation available on this website; and  </li>
         <li class="paraTextTos">meMate  shall not be liable for any direct, indirect, or consequential damages whatsoever, including loss of use, data, or profits, whether arising in contract, negligence, equity, or under statute as a result of or in connection with the use of this website or documentation, or information available on this website. </li>
      </ul>
      <p class='paraTextTos'>Some jurisdictions do not allow the exclusion or limitation of implied warranties or of liability for incidental or consequential damages, so the above limitations or exclusions may not apply to you. In the event that any of the above limitations or exclusions are held to be unenforceable, meMate’s total liability shall not exceed the amount of the fee you have paid.</p>
      <p class='paraTextTos'>The documents published on this website could include technical inaccuracies or typographical errors. The information presented on this website is changed periodically, and meMate may make improvements and/or changes in the product(s), program(s), and/or documentation described at any time, without notice.</p>
    `,
    children: [],
  },
  {
    id: 2,
    name: "Notice specific to software available on this website",

    description: `
    <p class='paraTextTos'>Any software downloaded from this website is governed by the terms of the end-user license agreement (EULA), which accompanies or is included with the software. Any reproduction or redistribution of the software not in accordance with the EULA is prohibited by law.</p>

    <p class='paraTextTos'>
 Without limiting the foregoing, reproduction or copying of the software to any other server, site, or location for subsequent reproduction or redistribution is expressly prohibited.
  </p>
   
    `,
    children: [],
  },
  {
    id: 3,
    name: "meMate does not provide Tax Advice",
    description: `
    <p class='paraTextTos'>meMate is not a registered entity pursuant to the Tax Agent Services Act 2009 (TASA) and therefore cannot provide taxation advice to clients. If you have a query concerning taxation, including filing your BAS return or annual tax statements, you should consult with your accountant or other registered tax adviser.</p>
    
 
   `,
    children: [],
  },
  {
    id: 4,
    name: "Links to third-party sites",

    description: `
    <p class='paraTextTos'>Some links on this website will let you leave this site. The linked sites are not under the control of meMate, and meMate is not responsible for their operation or contents. These links are provided as a convenience and do not imply an endorsement of the site by meMate.</p>
    
    `
},

  {
    id: 5,
    name: "Applicable law",

    description: `
    <p class='paraTextTos'>This website is operated and provided from Australia. Your use of this website is governed by the laws of Victoria, Australia.</p>
    <p class='paraTextTos'>This website may be accessed throughout Australia and overseas. meMate makes no representations that the content of this website complies with the laws (including intellectual property laws) of any country outside Australia. If you access this website from outside Australia, you do so at your own risk and are responsible for complying with the laws in the place where you access this website.</p>

    `,
    children: [],
  },
  {
    id: 6,
    name: "Intellectual property rights",

    description: `
    <p class='paraTextTos'>meMate and the meMate logo are registered trademarks of meMate Enterprise Pty  Limited. Other product and company names mentioned on this website might be the trademarks of their respective owners.</p>
    <p class='paraTextTos'>Copyright in this website is owned by meMate Enterprise Pty  Limited.</p>

    `,
    children: [],
  },
  {
    id: 7,
    name: "Shopping cart",

    description: `
    <p class='paraTextTos'>meMate’s websites include an electronic shopping cart. In the event that you commence but do not complete a transaction, meMate or its agents may use the information you have entered to contact you by email to either:</p>
    <p class='paraTextTos'>(a) remind you that the transaction remains incomplete; or</p>
    <p class='paraTextTos'>(b) understand why the transaction did not complete (‘Follow-Up Email’).</p>
    <p class='paraTextTos'>By using meMate’s websites, you consent to receiving such Follow-Up Emails. If you do receive a Follow-Up Email, you can request that meMate not make further contact regarding the incomplete transaction.</p>

    `,
    children: [],
  },
];




const TOS = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [activeItem, setActiveItem] = useState(knowledgeData[0]?.id);
  const observerRef = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    setKnowledge(knowledgeData);
  }, []);

  useEffect(() => {
    if (knowledge.length === 0) return;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.split("-")[1];
          setActiveItem(Number(id));

          if (initialized.current) {
            // window.history.replaceState(null, null, `#section-${id}`);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-30% 0px -40% 0px",
      threshold: 0.2,
    });

    const headings = document.querySelectorAll(".kb-section-headingF");
    headings.forEach((heading) => observerRef.current.observe(heading));

    requestAnimationFrame(() => {
      const firstVisible = Array.from(headings).find((heading) => {
        const rect = heading.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.5;
      });

      setActiveItem(
        firstVisible
          ? Number(firstVisible.id.split("-")[1])
          : knowledgeData[0].id
      );
      initialized.current = true;
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [knowledge]);

  // const handleClick = (id) => {
  //   setActiveItem(id);
  // };
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

  const breadcrumbList = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://memate.com.au/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Terms of use",
      "item": "https://memate.com.au/terms"
    },
  ]
} ;

const article =  {
  type: "terms",
  headline: "Terms of Use | MeMate Business Software Australia",
  author: "admin",
  publisherName: "Terms of use",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  keywords: "Terms of Use | MeMate Business Software Australia",

} 



  return (
    <>
      <Helmet>
        <title>Terms of Use | MeMate Business Software Australia</title>
        <meta
          name="description"
          content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
        />
        <meta
          property="og:title"
          content="Terms of Use | MeMate Business Software Australia"
        />
        <meta
          property="og:description"
          content="View the terms of use for MeMate — Australia’s business management software platform. Review your rights, responsibilities and platform access terms."
        />
         </Helmet>
         {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
                <div className="conditionWrrapperF">
              <div className="pageBreadcrumbs">
              <ul>
                <li><a href="/">Home</a></li>/
                <li>
                  <a className="MainPageLink" href="/terms">Terms of use</a>
                </li>
              </ul>
              <a href="/" className="backButStories">
                <img src={arrowIconBack} alt="Arrow" /> Back
              </a>
            </div>

           <div className="tmsheadF">
            <p className="tos-section-headingF" id="section1">
              memate
            </p>
           <h1 className="blackH1Tag">Terms of Use</h1>
        </div>
        </div>
        <div className="kb-wrapper">
        <div className="kb-left-wrapperm kb-left-wrappermain kb-tos-wrapperF">
          <StickyBox offsetTop={100} offsetBottom={0}>
          {knowledge.map((item) => (
            <ul className="kb-listF" key={item.id}>
              <li
                className={`kb-list-itemF ${
                  activeItem === item.id ? "kb-list-item-activeF" : ""
                }`}
              >
                <Link
                  to={`section-${item.id}`}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onSetActive={() => setActiveItem(item.id)}
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            </ul>
          ))}
          </StickyBox>
        </div>

        <div className="kb-right-wrapperM">
          {knowledge.map((item) => (
            <div className="kb-right-sectionF" key={item.id}>
              <h2 className="kb-section-headingF" id={`section-${item.id}`}>
                {item.name}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TOS;
