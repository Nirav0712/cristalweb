import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

export interface PageMetadataProps {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url: string;
    type?: 'website' | 'article' | 'profile';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
}

export function generateMetadata({
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author
}: PageMetadataProps): Metadata {
    const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
    const fullUrl = url.startsWith('http') ? url : `${SITE_CONFIG.domain}${url}`;
    const imageUrl = image?.startsWith('http') ? image : `${SITE_CONFIG.domain}${image || SITE_CONFIG.ogImage}`;

    return {
        title: fullTitle,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
        creator: SITE_CONFIG.name,
        publisher: SITE_CONFIG.name,

        openGraph: {
            title: fullTitle,
            description,
            url: fullUrl,
            siteName: SITE_CONFIG.name,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            locale: 'en_US',
            type,
            ...(publishedTime && { publishedTime }),
            ...(modifiedTime && { modifiedTime })
        },

        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [imageUrl],
            creator: '@thecrystalengage',
            site: '@thecrystalengage'
        },

        alternates: {
            canonical: fullUrl,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export function generateBlogMetadata({
    title,
    description,
    image,
    slug,
    publishedTime,
    modifiedTime,
    author,
    keywords = []
}: {
    title: string;
    description: string;
    image: string;
    slug: string;
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    keywords?: string[];
}): Metadata {
    return generateMetadata({
        title,
        description,
        keywords,
        image,
        url: `/blog/${slug}`,
        type: 'article',
        publishedTime,
        modifiedTime,
        author
    });
}

export function generateServiceMetadata({
    title,
    description,
    slug,
    keywords = []
}: {
    title: string;
    description: string;
    slug: string;
    keywords?: string[];
}): Metadata {
    return generateMetadata({
        title,
        description,
        keywords,
        url: `/service/${slug}`,
        type: 'website'
    });
}

export function generateTeamMemberMetadata({
    name,
    jobTitle,
    description,
    image,
    slug
}: {
    name: string;
    jobTitle: string;
    description: string;
    image: string;
    slug: string;
}): Metadata {
    return generateMetadata({
        title: `${name} - ${jobTitle}`,
        description,
        image,
        url: `/team/${slug}`,
        type: 'profile'
    });
}

export function generateProjectMetadata({
    title,
    description,
    image,
    keywords = []
}: {
    title: string;
    description: string;
    image: string;
    keywords?: string[];
}): Metadata {
    return generateMetadata({
        title,
        description,
        keywords,
        image,
        url: '/project',
        type: 'website'
    });
}
