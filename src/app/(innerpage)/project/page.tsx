import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Project4 from '../../Components/Project/Project4';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Our Projects',
  description: 'Explore our portfolio of successful digital marketing projects, branding campaigns, website designs, and app development work. See how we\'ve helped businesses grow.',
  keywords: [
    'portfolio',
    'case studies',
    'digital marketing projects',
    'branding work',
    'design portfolio',
  ],
  openGraph: {
    title: 'Projects | The Crystal Engage',
    description: 'Our portfolio of successful digital marketing projects',
    url: 'https://thecrystalengage.in/project',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/project' }
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Projects",
    "description": "Portfolio of digital marketing and branding projects",
    "url": "https://thecrystalengage.in/project"
  };

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, collectionSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Project"
      ></BreadCumb>
      <Project4></Project4>
    </div>
  );
};

export default page;