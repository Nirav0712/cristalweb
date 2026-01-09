import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import About2 from '../../Components/About/About2';
import Counter1 from '../../Components/Counter/Counter1';
import Video2 from '../../Components/Video/Video2';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Awards from '../../Components/Award/Awards';
import Team1 from '../../Components/Team/Team1';
import Link from 'next/link';
import Teamhead from '@/app/Components/Team/Teamhead';
import { Metadata } from 'next';
import JsonLd from '../../Components/SEO/JsonLd';
import { getBreadcrumbSchema } from '@/lib/seo/schemas';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Crystal Engage - A leading digital marketing and branding agency in Ahmedabad. Our team of experts delivers innovative solutions in SEO, content marketing, design, and digital strategy.',
  keywords: [
    'about crystal engage',
    'digital marketing agency ahmedabad',
    'our team',
    'company profile',
    'marketing experts ahmedabad'
  ],
  openGraph: {
    title: 'About The Crystal Engage',
    description: 'Meet the team behind Ahmedabad\'s leading digital marketing agency',
    url: 'https://thecrystalengage.in/about',
  }
};

const page = () => {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' }
  ]);

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Crystal Engage",
    "description": "Learn about The Crystal Engage, a premier digital marketing agency in Ahmedabad",
    "url": "https://thecrystalengage.in/about"
  };

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, aboutPageSchema]} />
      {/* <BreadCumb
                bgimg="/assets/img/newimgs/abourimg.jpg"
                
                Title="About Us"
            ></BreadCumb>  */}
      <section className="cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg position-relative" style={{ backgroundImage: "url('/assets/img/newimgs/abourimg.jpg')" }}>
        {/* <div className="cs_overlay position-absolute"></div> */}
        <div className="container">
          <h1 className="cs_fs_50 cs_white_color cs_extra_bold cs_mb_20 wow fadeInDown " style={{ color: "black" }}>About Us</h1>
          <ol className="breadcrumb wow fadeInUp">
            <li className="breadcrumb-item" ><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" >About Us</li>
          </ol>
        </div>
      </section>
      <About2></About2>
      <Counter1></Counter1>
      <Video2></Video2>
      {/* <Testimonial3></Testimonial3> */}
      <Teamhead></Teamhead>
      <Awards></Awards>
      <Team1></Team1>
    </div>
  );
};

export default page;