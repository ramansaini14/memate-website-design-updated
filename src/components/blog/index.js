import React from "react";
import "./style.css";
import Images from "../../assests/blog-images";
import Link from 'next/link';
import { Helmet } from 'react-helmet-async';
import NewsSchema from "./news-schema";


function Blog({ PostsCategories, activeCategory, handleTabClick, posts, totalPosts, loading, postsLatest, handleNext }) {

  
  // Safety checks for data availability
  if (!postsLatest || !Array.isArray(postsLatest) || !PostsCategories || !Array.isArray(PostsCategories)) {
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%'}}>Loading blog content...</div>;
  }

  const formatDateWithOrdinal = (dateString) => {
    try {
      // Ensure consistent date parsing across server and client
      const date = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1'));
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return dateString;
      }
      
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
      const year = date.getFullYear();

      const ordinalSuffix = (n) => {
        if (n > 3 && n < 21) return 'th'; 
        switch (n % 10) {
          case 1: return 'st';
          case 2: return 'nd';
          case 3: return 'rd';
          default: return 'th';
        }
      };

      return `${day}${ordinalSuffix(day)} ${month}, ${year}`;
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };
  const filteredPosts = activeCategory === 0
    ? []
    : posts;

    const latestPost = postsLatest?.[0];
    const article = latestPost ? {
      type: "NewsArticle",
      headline: latestPost.title,
      datePublished: new Date(latestPost.publish_date).toISOString(),
      dateModified: new Date(latestPost.updated_at || latestPost.publish_date).toISOString(),
      author: latestPost.author || "MeMate News",
      publisherName: "MeMate Media",
      publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      image: latestPost.featured_img_url || Images.blogImgempty,
      url: `https://memate.com.au/news/${latestPost.slug}`,
      keywords: latestPost.keywords || latestPost.title?.split(" ").slice(0, 5).join(", "),
      genre: latestPost.category?.title || "General",
      articleSection: latestPost.category?.title || "General"    
    } : null;


    return (
    <div id="blogGrid">
      <Helmet>
        <title>MeMate News | Business Software, Tech & Regulation Updates for SMEs</title>
        <meta name="description" content="Stay updated with the latest business software news, tech trends, and regulation updates for Australian SMEs. New MeMate features, tools & tips inside." />
        <meta property="og:title" content="MeMate News | Business Software, Tech & Regulation Updates for SMEs" />
        <meta property="og:description" content="Stay updated with the latest business software news, tech trends, and regulation updates for Australian SMEs. New MeMate features, tools & tips inside." />
      </Helmet>
      {article && <NewsSchema article={article} />}
      <div className="parent-blog-page ">
        <div className="parent-blog">
          <div className="blogmainheadcontainer">
            <div className="heading-blog">
             Articles
            </div>
              <h1>News, Features & Regulation <br/>Updates from MeMate</h1>
            <div className="dog-img-container1 dog-img-container">
              <img
              className="dog-img"
            srcSet={`${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png'} 600w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage2x.png'} 1200w, ${'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage1x.png'} 1800w`}
            sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 25vw"
            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/media/DogImage3x.png'} alt="Dog" />
            </div>
            <div className="blog-description-smallb">
          <p>Latest Small Business Technology News and Software Updates</p> 
            </div>
          </div>
          <div className="categoriesMainWrap">
            <div className="listTabs">
              {PostsCategories?.map((postCat) => (
                <button
                  key={postCat.id}
                  className={`filterBlogTabBtn ${activeCategory === postCat.id ? "active" : ""
                    }`}
                  onClick={() => handleTabClick(postCat.id)}
                >
                  {postCat.title}
                </button>
              ))}
            </div>
            {filteredPosts.length !== 0 ?
            <>
                    <div className="categories">
                      {filteredPosts?.map((post) => (
                        <div key={post.id} className="img-container-3-div "  data-aos="fade-up"
                        data-aos-offset="50"
                        data-aos-delay="50"
                        data-aos-duration="2500"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-bottom">
                          <div className="img-container-3-img1-div" style={{ marginBottom: "0.5rem" }}>
                            <Link href={`/news/${post.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                              <img
                                className="img-container-3-img-1"
                                src={post.featured_img_url || Images.blogImgempty}
                                alt={post.title}
                              />
                            </Link>
                            <div className="img-heading-container">
                              <div className="date-A">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                              <div className="date-heading-mainb"><Link href={`/news/${post.slug}`}>{post.title}</Link></div>
                            </div>
                            <div className='postCategory'>
                              <Link href={`/news/category/${post.category.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{post.category.title}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="nextbtn-container-A">
                        {totalPosts > filteredPosts?.length && <button onClick={handleNext} className="next-page-btn-A">{loading ? "Loading..." : "Load More"}</button>}
                    </div>
                    </>
                      : (activeCategory !==0) ? ((loading)? <div style={{display: "flex", justifyContent: 'center',  height: "300px", alignItems: 'center'}}><p>Loading...</p></div> : <div style={{ display: 'flex', justifyContent: 'center',  height: "300px", alignItems: 'center'}}><p>No Posts</p></div> ) : ""
                       }
          </div>
          {
            activeCategory === 0 && postsLatest && postsLatest.length >= 3 && <>
              <div className="cateLatesWrapFMobile">
              <div className="img-container-3 parent-blog-pageWrap">
               <div className="img-container-3-div">
                <div className="img-container-3-img1-div">
                  <Link href={`/news/${postsLatest[0]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                    <img
                      className="img-container-3-img-1"
                      src={postsLatest[0]?.featured_img_url || Images.blogImgempty} 
                      alt={postsLatest[0]?.title || 'Blog post'}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A date-Ab">{formatDateWithOrdinal(postsLatest[0]?.publish_date)} | {postsLatest[0]?.author}</div>
                    <div className="date-heading-mainb"><Link href={`/news/${postsLatest[0]?.slug}`}>{postsLatest[0]?.title}</Link></div>
                  </div>
                  <div className='postCategory postCategoryb'>
                    <Link href={`/news/category/${postsLatest[0]?.category?.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[0]?.category?.title}</Link>
                  </div>
                </div>
                </div>
               <div className="img-container-3-div">
                <div className="img-container-3-img1-div">
                  <Link href={`/news/${postsLatest[1]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                    <img
                      className="img-container-3-img-1"
                      src={postsLatest[1]?.featured_img_url || Images.blogImgempty} 
                      alt={postsLatest[1]?.title || 'Blog post'}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A date-Ab">{formatDateWithOrdinal(postsLatest[1]?.publish_date)} | {postsLatest[1]?.author}</div>
                    <div className="date-heading-mainb"><Link href={`/news/${postsLatest[1]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[1]?.title}</Link></div>
                  </div>
                  <div className='postCategory postCategoryb'>
                    <Link href={`/news/category/${postsLatest[1]?.category?.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[1]?.category?.title}</Link>
                  </div>
                </div>
                </div>
               <div className="img-container-3-div">
                <div className="img-container-3-img1-div">
                  <Link href={`/news/${postsLatest[2]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                    <img
                      className="img-container-3-img-1"
                      src={postsLatest[2]?.featured_img_url || Images.blogImgempty} 
                      alt={postsLatest[2]?.title || 'Blog post'}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A date-Ab">{formatDateWithOrdinal(postsLatest[2]?.publish_date)} | {postsLatest[2]?.author}</div>
                    <div className="date-heading-mainb"><Link href={`/news/${postsLatest[2]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[2]?.title}</Link></div>
                  </div>
                  <div className='postCategory postCategoryb'>
                    <Link href={`/news/category/${postsLatest[2]?.category?.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[2]?.category?.title}</Link>
                  </div>
                </div>
                </div>
              </div>
           
              </div>
              <div className="cateLatesWrapFDesktop">
              {postsLatest && postsLatest.length > 0 && <div className="cateLatesWrap">
                <Link href={`/news/${postsLatest[0]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                  <div
                    className="blog-image-container-1 parent-blog-pageWrap parent-blog-pageWrap1"
                    style={{
                      backgroundImage: `url(${postsLatest[0]?.featured_img_url || Images.blogImgempty})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'relative',
                      padding: '20px',
                      minWidth: '1201px',
                      height: '625px',
                      marginTop: '-329px',
                      borderRadius: '30px',
                      marginBottom: '20px',
                    }}
                    data-aos="fade-up"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-bottom">
                    <div className="img-container-1-div " data-aos="fade-up"
                      data-aos-offset="50"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-mirror="true"
                      data-aos-once="false"
                      data-aos-anchor-placement="top-bottom">
                      <div>
                        <div className="blog-image-container-div">
                          <div className="blogdatetext">
                            {formatDateWithOrdinal(postsLatest[0]?.publish_date)} | {postsLatest[0]?.author}
                          </div>
                        </div>
                        <div className="img-container-1-div-text-2 blogtitle">
                          <span className="fontfamilyChanger" id='fontfamilyChanger'>{postsLatest[0]?.title}</span>
                        </div>
                        <div className='postCategory postCategoryb'>
                          <span>{postsLatest[0]?.category?.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>}
              {postsLatest && postsLatest.length > 2 && <div className="blog-img-container-2 parent-blog-pageWrap parent-blog-pageWrap1" data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-bottom">
                <div className="blog-img-container-2-img1-div ">
                  {postsLatest.length > 2 && (
                    <Link href={`/news/${postsLatest[1]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'"><img
                      className="img-container-2-img-1"
                      src={postsLatest[1]?.featured_img_url || Images.blogImgempty}
                     alt="Blogfeaturedimage"
                    /></Link>
                  )}
                  <div className="img-heading-container ">
                    <div className="date-A date-Ab">
                      {formatDateWithOrdinal(postsLatest[1]?.publish_date)} | {postsLatest[1]?.author}
                    </div>
                    <div className="date-heading-mainb"><Link href={`/news/${postsLatest[1]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[1]?.title}</Link></div>
                    <div className='postCategory postCategoryb'>
                      <Link href={`/news/category/${postsLatest[1]?.category?.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[1]?.category?.title}</Link>
                    </div>
                  </div>
                </div>
                <div className="blog-img-container-2-img2-div ">
                  {postsLatest.length > 2 && (
                    <Link href={`/news/${postsLatest[2]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'"><img
                      className="img-container-2-img-2"
                      src={postsLatest[2]?.featured_img_url || Images.blogImgempty}
                      alt="Blogfeaturedimage"
                    /></Link>
                  )}
                  <div className="img-heading-container">
                    <div className="date-A date-Ab">
                      {formatDateWithOrdinal(postsLatest[2]?.publish_date)} | {postsLatest[2]?.author}
                    </div>
                    <div className="date-heading-mainb"><Link href={`/news/${postsLatest[2]?.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[2]?.title}</Link></div>
                    <div className='postCategory postCategoryb'>
                      <Link href={`/news/category/${postsLatest[2]?.category?.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{postsLatest[2]?.category?.title}</Link>
                    </div>
                  </div>
                </div>
                <div className="latest-article-parent"></div>
              </div>}
              </div>
            </>
          }
          {activeCategory === 0 && posts && posts.length > 0 ? 
          <>
            <span className="articlesHeading articlesHeadingb" data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">Articles</span>
          <div className="img-container-3 parent-blog-pageWrap " data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="50"
            data-aos-duration="2500"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom">
            {posts?.filter(post => !postsLatest?.slice(0, 3).some(latest => latest.id === post.id)).map((post) => (
              <div key={post.id} className="img-container-3-div">
                <div className="img-container-3-img1-div">
                  <Link href={`/news/${post.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">
                    <img
                      className="img-container-3-img-1"
                      src={post.featured_img_url || Images.blogImgempty} 
                      alt={post.title}
                    />
                  </Link>
                  <div className="img-heading-container">
                    <div className="date-A date-Ab">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
                    <div className="date-heading-mainb"><Link href={`/news/${post.slug}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{post.title}</Link></div>
                  </div>
                  <div className='postCategory postCategoryb'>
                    <Link href={`/news/category/${post.category.id}`} aria-label="Read more about 'There Are No Unicorns — Just Direction and Determination'">{post.category.title}</Link>
                  </div>
                </div>
              </div>
            ))}
                <div className="nextbtn-container-A">
                  {totalPosts > posts?.length && <button onClick={handleNext} className="next-page-btn-A">{loading ? "Loading..." : "Load More"}</button>}
                </div>
          </div> 
          </>: <div></div>
          }
        </div>
      </div>
    </div>
  );
}
export default Blog;
