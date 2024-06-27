
'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonial_data from '@/data/testimonial_data';

import shape_1 from "@/assets/img/testimonial/shape-1-1.png";
import shape_2 from "@/assets/img/testimonial/shape-1-2.png";
import shape_3 from "@/assets/img/testimonial/shape-1-3.png";


const testimonials = testimonial_data.filter(item => item.path === 'home_3')

const setting = {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 2,
  autoplay: true,
  spaceBetween: 30,
  breakpoints: {
    '1600': {
      slidesPerView: 2,
    },
    '1400': {
      slidesPerView: 2,
    },
    '1200': {
      slidesPerView: 2,
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
  },
}

const TestimonialAreaHomeThree = () => {
  return (
    <>
      <div className="tp-testimonial-area p-relative fix grey-bg pt-120 pb-120">
        <div className="tp-testimonial-shape-1">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-testimonial-shape-2 d-none d-xl-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-section-box z-index text-center mb-60">
                <span className="tp-section-subtitle"><i className="flaticon-flash"></i>OUR CLIENTS REVIEW</span>
                <h4 className="tp-section-title">What they are talking about <br />our biddut services</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-testimonial-wrapper">
                <Swiper {...setting} className="swiper-container tp-testimonial-active">
                  {testimonials.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-testimonial-item z-index p-relative">
                        <div className="tp-testimonial-thumb">
                          <Image src={item.img} alt="" />
                          <div className="tp-testimonial-thumb-quot">
                            <span><i className="flaticon-quote"></i></span>
                          </div>
                        </div>
                        <div className="tp-testimonial-text">
                          <p>{item.description}</p>
                        </div>
                        <div
                          className="tp-testimonial-author-box d-flex align-items-center justify-content-between">
                          <div className="tp-testimonial-author-info">
                            <h6 className="tp-testimonial-author-name">{item.name}</h6>
                            <span>{item.designation}</span>
                          </div>
                          <div className="tp-testimonial-star d-none d-sm-block">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="tp-testimonial-shape-3">
                          <Image src={shape_3} alt="" />
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

export default TestimonialAreaHomeThree;