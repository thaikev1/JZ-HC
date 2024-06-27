
import blog_data from '@/data/blog_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blogs = blog_data.filter(item => item.path === 'blog')

const BlogArea = () => {
  return (
    <>
      <div className="tp-blog-3-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            {blogs.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-blog-3-item">
                  <div className="tp-blog-3-thumb p-relative">
                    <Image src={item.img} style={{height: "auto"}} alt="" />
                    <div className="tp-blog-3-icon">
                      <Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link>
                    </div>
                  </div>
                  <div className="tp-blog-3-content text-center z-index">
                    <div className="tp-blog-meta pb-10">
                      <span><i className="fa-light fa-circle-user"></i>By {item.author}</span>
                      <span><i className="flaticon-price-tag"></i>{item.category}</span>
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

export default BlogArea;