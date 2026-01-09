import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import ProjectDetails from '../../../Components/ProjectDetails/ProjectDetails';
import { Metadata } from 'next';
import JsonLd from '../../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'View our project case study and see how we helped deliver exceptional digital marketing results.',
  openGraph: {
    title: 'Project Details | The Crystal Engage',
    description: 'Case study of our digital marketing project',
    url: 'https://thecrystalengage.in/project/project-details',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/project' },
    { name: 'Project Details', url: '/project/project-details' }
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbSchema} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="Project Details"
      ></BreadCumb>
      <ProjectDetails></ProjectDetails>
    </div>
  );
};

export default page;