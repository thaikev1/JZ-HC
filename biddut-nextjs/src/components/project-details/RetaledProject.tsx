'use client'

import React from 'react';

import project_img_1 from "@/assets/img/project/pro-1-1.jpg";
import project_img_2 from "@/assets/img/project/pro-1-2.jpg";
import project_img_3 from "@/assets/img/project/pro-1-3.jpg";
import project_img_4 from "@/assets/img/project/pro-1-4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image, { StaticImageData } from 'next/image';


interface DataType {
  delay: string;
  path: string;
  img: StaticImageData;
  category: string;
  title: string;
}

const project_data: DataType[] = [
  {
    delay: '.1s',
    path: `project`,
    img: project_img_1,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    delay: '.2s',
    path: `project`,
    img: project_img_2,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    delay: '.3s',
    path: `project`,
    img: project_img_3,
    category: `Repair`,
    title: `Industrial Solution`,
  },
  {
    delay: '.4s',
    path: `project`,
    img: project_img_4,
    category: `Repair`,
    title: `Data System Wiring`,
  },
  {
    delay: '.1s',
    path: `project`,
    img: project_img_1,
    category: `Repair`,
    title: `Electrical Repair`,
  },
  {
    delay: '.2s',
    path: `project`,
    img: project_img_2,
    category: `Repair`,
    title: `Inspections & Testing`,
  },
  {
    delay: '.3s',
    path: `project`,
    img: project_img_3,
    category: `Repair`,
    title: `Industrial Solution`,
  },
  {
    delay: '.4s',
    path: `project`,
    img: project_img_4,
    category: `Repair`,
    title: `Data System Wiring`,
  },
]

const setting = {
  // Optional parameters
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

const RetaledProject = () => {
  return (
    <>
      <div className="tp-project-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-project-section-box text-center mb-60">
                <h4 className="tp-section-title">Check related projects</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-project-wrapper">
                  <Swiper {...setting} className="swiper-container tp-project-details-active">
                    {project_data.map((item, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <div className="tp-project-item p-relative">
                          <div className="tp-project-thumb">
                            <Image src={item.img} alt="" />
                          </div>
                          <div className="tp-project-content">
                            <a href="#"><i className="flaticon-right-arrow"></i></a>
                            <span>{item.category}</span>
                            <h4 className="tp-project-title"><a href="#">{item.title}</a></h4>
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
    </>
  );
};

export default RetaledProject;