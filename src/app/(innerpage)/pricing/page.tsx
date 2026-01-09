  import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Pricing1 from '../../Components/Pricing/Pricing1';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Our Pricing',
  description: 'Explore our transparent pricing packages for digital marketing, SEO, branding, and design services. Flexible plans designed to fit your business needs and budget.',
  keywords: [
    'pricing',
    'digital marketing pricing',
    'seo packages',
    'service packages',
    'marketing plans',
  ],
  openGraph: {
    title: 'Pricing | The Crystal Engage',
    description: 'Transparent pricing for digital marketing services',
    url: 'https://thecrystalengage.in/pricing',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Pricing', url: '/pricing' }
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Our Pricing"
      ></BreadCumb>
      <Pricing1></Pricing1>
    </div>
  );
};

export default page;