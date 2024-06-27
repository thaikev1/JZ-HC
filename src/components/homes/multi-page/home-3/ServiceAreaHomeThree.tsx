
'use client'

import service_data from '@/data/service_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const services = service_data.filter(item => item.path === 'home_3')

import shape_1 from "@/assets/img/service/shape-1-3.png";
import shape_2 from "@/assets/img/service/shape-1-1.png";
import shape_3 from "@/assets/img/service/shape-1-2.png";

const ServiceAreaHomeThree = () => {
  return (
    <>
      <div id="services-one-page" className="tp-service-area tp-service-bg p-relative pt-120 pb-120" style={{ backgroundImage: `url(/assets/img/service/bg-1-1.png)` }}>
        <div className="tp-service-shape-2 d-none d-xxl-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="container">
          <div className="tp-service-wrap mb-50">
            <div className="row align-items-end">
              <div className="col-xl-6 col-lg-6 col-md-9">
                <div className="tp-service-section-box">
                  <span className="tp-section-subtitle"><i className="flaticon-flash"></i>OUR BIDDUT SERVICES</span>
                  <h4 className="tp-section-title">Outstanding residential & commercial services</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-3">
                <div className="tp-service-slider-arrow d-flex justify-content-start  justify-content-md-end">
                  <button className="test-next"><i className="far fa-arrow-left"></i></button>
                  <button className="test-prev active"><i className="far fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-wrapper">
                <Swiper
                  speed={1000}
                  loop={true}
                  slidesPerView={3}
                  spaceBetween={30}
                  modules={[Autoplay, Navigation]}
                  navigation={{
                    nextEl: '.test-prev',
                    prevEl: '.test-next',
                  }}
                  breakpoints={{
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
                      slidesPerView: 3,
                    },
                    '768': {
                      slidesPerView: 2,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    },
                  }}
                  className="swiper-container tp-service-active">
                  {services.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-service-item p-relative">
                        <div className="tp-service-thumb">
                          <Image src={item.img} style={{height: 'auto'}} alt="" />
                        </div>
                        <div className="tp-service-content-box">
                          <div className="tp-service-content fix">
                            <div className="tp-service-icon p-relative">
                              <span><i className={`flaticon-${item.icon}`}></i></span>
                              <div className="tp-service-icon-shape">
                                <Image src={shape_2}  alt="" />
                              </div>
                            </div>
                            <div className="tp-service-text" style={{ marginBottom: '5px' }}>
                              <h4 className="tp-service-title">
                                <Link href="/service-details">{item.title}</Link>
                              </h4>
                              <p>{item.description}</p>
                            </div>
                            <div className="tp-service-arrow">
                              <Link href="/service-details">Read More<i
                                className="flaticon-right-arrow"></i></Link>
                            </div>
                          </div>
                        </div>
                        <div className="tp-service-shape-1">
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

export default ServiceAreaHomeThree;