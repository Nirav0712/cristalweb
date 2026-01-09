import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Contact3 from '../../Components/Contact/Contact3';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema, getLocalBusinessSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Crystal Engage. Contact our digital marketing experts in Ahmedabad for SEO, branding, and digital strategy consulting. Call +91 9586107802 or visit our office.',
  keywords: [
    'contact crystal engage',
    'digital marketing agency contact',
    'ahmedabad marketing agency',
    'get in touch',
  ],
  openGraph: {
    title: 'Contact The Crystal Engage',
    description: 'Reach out to our digital marketing experts in Ahmedabad',
    url: 'https://thecrystalengage.in/contact',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact Us', url: '/contact' }
  ]);

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact The Crystal Engage",
    "description": "Contact our digital marketing agency in Ahmedabad",
    "url": "https://thecrystalengage.in/contact"
  };

  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, contactPageSchema, localBusinessSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Contact Us"
      ></BreadCumb>
      <Contact3></Contact3>
    </div>
  );
};

export default page;