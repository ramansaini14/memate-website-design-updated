import React from "react";
import "./style.css";
import Link from 'next/link';
import Images from "../../../assests/images";
const ReadMoreData = ({postsLatestReadMore}) => {
  return (
    <div className="industry-read-more-wrapper" data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="3000"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
      <div className="industry-read-more-content">
        <p className="read-more-heading">Read More MeMate</p>
        <div className="read-more-card-wrapper">
          {postsLatestReadMore?.map((post, index) => (
            <div className="read-more-card" key={index}>
              <div className="read-more-card-1m">
               <Link href={`/news/${post.slug}`}>
                    <img
                      className="img-container-3-img-1"
                      src={post.featured_img_url || Images.blogImgempty} 
                      alt={post.title}
                    />
                  </Link>
              </div>
              {/* <div className="read-more-card-1" style={{ backgroundImage: `url(${post.featured_img_url})` }}></div> */}
              <p className="read-more-card-1-date">{new Date(post?.publish_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="truncate-2-lines"><Link href={`/news/${post.slug}`}>{post?.title}</Link></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreData;
