"use client";

import React from "react";
import brand_img_1 from "@/assets/img/brand/brand-1.png";
import brand_img_2 from "@/assets/img/brand/brand-2.png";
import brand_img_3 from "@/assets/img/brand/brand-3.png";
import brand_img_4 from "@/assets/img/brand/brand-4.png";
import brand_img_5 from "@/assets/img/brand/brand-5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

const brand_images = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
];

interface styleType {
  dark_style?: boolean;
}
const BrandAreaHomeOne = ({ dark_style }: styleType) => {
  return (
    <>
      <div className={`tp-brand-area ${dark_style ? "black-bg" : ""}`}>
        <div className="container custom-container-4">
          <div className="tp-brand-wrap theme-bg">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-brand-wrapper">
                  <Swiper
                    speed={1000}
                    loop={true}
                    slidesPerView={5}
                    autoplay={true}
                    spaceBetween={30}
                    modules={[Autoplay]}
                    breakpoints={{
                      "1400": {
                        slidesPerView: 5,
                      },
                      "1200": {
                        slidesPerView: 5,
                      },
                      "992": {
                        slidesPerView: 4,
                      },
                      "768": {
                        slidesPerView: 3,
                      },
                      "576": {
                        slidesPerView: 2,
                      },
                      "0": {
                        slidesPerView: 1,
                      },
                    }}
                    className="swiper-container tp-brand-active"
                  >
                    {brand_images.map((item, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <div className="tp-brand-item text-center">
                          <Image src={item} alt="" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandAreaHomeOne;
