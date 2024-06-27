import Link from "next/link";
import React from "react";
import Image from "next/image";
import cta_shape_1 from "@/assets/img/cta/shape-3-1.png";
import cta_shape_2 from "@/assets/img/cta/shape-3-2.png";

import thumb_left from "@/assets/img/cta/cta-3-1.jpg";

const CtaAreaHomeOne = () => {
  return (
    <>
      <div className="tp-cta-3-area fix">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-cta-3-left-wrap theme-bg z-index-3 p-relative">
                <div className="tp-cta-3-left-shape d-none d-xl-block">
                  <Image src={cta_shape_1} alt="" />
                </div>
                <div className="tp-cta-3-left-box">
                  <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-5 d-none d-md-block">
                      <div className="tp-cta-3-left-thumb">
                        <Image src={thumb_left} alt="" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-7">
                      <div className="tp-cta-3-left-text text-center text-md-start">
                        <h5 className="tp-cta-3-left-title">
                          We provide professional <br /> electric services for{" "}
                          <br /> our customer
                        </h5>
                        <Link className="tp-btn-black hover-2" href="/about">
                          <span>EXPLORE MORE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-cta-3-right-wrap black-bg">
                <div
                  className="tp-cta-3-right-box jarallax z-index"
                  style={{
                    backgroundImage: `url(/assets/img/cta/cta-3-2.jpg)`,
                  }}
                >
                  <h4 className="tp-section-title text-white text-center z-index-3">
                    Outstanding residential & <br /> commercial services <br />{" "}
                    for your family
                  </h4>
                  <div className="tp-cta-3-right-shape">
                    <Image src={cta_shape_2} alt="" />
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

export default CtaAreaHomeOne;
