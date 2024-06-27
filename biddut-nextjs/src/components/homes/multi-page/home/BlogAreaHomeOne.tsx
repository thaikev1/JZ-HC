"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import blog_data from "@/data/blog_data";

interface styleType {
  dark_style?: boolean;
}

const BlogAreaHomeOne = ({ dark_style }: styleType) => {
  const blogs = blog_data.filter((item) => item.path === "home_1");

  return (
    <>
      <div
        id="blog-one-page"
        className={`tp-blog-3-area pt-120 pb-90 ${
          dark_style ? "tp-black-mode black-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-blog-3-section-box text-center mb-50">
                <span className="tp-section-subtitle">
                  <span>{"//"}</span>OUR ARTICLE AND BLOG
                </span>
                <h4
                  className={`tp-section-title ${
                    dark_style ? "text-white" : ""
                  }`}
                >
                  Latest news & articles <br />
                  from the blog
                </h4>
              </div>
            </div>
            {blogs.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div className="tp-blog-3-item">
                  <div className="tp-blog-3-thumb p-relative">
                    <Image src={item.img} style={{ height: "auto" }} alt="" />
                    <div className="tp-blog-3-icon">
                      <Link href="/blog-details">
                        <i className="flaticon-right-arrow"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="tp-blog-3-content text-center z-index">
                    <div className="tp-blog-meta pb-10">
                      <span>
                        <i className="fa-light fa-circle-user"></i>By{" "}
                        {item.author}
                      </span>
                      <span>
                        <i className="flaticon-price-tag"></i>
                        {item.category}
                      </span>
                    </div>
                    <h4 className="tp-blog-3-title">
                      <Link href="/blog-details">{item.description}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogAreaHomeOne;
