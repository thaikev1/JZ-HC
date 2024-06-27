
'use client'

import project_data from '@/data/project_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const projects = project_data.filter(item => item.path === 'home_4')


const ProjectAreaHomeFour = () => {
  return (
    <>
      <div id="project-one-page" className="tp-project-4-area fix pb-120">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-4-section-box text-center mb-60">
                <span className="tp-section-subtitle">OUR SHOWCASE</span>
                <h4 className="tp-section-title">Check our latest projects</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-project-4-wrapper">
                <Swiper
                  speed={1000}
                  loop={true}
                  slidesPerView={5}
                  autoplay={true}
                  spaceBetween={30}
                  modules={[Autoplay, Scrollbar]}
                  scrollbar={{
                    el: ".tp-scrollbar-2",
                  }}
                  breakpoints={{
                    '1600': {
                      slidesPerView: 5,
                    },
                    '1400': {
                      slidesPerView: 5,
                    },
                    '1200': {
                      slidesPerView: 4,
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

                  }}
                  className="swiper-container tp-project-4-active">
                  {projects.map((item, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <div className="tp-project-4-item">
                        <div className="tp-project-4-thumb">
                          <Image src={item.img} alt="" />
                        </div>
                        <div className="tp-project-4-content">
                          <span>{item.category}</span>
                          <h5 className="tp-project-4-title"><Link href="/project-details">{item.title}</Link></h5>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-scrollbar-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectAreaHomeFour;