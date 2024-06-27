"use client";

import Image from "next/image";
import React from "react";

import shape_img from "@/assets/img/choose/shape-3-1.png";

interface DataType {
  emmergency: string;
  phone: string;
  subtitle: string;
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
  }[];
}

const choose_content: DataType = {
  emmergency: "For emmergency",
  phone: `+999 345 6423 4297`,
  subtitle: "WHY CHOOSE OUR BIDDUT",
  title: `Great reason for the people <br />choose our biddut`,
  description: `For more than a decade, we have been building the fueling network of the future. We have delivered more places to charge than anyone else, and people count on us for charging systemtic`,
  features: [
    { icon: `battery`, title: `Custom support` },
    { icon: `electrician-1`, title: `Insured expert` },
    { icon: `price-tag`, title: `Flat rate` },
    { icon: `service`, title: `24/7 Available` },
  ],
};

const { emmergency, phone, subtitle, title, description, features } =
  choose_content;

interface styleType {
  dark_style?: boolean;
  about_style?: boolean;
}

const ChooseAreaHomeOne = ({ dark_style, about_style }: styleType) => {
  return (
    <>
      <div
        className={`tp-choose-3-area p-relative black-bg-2 pt-120 pb-70 ${
          dark_style ? "tp-choose-3-wrap tp-black-mode" : ""
        }`}
        style={{
          backgroundImage: `url(${
            dark_style ? "/assets/img/service/bg-3.jpg" : null
          })`,
        }}
      >
        <div
          className="tp-choose-3-bg"
          style={{ backgroundImage: `url(/assets/img/choose/bg-3-1.jpg)` }}
        >
          {about_style ? (
            <div className="tp-choose-3-shape d-none d-lg-block">
              <Image src={shape_img} alt="" />
            </div>
          ) : null}
          <div className="tp-choose-3-text d-none d-lg-block">
            <span>{emmergency}</span>
            <a href={`tel:${phone}`}>{phone}</a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 offset-lg-6 offset-xl-6  wow tpfadeRight"
              data-wow-duration=".9s"
              data-wow-delay=".7s"
            >
              <div className="tp-choose-content tp-choose-item-wrap z-index">
                <div className="tp-choose-section-box mb-30">
                  <span className="tp-section-subtitle text-color">
                    <span>{"//"}</span>
                    {subtitle}
                  </span>
                  <h4
                    className="tp-section-title text-white"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></h4>
                </div>
                <div className="tp-choose-text mb-50">
                  <p>{description}</p>
                </div>
                <div className="tp-choose-wrap">
                  <div className="row">
                    {features.map((item, i) => (
                      <div className="col-xl-6 col-lg-6 col-md-6 mb-20" key={i}>
                        <div className="tp-choose-item d-flex align-items-center">
                          <span>
                            <i className={`flaticon-${item.icon}`}></i>
                          </span>
                          <h5 className="tp-choose-item-title">{item.title}</h5>
                        </div>
                      </div>
                    ))}
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

export default ChooseAreaHomeOne;
