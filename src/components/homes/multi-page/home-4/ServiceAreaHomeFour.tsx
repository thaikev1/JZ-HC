
'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import service_data from '@/data/service_data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';

import shape_1 from "@/assets/img/service/shape-4-1.png";

const service = service_data.filter(item => item.path === 'home_4')


const ServiceAreaHomeFour = () => {
  return (
    <>
      <div id="services-one-page" className="tp-service-4-area p-relative fix grey-bg pt-120 pb-120 z-index">
        <div className="tp-service-4-shape-1 d-none d-xxl-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="container">
          <div className="tp-service-4-top-box pb-70">
            <div className="row align-items-end">
              <div className="col-xl-6">
                <div className="tp-service-4-section-box">
                  <span className="tp-section-subtitle">OUR BIDDUT SERVICES</span>
                  <h4 className="tp-section-title">Sustainability is our <br />main advantage</h4>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="tp-service-4-right-box d-flex justify-content-lg-end">
                  <div className="tp-header-right-btn d-none d-md-block">
                    <Link className="tp-btn" href="/contact"><span>MAKE APPOINMENT</span></Link>
                  </div>
                  <div className="tp-header-right-tel-box d-none d-xxl-block">
                    <div className="tp-header-right-tel-icon d-flex align-items-center">
                      <i className="flaticon-phone-call"></i>
                      <div className="tp-header-right-tel-content">
                        <span>Talk to an expert </span>
                        <a href="tel:+997868765"><span>Free</span> +99 (786) 8765</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container-5">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-4-wrapper">
                <Swiper
                  speed={1000}
                  loop={true}
                  slidesPerView={3}
                  autoplay={true}
                  spaceBetween={30}
                  centeredSlides={true}
                  scrollbar={{
                    el: ".tp-scrollbar",
                  }}
                  modules={[Autoplay, Scrollbar]}
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
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    '768': {
                      slidesPerView: 2,
                      centeredSlides: false,
                    },
                    '576': {
                      slidesPerView: 1,
                    },
                    '0': {
                      slidesPerView: 1,
                    }
                  }}
                  className="swiper-container tp-service-4-active">
                  {service.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-service-4-item p-relative">
                        <div className="tp-service-4-item-bg">
                          <Image src={item.img} alt="" />
                        </div>
                        <div className="tp-service-4-content-wrap d-flex justify-content-between flex-column">
                          <div className="tp-service-4-text">
                            <p>{item.description}</p>
                            <h5 className="tp-service-4-title-1 title-transparent">{item.title}</h5>
                          </div>
                          <div className="tp-service-4-title-box d-flex justify-content-between align-items-end">
                            <h5 className="tp-service-4-title-2"><Link href="/service-details">{item.title}</Link></h5>
                            <h5 className="tp-service-4-title-3 title-transparent ">GO</h5>
                            <div className="tp-service-4-icon">
                              <Link href="/service-details"><i className="flaticon-right-arrow"></i></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeFour;