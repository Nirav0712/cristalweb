import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TeamMember } from '../../data/teamData';

interface TeamDetailsProps {
  member: TeamMember;
}

const TeamDetails = ({ member }: TeamDetailsProps) => {
  return (
    <div>
      <div className="cs_height_120 cs_height_lg_80"></div>
      <div className="container">
        <div className="cs_team_details">
          <div className="cs_team_info_wrapper cs_radius_20">
            <div className="row align-items-center">
              <div className="col-md-5 wow fadeInLeft">
                <div className="cs_team_thumbnail cs_radius_15">
                  <img src={member.img} alt={member.name} width={390} height={491} style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col-md-7">
                <div className="cs_team_info">
                  <div className="cs_team_header cs_mb_26">
                    <div className="cs_team_heading">
                      <h3 className="cs_fs_40 cs_mb_8 wow fadeInDown">{member.name}</h3>
                      <p className="mb-0">{member.content}</p>
                    </div>
                    <div className="cs_social_btns cs_style_1 wow fadeInRight">
                      <a href={member.linkedin} className="cs_center cs_radius_50">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <p className="team_subtitle cs_mb_27">{member.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_height_60 cs_height_lg_40"></div>
          <h2 className="cs_fs_40 cs_mb_20">About {member.name}</h2>
          <p className="cs_mb_30">{member.description}</p>
          <Link href="/team" className="cs_btn cs_style_1 cs_bold cs_white_color">
            <span>Back to Team</span>
          </Link>
        </div>
      </div>
      <div className="cs_height_120 cs_height_lg_80"></div>
    </div>
  );
};

export default TeamDetails;