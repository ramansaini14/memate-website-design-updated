const NewsSchema = ({ article, breadcrumbList }) => {
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": article.type || "NewsArticle",
    "headline": article.headline,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": article.publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": article.publisherLogo,
        "width": 600,
        "height": 60
      }
    },
    "image": [article.image],
    "mainEntityOfPage": article.url,
    "keywords": article.keywords,
    "genre": article.genre,
    "articleSection": article.articleSection
  };

  const structuredData = breadcrumbList
    ? [newsArticleSchema, breadcrumbList]
    : [newsArticleSchema];

  return (
    <div className="structured-data-wrapper" style={{ display: 'none' }}>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
};

export default NewsSchema;
