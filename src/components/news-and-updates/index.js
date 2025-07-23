'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { updateListLatest } from '../../api/software-update';
import Images from '../../assests/blog-images';
import './style.css';

const NewsAndUpdate = ({ postsLatest }) => {
  const [updateData, setUpdateData] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    
    const fetchUpdates = async () => {
      try {
        const updates = await updateListLatest();
        if (updates && Array.isArray(updates)) {
          setUpdateData(updates.slice(0, 5)); 
        }
      } catch (error) {
        console.error('Error fetching updates:', error);
        setUpdateData([]);
      }
    };

    fetchUpdates();
  }, []);

  // Format date helper function
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
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

  // Show loading state during SSR to prevent hydration mismatch
  if (!isHydrated) {
    return (
      <div className="slider-section-container">
        <div className="success-stories-section">
          <div className="newsandUpdates">
            <div className="NewsflexWrap">
              <div className="Newsitem">
                <div className="loading-placeholder">
                  <p>Loading news and updates...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get latest 3 news posts
  const latestNews = postsLatest?.slice(0, 3) || [];

  return (
    <div className="slider-section1 sliderSectionShadowl bottom-management bottom-managementw" >
      <div className="success-stories-section">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ 
            fontSize: '40px', 
            fontWeight: '100', 
            color: '#29292B',
            marginBottom: '20px',
            fontFamily: 'sequel_sans_semi_bold_disp'
          }}>
            News and Updates
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#888E9E',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontFamily: 'sequel_sans'
          }}>
            Stay up to date with the latest news from MeMate and our newest software updates
          </p>
        </div>
        <div className="newsandUpdates">
          <div className="NewsflexWrap">
            {/* Latest News Section */}
            <div className="Newsitem">
              <div className="itemHead">
                <span>Latest News</span>
                <Link href="/news">View All News</Link>
              </div>
              <div>
                <ul>
                  {latestNews.length > 0 ? latestNews.map((post, index) => (
                    <li key={post.id || index}>
                      <div className="imgBox">
                        <Link href={`/news/${post.slug}`}>
                          <img
                            src={post.featured_img_url || Images.blogImgempty}
                            alt={post.title || 'News post'}
                            onError={(e) => {
                              e.target.src = Images.blogImgempty;
                            }}
                          />
                        </Link>
                      </div>
                      <div className="textBox">
                        <span>{formatDate(post.publish_date)} | {post.author || 'MeMate Team'}</span>
                        <h3 className="postH2Title">
                          <Link href={`/news/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <Link href={`/news/${post.slug}`}>Read More</Link>
                      </div>
                    </li>
                  )) : (
                    <li>
                      <div className="textBox">
                        <p>No latest news available at the moment.</p>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            {/* Software Updates Section */}
            <div className="Newsitem">
              <div className="itemHead">
                <span>Software Updates</span>
                <Link href="/memate-software-updates">View All Updates</Link>
              </div>
              <div className="softwareWrp">
                <ul>
                  {updateData.length > 0 ? updateData.map((update, index) => (
                    <li key={update.id || index}>
                      <h3>{update.title || update.name || `Update ${index + 1}`}</h3>
                      <span>
                        {update.publish_date ? formatDate(update.publish_date) : 
                         update.created_at ? formatDate(update.created_at) : 
                         'Recent Update'}
                      </span>
                    </li>
                  )) : (
                    <li>
                      <h3>No Recent Updates</h3>
                      <span>Stay tuned for the latest software improvements</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdate;