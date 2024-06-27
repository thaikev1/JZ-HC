

import team_data from '@/data/team_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const members = team_data.filter(item => item.path === 'home_3')

interface styleType {
  about_style?: boolean;
}

const TeamAreaHomeThree = ({ about_style }: styleType) => {
  return (
    <>
      <div id="team-one-page" className={`tp-team-area ${about_style ? 'pb-90' : 'pt-120 pb-120'}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-section-box text-center mb-60">
                <span className="tp-section-subtitle"><i className="flaticon-flash"></i>OUR EXPERT TEAM</span>
                <h4 className="tp-section-title">Meet our experienced <br />team people</h4>
              </div>
            </div>

            {members.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-team-item text-center">
                  <div className="tp-team-thumb-box p-relative">
                    <div className="tp-team-thumb">
                      <Image src={item.img} style={{ height: 'auto' }} alt="" />
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

            {about_style ? null :
              <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-team-text text-center">
                  <p>Contact Our Expert Team Memeber To Take Our <Link href="/team-details">Best Services</Link></p>
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default TeamAreaHomeThree;