import Image from 'next/image';
import React from 'react';

const BlogDetails = ({ post }: any) => {
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="row cs_row_gap_30 cs_gap_y_60">
          <aside className="col-xl-4 col-lg-5">
            <div className="cs_sidebar cs_style_1 cs_type_1">
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Search</h3>
                <form action="#" className="cs_search cs_white_bg position-relative">
                  <input type="text" placeholder="Search here" />
                  <button className="cs_search_button cs_center cs_blue_bg cs_white_color">
                    <i className="bi bi-search"></i></button>
                </form>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Categories</h3>
                <ul className="cs_service_category_list cs_medium cs_mp_0">
                  <li><a href="#"><span>Pay-Per-Click (PPC)</span><span> (7)</span></a></li>
                  <li><a href="#"><span>Social Media Marketing</span><span> (4)</span></a></li>
                  <li><a href="#"><span>Email Marketing</span><span> (5)</span></a></li>
                  <li><a href="#"><span>Electrotherapy</span><span> (3)</span></a></li>
                  <li><a href="#"><span>Affiliate Marketing</span><span> (6)</span></a>
                  </li>
                </ul>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Recent Posts</h3>
                <div className="cs_recent_post_wrapper">
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_1.jpg" alt="img" width={80} height={80} />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>17 Mar, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_2.jpg" alt="img" width={80} height={80} />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>14 Dec, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                  <div className="cs_recent_post">
                    <a className="cs_recent_post_thumb cs_radius_10" href="#" aria-label="Click to read post">
                      <Image src="/assets/img/latest_post_3.jpg" alt="img" width={80} height={80} />
                    </a>
                    <div className="cs_recent_post_right">
                      <div className="cs_post_meta cs_fs_14 cs_blue_color cs_mb_9">
                        <i className="fa-solid fa-calendar-alt"></i>27 Feb, 2024
                      </div>
                      <h3 className="cs_fs_16 cs_bold mb-0">
                        <a href="#" aria-label="Click to read post">There are many vario ns of passages of</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_sidebar_widget cs_gray_bg_1 cs_radius_10 wow fadeInDown">
                <div className="cs_sidebar_tags">
                  <h3 className="cs_sidebar_widget_title cs_fs_22 cs_mb_22">Tags</h3>
                  <div className="cs_tags_links cs_fs_14 cs_heading_color">
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Marketing</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Agency</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Search Engine</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Influencer</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Advertising</a>
                    <a href="#" className="cs_tag_link cs_white_bg cs_radius_5">Branding</a>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="col-xl-8 col-lg-7">
            <div className="cs_post_details">
              <Image src={post.img} alt="img" width={754} height={495} className="w-100 cs_radius_10" />
              <div className="cs_post_meta_wrapper cs_mb_4">
                <div className="cs_post_meta">
                  <span className="cs_blue_color"><i className="bi bi-calendar-check-fill"></i></span>
                  <span className="cs_heading_color">{post.date}</span>
                </div>
                <div className="cs_post_meta">
                  <span className="cs_blue_color"><i className="bi bi-person-fill"></i></span>
                  <span className="cs_heading_color">{post.author}</span>
                </div>
              </div>
              <h2>{post.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.desc }}></div>
            </div>
            <div className="cs_height_80 cs_height_lg_60"></div>
            <div className="cs_author_card cs_radius_15 wow fadeInDown">
              <div className="cs_author_thumbnail cs_radius_15">
                <Image src="/assets/img/post_author.jpg" alt="img" width={189} height={189} />
              </div>
              <div className="cs_author_info">
                <h3 className="cs_fs_24 cs_semibold cs_mb_2">William Benjamin</h3>
                <p className="cs_author_status cs_blue_color">Author</p>
                <p className="cs_author_desc mb-0">Re-engineer multimedia based internal or organic sources for progressive vortals. Assertively leverage existing economically sound total linkage whereas global best practices.</p>
              </div>
            </div>
            <div className="cs_height_70 cs_height_lg_60"></div>
            <div className="cs_comments_area">
              <h2 className="cs_fs_30 cs_mb_25">03 Comments</h2>
              <ul className="cs_comment_list cs_heading_font cs_mp_0">
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail cs_radius_15">
                    <Image src="/assets/img/client_1.jpg" alt="img" width={110} height={110} />
                  </div>
                  <div className="cs_comment_info">
                    <p className="cs_fs_14 cs_medium mb-0">15 Jun, 2024</p>
                    <h3 className="cs_fs_20 cs_semibold cs_mb_14">Daniel Adam</h3>
                    <p className="mb-0">Empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.</p>
                    <button aria-label="Reply button" className="cs_reply_btn cs_semibold cs_blue_color">Reply</button>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail cs_radius_15">
                    <Image src="/assets/img/client_2.jpg" alt="img" width={110} height={110} />
                  </div>
                  <div className="cs_comment_info">
                    <p className="cs_fs_14 cs_medium mb-0">15 Jun, 2024</p>
                    <h3 className="cs_fs_20 cs_semibold cs_mb_14">Zenelia Lozhe</h3>
                    <p className="mb-0">Empower multifunctional e-commerce for prospective pplications. Seamlessly productivate plug-and-play markets.</p>
                    <button aria-label="Reply button" className="cs_reply_btn cs_semibold cs_blue_color">Reply</button>
                  </div>
                </li>
                <li className="cs_comment_body position-relative">
                  <div className="cs_comment_thumbnail cs_radius_15">
                    <Image src="/assets/img/client_3.jpg" alt="img" width={110} height={110} />
                  </div>
                  <div className="cs_comment_info">
                    <p className="cs_fs_14 cs_medium mb-0">15 Jun, 2024</p>
                    <h3 className="cs_fs_20 cs_semibold cs_mb_14">Jhon Smith</h3>
                    <p className="mb-0">Empower multifunctional e-commerce for prospective applications. Seamlessly productivate plug-and-play markets whereas synergistic scenarios.</p>
                    <button aria-label="Reply button" className="cs_reply_btn cs_semibold cs_blue_color">Reply</button>
                  </div>
                </li>
              </ul>
              <div className="cs_height_80 cs_height_lg_60"></div>
              <div className="cs_comment_form_wrapper cs_style_1">
                <h3 className="cs_fs_30 cs_mb_19 wow fadeInDown">Leave a Reply</h3>
                <form className="cs_comment_form row cs_row_gap_30 cs_gap_y_30">
                  <div className="col-sm-6">
                    <label htmlFor="name">Your Name*</label>
                    <input type="text" name="name" id="name" placeholder="Your Name" className="cs_form_field cs_radius_5" />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">Your Email*</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" className="cs_form_field cs_radius_5" />
                  </div>
                  <div className="col-sm-12">
                    <label htmlFor="message">Message*</label>
                    <textarea name="comment" rows={6} id="message" placeholder="Enter Your Comments" className="cs_form_field cs_radius_5"></textarea>
                  </div>
                  <div className="col-sm-12">
                    <button type="submit" aria-label="Comment submit button" className="cs_btn cs_style_1 cs_fs_14 cs_semibold text-uppercase wow fadeInUp"><span>Submit Comment</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </section>
  );
};

export default BlogDetails;