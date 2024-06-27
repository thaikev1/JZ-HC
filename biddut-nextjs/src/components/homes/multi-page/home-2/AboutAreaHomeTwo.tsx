

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import shape_1 from "@/assets/img/about/shape-2-1.png";
import shape_2 from "@/assets/img/about/thumb-2-1.jpg";
import shape_3 from "@/assets/img/about/thumb-2-2.jpg";
import Count from '@/components/common/Count';

const about_content = {
  experience: `Years of experience`,
  subtitle: `WE ARE BIDDUT ELECTRIC COMPANY`,
  title: `Produce your own clean save the environment`,
  des: `Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.`,
  info: `We create experience and build products that make business grow`,
  feature: [
    `Full-service electrical layout `,
    `Wiring and installation`,
  ]
}
const {experience, subtitle, title, des, info, feature} = about_content

const AboutAreaHomeTwo = () => {
  return (
    <>
      <div id="about-one-page" className="tp-about-2-area pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
              <div className="tp-about-2-thumb-box p-relative">
                <div className="tp-about-2-shape-1 d-none d-xl-block">
                  <Image src={shape_1} alt="" />
                </div>
                <div className="tp-about-2-main-thumb z-index">
                  <Image src={shape_2} style={{height: 'auto'}} alt="" />
                </div>
                <div className="tp-about-2-thumb-sm">
                  <Image src={shape_3} style={{height: 'auto'}} alt="" />
                </div>
                <div className="tp-about-2-thumb-text d-none d-lg-block" style={{ backgroundImage: `url(/assets/img/about/bg-1.jpg)` }}>
                  <h6>
                    <i className="purecounter">
                    <Count number={35} />
                  </i>+</h6>
                  <span>{experience}</span>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-0 order-lg-1 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="tp-about-left-box tp-about-left-wrap">
                <div className="tp-about-section-box mb-15">
                  <span className="tp-section-subtitle"><i className="flaticon-flash"></i> {subtitle}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-about-text">
                  <p>{des}</p>
                  <span>{info}</span>
                  <div className="tp-about-icon-wrap p-relative d-flex justify-content-between mb-45">
                    <div className="tp-about-icon-box d-flex align-items-center mb-20">
                      <div className="tp-about-icon">
                        <span><i className="flaticon-electrician"></i></span>
                      </div>
                      <div className="tp-about-icon-text">
                        <h5>Expert <br /> electrician</h5>
                      </div>
                    </div>
                    <div className="tp-about-list mb-20">
                      <ul>
                        {feature.map((item, i) => (
                          <li key={i}><i className="fa-light fa-badge-check"></i>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link className="tp-btn" href="/about"><span>Discover More</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeTwo;