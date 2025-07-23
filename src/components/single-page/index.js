import React, { useEffect, useState } from 'react';
import "./style.css";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import Images from "../../assests/blog-images";
import { blogSingle } from '../../api/blogAPI';
import SubscribeForm from './subscribe';
import ShareComponent from './ShareComponent';
import { Helmet } from 'react-helmet-async';
import NewsSchema from '../blog/news-schema';
// import ErrorPage from '../../pages/error-page';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";


const Single = ({postsSingle, postsLatest, slug: propSlug }) => {
  const params = useParams();
  const slug = propSlug || params.slug;
  const router = useRouter();
  const [post, setPost] = useState(null);
  console.log('post: ', post);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      setIsScrolled(scrollTop > 100); 

      const nearBottomThreshold = 2800;
      const isNearBottom =
        scrollTop + clientHeight >= scrollHeight - nearBottomThreshold;
      setIsNearBottom(isNearBottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const findPost = () => {

      let foundPost = postsSingle?.find(post => post.slug === slug);

      if (!foundPost) {
        foundPost = postsLatest?.find(post => post.slug === slug);
      }

      return foundPost;
    };


    const fetchPost = async () => {
      const postFromArrays = findPost();
      
      if (postFromArrays) {
        setPost(postFromArrays); 
        setLoading(false);
      } else {
        try {
          const data = await blogSingle(slug); 
          setPost(data);
          if (data.error === 'News article not found') {
            router.push('/404');
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  },[slug, postsSingle, postsLatest, router]);

  if (loading) {
    return <div></div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const formatDateWithOrdinal = (dateString) => {
    try {
      const date = new Date(dateString.replace(/(\d+)(st|nd|rd|th)/, '$1')); 
  
  
      const day = date.getDate();
      const month = date.toLocaleString('en-US', { month: 'long' });
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


const breadcrumbList = post ? {
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
      "name": "News",
      "item": "https://memate.com.au/news/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": post.title,
      "item": `https://memate.com.au/news/${post.slug}`
    }
  ]
} : null;


   const article = post ? {
      type: "NewsArticle",
      headline: post.title,
      datePublished: new Date(post.publish_date).toISOString(),
      dateModified: new Date(post.updated_at || post.publish_date).toISOString(),
      author: post.author || "MeMate News",
      publisherName: "MeMate Media",
      publisherLogo: "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/logo.svg",
      image: post.featured_img_url || Images.blogImgempty,
      url: `https://memate.com.au/news/${post.slug}`,
      keywords: post.keywords || post.title?.split(" ").slice(0, 5).join(", "),
      genre: post.category?.title || "General",
      articleSection: post.category?.title || "General"   
    } : null;



  return (
    <div className='bgshadowwrapper'>
    <Helmet>
      <title>{post.seo_title}</title>
      <meta name="description" content={post.meta_description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" /> 
      <meta name="twitter:creator" content="@PostAuthorHandle" /> 
      <meta name="twitter:title" content={post.seo_title} />
      <meta name="twitter:description" content={post.meta_description} />
      <meta name="twitter:image" content={post.featured_img_url} />
      <meta name="twitter:image:alt" content={post.featured_img_alt} />
      <meta property="og:type" content="article" /> 
      <meta property="og:title" content={post.seo_title} />
      <meta property="og:description" content={post.meta_description} />
      <meta property="og:image" content={post.featured_img_url} />
      <meta property="og:image:secure_url" content={post.featured_img_url.replace("http://", "https://")} /> 
      <meta property="og:image:width" content="1200" /> 
      <meta property="og:image:height" content="630" /> 
      <meta property="og:image:alt" content={post.featured_img_alt} />
      <meta property="og:url" content={`https://memate.com.au/news/${post.slug}`} />
    </Helmet>
       {article && breadcrumbList && <NewsSchema article={article} breadcrumbList={breadcrumbList} />}

      

      <div className="parentBlog parentSingle ">
      <div className="pageBreadcrumbs">
            <ul className='postlist'>
              <li><Link className="MainHomeLink" href="/">Home</Link></li><li>/</li><li><Link className="MainPageLink" href="/news">Latest Articles</Link></li><li>/</li><li><Link href={`/news/${post.slug}`}>{post.title}</Link></li>
            </ul>
            <Link href="/news" className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
          </div>
       
        <div className="accounting-text-A categoryLinkTitle "><Link href={`/news/category/${post.category?.id}`}>{post.category?.title}</Link></div>
        <h1 className="singlePageheading">{post.title}</h1>
        <div className="singlePageDate">{formatDateWithOrdinal(post.publish_date)} | {post.author}</div>
       <div className="stickySocialWrap  ">
       <div className="stickySocial">
          <p>Share</p>
          <ShareComponent
            url={`https://memate.com.au/news/${post.slug}`}
            title={post.seo_title}
            image={post.featured_img_url}
            description={post.meta_description}
          />
        </div>
        </div>
        <div className={`stickySocialWrap ${isScrolled ? 'scrolled' : ''} ${
        isNearBottom ? 'hide' : ''
      }`} >

        
      </div>

       {/* <div className="img-1-container-A img-1-container-singlenews">
        {post.featured_img_url ? (
          <img className="img-1" src={post.featured_img_url} alt={post.title} />
        ) : post.thumbnail_img ? (
          <img className="img-1" src={post.thumbnail_img} alt={post.title} />
        ) : post.video_url ? (
          <video className="img-1" autoPlay loop muted playsInline>
            <source src={post.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="img-1" src={Images.blogImgempty} alt={post.title} />
        )}
      </div> */}
      <div className="img-1-container-A img-1-container-singlenews">
        {post.video_url ? (
            <video className="img-1" autoPlay loop muted playsInline>
              <source src={post.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : post.featured_img_url ? (
            <img className="img-1" src={post.featured_img_url} alt={post.title} />
          ) : post.thumbnail_img ? (
            <img className="img-1" src={post.thumbnail_img} alt={post.title} />
          ) : (
            <img className="img-1" src={Images.blogImgempty} alt={post.title} />
          )}
        </div>
 

        <div className="heading-2-A single-page-heading"></div>
        <div className="heading-2-text-A single-page-heading-text parentSingleBlogMemate">
          <div dangerouslySetInnerHTML={{ __html: post.description }} />
        </div>
        {/* Tags */}
        <div className="blogMetstags">
  <strong>Tags</strong>
  <div className="blogloopdata">
    {(post.meta_keyword || '').split(',').map((tag, index) => {
      const slug = (post.meta_keyword_slug || '').split(',')[index]?.trim();
      return (
        <span key={index} className="tag">
          <Link href={`/news/tags/${slug || tag.trim().toLowerCase().replace(/\s+/g, '-')}`}>
            {tag.trim()}
          </Link>
        </span>
      );
    })}
  </div>
</div>

{/* Tags */}
    <div className='blogSinglePageMightLike parent-blog-page'>
      <h2>You Also Might Like</h2>
      <div className="img-container-3 parent-blog-pageWrap " data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="2500"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
           {postsSingle?.slice(0, 3).map((post) => (
  <div key={post.id} className="img-container-3-div">
    <div className="img-container-3-img1-div">
      <Link href={`/news/${post.slug}`}>
        <img
          className="img-container-3-img-1"
          src={post.featured_img_url || Images.blogImgempty} 
          alt={post.title}
        />
      </Link>
      <div className="img-heading-container">
        <div className="date-A date-Ab">
        {formatDateWithOrdinal(post.publish_date)} | {post.author}
        </div>
        <div className="date-heading-mainb">
          <Link href={`/news/${post.slug}`}>{post.title}</Link>
        </div>
        <div className='postCategory postCategoryb'>
           <Link href={`/news/category/${post?.category?.id || post?.category_id}`}>{post?.category?.title}</Link>
        </div>
      </div>
    </div>
  </div>
))}
 </div>
    </div>
    <div className='blogSubscribeWrap'>
     <SubscribeForm />
    </div>
      </div>
    </div>
  );
};

export default Single;
