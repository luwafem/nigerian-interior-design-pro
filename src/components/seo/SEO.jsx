// src/components/seo/SEO.jsx
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags 
}) => {
  const siteUrl = "https://matchesluxury.com";
  const defaultImage = "/og-default.jpg";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={`${siteUrl}${url}`} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="matches luxury" />
      <meta property="og:locale" content="en_NG" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />
      
      {/* Article Specific */}
      {type === 'article' && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          <meta property="article:modified_time" content={modifiedTime} />
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${siteUrl}${url}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'article' ? 'Article' : 'WebPage',
          "headline": title,
          "description": description,
          "image": image || defaultImage,
          "url": `${siteUrl}${url}`,
          "author": {
            "@type": "Organization",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "matches luxury",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteUrl}/logo.png`
            }
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime
        })}
      </script>
    </Helmet>
  );
};

export default SEO;