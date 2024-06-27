"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import team_data from "@/data/team_data";
import { Swiper, SwiperSlide } from "swiper/react";

import team_shape_1 from "@/assets/img/team/shape-3-1.png";
import team_shape_2 from "@/assets/img/team/shape-3-2.png";

const members = team_data.filter((item) => item.path === "home_1");

const setting = {
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  autoplay: false,
  spaceBetween: 45,
  breakpoints: {
    "1600": {
      slidesPerView: 3,
    },
    "1400": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 3,
    },
    "992": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 2,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
};

interface styleType {
  dark_style?: boolean;
}

const TeamAreaHomeOne = ({ dark_style }: styleType) => {
  return (
    <>
      <div
        id="team-one-page"
        className={`tp-team-3-area fix pt-120  ${
          dark_style ? "tp-black-mode black-bg pb-90" : "pb-120"
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-3-section-box z-index text-center mb-50">
                <span className="tp-section-subtitle">
                  <span>{"//"}</span>OUR EXPERT TEAM
                </span>
                <h4
                  className={`tp-section-title ${
                    dark_style ? "text-white" : ""
                  }`}
                >
                  Meet our experienced <br />
                  team people
                </h4>
              </div>
              <div className="tp-team-3-wrapper">
                <Swiper
                  {...setting}
                  className="swiper-container tp-team-3-active"
                >
                  {members.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-team-3-item text-center p-relative">
                        <div className="tp-team-3-thumb p-relative">
                          <Image src={item.img} alt="" />
                          <div className="tp-team-3-social-box">
                            <button>
                              <i className="fas fa-share-alt"></i>
                            </button>
                            <div className="tp-team-3-social">
                              <a target="_blank" href="https://linkedin.com">
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                              <a target="_blank" href="https://instagram.com">
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                              <a target="_blank" href="https://facebook.com">
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                            </div>
                          </div>
                          <div className="tp-team-3-thumb-shape-1">
                            <Image src={team_shape_1} alt="" />
                          </div>
                          <div className="tp-team-3-thumb-shape-2">
                            <Image src={team_shape_2} alt="" />
                          </div>
                        </div>
                        <div className="tp-team-3-text">
                          <h5 className="tp-team-3-title">
                            <Link href="/team-details">{item.designation}</Link>
                          </h5>
                          <span>{item.name}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamAreaHomeOne;
