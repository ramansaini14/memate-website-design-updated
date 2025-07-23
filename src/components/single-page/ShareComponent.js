import React from "react";
import { Helmet } from 'react-helmet-async';
import Link from "next/link";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const ShareComponent = ({ url, title, image, description }) => {
  // Ensure we have valid data before rendering
  if (!url || !title) {
    return null;
  }

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description || title} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description || title} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <div className="share-buttons">
        <ul>
          <li>
            <FacebookShareButton
              url={url}
              quote={title}
              hashtag={title}
              className="link socialIcon"
              aria-label="Share on Facebook"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/facebook.svg"
                alt="facebook"
              />
            </FacebookShareButton>
          </li>
          <li>
            <TwitterShareButton
              url={url}
              title={title}
              hashtags={[title]}
              className="link socialIcon"
              aria-label="Share on Twitter"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/twitter.svg"
                alt="twitter"
              />
            </TwitterShareButton>
          </li>
          <li>
            <LinkedinShareButton 
              url={url} 
              title={title}
              summary={description || title}
              className="link socialIcon"
              aria-label="Share on LinkedIn"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/linkedin.svg"
                alt="linkedin"
              />
            </LinkedinShareButton>
          </li>
          <li>
            <Link 
              className="link socialIcon" 
              href={`mailto:?subject=${encodeURIComponent(title)}&body=I%20thought%20you%20might%20like%20this:%20${encodeURIComponent(url)}`} 
              aria-label="Share via Email"
            >
              <img
                src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/link.svg"
                alt="email"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShareComponent;
