import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About1 = () => {
    return (
<section className="cs_about cs_style_1 position-relative overflow-hidden">
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_gap_y_40 cs_tab_reverse">
          <div className="col-lg-6">
            <div className="cs_about_content">
              <div className="cs_section_heading cs_style_1 cs_mb_28">
                <p className="cs_section_subtitle cs_fs-18 cs_semibold cs_accent_color cs_mb_20">
                  About Us<span className="cs_shape_right"></span>
                </p>
                <h2 className="cs_fs_48 cs_mb_21 wow fadeInDown">we’re strategic digital marketing agency</h2>
                <p className="cs_section_heading_text mb-0">We are a results-driven digital marketing agency committed to helping brands grow with powerful online strategies. Our mission is to bring innovative marketing solutions that boost visibility, attract the right audience, and convert visitors into loyal customers. With expertise across SEO, social media marketing, branding, paid ads, and data analytics, we design customized campaigns that deliver measurable success.
                  
                  {/* <br/><br/>From small businesses to large enterprises, we support every stage of the digital journey with advanced tools, creative thinking, and performance-focused execution. Our team believes in transparency, smart planning, and long-term growth—making us a trusted partner for businesses that want to scale effectively in today’s competitive digital world. */}
 </p>
              </div>
              <ul className="cs_list cs_style_1 cs_medium cs_heading_color cs_mp_0">
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Various analysis options.</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Page Load (time, size, number of requests).</span>
                </li>
                <li>
                  <span className="cs_list_icon cs_center"><i className="bi bi-check-lg"></i></span>
                  <span className="cs_list_text">Advance Data analysis operation.</span>
                </li>
              </ul>
              <div className="cs_about_btn_group">
                <Link href="/about" aria-label="Click to visit about us page" className="cs_btn cs_style_1 cs_fs_14 cs_bold text-uppercase wow fadeInLeft"><span>About Us</span></Link>
                <div className="cs_client_info_wrapper wow fadeInRight">
                  <div className="cs_client_info_header cs_mb_15">
                    <Image src="/assets/img/icons/star.svg" alt="img" width={18} height={18}   />
                    <span className="cs_fs_20 cs_bold cs_heading_color">Trustipilot</span>
                  </div>
                  <div className="cs_client_review_content">
                    <div className="cs_client_thumb">
                      <Image src="/assets/img/client_group_1.png" alt="img" width={126} height={42}   />
                    </div>
                    <div className="cs_client_rating_info">
                      <div className="cs_rating" data-rating="4">
                        <div className="cs_rating_percentage"></div>
                      </div>
                      <p className="cs_fs_14 cs_heading_color mb-0">450+ reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cs_about_thumbnail_wrapper wow fadeInUp">
              <div className="cs_about_thumbnail position-relative">
                <Image src="/assets/img/newimgs/marcating_img.png" className="w-[260px] h-[353px] object-cover" alt="img" width={260} height={353}   />
                <div className="cs_project_infobox_wrapper">
                  <div className="cs_project_infobox cs_blue_bg">
                    <h3 className="cs_fs_48 cs_white_color">5K+</h3>
                    <p className="cs_white_color mb-0">Project Completed</p>
                  </div>
                </div>
                <div className="cs_vector_shape position-absolute">
                  <Image src="/assets/img/vector_line.svg" alt="img" width={57} height={19}   />
                </div>
              </div>
              <div className="cs_about_thumbnail position-relative">
                <Image src="/assets/img/newimgs/marcating_img2.png" className="h-[260px] w-[353px] object-contain" alt="img" width={269} height={353}   />
                <div className="cs_about_shape_3 position-absolute">
                  <Image src="/assets/img/about_shape_1.svg" alt="img" width={99} height={86}   />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-6">
      <div className="cs_about_thumbnail_wrapper wow fadeInUp relative md:min-h-[420px]">

        <div className="cs_about_thumbnail position-relative md:absolute md:left-0 md:top-5 md:w-[260px] md:h-[353px] md:z-10">
          <Image
            src="/assets/img/newimgs/marcating_img.png"
            alt="img"
            width={260}
            height={353}
            className="w-full h-full object-cover"
          />

          <div className="cs_project_infobox_wrapper md:absolute md:-left-3 md:-top-3 z-30 mt-3 md:mt-0">
            <div className="cs_project_infobox cs_blue_bg bg-blue-600 text-white rounded-md px-4 py-3 shadow">
              <h3 className="cs_fs_48 text-2xl font-bold leading-none">5K+</h3>
              <p className="cs_white_color mb-0 text-sm">Project Completed</p>
            </div>
          </div>

          <div className="cs_vector_shape position-absolute md:absolute md:right-[-14px] md:top-[220px] mt-2 md:mt-0 md:z-15">
            <Image
              src="/assets/img/vector_line.svg"
              alt="vector"
              width={57}
              height={19}
              className="w-[57px] h-[19px] object-contain"
            />
          </div>
        </div>

        <div className="cs_about_thumbnail position-relative mt-6 md:mt-0 md:absolute md:right-0 md:bottom-0 md:w-[353px] md:h-[260px] md:z-20">
          <Image
            src="/assets/img/newimgs/marcating_img2.png"
            alt="img"
            width={353}
            height={260}
            className="w-full h-full object-contain"
          />

          <div className="cs_about_shape_3 position-absolute md:absolute md:-left-6 md:-top-6 mt-3 md:mt-0 md:z-25">
            <Image
              src="/assets/img/about_shape_1.svg"
              alt="shape"
              width={99}
              height={86}
              className="w-[99px] h-[86px] object-contain"
            />
          </div>
        </div>

      </div>
    </div> */}


        </div>
        <div className="cs_about_shape_1 position-absolute">
          <Image src="/assets/img/blob_shape.svg" alt="img" width={831} height={932}   />
        </div>
        <div className="cs_about_shape_2 position-absolute">
          <Image src="/assets/img/circle_1.svg" alt="img" width={93} height={93}   />
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
    );
};

export default About1;