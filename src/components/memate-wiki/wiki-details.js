import React, { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseDtails,wikiBase } from "../../api/wikiApi";
import { Link } from "react-scroll";
import { Helmet } from 'react-helmet-async';
import StickyBox from "react-sticky-box";
import { scroller } from "react-scroll";
import NewsSchema from "../blog/news-schema";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";

const WikiDetails = () => {
    const params = useParams();
    const { categorySlug, itemSlug } = params;
    const titleSlug = itemSlug;
    const Slug = categorySlug;
    const subSlug = categorySlug;
    const router = useRouter();

    const { data: wikiBaseIdData = [], isLoading, error } = useQuery({
        queryKey: ['wikiBaseDtails', titleSlug],
        queryFn: () => wikiBaseDtails(titleSlug,Slug),
        enabled: !!titleSlug, 
    });

   const { data: wikiData = [] } = useQuery({
  
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
    });

const selectedCategory = wikiData.find(cat => cat.slug === subSlug);


    
    const [activeItem, setActiveItem] = useState(null);
    const observerRef = useRef(null);
    const initialized = useRef(false);

    useEffect(() => {
        if (!isLoading && !error) {
            const isValidSlug = wikiBaseIdData.some(
                (item) => item.slug === titleSlug
            );
            if (!isValidSlug) {
                router.push("/404");
            }
        }
    }, [wikiBaseIdData, titleSlug, isLoading, error, router]);
    console.log('wikiBaseIdData: ', wikiBaseIdData);


    useEffect(() => {
        if (wikiBaseIdData.length > 0) {
            const firstSlug = wikiBaseIdData[0]?.titleSlug;
            if (firstSlug && firstSlug !== titleSlug) {
                router.push(`/memate-wiki/${firstSlug}`);
            }
        }
    }, [wikiBaseIdData, titleSlug, router]);

    useEffect(() => {
        if (wikiBaseIdData.length === 0) return;

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveItem(sectionId);
                    
                    if (initialized.current) {
                        // window.history.replaceState(null, null, `#${sectionId}`);
                    }
                }
            });
        };

        observerRef.current = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '-30% 0px -40% 0px',
            threshold: 0.2
        });

        const headings = document.querySelectorAll('.kb-section-headingF');
        headings.forEach(heading => observerRef.current.observe(heading));

        // Set initial active item
        requestAnimationFrame(() => {
        const firstVisible = Array.from(headings).find(heading => {
            const rect = heading.getBoundingClientRect();
            return rect.top <= window.innerHeight * 0.5;
        });

        const target = firstVisible || headings[0];
        if (target) {
            const id = target.id;
            setActiveItem(id);
            scroller.scrollTo(id, {
                duration: 500,
                delay: 0,
                smooth: true,
                offset: -500
            });
        }

        initialized.current = true;
    });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [wikiBaseIdData]);



const breadcrumbList = wikiBaseIdData ? {
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
      "name": "meMate wiki",
      "item": "https://memate.com.au/memate-wiki"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": wikiBaseIdData[0]?.title,
      "item": `https://memate.com.au/news/memate-wiki/${selectedCategory?.slug}`
    }
  ]
} : null;

const article = wikiBaseIdData ? {
  type: "meMatewiki",
  headline: wikiBaseIdData[0]?.h1,
  datePublished: new Date(wikiBaseIdData.created_at),
  dateModified: new Date(wikiBaseIdData.updated_at || wikiBaseIdData.created_at),
  author: wikiBaseIdData.author || "admin",
  publisherName: "meMate wiki",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  // image: post.featured_img_url || Images.blogImgempty,
  // url: `https://memate.com.au/news/${post.slug}`,
  keywords: wikiBaseIdData[0]?.h1,
  genre: wikiBaseIdData[0]?.title || "General",
  articleSection: wikiBaseIdData[0]?.h2 || "General"
} : null;

