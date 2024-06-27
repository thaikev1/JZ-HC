
'use client'

import React from 'react';
import Image from 'next/image';
import { Swiper , SwiperSlide} from 'swiper/react'; 
import testimonial_data from '@/data/testimonial_data';
const testimonials = testimonial_data.filter(item => item.path === "testimonial")

import test_img from "@/assets/img/testimonial/shape-3-1.png";

const setting = { 
  speed: 1000,
  loop: true,
  slidesPerView: 3,
  autoplay: true,
  spaceBetween: 30,
  breakpoints: {
    '1600': {
      slidesPerView: 3,
    },
    '1400': {
      slidesPerView: 3,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
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

const TestimonialArea = () => {
  return (
    <>
      <div className="tp-testimonial-3-area tp-testimonial-3-item-box pt-120 pb-150 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-testimonial-3-section-box z-index text-center mb-50">
                <span className="tp-section-subtitle"><span>{"//"}</span>OUR CLIENTS REVIEW</span>
                <h4 className="tp-section-title">What they are talking about <br />our biddut services</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-testimonial-3-wrapper">
                <Swiper {...setting} className="swiper-container tp-testimonial-3-active">
                  {testimonials.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-testimonial-3-item-wrap p-relative">
                        <div className="tp-testimonial-3-item p-relative text-center">
                          <div className="tp-testimonial-3-shape-1">
                            <Image src={test_img} alt="" />
                          </div>
                          <div className="tp-testimonial-3-avata">
                            <Image src={item.img} alt="" />
                          </div>
                          <div className="tp-testimonial-3-content z-index-5">
                            <div className="tp-testimonial-3-author-info pb-20">
                              <h5 className="tp-testimonial-3-title">{item.name}</h5>
                              <span>{item.designation}</span>
                            </div>
                            <div className="tp-testimonial-3-text pb-5">
                              <p>{item.description}</p>
                            </div>
                            <div className="tp-testimonial-3-star">
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
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

export default TestimonialArea;