import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Team1 from '../../Components/Team/Team1';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the talented team at The Crystal Engage. Our digital marketing experts, designers, developers, and strategists are dedicated to delivering exceptional results.',
  keywords: [
    'team members',
    'digital marketing experts',
    'our team',
    'marketing professionals',
  ],
  openGraph: {
    title: 'Our Team | The Crystal Engage',
    description: 'Meet our digital marketing experts',
    url: 'https://thecrystalengage.in/team',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Team', url: '/team' }
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Team"
      ></BreadCumb>
      <Team1></Team1>
    </div>
  );
};

export default page;