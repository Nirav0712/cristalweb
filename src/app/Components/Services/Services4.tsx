import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Services4 = () => {

  const chooseContent = [
    { img: '/assets/img/icons/bulb.svg', title: 'Brand Identity Design Services', slug: 'branding-design', content: 'Professional brand identity design services to build trust, recognition, and emotional connection with your audience.' },
    { img: '/assets/img/icons/email.svg', title: 'Email Marketing Services for Businesses', slug: 'email-marketing', content: 'High-converting email marketing services that increase sales, engagement, and customer loyalty through targeted campaigns..' },
    { img: '/assets/img/icons/seo.svg', title: 'SEO Services for Website Ranking', slug: 'seo-analytics', content: 'Rank higher on Google with our professional SEO and analytics services. Improve traffic, visibility, and conversions.' },
    { img: '/assets/img/icons/watch.svg', title: 'Content Marketing Services for SEO', slug: 'content-marketing', content: 'We are a professional UI/UX design company creating intuitive, user-friendly, and conversion-focused digital experiences.' },
    { img: '/assets/img/icons/ux-ui.svg', title: 'UI UX Design Company', slug: 'ui-ux-design', content: 'Focusing on visual design and user journey to drive business growth and provide an intuitive user experience.' },
    { img: '/assets/img/icons/app.svg', title: 'Mobile App Development Company', slug: 'app-development', content: 'Top mobile app development company building secure, scalable Android and iOS applications for businesses.' },
    { img: '/assets/img/icons/business.svg', title: 'Business Analysis Consulting Services', slug: 'business-analysis', content: 'Expert business analysis consulting services to identify gaps, optimize processes, and drive smarter decisions.' },
    { img: '/assets/img/icons/digital.svg', title: 'Digital Strategy Consulting Services', slug: 'digital-strategy', content: 'Strategic digital consulting services to help businesses grow, scale, and stay competitive in the digital world.' },
  ];

  return (
    <section className="cs_gray_bg_2">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_30">
          {chooseContent.map((item, i) => (
            <div key={i} className="col-xl-3 col-md-6 wow fadeInDown">
              <div className="cs_card cs_style_2 cs_radius_10 position-relative overflow-hidden">
                <span className="cs_card_icon cs_white_bg cs_center cs_radius_50 cs_mb_25">
                  <Image src={item.img} alt="img" width={35} height={40} />
                </span>
                <div className="cs_card_content">
                  <h3 className="cs_card_title cs_fs_22 cs_semibold cs_mb_10"><Link href={`/service/${item.slug}`} aria-label="Click to view service">{item.title}</Link></h3>
                  <p className="cs_card_subtitle cs_mb_22">{item.content}</p>
                  <Link href={`/service/${item.slug}`} aria-label="Click to view service" className="cs_card_btn cs_center cs_radius_50">
                    <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23} />
                  </Link>
                </div>
                <div className="cs_card_shape position-absolute start-0 top-0 z-0">
                  <Image src="/assets/img/service_card_shape.svg" alt="img" width={264} height={286} />
                </div>
                <div className="cs_card_shape_2 position-absolute z-0"></div>
              </div>
            </div>
          ))}


        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Services4;