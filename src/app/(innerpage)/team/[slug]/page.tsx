import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import TeamDetails from '../../../Components/TeamDetails/TeamDetails';
import { getTeamMemberBySlug, teamContent } from '../../../data/teamData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import JsonLd from '../../../Components/SEO/JsonLd';
import { getBreadcrumbSchema, getPersonSchema } from '@/lib/seo/schemas';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const teamMember = getTeamMemberBySlug(slug);

    if (!teamMember) {
        return {
            title: 'Team Member Not Found',
            description: 'The requested team member could not be found.'
        };
    }

    return {
        title: `${teamMember.name} - ${teamMember.content}`,
        description: `Meet ${teamMember.name}, ${teamMember.content} at The Crystal Engage. ${teamMember.description || ''}`,
        openGraph: {
            title: `${teamMember.name} | The Crystal Engage`,
            description: `${teamMember.content} at The Crystal Engage`,
            url: `https://thecrystalengage.com/team/${slug}`,
            type: 'profile'
        }
    };
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return teamContent.map((member) => ({
        slug: member.slug,
    }));
}

const page = async ({ params }: PageProps) => {
    const { slug } = await params;
    const teamMember = getTeamMemberBySlug(slug);

    if (!teamMember) {
        notFound();
    }

    const breadcrumbSchema = getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Team', url: '/team' },
        { name: teamMember.name, url: `/team/${slug}` }
    ]);

    const personSchema = getPersonSchema({
        name: teamMember.name,
        jobTitle: teamMember.content,
        description: teamMember.description,
        image: teamMember.img,
        url: `/team/${slug}`
    });

    return (
        <div>
            <JsonLd data={[breadcrumbSchema, personSchema]} />
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title={teamMember.name}
            ></BreadCumb>
            <TeamDetails member={teamMember} />
        </div>
    );
};

export default page;
