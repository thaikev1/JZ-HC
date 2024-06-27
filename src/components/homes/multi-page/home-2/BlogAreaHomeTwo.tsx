
'use client'

import blog_data from '@/data/blog_data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import shape_1 from "@/assets/img/blog/shape-1-1.png";
import shape_2 from "@/assets/img/blog/shape-1-2.png";
import shape_3 from "@/assets/img/blog/shape-1-3.png";

import ImagePopup from '@/modals/ImagePopup';
const blogs = blog_data.filter(item => item.path === 'home_2')

const BlogAreaHomeTwo = () => {


  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = blogs.map((item) => item.img.src);


  return (
    <>
      <div id="blog-one-page" className="tp-blog-area p-relative pt-120 pb-130">
        <div className="tp-blog-shape-1">
          <Image src={shape_3} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-section-box text-center mb-60">
                <span className="tp-section-subtitle"><i className="flaticon-flash"></i>OUR ARTICLE AND BLOG</span>
                <h4 className="tp-section-title">Latest news & articles <br />from the blog</h4>
              </div>
            </div>
            {blogs.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={`${item.delay}`}>
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb-wrap p-relative">
                    <div className="tp-blog-thumb-box p-relative">
                      <div className="tp-blog-thumb-main z-index-3 fix">
                        <Image src={item.img} style={{height:"auto"}} alt="" />
                      </div>
                      <div className="tp-blog-thumb-icon">
                        <a className="popup-image"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleImagePopup(i)}
                        >
                          <i className="fa-sharp fa-light fa-eye"></i>
                        </a>
                      </div>
                    </div>
                    <div className="tp-blog-thumb-shape-1">
                      <Image src={shape_1} alt="" />
                    </div>
                    <div className="tp-blog-thumb-shape-2">
                      <Image src={shape_2} alt="" />
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-meta">
                      <span><i className="fa-light fa-circle-user"></i>By {item.author}</span>
                      <span><i className="flaticon-price-tag"></i>{item.category}</span>
                    </div>
                    <h4 className="tp-blog-title"><Link href="/blog-details">{item.description}</Link></h4>
                    <div className="tp-blog-link d-flex justify-content-between align-items-center">
                      <Link href="/blog-details">Read More</Link>
                      <Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  );
};

export default BlogAreaHomeTwo;