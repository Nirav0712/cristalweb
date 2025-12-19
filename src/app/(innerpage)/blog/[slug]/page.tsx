import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import { blogData } from '../../../data/blogData';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = blogData.find(b => b.slug === slug);

  if (!post) {
    return (
      <div>
        <BreadCumb
          bgimg="/assets/img/page_header.jpg"
          Title="Post Not Found"
        ></BreadCumb>
        <div className="container pt-5 pb-5 text-center">
          <h2>Blog post not found</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title={post.title}
      ></BreadCumb>
      <BlogDetails post={post}></BlogDetails>
    </div>
  );
};

export default page;