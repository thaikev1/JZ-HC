

import team_data from '@/data/team_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const team_members = team_data.filter(item => item.path === 'home_3' || item.path === 'team')

const TeamArea = () => {
  return (
    <>
      <div className="tp-team-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {team_members.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-team-item text-center">
                  <div className="tp-team-thumb-box p-relative">
                    <div className="tp-team-thumb">
                      <Image src={item.img} style={{height: 'auto'}} alt="" />
                    </div>
                    <div className="tp-team-social-wrap">
                      <span><i className="fa-solid fa-share-nodes"></i></span>
                      <div className="tp-team-social-box">
                        <a target="_blank" href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                        <a target="_blank" href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                        <a target="_blank" href="https://linkedin.com"><i className="fa-brands fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title">
                      <Link href="/team-details">{item.name}</Link></h4>
                    <span>{item.designation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamArea;