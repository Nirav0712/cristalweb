import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import BlogSidebar from '../../Components/BlogSidebar/BlogSidebar';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Browse our blog posts with easy navigation. Read insights on digital marketing, SEO, branding, and industry trends.',
  openGraph: {
    title: 'Blog | The Crystal Engage',
    description: 'Digital marketing insights and trends',
    url: 'https://thecrystalengage.in/blog-sidebar',
  } 
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog-sidebar' }
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Blog Sidebar"
      ></BreadCumb>
      <BlogSidebar></BlogSidebar>
    </div>
  );
};

export default page;