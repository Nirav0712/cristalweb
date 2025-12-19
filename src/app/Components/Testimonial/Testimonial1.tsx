"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import Slider from 'react-slick';

const Testimonial1 = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      }, {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const testimonialContent = [
    { img: '/assets/img/newimgs/Karmyog-logo.webp', subtitle: 'Non-Profit Organization', title: 'Karmyog Foundation', content: 'Thanks to Crystal Enange’s expertise in branding, website development, and digital strategy, Karmyog Foundation now connects more effectively with supporters and beneficiaries. We highly recommend Crystal Engage to organizations looking for reliable, result-driven digital solutions.' },
    { img: '/assets/img/newimgs/metsterr_logo.webp', subtitle: 'Industrial Solutions', title: 'Metsterr', content: 'Crystal Engage has been an exceptional digital partner for Metsterr. Their team showed strong expertise in branding, UI/UX design, and digital strategy, delivering results that truly aligned with our business goals. The communication was clear, timelines were respected, and the execution was seamless from start to finish.' },
    { img: '/assets/img/newimgs/Untitled_design_8.avif', subtitle: 'Fashion Brand', title: 'Maxzone Clothing', content: 'Strong branding and creative digital solutions aligned perfectly with our fashion vision. Crystal Engagee delivered impressive results' },
    { img: '/assets/img/newimgs/logo-procurve.png', subtitle: 'E-Procurement Platform', title: 'Procurve', content: 'High-quality branding and website development executed with precision and professionalism. Strong digital strategy with measurable results. Trusted partner – Crystal Engage.' },
    { img: '/assets/img/newimgs/AVISHKAR-logo.png', subtitle: 'Real Estate', title: 'Avishkar Reality', content: 'The team delivered excellent digital solutions for Avishkar Reality, strengthening our branding and online presence. Crystal Enage is highly recommended for reliable, result-driven digital services.' },
  ];

  return (
    <section className="cs_slider cs_style_1 cs_testimonial_slider cs_slider_gap_30 position-relative">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 cs_type_1">
          <div className="cs_section_heading_left">
            <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20 wow fadeInDown">
              Our Testimonial<span className="cs_shape_right"></span>
            </p>
            <h2 className="cs_fs_48 mb-0 wow fadeInUp">Clients Feedback</h2>
          </div>
          <div className="cs_section_heading_right wow fadeInRight">
            <div className="cs_slider_arrows cs_style_1">
              <div onClick={previous} className="cs_left_arrow cs_center cs_radius_50 slick-arrow">
                <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23} />
              </div>
              <div onClick={next} className="cs_right_arrow cs_center cs_radius_50 slick-arrow">
                <Image src="/assets/img/icons/arrow_right.svg" alt="img" width={23} height={23} />
              </div>
            </div>
          </div>
        </div>
        <div className="cs_height_60 cs_height_lg_50"></div>
        <div className="cs_full_screen_right cs_variable_width_wrap position-relative z-1">
          <div className="cs_slider_container" data-autoplay="0" data-loop="1" data-speed="700" data-center="0" data-variable-width="1" data-slides-per-view="1">
            <div className="cs_slider_wrapper cs_slider_gap_301">
              <Slider ref={sliderRef} {...settings}>
                {testimonialContent.map((item, i) => (
                  <div key={i} className="cs_slide">
                    <div className="cs_testimonial cs_style_1">
                      <div className="cs_testimonial_header">
                        <div className="cs_avatar cs_style_1">
                          <div className="cs_avatar_icon cs_radius_50">
                            <Image src={item.img} alt="img" width={60} height={61} />
                          </div>
                          <div className="cs_avatar_info">
                            <h3 className="cs_fs_20 cs_medium mb-0">{item.title}</h3>
                            <p className="mb-0">{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                      <div className="cs_testimonial_content cs_gray_bg_1 cs_radius_4 position-relative">
                        <blockquote>{item.content}</blockquote>
                        <div className="cs_rating" data-rating="5">
                          <div className="cs_rating_percentage"></div>
                        </div>
                        <span className="cs_quote_icon position-absolute">
                          <Image src="/assets/img/icons/quote_1.svg" alt="img" width={48} height={35} />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="cs_testimonial_shape_1 position-absolute">
          <Image src="/assets/img/color_glow.svg" alt="img" width={449} height={1274} />
        </div>
        <div className="cs_testimonial_pill_icon position-absolute"></div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default Testimonial1;