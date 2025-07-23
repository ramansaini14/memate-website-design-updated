import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { slugTagsPost } from '../../api/blogAPI';
import Images from '../../assests/images';
import SubscribeForm from './subscribe';
import { Helmet } from 'react-helmet-async';
import ShareComponent from './ShareComponent';
const arrowIconBack = "https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/arrowIconBack.svg";




const NewsTagsComponents = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    console.log('setPost: ', setPost);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNearBottom, setIsNearBottom] = useState(false);
    const [postTagsslug, setPostTagsslug] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



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
        const fetchTagsPosts = async () => {
            if (!slug) return;

            try {
                const response = await slugTagsPost(slug);
                setPostTagsslug(response);
            } catch (err) {
                console.error('Error fetching tag posts:', err);
                setError('Failed to fetch data. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTagsPosts();
    }, [slug]);

    if (loading) {
        return <div></div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!postTagsslug || postTagsslug.length === 0) {
        return <div>No posts found for this tag.</div>;
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

      if (!postTagsslug || !postTagsslug.data || postTagsslug.data.length === 0) {
        return <div className='nodataPost'>No news found for this tag.</div>; 
    }
    return (
        <div>
        <Helmet>
        <title>{post?.title}</title>
        <meta property="og:title" content={post?.title} />
        <meta name="description" content={post?.description} />
         <meta property="og:description" content={post?.description} />
         <meta property="og:image" content="https://memate.com.au/image.jpg" />
         <meta property="og:url" content="https://memate.com.au/news/post-slug" />
       </Helmet>
       <div className="parentBlog parentSingle">
       <div className="pageBreadcrumbs">
             <ul className='postlist'>
               <li>Home</li>/<li> <Link className="MainPageLink" href="/news"> Latest Articles</Link></li>/<li> <Link className='MainPageLink' href={`/news/${slug}`}>{slug}</Link></li>
             </ul>
             <Link href={`/news`} className="backButStories"><img src={arrowIconBack} alt="Arrow" /> Back</Link>
           </div>
         <div className={`stickySocialWrap ${isScrolled ? 'scrolled' : ''} ${
         isNearBottom ? 'hide' : ''
       }`} >

 </div>
 
 <div className='slugTagHead'>
    <h1>{slug.replace(/-/g, ' ')}</h1>
</div>
    
 
 {/* Tags */}
     <div className='blogSinglePageMightLike parent-blog-page'>
       {/* <h2>You Also Might Like</h2> */}
       <div className="img-container-3 parent-blog-pageWrap " data-aos="fade-up"
     data-aos-offset="50"
     data-aos-delay="50"
     data-aos-duration="2500"
     data-aos-mirror="true"
     data-aos-once="false"
     data-aos-anchor-placement="top-bottom">
           {postTagsslug.data.map((post, index) => (
   <div key={index} className="img-container-3-div">
     <div className="img-container-3-img1-div">
       <Link href={`/news/${post.slug}`}>
         <img
           className="img-container-3-img-1"
           src={post.featured_img_url || Images.blogImgempty} 
           alt={post.title}
         />
       </Link>
       <div className="img-heading-container">
         <div className="date-A">
         {formatDateWithOrdinal(post.publish_date)} | {post.author}
         </div>
         <div className="date-heading-A">
           <Link href={`/news/${post.slug}`}>{post?.title}</Link>
         </div>
         <div className='postCategory'>
         <Link href={`/news/category/${post?.category.id}`}>{post?.category.title}</Link>
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

export default NewsTagsComponents;
