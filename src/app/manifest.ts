import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'The Crystal Engage - Digital Marketing Agency',
        short_name: 'Crystal Engage',
        description: 'Results-driven digital marketing and branding agency in Ahmedabad',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0066ff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            }
        ],
    };
}
