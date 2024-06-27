
'use client'
import React, { useState } from 'react';

import post_img_1 from "@/assets/img/blog/blog-details-1.jpg";
import post_img_2 from "@/assets/img/blog/blog-details-2.jpg";
import post_slider_1 from "@/assets/img/blog/blog-details-3.jpg";
import post_slider_2 from "@/assets/img/blog/blog-details-2.jpg";
import post_slider_3 from "@/assets/img/blog/blog-details-1.jpg";


import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { Navigation } from 'swiper/modules';
import VideoPopup from '@/modals/VideoPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from './Sidebar';


interface DataType {
  img_post?: boolean;
  slide_post?: boolean;
  video_post?: boolean;
  img: StaticImageData |  any;
  date: string;
  title: string;
  post_meta: string;
  description: string;

}


const blog_postbox_data: DataType[] = [
  {
    img_post: true,
    img: post_img_1,
    date: `April 02, 2024`,
    post_meta: `hixstudio _ Electrical`,
    title: `Development started the engineering`,
    description: `Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. So while electricity is so ingrained into our lives that we can take it for granted a notice there, if there’s an electrical problem, it can be difficult to notice`,
  },
  {
    slide_post: true,
    img: [post_slider_1, post_slider_2, post_slider_3,],
    date: `April 02, 2024`,
    post_meta: `hixstudio _ Electrical`,
    title: `Just because you work hard does not`,
    description: `Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. So while electricity is so ingrained into our lives that we can take it for granted a notice there, if there’s an electrical problem, it can be difficult to notice`,
  },
  {
    video_post: true,
    img: post_img_2,
    date: `April 02, 2024`,
    post_meta: `hixstudio _ Electrical`,
    title: `Commercial renovation no problem`,
    description: `Electricity is arguably the most valuable resource we have in our modern society. Without electricity, most of the things we do and rely on on a daily basis wouldn’t be there. So while electricity is so ingrained into our lives that we can take it for granted a notice there, if there’s an electrical problem, it can be difficult to notice`,
  },
]

const settign = {
  // Optional parameters
  speed: 1000,
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
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

  },
  // Navigation arrows
  navigation: {
    nextEl: '.postbox-arrow-prev',
    prevEl: '.postbox-arrow-next',
  },
}

const BlogPostbox = () => {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);



  return (
    <>
      <section className="postbox__area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8">
              <div className="postbox__wrapper-2">
                {blog_postbox_data.map((item, i) => (
                  <article key={i} className="postbox__item format-image mb-30 transition-3">
                    {item.img_post &&
                      <div className="postbox__thumb w-img">
                        <Link href="/blog-details">
                          <Image src={item.img} style={{height: 'auto'}} alt="" />
                        </Link>
                        <div className="postbox__thumb-text">
                          <span>{item.date}</span>
                        </div>
                      </div>
                    }
                    {item.slide_post &&
                      <div className="postbox__thumb w-img">
                        <div className="postbox__thumb-text">
                          <span>{item.date}</span>
                        </div>
                        <div className="postbox__thumb-slider p-relative">
                          <Swiper
                            {...settign}
                            modules={[Navigation]}
                            className="swiper-container postbox__thumb-slider-active">
                            {item?.img.map((sub_item: StaticImageData, index: any) => (
                              <SwiperSlide key={index} className="swiper-slide">
                                <Image src={sub_item} style={{height: 'auto'}} alt="" />
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="postbox__slider-arrow-wrap d-none d-sm-block">
                            <button className="postbox-arrow-next">
                              <i className="fa-sharp fa-regular fa-arrow-left"></i>
                            </button>
                            <button className="postbox-arrow-prev">
                              <i className="fa-sharp fa-regular fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    }
                    {item.video_post &&
                      <div className="postbox__thumb w-img">
                        <Link href="/blog-details">
                          <Image src={item.img} style={{height: 'auto'}} alt="" />
                        </Link>
                        <div className="postbox__play-btn">
                          <a className="popup-video pulse-btn"
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}><i className="fa-light fa-play"></i></a>
                        </div>
                      </div>
                    }

                    <div className="postbox__content">
                      <div className="postbox__meta">
                        <span>By {item.post_meta}</span>
                      </div>
                      <h3 className="postbox__title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                      <div className="postbox__text">
                        <p>{item.description}</p>
                      </div>
                      <div className="postbox__read-more">
                        <Link href="/blog-details" className="tp-btn-black"><span>read more</span></Link>
                      </div>
                    </div>
                  </article>

                ))}

                <div className="basic-pagination">
                  <nav>
                    <ul>
                      <li className="active">
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <Link href="/blog">2</Link>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <span className="current"><i className="fa-regular fa-arrow-right"></i></span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <Sidebar />

          </div>
        </div>
      </section>


      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"CHSnz0bCaUk"}
      />
      {/* video modal end */}

    </>
  );
};

export default BlogPostbox;