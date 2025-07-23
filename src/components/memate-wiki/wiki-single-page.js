import React, { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import style from './wiki.module.scss';
import { useQuery } from "@tanstack/react-query";
import { wikiBaseId,wikiBase } from "../../api/wikiApi"; 
import { Helmet } from 'react-helmet-async';
import NewsSchema from "../blog/news-schema";

const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";
     const WikiSinglePage = () => {
    const params = useParams();
    const categorySlug = params.categorySlug;
    const { categoryName} = params.state || {};

    const { data: wikiData = [] } = useQuery({
    queryKey: ['wikiBase'],
    queryFn: wikiBase,
    enabled: true,
    });

const selectedCategory = wikiData.find(cat => cat.slug === categorySlug);
const idData = selectedCategory ? `${selectedCategory.id}/${selectedCategory.name}` : null;
   
    const { data: wikiBaseIdData } = useQuery({
    queryKey: ['wikiBaseId', idData],
    queryFn: () => wikiBaseId(idData),
    enabled: !!idData,
    });

const breadcrumbList = selectedCategory ? {
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
      "name": selectedCategory[0]?.title,
      "item": `https://memate.com.au/news/memate-wiki/${selectedCategory?.slug}`
    }
  ]
} : null;

const article = selectedCategory ? {
  type: "wikicategory",
  headline: selectedCategory.meta_title,
  datePublished: new Date(selectedCategory.created_at),
  dateModified: new Date(selectedCategory.updated_at || selectedCategory.created_at),
  author: selectedCategory.author || "admin",
  publisherName: "meMate wiki",
  publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
  // image: post.featured_img_url || Images.blogImgempty,
  // url: `https://memate.com.au/news/${post.slug}`,
  keywords: selectedCategory.h1,
  genre: selectedCategory.title || "General",
  articleSection: selectedCategory.h2 || "General"
} : null;

// if (article) {
//   console.log("Article Schema:", article);
//   console.log("Article Schema (string):", JSON.stringify(article));
// }


    return (
        <>
        {selectedCategory && (
        <Helmet>
            <title>{selectedCategory.meta_title || "Wiki Title"}</title>
            <meta name="description" content={selectedCategory.meta_description || "Wiki Description"} />
            <meta property="og:title" content={selectedCategory.meta_title || "Wiki Title"} />
            <meta property="og:description" content={selectedCategory.meta_description || "Wiki Description"} />
        </Helmet>
        )}
         {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}
        <div className="parent-blog ">
             <div className="pageBreadcrumbs">
        <ul className={style.linkstyleDisable}>
          <li><Link href='/' className={style.linkstyleDisable}>Home</Link></li>/<li><Link href='/memate-wiki' className={style.linkstyleDisable}>meMate wiki</Link>
          </li>/<li> <a>{selectedCategory?.name}</a></li>
          
        </ul>
        <Link href='/memate-wiki' className="backButStories"><img src={arrowIconBack} alt="Arrow"/> Back</Link>
        </div> 
        <div className={` ${style.wikimainwrap}`}>
            <div className={style.wikimainhead}>
                {selectedCategory && (
               <>
                <h4>{selectedCategory.name}</h4>
                <h1>{selectedCategory.h1}</h1>
                <h2>{selectedCategory.h2}</h2>
               </>
                )}
                </div>
                   <div className={style.mainGridwtapFlex}> 
                {wikiBaseIdData && wikiBaseIdData.map((item, index) => (     
                    <Link
                    key={item.id}
                    href={{
                        pathname: `/memate-wiki/${categorySlug}/${item.slug}`,
                        state: {
                        id: item.id,
                        categoryName,
                        slug: item.slug
                        }
                    }}
                    className={`itemFlex ${style.itemFlex}`}
                    >
                    <div className={style.itemText}>
                        <h3>{item.title}</h3>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
        </>
    );
};

export default WikiSinglePage;
