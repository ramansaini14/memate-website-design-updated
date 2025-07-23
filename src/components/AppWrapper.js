'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { blogList, blogLatest, getCategories } from '../api/blogAPI';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AppWrapper({ children }) {
  // Initialize AOS
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true,
        offset: 50
      });
    }
  }, []);
  

  const pathname = usePathname();

  // Blog state management - Initialize with empty array to prevent hydration mismatch
  const [postsLatest, setPostsLatest] = useState([]);
  const [PostsCategories, setPostsCategories] = useState();
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 12;

  // Add page class to body
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const pathClass = pathname === "/"
        ? "home"
        : pathname.replace(/\//g, "-").replace(/^-|-$/g, "");
      document.body.classList.add(`page-${pathClass}`);
      return () => {
        document.body.classList.remove(`page-${pathClass}`);
      };
    }
  }, [pathname]);

  // Load saved data and fetch latest posts
  useEffect(() => {
    // First, try to load from sessionStorage
    let savedlatestPostData = [];
    try {
      if (typeof window !== 'undefined') {
        savedlatestPostData = JSON.parse(sessionStorage.getItem('latestPostData') || "[]");
        if (savedlatestPostData?.length > 0) {
          setPostsLatest(savedlatestPostData);
          return; // Don't fetch if we have cached data
        }
      }
    } catch (error) {
      console.error('Error parsing latestPostData from sessionStorage:', error);
    }

    // Fetch latest posts if no cached data
    const fetchDataLatest = async () => {
      try {
        const dataLatest = await blogLatest();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('latestPostData', JSON.stringify(dataLatest));
        }
        setPostsLatest(dataLatest);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    fetchDataLatest();
  }, []); // Remove dependency to run only once

  // Fetch categories
  useEffect(() => {
    // First, try to load from sessionStorage
    let savedCatData = [];
    try {
      if (typeof window !== 'undefined') {
        savedCatData = JSON.parse(sessionStorage.getItem('latestCat') || "[]");
        if (savedCatData?.length > 0) {
          setPostsCategories(savedCatData);
          return; // Don't fetch if we have cached data
        }
      }
    } catch (error) {
      console.error('Error parsing latestCat from sessionStorage:', error);
    }

    const fetchCateLatest = async () => {
      try {
        const dataCat = await getCategories();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('latestCat', JSON.stringify(dataCat));
        }
        setPostsCategories(dataCat);
      } catch (err) {
        console.log('Error during getting the categories:', err);
      }
    };

    fetchCateLatest();
  }, []); // Remove dependency to run only once

  const handleTabClick = (categoryId) => {
    if (activeCategory !== categoryId) {
      setActiveCategory(categoryId);
      setPosts([]);
      setCurrentPage(1);
    }
  };

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        // Handle special case for category filtering bug
        if (activeCategory !== 0) {
          // For specific categories, implement smart fetching to handle API pagination bug
          const fetchCategoryPosts = async () => {
            let collectedPosts = [];
            let page = currentPage;
            let totalFound = 0;
            const maxPages = 10; // Safety limit to prevent infinite loops
            let searchPage = 1; // Start searching from page 1
            
            // Search through pages to find posts for the specific category
            while (collectedPosts.length < limit && searchPage <= maxPages) {
              const response = await blogList(searchPage, limit * 3, activeCategory); // Fetch more to increase chances
              const { data, total } = response;
              
              if (!data || data.length === 0) break;
              
              // Filter posts that actually belong to the selected category
              const correctCategoryPosts = data.filter(post => post.category.id === activeCategory);
              
              // Add unique posts
              correctCategoryPosts.forEach(post => {
                if (!collectedPosts.some(existing => existing.id === post.id) && collectedPosts.length < limit) {
                  collectedPosts.push(post);
                }
              });
              
              totalFound = total;
              
              // If we found enough posts or no more posts available, break
              if (collectedPosts.length >= limit || correctCategoryPosts.length === 0) break;
              
              searchPage++;
            }
            
            return {
              data: collectedPosts,
              total: totalFound
            };
          };
          
          const { data, total } = await fetchCategoryPosts();
          setTotalPosts(total);
          
          setPosts((prevPosts) => {
            const newPosts = currentPage === 1 
              ? data || [] 
              : [...prevPosts, ...(data?.filter(
                  (newPost) => !prevPosts.some((post) => post.id === newPost.id)
                ) || [])];
            
            // Refresh AOS after content changes
            setTimeout(() => AOS.refresh(), 100);
            return newPosts;
          });
        } else {
          // Original logic for "All" category (activeCategory === 0)
          const response = await blogList(currentPage, limit, activeCategory);
          const { data, total } = response;
          if (!data) throw new Error("No data found");
          setTotalPosts(total);
          setPosts((prevPosts) => {
            const uniquePosts = data?.filter(
              (newPost) => !prevPosts.some((post) => post.id === newPost.id)
            );
            const newPosts = [...prevPosts, ...uniquePosts];
            
            // Refresh AOS after content changes
            setTimeout(() => AOS.refresh(), 100);
            return newPosts;
          });
        }
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, activeCategory]);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Pass all the data to children
  const childrenWithProps = React.cloneElement(children, {
    postsLatest,
    PostsCategories,
    posts,
    activeCategory,
    handleTabClick,
    totalPosts,
    loading,
    handleNext,
    error
  });

  return (
    <div className="App">
      {childrenWithProps}
    </div>
  );
}