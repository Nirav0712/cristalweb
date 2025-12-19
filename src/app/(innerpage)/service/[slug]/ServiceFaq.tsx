"use client"
import React, { useState } from 'react';

const ServiceFaq = ({ faqs }) => {
    const [openItemIndex, setOpenItemIndex] = useState(-1);

    const handleItemClick = index => {
        if (index === openItemIndex) {
            setOpenItemIndex(-1);
        } else {
            setOpenItemIndex(index);
        }
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <div className="cs_accordians cs_style_1">
            {faqs.map((item, index) => (
                <div key={index} className={`cs_accordian cs_style_1 ${index === openItemIndex ? "active" : ""}`} >
                    <div onClick={() => handleItemClick(index)} className="cs_accordian_head position-relative" style={{ cursor: 'pointer' }}>
                        <h2 className="cs_accordian_title cs_fs_20 cs_semibold mb-0">{item.title}</h2>
                        <span className="cs_accordian_toggler cs_heading_color position-absolute"><i className="bi bi-chevron-down"></i></span>
                    </div>
                    <div className="cs_accordian_body" style={{ display: index === openItemIndex ? 'block' : 'none' }}>
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServiceFaq;
