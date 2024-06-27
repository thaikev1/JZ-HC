

import Image from 'next/image';
import React from 'react';

import shape_img from "@/assets/img/cta/shape-1-1.png";

interface styleType {
  about_style?: boolean
  faq_style?: boolean
}

const CtaAreaHomeTwo = ({ about_style , faq_style}: styleType) => {
  return (
    <> 
      <div className={`tp-cta-area fix p-relative ${faq_style ? '' : 'tp-cta-wrap-box'} ${about_style ? '' : 'tp-cta-bg'}`}>
        <div className="tp-cta-shape d-none d-lg-block">
          <Image src={shape_img} alt="" />
        </div>
        <div className="container">
          <div className="tp-cta-wrap theme-bg">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-cta-left-box">
                  <h4 className="tp-cta-title">Dedicated to bring the world powerful energy solutions</h4>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-cta-right-box p-relative">
                  <input type="text" placeholder="Email address" />
                  <div className="tp-cta-button">
                    <button className="tp-btn white-bg"><span>CHECK AVAILABILITY</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default CtaAreaHomeTwo;