import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Blog4 from '../../Components/Blog/Blog4';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest insights on digital marketing, SEO strategies, branding tips, content marketing, and industry trends from The Crystal Engage experts.',
  keywords: [
    'digital marketing blog',
    'seo tips',
    'branding insights',
    'marketing strategies',
    'content marketing blog',
  ],
  openGraph: {
    title: 'Blog | The Crystal Engage',
    description: 'Latest insights on digital marketing and branding',
    url: 'https://thecrystalengage.in/blog',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' }
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Crystal Engage Blog",
    "description": "Digital marketing insights and strategies",
    "url": "https://thecrystalengage.in/blog"
  };

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, blogSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Blog"
      ></BreadCumb>
      <Blog4></Blog4>
    </div>
  );
};

export default page;