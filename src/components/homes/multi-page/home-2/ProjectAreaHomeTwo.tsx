
'use client'

import React from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/project/shape-2-1.png";
import shape_2 from "@/assets/img/project/shape-2-2.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import project_data from '@/data/project_data';
import Link from 'next/link';

const setting = {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 4,
  autoplay: true,
  spaceBetween: 30,
  breakpoints: {
    '1600': {
      slidesPerView: 4,
    },
    '1400': {
      slidesPerView: 4,
    },
    '1200': {
      slidesPerView: 3,
    },
    '992': {
      slidesPerView: 2,
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
  },
}

const projects = project_data.filter(item => item.path === 'home_2')


const ProjectAreaHomeTwo = () => {
  return (
    <>
      <div id="project-one-page" className="tp-project-2-area fix p-relative grey-bg pt-120 pb-120">
        <div className="tp-project-2-shape-1 d-none d-xl-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-project-2-shape-2 d-none d-xl-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="container custom-container-1">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-2-section-box text-center mb-50">
                <span className="tp-section-subtitle">OUR SHOWCASE</span>
                <h4 className="tp-section-title">Check our latest projects</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-project-2-wrapper">
                <Swiper {...setting} className="swiper-container tp-project-active">
                  {projects.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-project-2-item fix p-relative">
                        <div className="tp-project-2-main-thumb">
                          <Image src={item.img} style={{ height: 'auto' }} alt="" />
                        </div>
                        <div className="tp-project-2-thumb-text">
                          <span>{item.category}</span>
                          <h5 className="tp-project-2-title">
                            <Link href="/project-details">{item.title}</Link>
                          </h5>
                          <div className="tp-project-2-thumb-icon">
                            <Link href="/project-details"><i className="flaticon-right-arrow"></i></Link>
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

export default ProjectAreaHomeTwo;