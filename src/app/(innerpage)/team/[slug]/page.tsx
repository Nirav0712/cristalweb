import React from 'react';
import BreadCumb from '../../../Components/Common/BreadCumb';
import TeamDetails from '../../../Components/TeamDetails/TeamDetails';
import { getTeamMemberBySlug, teamContent } from '../../../data/teamData';
import { notFound } from 'next/navigation';

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

    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title={teamMember.name}
            ></BreadCumb>
            <TeamDetails member={teamMember} />
        </div>
    );
};

export default page;
