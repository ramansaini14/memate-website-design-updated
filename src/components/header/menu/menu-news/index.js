import React from 'react';
import './style.css';
import Link from 'next/link';

const MenuNews = ({ onSubItemClick }) => {
  const handleClick = () => {
    if (onSubItemClick) onSubItemClick();
  };

  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
        <Link 
          href="/news" 
          className="news first-News"
          onClick={handleClick}
        >
          <span>
            <span className='first-news-top-heading'>Our</span>
            <div className="first-news-sub-heading">News</div> 
            <p className='first-news-description'>Industry-related news to help you in business management.</p>
          </span>
          <button className='first-news-button'>Read more</button>
        </Link>

        <Link 
          href="/customer-stories" 
          className="news first-News"
          onClick={handleClick}
        >
          <span>
            <span className='first-news-top-heading'>Customer</span>
            <div className="first-news-sub-heading">Stories</div> 
            <p className='first-news-description'>Read how other companies are using memate.</p>
          </span>
          <button className='first-news-button'>Check Stories</button>
        </Link>

        <Link 
          href="/memate-software-updates" 
         className="news first-News"
          onClick={handleClick}
        >
          <span>
            <span className='first-news-top-heading'>Software</span>
            <div className="first-news-sub-heading">Update</div> 
            <p className='first-news-description'>Our Latest Software Updates, Releases, and Upcoming Development Features</p>
          </span>
          <button className='first-news-button-3'>See Updates</button>
        </Link>
      </div>
    </div>
  );
}

export default MenuNews;