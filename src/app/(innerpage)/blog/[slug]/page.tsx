import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import BlogDetails from '../../../Components/BlogDetails/BlogDetails';
import { blogData } from '../../../data/blogData';
import { Metadata } from 'next';
import JsonLd from '../../../Components/SEO/JsonLd';
import { getBreadcrumbSchema, getArticleSchema } from '@/lib/seo/schemas';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogData.find(b => b.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: post.title,
    description: post.desc || 'Read this article on The Crystal Engage blog',
    keywords: post.tags || [],
    openGraph: {
      title: post.title,
      description: post.desc || '',
      url: `https://thecrystalengage.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [{
        url: post.img,
        alt: post.title
      }]
    }
  };
}

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

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${slug}` }
  ]);

  const articleSchema = getArticleSchema({
    title: post.title,
    description: post.desc || '',
    image: post.img,
    datePublished: post.date,
    dateModified: post.date,
    author: post.author,
    url: `/blog/${slug}`
  });

  return (
    <div>
      <JsonLd data={[breadcrumbSchema, articleSchema]} />
      <BreadCumb
        bgimg="/assets/img/page_header.jpg"
        Title={post.title}
      ></BreadCumb>
      <BlogDetails post={post}></BlogDetails>
    </div>
  );
};

export default page;