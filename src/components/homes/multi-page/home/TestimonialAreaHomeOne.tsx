"use client";

import testimonial_data from "@/data/testimonial_data";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import testimonial_shape_1 from "@/assets/img/testimonial/shape-3-1.png";
import testimonial_shape_2 from "@/assets/img/testimonial/shape-3-2.png";
import testimonial_shape_3 from "@/assets/img/testimonial/shape-3-3.png";

import testimonial_shape_5_1 from "@/assets/img/testimonial/shape-5-1.png";
import testimonial_shape_5_2 from "@/assets/img/testimonial/shape-5-2.png";

const testimonials = testimonial_data.filter((item) => item.path === "home_1");

interface styleType {
  dark_style?: boolean;
}

const TestimonialAreaHomeOne = ({ dark_style }: styleType) => {
  const shape_1 = dark_style ? testimonial_shape_5_1 : testimonial_shape_2;
  const shape_2 = dark_style ? testimonial_shape_5_2 : testimonial_shape_3;

  return (
    <>
      <div
        id="testimonial-one-page"
        className={`tp-testimonial-3-area tp-testimonial-3-space p-relative fix ${
          dark_style ? "tp-black-mode tp-testimonial-3-bg black-bg" : "grey-bg"
        }`}
      >
        <div
          className={`tp-testimonial-3-shape-2 ${
            dark_style ? "" : "d-none d-xl-block"
          }`}
        >
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-testimonial-3-shape-3">
          <Image src={shape_2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-3-section-box z-index text-center mb-50">
                <span className="tp-section-subtitle">
                  <span>{"//"}</span>OUR CLIENTS REVIEW
                </span>
                <h4
                  className={`tp-section-title c${
                    dark_style ? " text-white" : ""
                  }`}
                >
                  What theyre talking about <br /> our biddut services
                </h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-testimonial-3-wrapper">
                <Swiper
                  speed={1000}
                  loop={true}
                  slidesPerView={3}
                  autoplay={true}
                  spaceBetween={30}
                  modules={[Autoplay]}
                  breakpoints={{
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
                      slidesPerView: 1,
                    },
                    "576": {
                      slidesPerView: 1,
                    },
                    "0": {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper-container tp-testimonial-3-active"
                >
                  {testimonials.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-testimonial-3-item-wrap p-relative">
                        <div className="tp-testimonial-3-item p-relative text-center">
                          <div className="tp-testimonial-3-shape-1">
                            <Image src={testimonial_shape_1} alt="" />
                          </div>
                          <div className="tp-testimonial-3-avata">
                            <Image src={item.img} alt="" />
                          </div>
                          <div className="tp-testimonial-3-content z-index-5">
                            <div className="tp-testimonial-3-author-info pb-20">
                              <h5 className="tp-testimonial-3-title">
                                {item.name}
                              </h5>
                              <span>{item.designation}</span>
                            </div>
                            <div className="tp-testimonial-3-text pb-5">
                              <p>{item.description}</p>
                            </div>
                            <div className="tp-testimonial-3-star">
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>{" "}
                              <i className="fas fa-star"></i>{" "}
                            </div>
                          </div>
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

export default TestimonialAreaHomeOne;
