import React from 'react';
import Header1 from '../Components/Header/Header1';
import Footer1 from '../Components/Footer/Footer1';
import JsonLd from '../Components/SEO/JsonLd';
import { Metadata } from 'next';
import { getOrganizationSchema, getWebsiteSchema, getLocalBusinessSchema } from '@/lib/seo/schemas';


export const metadata: Metadata = {
  title: {
    default: "The Crystal Engage | Digital Marketing & Branding Agency in Ahmedabad",
    template: "%s | The Crystal Engage"
  },
  description:
    "The Crystal Engage is a results-driven digital marketing agency in Ahmedabad providing SEO, branding, content marketing, UI/UX design, app development, and digital strategy solutions for business growth.",
  keywords: [
    "digital marketing agency in ahmedabad",
    "branding agency in ahmedabad",
    "seo company in ahmedabad",
    "content marketing agency in ahmedabad",
    "email marketing company in ahmedabad",
    "mobile app development company in ahmedabad",
    "affordable digital marketing services in ahmedabad",
    "ui ux design agency ahmedabad",
    "app development ahmedabad",
  ],
  authors: [{ name: "The Crystal Engage" }],
  creator: "The Crystal Engage",

  openGraph: {
    title: "The Crystal Engage | Digital Marketing & Strategy Agency in Ahmedabad",
    description: "The Crystal Engage is a digital marketing and strategy agency in Ahmedabad offering SEO, branding, UI/UX design, content marketing, and app development services, and digital strategy services to help businesses grow online.",
    url: "https://thecrystalengage.in",
    siteName: "The Crystal Engage",
    images: [
      {
        url: "https://thecrystalengage.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Crystal Engage - Digital Marketing & Strategy Agency in Ahmedabad",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "The Crystal Engage",
    description: "Grow your business with The Crystal Engage — a performance-driven digital marketing agency in Ahmedabad specializing in SEO, branding, UI/UX design, and digital strategy.",
    images: ["https://thecrystalengage.in/og-image.png"],
  },

  alternates: {
    canonical: "https://thecrystalengage.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Digital Marketing Services",
  classification: "Digital Marketing, Branding, SEO, Content Marketing, UI/UX Design, App Development, Digital Strategy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <JsonLd data={[organizationSchema, websiteSchema, localBusinessSchema]} />
      <div className='main-page-area'>
        <Header1></Header1>
        {children}
        <Footer1></Footer1>
      </div>
    </>
  );
}