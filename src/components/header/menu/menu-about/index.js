import React from 'react';
import './style.css';
import Link from 'next/link';

const MenuAbout = ({ onSubItemClick }) => {
  const handleClick = () => {
    if (onSubItemClick) onSubItemClick();
  };

  return (
    <div className='menu-new-wrapper'>
      <div className='menu-news'>
        <Link 
          href="/about" 
          className="news first-News"
          onClick={handleClick}
        >
          <span>
            <span className='first-news-top-heading'>About</span>
            <div className="first-news-sub-heading">Memate</div> 
          </span>
          <button className='first-news-button'>Read more</button>
        </Link>

        <a 
          href="https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F78408530" 
          className="link news first-News"
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            <span className='first-news-top-heading'>Our</span>
            <div className="first-news-sub-heading">Careers</div> 
          </span>
          <button className='first-news-button'>Check Careers</button>
        </a>

        <Link 
          href="/contact-us" 
          className="news first-News"
          onClick={handleClick}
        >
          <span>
            <span className='first-news-top-heading'>Contact</span>
            <div className="first-news-sub-heading">Our Team</div> 
          </span>
          <button className='first-news-button-3'>Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default MenuAbout;