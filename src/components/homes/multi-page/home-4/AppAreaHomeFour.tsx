

import React from 'react';
import Image from 'next/image';

import shape_1 from "@/assets/img/app/shape-1-3.png";
import shape_2 from "@/assets/img/app/shape-1-1.png";
import shape_3 from "@/assets/img/app/shape-1-2.png";
import shape_4 from "@/assets/img/app/app-1-3.png";
import shape_5 from "@/assets/img/app/app-1-4.png";
import app_thumb_1 from "@/assets/img/app/app-1-1.jpg";
import app_thumb_2 from "@/assets/img/app/app-1-2.jpg";

const AppAreaHomeFour = () => {
  return (
    <>
      <div className="tp-app-area p-relative black-bg fix pt-120 pb-120">
        <div className="tp-app-shape-1 d-none d-xl-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-app-shape-2 d-none d-lg-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="tp-app-shape-3 d-none d-xl-block">
          <Image src={shape_3} alt="" />
        </div>
        <div className="tp-app-shape-4 d-none d-lg-block">
          <Image src={shape_4} alt="" />
        </div>
        <div className="tp-app-shape-5 d-none d-xl-block">
          <Image src={shape_5} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-app-content">
                <div className="tp-app-section-box pb-35">
                  <span className="tp-section-subtitle">DOWNLOAD BIDDUT APPS </span>
                  <h4 className="tp-section-title text-white pb-30">Control your charger with <br />our application</h4>
                  <p>For more than a decade, we have been building the fueling network of the future. We have delivered more places to charge than anyone else, and people count on us for charging systemtic</p>
                </div>
                <div className="tp-app-thumb">
                  <a className="mr-5" href="#"><Image src={app_thumb_1} alt="" /></a>
                  <a href="#"><Image src={app_thumb_2} alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppAreaHomeFour;