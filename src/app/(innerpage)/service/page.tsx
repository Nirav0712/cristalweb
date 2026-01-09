import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Services4 from '../../Components/Services/Services4';
import Marquee2 from '../../Components/Marquee/Marquee2';
import Cta from '../../Components/Cta/Cta';
import Pricing2 from '../../Components/Pricing/Pricing2';
import Contact2 from '../../Components/Contact/Contact2';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema, getItemListSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive digital marketing services including SEO, content marketing, branding, UI/UX design, app development, social media marketing, and digital strategy consulting in Ahmedabad.',
  keywords: [
    'digital marketing services',
    'seo services ahmedabad',
    'branding services',
    'content marketing',
    'ui ux design',
    'app development services',
    'social media marketing',
    'digital strategy'
  ],
  openGraph: {
    title: 'Digital Marketing Services | The Crystal Engage',
    description: 'Comprehensive digital marketing and branding services in Ahmedabad',
    url: 'https://thecrystalengage.in/service',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/service' }
  ]);

  const services = [
    { name: 'SEO Services', url: '/service/seo', description: 'Boost your search rankings with expert SEO strategies' },
    { name: 'Branding & Identity', url: '/service/branding', description: 'Build a memorable brand identity' },
    { name: 'Content Marketing', url: '/service/content-marketing', description: 'Engage your audience with compelling content' },
    { name: 'UI/UX Design', url: '/service/ui-ux-design', description: 'Create stunning user experiences' },
    { name: 'App Development', url: '/service/app-development', description: 'Build powerful mobile and web applications' },
    { name: 'Social Media Marketing', url: '/service/social-media', description: 'Grow your social presence' },
  ];

  const serviceListSchema = getItemListSchema(services, 'Digital Marketing Services');

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, serviceListSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Services"
      ></BreadCumb>
      <Services4></Services4>
      <Marquee2></Marquee2>
      <Cta></Cta>
      <Pricing2></Pricing2>
      <Contact2></Contact2>
    </div>
  );
};

export default page;