"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Count from "@/components/common/Count";

import about_shape_1 from "@/assets/img/about/shape-3-1.png";
import about_shape_5_1 from "@/assets/img/about/shape-3-3.png";
import about_shape_2 from "@/assets/img/about/thumb-3-2.jpg";
import about_shape_3 from "@/assets/img/about/thumb-3-1.jpg";
import about_shape_4 from "@/assets/img/about/shape-1-3.png";
import about_shape_5 from "@/assets/img/about/shape-3-2.png";
import about_shape_6 from "@/assets/img/about/shape-1-6.png";
import about_shape_7 from "@/assets/img/about/shape-1-1.png";

import bg_img from "@/assets/img/about/bg-1.jpg";

interface DataType {
  count: number;
  experience: string;
  subtitle: string;
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
  }[];
  features_list: string[];
}

// about content 
const about_data: DataType = {
  count: 35,
  experience: `Years of experience`,
  subtitle: `WE ARE BIDDUT ELECTRIC COMPANY`,
  title: `Produce your own clean save the environment`,
  description: `Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus ipsum, sed rutrum metus tincidunt et. Sed eget tincidunt ipsum. Eget tincidunt`,
  features: [
    { icon: `electrician`, title: `Expert <br /> electrician` },
    { icon: `plug`, title: `Safety <br />assurance` },
  ],
  features_list: [
    `At vero eos et accusamus et iusto odio.`,
    `Sed ut perspiciatis unde omnis iste natus sit. `,
    `Established fact that a reader will be distracted. `,
  ],
};

const {
  count,
  experience,
  subtitle,
  title,
  description,
  features,
  features_list,
} = about_data;

interface styleType {
  dark_style?: boolean;
  about_style?: boolean;
}

const AboutAreaHomeOne = ({ dark_style, about_style }: styleType) => {

  const shape = dark_style ? about_shape_5_1 : about_shape_1;
  return (
    <>
      <div
        id="about-one-page"
        className={`tp-about-area p-relative pt-120 pb-120 ${
          dark_style ? "tp-black-mode black-bg" : ""
        }`}
      >
        {about_style ? null : (
          <div className="tp-about-shape-5 d-none d-xl-block">
            <Image src={shape} alt="" />
          </div>
        )}
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="tp-about-right-box text-end tp-about-right-wrap p-relative">
                <div
                  className="tp-about-2-thumb-text text-start d-none d-lg-block"
                  style={{ backgroundImage: `url(assets/img/about/bg-1.jpg)` }}
                >
                  <h6>
                    <i className="purecounter">
                      <Count number={count} />
                    </i>
                    +
                  </h6>
                  <span>{experience}</span>
                </div>
                <div className="tp-about-main-thumb">
                  <Image src={about_shape_2} alt="" />
                </div>
                <div className="tp-about-thumb-sm">
                  <Image src={about_shape_3} alt="" />
                </div>
                <div className="tp-about-shape-2  d-none d-lg-block">
                  <Image src={about_shape_4} alt="" />
                </div>
                <div className="tp-about-shape-6 d-none d-xl-block">
                  <Image src={about_shape_5} alt="" />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-about-left-box tp-about-ml">
                <div className="tp-about-section-box mb-15">
                  <span className="tp-section-subtitle">
                    <span>{"//"}</span>
                    {subtitle}
                  </span>
                  <h4
                    className={`tp-section-title ${
                      dark_style ? "text-white" : ""
                    }`}
                  >
                    {title}
                  </h4>
                </div>
                <div className="tp-about-text">
                  <p className="pb-15">{description}</p>
                  <div className="tp-about-icon-wrap p-relative d-flex justify-content-between mb-40">
                    <div className="tp-about-icon-shape d-none d-xl-block">
                      <Image src={about_shape_6} alt="" />
                    </div>
                    {features.map((item, i) => (
                      <div
                        key={i}
                        className="tp-about-icon-box d-flex align-items-center mb-20"
                      >
                        <div className="tp-about-icon icon-color">
                          <span>
                            <i className={`flaticon-${item.icon}`}></i>
                          </span>
                        </div>
                        <div className="tp-about-icon-text">
                          <h5
                            className={`${dark_style ? "text-white" : ""}`}
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h5>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tp-about-list mb-45">
                    <ul>
                      {features_list.map((item, i) => (
                        <li key={i}>
                          <i className="fa-light fa-badge-check"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-about-button-box d-flex align-items-center">
                    <Link className="tp-btn-black" href="/about">
                      <span>KNOW MORE</span>
                    </Link>
                    <Image src={about_shape_7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeOne;




