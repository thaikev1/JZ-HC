

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import shape_1 from "@/assets/img/about/shape-1-4.png";
import shape_2 from "@/assets/img/about/shape-1-5.png";
import shape_3 from "@/assets/img/about/shape-1-1.png";
import shape_4 from "@/assets/img/about/shape-1-2.png";
import shape_5 from "@/assets/img/about/shape-1-3.png";
import shape_6 from "@/assets/img/about/shape-1-6.png";

import thumb_1 from "@/assets/img/about/thumb-1-1.jpg";
import thumb_2 from "@/assets/img/about/thumb-1-2.jpg";


interface DataType {
  subtitle: string;
  title: string;
  description: string;
  info: string;
  features: {
      icon: string;
      title: React.JSX.Element;
  }[];
}

const about_content: DataType = {
  subtitle: `WE ARE BIDDUT ELECTRIC COMPANY`,
  title: `Produce your own clean save the environment`,
  description: `Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum.`,
  info: `We create experience and build products that make business grow`,
  features: [
    {
      icon: `electrician`,
      title: <>Expert <br /> electrician</>,
    },
    {
      icon: `plug`,
      title: <>Safety <br />assurance</>,
    },
  ]
}

const { subtitle, title, description, info, features } = about_content

const AboutAreaHomeThree = () => {
  return (
    <>
      <div id="about-one-page" className="tp-about-area p-relative pt-120 pb-120">
        <div className="tp-about-shape-3">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-about-shape-4 d-none d-xl-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="tp-about-left-box">
                <div className="tp-about-section-box mb-15">
                  <span className="tp-section-subtitle"><i className="flaticon-flash"></i>{subtitle}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-about-text">
                  <p>{description}</p>
                  <span>{info}</span>
                  <div className="tp-about-icon-wrap p-relative d-flex justify-content-between mb-45">
                    <div className="tp-about-icon-shape d-none d-xl-block">
                      <Image src={shape_6} alt="" />
                    </div>
                    {features.map((item, i) => (
                      <div key={i} className="tp-about-icon-box d-flex align-items-center mb-20">
                        <div className="tp-about-icon">
                          <span><i className={`flaticon-${item.icon}`}></i></span>
                        </div>
                        <div className="tp-about-icon-text">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tp-about-button-box d-flex align-items-center">
                    <Link className="tp-btn-black" href="/about"><span>KNOW MORE</span></Link>
                    <Image src={shape_3} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="tp-about-right-box p-relative text-end">
                <div className="tp-about-main-thumb">
                  <Image src={thumb_1} style={{height: 'auto'}} alt="" />
                </div>
                <div className="tp-about-thumb-sm">
                  <Image src={thumb_2} style={{height: 'auto'}} alt="" /> 
                </div>
                <div className="tp-about-shape-1 d-none d-lg-block">
                  <Image src={shape_4} alt="" /> 
                </div>
                <div className="tp-about-shape-2  d-none d-lg-block">
                  <Image src={shape_5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeThree;