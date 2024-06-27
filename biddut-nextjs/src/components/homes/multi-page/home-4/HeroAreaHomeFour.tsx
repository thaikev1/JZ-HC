
'use client'

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

interface DataType {
  img: string;
  subtitle: string;
  title: React.JSX.Element;
}

const slider_data: DataType[] = [
  {
    img: `assets/img/hero/slider-4-1.jpg`,
    subtitle: `READY FOR YOU ALWAYS GIVE YOU SERVICE`,
    title: <>Smart Charging <br />for Busy Veichales </>,
  },
  {
    img: `assets/img/hero/slider-4-2.jpg`,
    subtitle: `READY FOR YOU ALWAYS GIVE YOU SERVICE`,
    title: <>Smart Charging <br />for Busy Veichales </>,
  },
  {
    img: `assets/img/hero/slider-4-3.jpg`,
    subtitle: `READY FOR YOU ALWAYS GIVE YOU SERVICE`,
    title: <>Smart Charging <br />for Busy Veichales </>,
  },
]


const HeroAreaHomeFour = () => {
  return (
    <>
      <div className="tp-slider-4-area p-relative">
        <div className="tp-scroll-bottom-2 smooth">
          <a href="#feature-box"><i className="flaticon-arrow-down"></i> Go down</a>
        </div>
        <div className="tp-slider-4-wrapper p-relative">
          <div className="tp-slider-4-arrow-box">
            <button className="slider-prev">
              <i className="fal fa-angle-left"></i>
            </button>
            <button className="slider-next">
              <i className="fal fa-angle-right"></i>
            </button>
          </div>
          <Swiper
            speed={1000}
            loop={true}
            slidesPerView={1}
            autoplay={true}
            modules={[Autoplay, EffectFade, Navigation]}
            effect={'fade'}
            navigation={{
              nextEl: '.slider-prev',
              prevEl: '.slider-next',
            }}
            breakpoints={{
              '1600': {
                slidesPerView: 1,
              },
              '1400': {
                slidesPerView: 1,
              },
              '1200': {
                slidesPerView: 1,
              },
              '992': {
                slidesPerView: 1,
              },
              '768': {
                slidesPerView: 1,
              },
              '576': {
                slidesPerView: 1,
              },
              '0': {
                slidesPerView: 1,
              },
            }}

            className="swiper-container tp-slider-4-active">
            {slider_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="tp-slider-4-height">
                  <div className="tp-slider-4-bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="tp-slider-4-content text-center z-index-3">
                          <div className="tp-slider-4-title-box">
                            <span className="tp-slider-2-subtitle pb-5">{item.subtitle}</span>
                            <h1 className="tp-slider-3-title mb-55">{item.title}</h1>
                          </div>
                          <div className="tp-slider-4-button">
                            <Link className="tp-btn hover-2" href="/about"><span>Discover More</span></Link>
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

export default HeroAreaHomeFour;