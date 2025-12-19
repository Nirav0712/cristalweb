"use client"
import React from 'react';

const ContactForm = () => {
    return (
        <div className="cs_contact_form_wrapper cs_gray_bg_1 cs_radius_20 cs_p_30">
            <div className="cs_section_heading cs_style_1 cs_mb_20">
                <h3 className="cs_fs_24 cs_semibold mb-0 text-center">GET A FREE QUOTE</h3>
                <p className="text-center cs_fs_14 cs_mb_0">we will get back to you within 24 hours</p>
            </div>
            <form action="#" className="cs_contact_form">
                <div className="row cs_gap_y_20">
                    <div className="col-lg-6">
                        <input type="text" className="cs_form_field" placeholder="First Name *" />
                    </div>
                    <div className="col-lg-6">
                        <input type="text" className="cs_form_field" placeholder="Last Name *" />
                    </div>
                    <div className="col-lg-12">
                        <input type="text" className="cs_form_field" placeholder="Phone Number *" />
                    </div>
                    <div className="col-lg-12">
                        <select className="cs_form_field">
                            <option value="">Select Service *</option>
                            <option value="seo">SEO</option>
                            <option value="app">App Development</option>
                            <option value="web">Web Design</option>
                        </select>
                    </div>
                    <div className="col-lg-12">
                        <textarea className="cs_form_field" cols={30} rows={4} placeholder="Enter Your Message *"></textarea>
                    </div>
                    <div className="col-lg-12">
                        <button type="submit" className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_radius_5 w-100">
                            <span>SUBMIT</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
