"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero_shape from "@/assets/img/hero/shape-2-3.png";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import shape_1 from "@/assets/img/hero/shape-2-1.png";
import shape_2 from "@/assets/img/hero/shape-2-2.png";
import VideoPopup from "@/modals/VideoPopup";


interface DataType {
  img: string;
  subtitle: string;
  title: string;
}

const hero_data:DataType[] = [
  {
    img: `/assets/img/hero/slider-2-1.jpg`,
    subtitle: `WE ARE BEST ELECTRIC SERVICE COMPANY`,
    title: `Fast & Reliable <br />Electric Services`,
  },
  {
    img: `/assets/img/hero/slider-2-2.jpg`,
    subtitle: `WE ARE BEST ELECTRIC SERVICE COMPANY`,
    title: `Fast & Reliable <br />Electric Services`,
  },
  {
    img: `/assets/img/hero/slider-2-3.jpg`,
    subtitle: `WE ARE BEST ELECTRIC SERVICE COMPANY`,
    title: `Fast & Reliable <br />Electric Services`,
  },
];

const HeroAreaHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div className="tp-slider-2-area p-relative">
        <div className="tp-slider-2-shape-3">
          <Image src={hero_shape} alt="" />
        </div>
        <div className="tp-slider-2-wrapper p-relative">
          <div className="tp-slider-2-arrow-box">
            <button className="slider-next">
              <i className="fa-regular fa-arrow-right-long"></i>
            </button>
            <button className="slider-prev active">
              <i className="fa-regular fa-arrow-left-long"></i>
            </button>
          </div>
          <div className="tp-slider-dots"></div>
          <Swiper
            speed={1000}
            loop={true}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay, EffectFade, Navigation]}
            effect={"fade"}
            navigation={{
              nextEl: ".slider-prev",
              prevEl: ".slider-next",
            }}
            pagination={{
              el: ".tp-slider-dots",
              clickable: true,
            }}
            className="swiper-container tp-slider-2-active"
          >
            {hero_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="tp-slider-2-height p-relative">
                  <div className="tp-slider-2-shape-1">
                    <Image src={shape_1} alt="" />
                  </div>
                  <div className="tp-slider-2-shape-2 d-none d-xl-block">
                    <Image src={shape_2} alt="" />
                  </div>
                  <div
                    className="tp-slider-2-bg"
                    style={{ backgroundImage: `url(${item.img})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="tp-slider-2-content z-index-3">
                          <div className="tp-slider-2-title-box">
                            <span className="tp-slider-2-subtitle">
                              {item.subtitle}
                            </span>
                            <h1
                              className="tp-slider-2-title mb-40"
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            ></h1>
                          </div>
                          <div className="tp-slider-2-play-box d-flex align-items-center">
                            <Link className="tp-btn hover-2" href="/about">
                              <span>Discover More</span>
                            </Link>
                            <div className="tp-slider-2-play-icon d-flex align-items-center">
                              <a
                                onClick={() => setIsVideoOpen(true)}
                                style={{ cursor: "pointer" }}
                              >
                                <i className="fas fa-play"></i>
                              </a>
                              <div className="tp-slider-2-play-text">
                                <span>
                                  Watch Our <br />
                                  Showcase
                                </span>
                              </div>
                            </div>
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

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"CHSnz0bCaUk"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroAreaHomeTwo;
