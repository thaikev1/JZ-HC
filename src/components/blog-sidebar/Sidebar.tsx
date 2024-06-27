
'use client'

import React from 'react';

import sidebar_1 from "@/assets/img/blog/blog-details-sm-1-2.jpg";
import sidebar_2 from "@/assets/img/blog/blog-details-sm-1-3.jpg";
import sidebar_3 from "@/assets/img/blog/blog-details-sm-1-4.jpg";
import Link from 'next/link';
import Image from 'next/image';


const sidebar_data = {
  widget_title: "Our Latest Post",
  recent_post: [
    {
      img: sidebar_1,
      title: <>Electricity is arguably the <br />most valuable resource</>,
      date: "October 14, 2024",
    },
    {
      img: sidebar_2,
      title: <>Our electrical repair know <br /> what a hassle</>,
      date: "October 14, 2024",
    },
    {
      img: sidebar_3,
      title: <>Without electricity, most <br /> the things we do</>,
      date: "October 14, 2024",
    },
  ],
  category_title: `Catagories`,
  category: [
    `Heating instalation`,
    `Lighting upgrade`,
    `Generator repair`,
    `Panel upgrade`,
    `Ceiling fan repair`,
    `Surge protection`,
  ],
  tag_title: `Tags`,
  tags: [
    `supply`,
    `chemical`,
    `repair`,
    `power & energy`,
    `electric`,
    `manufucture`,
    `current`,
  ]
}

const { widget_title, recent_post, category_title, category, tag_title, tags } = sidebar_data

const Sidebar = () => {
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4">
        <div className="sidebar__wrapper">
          <div className="sidebar__widget sidebar__widget-theme-bg mb-30">
            <div className="sidebar__widget-content">
              <div className="sidebar__search">
                <form onSubmit={e => e.preventDefault()}>
                  <div className="sidebar__search-input-2">
                    <input type="text" placeholder="Search here" />
                    <button type="submit"><i className="far fa-search"></i></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-30">
            <h3 className="sidebar__widget-title">{widget_title}</h3>
            <div className="sidebar__widget-content">
              <div className="sidebar__post">
                {recent_post.map((item, i) => (
                  <div key={i} className={`rc__post d-flex align-items-center ${i === 2 ? '' : 'mb-25'}`}>
                    <div className="rc__post-thumb mr-20">
                      <Link href="/blog-details">
                        <Image src={item.img} alt="" />
                      </Link>
                    </div>
                    <div className="rc__post-content">
                      <div className="rc__meta">
                        <span><i className="fa-light fa-clock"></i>{item.date} </span>
                      </div>
                      <h3 className="rc__post-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))} 
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-30">
            <h3 className="sidebar__widget-title">{category_title}</h3>
            <div className="sidebar__widget-content">
              <ul>
                {category.map((item, i) => (
                  <li key={i} className={i === 2 ? 'active' : ''}><Link href="#">{item} <span><i className="fa-sharp fa-solid fa-arrow-right"></i></span></Link></li>
                ))} 
              </ul>
            </div>
          </div>
          <div className="sidebar__widget mb-30">
            <h3 className="sidebar__widget-title">{tag_title}</h3>
            <div className="sidebar__widget-content">
              <div className="tagcloud">
                {tags.map((item, i) => (
                  <Link key={i} href="#">{item}</Link>
                ))} 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;