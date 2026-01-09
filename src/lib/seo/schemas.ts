import { SITE_CONFIG } from './constants';

// Organization Schema
export function getOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": SITE_CONFIG.name,
        "alternateName": "The Crystal Engage",
        "url": SITE_CONFIG.domain,
        "logo": `${SITE_CONFIG.domain}${SITE_CONFIG.logo}`,
        "description": SITE_CONFIG.description,
        "email": SITE_CONFIG.email,
        "telephone": SITE_CONFIG.phone,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": SITE_CONFIG.address.streetAddress,
            "addressLocality": SITE_CONFIG.address.addressLocality,
            "addressRegion": SITE_CONFIG.address.addressRegion,
            "postalCode": SITE_CONFIG.address.postalCode,
            "addressCountry": SITE_CONFIG.address.addressCountry
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": SITE_CONFIG.phone,
            "contactType": "customer service",
            "areaServed": "IN",
            "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
            SITE_CONFIG.social.facebook,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.linkedin
        ]
    };
}

// Website Schema
export function getWebsiteSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": SITE_CONFIG.name,
        "url": SITE_CONFIG.domain,
        "description": SITE_CONFIG.description,
        "publisher": {
            "@type": "Organization",
            "name": SITE_CONFIG.name
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${SITE_CONFIG.domain}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };
}

// Local Business Schema
export function getLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": SITE_CONFIG.name,
        "image": `${SITE_CONFIG.domain}${SITE_CONFIG.logo}`,
        "url": SITE_CONFIG.domain,
        "telephone": SITE_CONFIG.phone,
        "email": SITE_CONFIG.email,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": SITE_CONFIG.address.streetAddress,
            "addressLocality": SITE_CONFIG.address.addressLocality,
            "addressRegion": SITE_CONFIG.address.addressRegion,
            "postalCode": SITE_CONFIG.address.postalCode,
            "addressCountry": SITE_CONFIG.address.addressCountry
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": SITE_CONFIG.geo.latitude,
            "longitude": SITE_CONFIG.geo.longitude
        },
        "openingHoursSpecification": SITE_CONFIG.openingHours.map(hours => ({
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": hours.split(' ')[0].split('-'),
            "opens": hours.split(' ')[1].split('-')[0],
            "closes": hours.split(' ')[1].split('-')[1]
        })),
        "areaServed": SITE_CONFIG.serviceAreas.map(area => ({
            "@type": "City",
            "name": area
        })),
        "sameAs": [
            SITE_CONFIG.social.facebook,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.linkedin
        ]
    };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${SITE_CONFIG.domain}${item.url}`
        }))
    };
}

// Service Schema
export function getServiceSchema(service: {
    name: string;
    description: string;
    url: string;
    image?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": service.name,
        "name": service.name,
        "description": service.description,
        "provider": {
            "@type": "Organization",
            "name": SITE_CONFIG.name,
            "url": SITE_CONFIG.domain
        },
        "areaServed": {
            "@type": "Country",
            "name": "India"
        },
        "url": `${SITE_CONFIG.domain}${service.url}`,
        ...(service.image && { "image": service.image })
    };
}

// Article/Blog Post Schema
export function getArticleSchema(article: {
    title: string;
    description: string;
    image: string;
    datePublished: string;
    dateModified?: string;
    author?: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "image": article.image,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified || article.datePublished,
        "author": {
            "@type": "Person",
            "name": article.author || SITE_CONFIG.name
        },
        "publisher": {
            "@type": "Organization",
            "name": SITE_CONFIG.name,
            "logo": {
                "@type": "ImageObject",
                "url": `${SITE_CONFIG.domain}${SITE_CONFIG.logo}`
            }
        },
        "url": `${SITE_CONFIG.domain}${article.url}`,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${SITE_CONFIG.domain}${article.url}`
        }
    };
}

// Person Schema (for team members)
export function getPersonSchema(person: {
    name: string;
    jobTitle: string;
    description?: string;
    image?: string;
    email?: string;
    url: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": person.name,
        "jobTitle": person.jobTitle,
        "worksFor": {
            "@type": "Organization",
            "name": SITE_CONFIG.name
        },
        "url": `${SITE_CONFIG.domain}${person.url}`,
        ...(person.description && { "description": person.description }),
        ...(person.image && { "image": person.image }),
        ...(person.email && { "email": person.email })
    };
}

// FAQ Schema
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// Creative Work Schema (for portfolio/projects)
export function getCreativeWorkSchema(work: {
    name: string;
    description: string;
    image: string;
    dateCreated: string;
    creator?: string;
    url: string;
    keywords?: string[];
}) {
    return {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": work.name,
        "description": work.description,
        "image": work.image,
        "dateCreated": work.dateCreated,
        "creator": {
            "@type": "Organization",
            "name": work.creator || SITE_CONFIG.name
        },
        "url": `${SITE_CONFIG.domain}${work.url}`,
        ...(work.keywords && { "keywords": work.keywords.join(", ") })
    };
}

// ItemList Schema (for listing pages)
export function getItemListSchema(items: Array<{
    name: string;
    url: string;
    description?: string;
}>, listName: string) {
    return {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": listName,
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "url": `${SITE_CONFIG.domain}${item.url}`,
            ...(item.description && { "description": item.description })
        }))
    };
}

// Offer Schema (for pricing)
export function getOfferSchema(offer: {
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
}) {
    return {
        "@context": "https://schema.org",
        "@type": "Offer",
        "name": offer.name,
        "description": offer.description,
        "seller": {
            "@type": "Organization",
            "name": SITE_CONFIG.name
        },
        ...(offer.price && {
            "price": offer.price,
            "priceCurrency": offer.priceCurrency || "INR"
        }),
        "availability": "https://schema.org/InStock"
    };
}
