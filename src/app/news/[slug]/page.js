import React from 'react';
import { blogSingle } from '../../../api/blogAPI';
import ClientBlogPost from './ClientBlogPost';

// Generate dynamic metadata for SEO and social sharing
export async function generateMetadata({ params }) {
  try {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    
    console.log('🔍 Generating metadata for slug:', slug);
    
    // Fetch post data for metadata
    const post = await blogSingle(slug);
    
    console.log('📡 API response:', post ? 'Found post' : 'No post found');
    
    if (!post || post.error) {
      console.log('❌ Post not found, using fallback metadata');
      const fallbackMetadata = {
        title: 'News Article Not Found | MeMate',
        description: 'The requested news article could not be found.',
        openGraph: {
          title: 'News Article Not Found | MeMate',
          description: 'The requested news article could not be found.',
          url: `https://memate.com.au/news/${slug}`,
          siteName: 'MeMate',
          images: [{
            url: 'https://memate.com.au/images/og-default.jpg',
            width: 1200,
            height: 630,
            alt: 'MeMate - Business Management Software',
          }],
          type: 'article',
          locale: 'en_AU',
        },
        twitter: {
          card: 'summary_large_image',
          title: 'News Article Not Found | MeMate',
          description: 'The requested news article could not be found.',
          images: ['https://memate.com.au/images/og-default.jpg'],
          creator: '@memateapp',
          site: '@memateapp',
        },
      };
      return fallbackMetadata;
    }

    const baseUrl = 'https://memate.com.au';
    const postUrl = `${baseUrl}/news/${slug}`;
    
    // Ensure we have a valid, absolute image URL
    let imageUrl = post.featured_img_url || post.thumbnail_img_url;
    
    // Make sure image URL is absolute
    if (imageUrl) {
      if (!imageUrl.startsWith('http')) {
        imageUrl = imageUrl.startsWith('/') ? `${baseUrl}${imageUrl}` : `${baseUrl}/${imageUrl}`;
      }
    } else {
      // Fallback to default image
      imageUrl = `${baseUrl}/images/og-default.jpg`;
    }
    
    // Clean description for meta tags (remove HTML and limit length)
    let cleanDescription = post.meta_description;
    
    if (!cleanDescription && post.description) {
      cleanDescription = post.description
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .trim()
        .substring(0, 155) + '...'; // Limit to 155 chars for optimal display
    }
    
    if (!cleanDescription) {
      cleanDescription = 'Read the latest news and updates from MeMate - Australia\'s leading business management software.';
    }
    
    const title = post.seo_title || post.title || 'News Article | MeMate';
    
    // Ensure title isn't too long for social media
    const socialTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
    
    console.log('✅ Generated metadata:', {
      title: socialTitle,
      description: cleanDescription.substring(0, 50) + '...',
      imageUrl,
      postUrl
    });
    
    const metadata = {
      title,
      description: cleanDescription,
      keywords: post.meta_keyword || post.title,
      authors: [{ name: post.author || 'MeMate' }],
      
      // CRITICAL: Open Graph for Facebook sharing
      openGraph: {
        title: socialTitle,
        description: cleanDescription,
        url: postUrl,
        siteName: 'MeMate',
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: post.featured_img_alt || post.title || 'MeMate News Article',
            type: 'image/jpeg',
          },
        ],
        locale: 'en_AU',
        type: 'article',
        publishedTime: post.publish_date ? new Date(post.publish_date).toISOString() : undefined,
        modifiedTime: post.updated_at ? new Date(post.updated_at).toISOString() : undefined,
        authors: [post.author || 'MeMate'],
        section: post.category?.title || 'News',
        tags: post.meta_keyword ? post.meta_keyword.split(',').map(tag => tag.trim()).filter(Boolean) : [],
      },
      
      // Twitter Card for Twitter sharing
      twitter: {
        card: 'summary_large_image',
        title: socialTitle,
        description: cleanDescription,
        images: [imageUrl],
        creator: '@memateapp',
        site: '@memateapp',
      },
      
      // Additional metadata for better SEO
      alternates: {
        canonical: postUrl,
      },
      
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-video-preview': -1,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      
      // Additional meta tags that some platforms use
      other: {
        'article:author': post.author || 'MeMate',
        'article:published_time': post.publish_date,
        'article:modified_time': post.updated_at || post.publish_date,
        'article:section': post.category?.title || 'News',
        'og:image:secure_url': imageUrl, // Some platforms prefer secure_url
      },
    };
    
    return metadata;
    
  } catch (error) {
    console.error('❌ Error generating metadata for news slug:', error);
    const errorMetadata = {
      title: 'News Article | MeMate',
      description: 'Read the latest news and updates from MeMate - Australia\'s leading business management software.',
      openGraph: {
        title: 'News Article | MeMate',
        description: 'Read the latest news and updates from MeMate.',
        url: `https://memate.com.au/news/${slug}`,
        siteName: 'MeMate',
        images: [{
          url: 'https://memate.com.au/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: 'MeMate - Business Management Software',
        }],
        type: 'article',
        locale: 'en_AU',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'News Article | MeMate',
        description: 'Read the latest news and updates from MeMate.',
        images: ['https://memate.com.au/images/og-default.jpg'],
        creator: '@memateapp',
        site: '@memateapp',
      },
    };
    return errorMetadata;
  }
}

export default function BlogPost({ params }) {
  return <ClientBlogPost params={params} />;
}