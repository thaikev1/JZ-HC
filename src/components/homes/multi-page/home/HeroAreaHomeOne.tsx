"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { scroller } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import slider_shape_1 from "@/assets/img/hero/shape-3-1.png";
import slider_shape_2 from "@/assets/img/hero/shape-3-2.png";
import slider_shape_3 from "@/assets/img/hero/shape-3-3.png";

interface DataType {
  img: string;
  title: string;
  description: string;
}

const hero_data: DataType[] = [
  {
    img: `/assets/img/hero/hero-3-1.png`,
    title: `Who We Are`,
    description: `JZ Heating and Cooling Solutions`,
  },
  {
    img: `/assets/img/hero/hero-3-2.png`,
    title: `Professional HVAC Services and Solutions`,
    description: `Professional Heating and Cooling Installations`,
  },
  {
    img: `/assets/img/hero/hero-3-3.png`,
    title: `Peace of Mind`,
    description: `Stay Comfortable Year-Round with Our HVAC Solutions`,
  },
];

const scrollTo = () => {
  scroller.scrollTo("feature-box", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const HeroAreaHomeOne = () => {
  return (
    <>
      <div className="tp-slider-3-area  black-bg p-relative">
        <div className="tp-scroll-bottom smooth d-none d-md-block">
          <a onClick={scrollTo} style={{ cursor: "pointer" }}>
            SCROLL DOWN
          </a>
        </div>
        <div className="tp-slider-3-wrapper fix p-relative">
          <div className="tp-slider-3-arrow-box">
            <button className="slider-prev active">
              <i className="fa-regular fa-arrow-left-long"></i>
            </button>
            <button className="slider-next">
              <i className="fa-regular fa-arrow-right-long"></i>
            </button>
          </div>
          <div className="tp-slider-dots dots-color"></div>
          <Swiper
            speed={1000}
            loop={true}
            slidesPerView={1}
            autoplay={true}
            effect="fade"
            modules={[Autoplay, EffectFade, Navigation, Pagination]}
            breakpoints={{
              "1600": {
                slidesPerView: 1,
              },
              "1400": {
                slidesPerView: 1,
              },
              "1200": {
                slidesPerView: 1,
              },
              "992": {
                slidesPerView: 1,
              },
              "768": {
                slidesPerView: 1,
              },
              "576": {
                slidesPerView: 1,
              },
              "0": {
                slidesPerView: 1,
              },
            }}
            navigation={{
              nextEl: ".slider-prev",
              prevEl: ".slider-next",
            }}
            pagination={{
              el: ".tp-slider-dots",
              clickable: true,
            }}
            className="swiper-container tp-slider-3-active"
          >
            <div className="tp-slider-3-shape-2 d-none d-sm-block">
              <Image src={slider_shape_2} alt="" />
            </div>
            <div className="tp-slider-3-shape-3 d-none d-md-block">
              <Image src={slider_shape_3} alt="" />
            </div>

            {hero_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="tp-slider-3-height p-relative">
                  <div className="tp-slider-3-shape-1 d-none d-xl-block">
                    <Image src={slider_shape_1} alt="" />
                  </div>
                  <div
                    className="tp-slider-3-bg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="tp-slider-3-content z-index-3">
                          <div className="tp-slider-3-title-box">
                            <span className="tp-slider-2-subtitle pb-5">
                              <i>{"//"}</i>
                              {item.title}
                            </span>
                            <h1
                              className="tp-slider-3-title mb-40"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></h1>
                          </div>
                          <div className="tp-slider-3-button">
                            <Link className="tp-btn hover-2" href="/about">
                              <span>Discover More</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroAreaHomeOne;
