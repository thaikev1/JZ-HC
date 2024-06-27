
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';

import shape_1 from "@/assets/img/hero/bg-1-2.png";
import shape_2 from "@/assets/img/hero/bg-1-3.png";


interface DataType {
  img: string;
  description: React.JSX.Element;
  title: React.JSX.Element;
}

const hero_data: DataType[] = [
  {
    img: `/assets/img/hero/slider-1-1.jpg`,
    title: <>Electricity is <br /> really organized <br />just ligh<span>ting</span></>,
    description: <>Expert & Experienced Electricians for Residential to Commercialto services with 100% satisfaction guarantee</>,
  },
  {
    img: `/assets/img/hero/slider-1-2.jpg`,
    title: <>Electricity is <br /> really organized <br />just ligh<span>ting</span></>,
    description: <>Expert & Experienced Electricians for Residential to Commercialto services with 100% satisfaction guarantee</>,
  },
  {
    img: `/assets/img/hero/slider-1-3.jpg`,
    title: <>Electricity is <br /> really organized <br />just ligh<span>ting</span></>,
    description: <>Expert & Experienced Electricians for Residential to Commercialto services with 100% satisfaction guarantee</>,
  },
];




const HeroAreaHomeThree = () => {
  return (
    <>
      <div className="tp-slider-area z-index p-relative">
        <div className="tp-slider-arrow-box">
          <button className="slider-prev">
            <i className="fa-regular fa-arrow-left-long"></i>
          </button>
          <button className="slider-next active">
            <i className="fa-regular fa-arrow-right-long"></i>
          </button>
        </div>
        <div className="tp-slider-wrapper">
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
            className="swiper-container tp-slider-active">
            {hero_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="tp-slider-height tp-slider-overly">
                  <div className="tp-slider-shape-2 d-none d-xl-block">
                    <Image src={shape_1} alt="" />
                  </div>
                  <div className="tp-slider-shape-3 d-none d-md-block">
                    <Image src={shape_2} alt="" />
                  </div>
                  <div className="tp-slider-bg" style={{ backgroundImage: `url(${item.img})` }}></div>
                  <div className="container z-index-5">
                    <div className="row">
                      <div className="col-xl-8 col-lg-8">
                        <div className="tp-slider-content">
                          <div className="tp-slider-title-box">
                            <h1 className="tp-slider-title">{item.title}</h1>
                          </div>
                          <div className="tp-slider-text">
                            <p>{item.description}</p>
                            <Link className="tp-btn" href="/about"><span>Discover More</span></Link>
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

export default HeroAreaHomeThree;