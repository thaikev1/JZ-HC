
'use client'
import Link from 'next/link';
import React, { useState } from 'react';

import project_details from "@/assets/img/project/project-details-1.jpg"
import Image from 'next/image';
import VideoPopup from '@/modals/VideoPopup';

const ProjectDetailsArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      <div className="tp-porfolio-details-area project-details-customize pt-110 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="evn-text-box mb-35">
                <h4 className="tp-inner-title pb-10">Home and office lighting <br />
                  services and electric panel repair</h4>
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum <br /> quia quaed inventore veritatis et quasi architecto beatae</p>
              </div>
              <div className="evn-thumb-wrap mb-30 p-relative">
                <div className="evn-avata-content-wrap z-index">
                  <div className="evn-related-info d-flex justify-content-lg-between align-items-center">
                    <span><b>Clients name:</b><br />Liza Olivares</span>
                    <span><b>Awards:</b> <br /> Wining first place</span>
                    <span><b>Catagory:</b> <br /> Indoor lighting</span>
                    <span><b>Budget:</b> <br /> $ 7894.00</span>
                    <span><a href="https://www.google.com.bd/maps/@23.7806365,90.4193257,12z"><b>Location:</b> <br /> San Fransisco 12. USA</a></span>
                    <span>
                      <a href="biddut@gmail.com" target="_blank"><b>Website:</b> <br /> biddut@gmail.com</a>
                    </span>
                  </div>
                </div>
                <div className="evn-thumb">
                  <Image src={project_details} style={{height: 'auto'}} alt="" />
                </div>
              </div>
              <div className="evn-text-box mb-30">
                <p>Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. Lorem Ipsum is simply dummy text of the new design printng and type setting Ipsum Take a look at our round up of the best shows coming soon to your telly box has been the is industrys. When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
              </div>
              <div className="evn-text-box mb-45">
                <h4 className="tp-inner-title pb-15">The challenge of Project</h4>
                <p>Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-5 col-lg-5">
              <div className="project-details-sm-thumb p-relative">
                <img src="assets/img/project/project-details-2.jpg" alt="" />
                  <div className="project-details-sm-thumb-play-box">
                    <a className="popup-video" 
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}><i className="fa-sharp fa-solid fa-play"></i></a>
                  </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="evn-list-box">
                <ul>
                  <li>
                    <span><i className="fa-regular fa-check"></i></span>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro
                    qui dolorem ipsum quia quaed inventore veritatis et quasi
                  </li>
                  <li>
                    <span><i className="fa-regular fa-check"></i></span>
                    Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo. Aelltes port lacus <br />
                      quis enim var sed efficitur turpis gilla sed
                  </li>
                  <li>
                    <span><i className="fa-regular fa-check"></i></span>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro
                    qui dolorem ipsum quia quaed inventore veritatis et quasi
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-12">
            <div className="postbox__thumb m-img p-relative pt-95 pb-45">
              <div className="postbox__details-share-wrapper">
                <div className="row">
                  <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                    <div className="postbox__details-tag tagcloud">
                      <a href="#">Electricity</a>
                      <a className="active" href="#">Biddut</a>
                      <a href="#">Air</a>
                    </div>
                  </div>
                  <div className="col-xl-7 col-lg-6 col-md-6 col-sm-6">
                    <div className="postbox__details-share text-start text-sm-end">
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="postbox__more-navigation postbox__more-navigation-2 grey-bg-7 d-none d-sm-block">
              <div className="row g-0">
                <div className="col-md-6 col-sm-6">
                  <div className="postbox__more-left p-relative d-flex align-items-center">
                    <div className="postbox__more-icon">
                      <Link href="/blog-details">
                        <i className="fa-sharp fa-regular fa-arrow-left"></i>
                      </Link>
                    </div>
                    <div className="postbox__more-content">
                      <p>Previous</p>
                      <h4>
                        <Link href="/blog-details">Indoor linghiting systems</Link>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="postbox__more-right p-relative d-flex align-items-center justify-content-end">
                    <div className="postbox__more-content text-end">
                      <p>Next</p>
                      <h4>
                        <Link href="/blog-details">Electric panel instalation
                        </Link>
                      </h4>
                    </div>
                    <div className="postbox__more-icon">
                      <Link href="/blog-details">
                        <i className="fa-sharp fa-regular fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
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

export default ProjectDetailsArea;