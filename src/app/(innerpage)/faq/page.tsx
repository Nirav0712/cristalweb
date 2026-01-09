import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import Faq1 from '../../Components/Faq/Faq1';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about our digital marketing services, pricing, processes, and how we can help your business grow online.',
  keywords: [
    'faq',
    'frequently asked questions',
    'digital marketing questions',
    'service inquiries',
  ],
  openGraph: {
    title: 'FAQ | The Crystal Engage',
    description: 'Common questions about our digital marketing services',
    url: 'https://thecrystalengage.in/faq',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'FAQ', url: '/faq' }
  ]);

  // Example FAQs - replace with actual FAQ data
  const faqs = [
    {
      question: "What digital marketing services do you offer?",
      answer: "We offer comprehensive digital marketing services including SEO, content marketing, social media marketing, branding, UI/UX design, app development, and digital strategy consulting."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. You can typically expect to see initial improvements in 3-6 months, with significant results appearing after 6-12 months of consistent effort."
    },
    {
      question: "Do you work with businesses outside Ahmedabad?",
      answer: "Yes, while we're based in Ahmedabad, we work with clients across India and internationally through our digital services."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and complexity of each project. We offer customized packages tailored to your specific needs and budget. Contact us for a detailed quote."
    }
  ];

  const faqSchema = getFAQSchema(faqs);

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, faqSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title="FAQ's"
      ></BreadCumb>
      <Faq1></Faq1>
    </div>
  );
};

export default page;