// if (article) {
//   console.log("Article Schema:", article);
//   console.log("Article Schema (string):", JSON.stringify(article));
// }



    if (isLoading) return <div></div>;
    if (error) return <div>Error fetching data. Please try again later.</div>;
    return (
        <>
            <Helmet>
                <title>{wikiBaseIdData[0]?.seo_title || "Wiki Details"}</title>
                <meta name="description" content={wikiBaseIdData[0]?.metadescription || "Wiki details page"} />
                <meta property="og:title" content={wikiBaseIdData[0]?.seo_title || "Wiki Details"} />
                <meta property="og:description" content={wikiBaseIdData[0]?.metadescription || "Wiki details page"} />
            </Helmet>
             {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
            <div className="parent-blog">
                <div className="pageBreadcrumbs">
                    <ul className={style.linkstyleDisable}>
                        <li><a href="/" className={style.linkstyleDisable}>Home</a></li>/
                        <li><a href="/memate-wiki" className={style.linkstyleDisable}>meMate wiki</a></li>/
                        <li><a href={`/memate-wiki/${selectedCategory?.slug}`} className={style.linkstyleDisable}>{selectedCategory?.name}</a></li>/
                        <li>{wikiBaseIdData[0]?.title}</li>
                    </ul>
                    <a href="/memate-wiki" className="backButStories">
                        <img src={arrowIconBack} alt="Arrow" /> Back
                    </a>
                </div>
                <div className={`${style.wikimainwrap}`}>
                    <div className={style.wikimainhead}>
                        <h1>{wikiBaseIdData[0]?.h1}</h1>
                        <h2>{wikiBaseIdData[0]?.h2}</h2>
                        <p>{wikiBaseIdData[0]?.short_description}</p>
                    </div>
                    <div className="kb-wrapper kb-wrapperF">

   
                        <div className="kb-left-wrapperm kb-left-wrappermain kb-tos-wrapperF">
                            <StickyBox offsetTop={100} offsetBottom={0}>
                            <ul className="kb-listF">
                                {wikiBaseIdData.map((item) => {
                                    const tempDiv = document.createElement("div");
                                    tempDiv.innerHTML = item.description || "";
                                    const headings = Array.from(tempDiv.querySelectorAll("h3"));
                                    
                                    return headings.map((heading, idx) => {
                                        const sectionId = `section-${item.id}-${idx}`;
                                        return (
                                            <li
                                                key={sectionId}
                                                className={`kb-list-itemF ${activeItem === sectionId ? 'kb-list-item-activeF' : ''}`}
                                            >
                                                <Link
                                                  
                                                    to={sectionId}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                    onSetActive={() => setActiveItem(sectionId)}
                                                >
                                                    <span>{heading.textContent}</span>
                                                </Link>
                                            </li>
                                        );
                                    });
                                })}
                            </ul>
                            </StickyBox>
                        </div>

                        <div className="kb-right-wrapperM">
                            {wikiBaseIdData.map((item) => {
                                const tempDiv = document.createElement("div");
                                tempDiv.innerHTML = `<div>${item.description || ""}</div>`;
                                const sections = Array.from(tempDiv.querySelectorAll("h3"));
                                
                                return sections.map((heading, idx) => {
                                    const sectionId = `section-${item.id}-${idx}`;
                                    let content = [];
                                    let currentNode = heading.nextSibling;

                                    while (currentNode && currentNode.nodeName !== 'H3') {
                                        content.push(currentNode.outerHTML || currentNode.textContent);
                                        currentNode = currentNode.nextSibling;
                                    }

                                    return (
                                        <div key={sectionId} className="kb-right-sectionF">
                                            <h2 
                                                className="kb-section-headingF" 
                                                id={sectionId}
                                                dangerouslySetInnerHTML={{ __html: heading.innerHTML }}
                                            />
                                            <div dangerouslySetInnerHTML={{ __html: content.join('') }} />
                                        </div>
                                    );
                                });
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WikiDetails;