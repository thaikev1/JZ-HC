
'use client'

import React from 'react';
import Sidebar from '../blog-sidebar/Sidebar';

const BlogDetailsArea = () => {
  return (
    <>
      <section className="postbox__area pt-120 pb-70">
        <div className="container">
          <div className="row">

            <div className="col-xxl-8 col-xl-8 col-lg-8 mb-50">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__thumb p-relative m-img">
                    <div className="postbox__thumb-text-2 d-none d-md-block">
                      <span>08 April</span>
                    </div>
                    <img src="assets/img/blog/blog-details-1-1.jpg" alt="" />
                  </div>
                  <div className="postbox__content mb-70">
                    <div className="postbox__meta-box d-flex justify-content-between align-items-center">
                      <div className="postbox__meta">
                        <span><i className="fa-light fa-user"></i>By Jothi</span>
                        <span><a href="#"><i className="fa-light fa-tag tag"></i>Solution</a></span>
                        <span><a href="#"><i className="fa-sharp fa-light fa-comments"></i>02 Comments</a></span>
                      </div>
                      <div className="postbox__meta d-none d-sm-block">
                        <span><i className="fa-sharp fa-light fa-heart"></i>8</span>
                      </div>
                    </div>
                    <h3 className="postbox__title">What is a soul? It is like electricity</h3>
                    <div className="postbox__text">
                      <p>There are many variations of passages of Lorem Ipsum available, but majority have
                        suffered alteration in some form, by injected humour, or randomised words which do not
                        look even slightly believable. If you are going to use a passage of Lorem Ipsum. There
                        are many variations of passages of Lorem Ipsum available, but majority have suffered
                        alteration in some form, by injected humour, or randomised words which do not look even
                        slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                      <p className="mb-20"> Suspendisse ultricies vestibulum vehicula. Proin laoreet porttitor lacus. Duis auctor
                        vel ex eu elementum. Fusce eu volutpat felis. Proin sed eros tincidunt, sagittis sapien
                        eu, porta diam. Aenean finibus scelerisque nulla non facilisis. Fusce vel orci sed quam
                        gravid</p>

                      <div className="postbox__content pb-20">
                        <div className="postbox__content-thumb mb-50 d-flex justify-content-between">
                          <img src="assets/img/blog/Details-1-1.jpg" alt="" />
                          <img src="assets/img/blog/Details-1-2.jpg" alt="" />
                        </div>
                        <div className="postbox__text pb-20">
                          <h4 className="postbox__title">Our Personal Approach</h4>
                          <p>Aliquam condimentum, massa vel mollis volutpat, erat sem pharetra quam, ac mattis arcu elit non massa. Nam mollis nunc velit, vel varius arcu fringilla tristique. Cras elit nunc, sagittis eu bibendum eu, ultrices placerat sem. Praesent vitae metus auctor.</p>
                        </div>
                      </div>

                      <div
                        className="postbox__blockquote pb-10 p-relative d-flex justify-content-between align-items-start">
                        <blockquote>
                          <p>And the day came when the risk to remain tight in <br />
                            a bud was more painful than the risk.</p>
                          <cite>- Harry Newman</cite>
                        </blockquote>
                        <div className="postbox__blockquote-shape d-none d-xl-block">
                          <img src="assets/img/blog/quote.png" alt="" />
                        </div>
                      </div>
                      <div className="postbox__thumb m-img p-relative">
                        <div className="postbox__details-share-wrapper">
                          <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-6">
                              <div className="postbox__details-tag tagcloud">
                                <span>Tag:</span>
                                <a href="#">Electricity</a>
                                <a href="#">Biddut</a>
                                <a href="#">Air</a>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-6">
                              <div className="postbox__details-share text-lg-end">
                                <span>Share:</span>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                <a href="#"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__author black-bg d-sm-flex align-items-start white-bg mb-50">
                    <div className="postbox__author-thumb">
                      <a href="#">
                        <img src="assets/img/blog/author-1-3.png" alt="" />
                      </a>
                    </div>
                    <div className="postbox__author-content">
                      <h3 className="postbox__author-title">
                        <a href="#">About Harry Newman</a>
                      </h3>
                      <p>Supported substance consolidates parts of web promoting <br /> and substance showcasing. It includes making</p>

                      <div className="postbox__author-social d-flex align-items-center">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__comment mb-50">
                    <h3 className="postbox__title">02 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box p-relative">
                          <div className="postbox__comment-info d-flex align-items-start">
                            <div className="postbox__comment-avater mr-40">
                              <img src="assets/img/blog/author-1-1.png" alt="" />
                            </div>
                            <div className="postbox__comment-name p-relative">
                              <h5>Mithcel Adnan</h5>
                              <div className="postbox__comment-text">
                                <p>Curabitur luctus nisl in justo maximus egestas. Curabitur sit amet sapien <br /> vel nunc molestie pulvinar at vitae quam. Aliquam lobortis nisi vitae <br /> congue consectetur. Aliquam et quam non metus </p>
                                <div className="postbox__comment-reply">
                                  <a href="#"><i className="fa-regular fa-arrow-turn-down-left"></i>Reply</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="postbox__comment-box p-relative">
                          <div className="postbox__comment-info d-flex align-items-start">
                            <div className="postbox__comment-avater mr-40">
                              <img src="assets/img/blog/author-1-2.png" alt="" />
                            </div>
                            <div className="postbox__comment-name p-relative">
                              <h5>Liza Olivarez</h5>
                              <div className="postbox__comment-text">
                                <p>Curabitur luctus nisl in justo maximus egestas. Curabitur sit <br />
                                  amet sapien vel nunc molestie pulvinar at vitae quam.
                                  Aliquam <br /> lobortis nisi vitae congue consectetur</p>
                                <div className="postbox__comment-reply">
                                  <a href="#"><i className="fa-regular fa-arrow-turn-down-left"></i>Reply</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="postbox__comment-form-box">
                    <h3 className="postbox__comment-form-title pb-15">Write a comment</h3>
                    <div className="postbox__comment-form">
                      <form id="contact-form" onSubmit={e => e.preventDefault()}>
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <input type="text" placeholder="Enter your name" />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <input type="text" placeholder="Enter your email" />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <textarea placeholder="Write your message"></textarea>
                            </div>
                          </div>
                        </div>
                      <button type="submit" className="tp-btn"><span>SEND message</span></button>
                      </form>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <Sidebar />

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsArea;