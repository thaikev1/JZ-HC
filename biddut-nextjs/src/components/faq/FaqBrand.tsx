

'use client'
import React from 'react';

import brand_1 from "@/assets/img/brand/brand-2-1.png";
import brand_2 from "@/assets/img/brand/brand-2-2.png";
import brand_3 from "@/assets/img/brand/brand-2-3.png";
import brand_4 from "@/assets/img/brand/brand-2-4.png";
import brand_5 from "@/assets/img/brand/brand-2-5.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

const brands = [
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
  brand_1,
  brand_2,
  brand_3,
  brand_4,
  brand_5,
]

const setting = {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 5,
  autoplay: true,
  spaceBetween: 30,
  breakpoints: {
    '1400': {
      slidesPerView: 5,
    },
    '1200': {
      slidesPerView: 5,
    },
    '992': {
      slidesPerView: 4,
    },
    '768': {
      slidesPerView: 3,
    },
    '576': {
      slidesPerView: 2,
    },
    '0': {
      slidesPerView: 1,
    },
  },
}

const FaqBrand = ({style_2} :any) => {
  return (
    <>
      <div className={`tp-brand-area ${style_2? 'pt-120' : 'pt-90'} pb-120`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-brand-wrapper">
                <Swiper {...setting} className="swiper-container tp-brand-active">
                  {brands.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-brand-2-item">
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
    </>
  );
};

export default FaqBrand;