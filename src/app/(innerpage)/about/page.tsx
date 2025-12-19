import React from 'react';
import BreadCumb from '../../Components/Common/BreadCumb';
import About2 from '../../Components/About/About2';
import Counter1 from '../../Components/Counter/Counter1';
import Video2 from '../../Components/Video/Video2';
import Testimonial3 from '../../Components/Testimonial/Testimonial3';
import Awards from '../../Components/Award/Awards';
import Team1 from '../../Components/Team/Team1';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      {/* <BreadCumb
                bgimg="/assets/img/newimgs/abourimg.jpg"
                
                Title="About Us"
            ></BreadCumb>  */}
      <section className="cs_page_heading cs_bg_filed cs_center text-center cs_heading_bg position-relative" style={{backgroundImage:"url('/assets/img/newimgs/abourimg.jpg')"}}>
        {/* <div className="cs_overlay position-absolute"></div> */}
        <div className="container"> 
          <h1 className="cs_fs_50 cs_white_color cs_extra_bold cs_mb_20 wow fadeInDown " style={{color:"black"}}>About Us</h1>
          <ol className="breadcrumb wow fadeInUp">
            <li className="breadcrumb-item" ><Link href="/">Home</Link></li>
            <li className="breadcrumb-item active" >About Us</li>
          </ol>
        </div>
      </section>
      <About2></About2>
      <Counter1></Counter1>
      <Video2></Video2>
      <Testimonial3></Testimonial3>
      <Awards></Awards>
      <Team1></Team1>
    </div>
  );
};

export default page;