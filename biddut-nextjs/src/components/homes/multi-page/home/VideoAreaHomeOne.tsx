"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";

import video_shape_1 from "@/assets/img/video/text.png";
import video_shape_2 from "@/assets/img/video/shape-3-1.png";
import video_shape_3 from "@/assets/img/video/shape-3-2.png";

interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  description: React.JSX.Element;
}

const video_content: DataType = {
  subtitle: `CONTACT WITH BIDDUT`,
  title: (
    <>
      Your best option electrical <br />
      contractors 24/7
    </>
  ),
  description: (
    <>
      For more than a decade, we have been building the fueling network of the
      future. We have delivered more places to charge than anyone else, and
      people count on us for charging systemtic
    </>
  ),
};
const { subtitle, title, description } = video_content;

const VideoAreaHomeOne = () => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);

  return (
    <>
      <div
        className="tp-video-3-area tp-video-3-bg jarallax p-relative fix pt-140"
        style={{ backgroundImage: `url(/assets/img/video/bg-3-1.jpg)` }}
      >
        <div className="tp-video-3-play-box d-none d-lg-block">
          <a
            className="popup-video"
            onClick={() => setIsVideoOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-play"></i>
          </a>
        </div>
        <div className="tp-video-3-shape-1 d-none d-xxl-block">
          <Image src={video_shape_1} alt="" />
        </div>
        <div className="tp-video-3-shape-2 d-none d-xxl-block">
          <Image src={video_shape_2} alt="" />
        </div>
        <div className="tp-video-3-shape-3 d-none d-xl-block">
          <Image src={video_shape_3} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-video-3-content z-index">
                <div className="tp-video-3-section-box mb-25">
                  <span className="tp-section-subtitle text-white">
                    <span>{"//"}</span>
                    {subtitle}
                  </span>
                  <h4 className="tp-section-title text-white">{title}</h4>
                </div>
                <p className="text-white pb-40">{description}</p>
                <div className="tp-video-3-btn-box">
                  <Link className="tp-btn hover-2 mr-15" href="/about">
                    <span>Discover More</span>
                  </Link>
                  <Link className="tp-btn-border" href="/contact">
                    <span>FREE ESTIMATE</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"CHSnz0bCaUk"}
      />
    </>
  );
};

export default VideoAreaHomeOne;
