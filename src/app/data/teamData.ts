export interface TeamMember {
    slug: string;
    img: string;
    name: string;
    content: string;
    linkedin: string;
    description?: string;
}

export const teamContent: TeamMember[] = [
    {
        slug: 'hemant',
        img: '/assets/img/teamimg/henu.jpeg',
        name: 'Hemant',
        content: 'Senior Graphic Designer',
        linkedin: 'https://www.linkedin.com/in/hemant-bhadarka-8471b8285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        description: 'Hemant is our Senior Graphic Designer with expertise in creating stunning visual designs, brand identities, and marketing materials that capture attention and communicate effectively.'
    },
    {
        slug: 'jainil',
        img: '/assets/img/teamimg/jenil.png',
        name: 'Jainil',
        content: 'Branding Manager',
        linkedin: 'https://www.linkedin.com/in/jainil-shiyal-54ba4a284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        description: 'Jainil leads our branding initiatives, crafting compelling brand stories and ensuring consistent brand identity across all touchpoints and communications.'
    },
    {
        slug: 'mahima',
        img: '/assets/img/teamimg/mahima.jpeg',
        name: 'Mahima',
        content: 'Graphic Designer',
        linkedin: 'https://www.linkedin.com/in/chauhan-mahima-81b702372/',
        description: 'Mahima is a talented Graphic Designer who brings creative vision to every project, specializing in modern design aesthetics and user-centric visual solutions.'
    },
    {
        slug: 'jensi',
        img: '/assets/img/teamimg/jensi.png',
        name: 'Jensi',
        content: 'Digital Marketing Manager',
        linkedin: 'https://www.linkedin.com/in/jensi-jyani-013a3a376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
        description: 'Jensi manages our digital marketing strategies, driving online presence and engagement through data-driven campaigns and innovative marketing solutions.'
    },
    {
        slug: 'janaki',
        img: '/assets/img/teamimg/janaki.jpg',
        name: 'Janki',
        content: 'Business Developer',
        linkedin: 'https://www.linkedin.com/in/janki-bhrambhatt-637a96245/',
        description: 'Janki drives business growth through strategic partnerships and client relationship management, helping expand our reach and strengthen our market presence.'
    },
    {
        slug: 'aayushi',
        img: '/assets/img/teamimg/aayushi.png',
        name: 'Aayushi',
        content: 'Jr. Bussiness Developer',
        linkedin: 'https://www.linkedin.com/in/ayushi-malaviya-932721246/',
        description: 'Jensi manages our digital marketing strategies, driving online presence and engagement through data-driven campaigns and innovative marketing solutions.'
    },
    {
        slug: 'om',
        img: '/assets/img/teamimg/om.png',
        name: 'Om',
        content: 'Senior FullStack Developer',
        linkedin: 'https://www.linkedin.com/in/om-majithiya-98463a238/',
        description: 'Om is a Senior FullStack Developer with extensive experience in building scalable web applications using modern technologies and best development practices.'
    },
    {
        slug: 'ruchi',
        img: '/assets/img/teamimg/ruchi.jpeg',
        name: 'Ruchi',
        content: 'FullStack Developer',
        linkedin: 'https://www.linkedin.com/in/ruchi-sharma-072b78261/',
        description: 'Ruchi is a skilled FullStack Developer who excels in creating seamless user experiences and robust backend systems for complex web applications.'
    },
    {
        slug: 'pragati',
        img: '/assets/img/teamimg/pragati.jpg',
        name: 'Pragati',
        content: 'PHP & Shopify Developer',
        linkedin: 'https://www.linkedin.com/in/pragati-faldu-195356297/',
        description: 'Pragati specializes in PHP and Shopify development, building powerful e-commerce solutions and custom web applications for diverse business needs.'
    },
    {
        slug: 'nikhil',
        img: '/assets/img/teamimg/nikhil.png',
        name: 'Nikhil',
        content: 'Frontend Developer',
        linkedin: 'https://www.linkedin.com/in/nikhil-prajapati-349152137/',
        description: 'Nikhil is a Frontend Developer passionate about creating stunning, responsive user interfaces with clean code and modern web technologies.'
    },
    {
        slug: 'khushboo',
        img: '/assets/img/teamimg/khooshbu.jpg',
        name: 'Khushboo',
        content: 'Jr. Frontend Developer',
        linkedin: 'https://www.linkedin.com/in/khushboo-sadhu-a7a680393/',
        description: 'Khushboo is an experienced WordPress Developer who builds custom themes and plugins, delivering tailored content management solutions for clients.'
    },
    {
        slug: 'jinal',
        img: '/assets/img/teamimg/jinal.png',
        name: 'Jinal',
        content: 'HR',
        linkedin: 'https://www.linkedin.com/in/jinal-prajapati-09249425a/',
        description: 'Jinal manages our human resources with dedication, fostering a positive work culture and ensuring smooth operations across all HR functions.'
    },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
    return teamContent.find(member => member.slug === slug);
}
