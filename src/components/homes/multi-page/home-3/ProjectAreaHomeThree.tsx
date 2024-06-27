
'use client'

import React from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/project/shape-1-1.png";
import project_data from '@/data/project_data';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

const projects = project_data.filter(item => item.path === 'home_3')

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

const ProjectAreaHomeThree = () => {
  return (
    <>
      <div id="project-one-page" className="tp-project-area p-relative pt-120 pb-120">
        <div className="tp-project-shape-1 d-none d-xl-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-section-box text-center mb-60">
                <span className="tp-section-subtitle"><i className="flaticon-flash"></i>OUR SHOWCASE</span>
                <h4 className="tp-section-title">Check our latest projects</h4>
              </div>
            </div>
            <div className="tp-project-plr z-index">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-project-wrapper">
                    <Swiper {...setting} className="swiper-container tp-project-active">
                      {projects.map((item, i) => (
                        <SwiperSlide key={i} className="swiper-slide">
                          <div className="tp-project-item p-relative">
                            <div className="tp-project-thumb">
                              <Image src={item.img} alt="" />
                            </div>
                            <div className="tp-project-content">
                              <Link href="/project-details">
                                <i className="flaticon-right-arrow"></i>
                              </Link>
                              <span>Repair</span>
                              <h4 className="tp-project-title">
                                <Link href="/project-details">{item.title}</Link></h4>
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
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeThree;