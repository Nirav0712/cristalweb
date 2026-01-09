import { Public_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const public_sans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});


export const metadata = {
  metadataBase: new URL('https://thecrystalengage.in'),
  title: {
    default: 'The Crystal Engage | Digital Marketing & Branding Agency in Ahmedabad',
    template: '%s | The Crystal Engage',
  },
  description: 'The Crystal Engage is a results-driven digital marketing agency in Ahmedabad providing SEO, branding, content marketing, UI/UX design, app development, and digital strategy solutions for business growth.',
  keywords: [
    'digital marketing agency in ahmedabad',
    'branding agency in ahmedabad',
    'seo company in ahmedabad',
    'content marketing agency in ahmedabad',
  ],
  authors: [{ name: 'The Crystal Engage' }],
  creator: 'The Crystal Engage',
  publisher: 'The Crystal Engage',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thecrystalengage.in',
    siteName: 'The Crystal Engage',
    title: 'The Crystal Engage | Digital Marketing & Branding Agency',
    description: 'Results-driven digital marketing and branding agency in Ahmedabad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Crystal Engage',
    description: 'Digital Marketing & Branding Agency in Ahmedabad',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0066ff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${public_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
