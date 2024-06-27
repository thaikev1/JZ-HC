

import service_data from '@/data/service_data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import shape_1 from "@/assets/img/service/shape-1-1.png";
import shape_2 from "@/assets/img/service/shape-1-2.png";


const services = service_data.filter(item => item.path ===  "service")
 


const ServiceArea = () => {
  return (
    <>
      <div className="tp-service-area tp-service-bg p-relative pt-120 pb-90" style={{backgroundImage: `url(/assets/img/service/bg-1-2.jpg)`}}>
        <div className="tp-service-shape-2 d-none d-xxl-block">
          <img src="assets/img/service/shape-1-3.png" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box text-center mb-50">
                <span className="tp-section-subtitle">OUR BIDDUT SERVICES</span>
                <h4 className="tp-section-title">Outstanding residential & <br /> commercial services</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {services.map((item,i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30  wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
              <div className="tp-service-item p-relative">
                <div className="tp-service-thumb">
                  <Image src={item.img} style={{height: 'auto'}} alt="" />
                </div>
                <div className="tp-service-content-box">
                  <div className="tp-service-content fix">
                    <div className="tp-service-icon p-relative">
                      <span><i className={`flaticon-${item.icon}`}></i></span>
                      <div className="tp-service-icon-shape">
                        <Image src={shape_1} alt="" />
                      </div>
                    </div>
                    <div className="tp-service-text">
                      <h4 className="tp-service-title">
                        <Link href="/service-details">{item.title}</Link>
                      </h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="tp-service-arrow">
                      <Link href="/service-details">Read More<i className="flaticon-right-arrow"></i></Link>
                    </div>
                  </div>
                </div>
                <div className="tp-service-shape-1">
                  <Image src={shape_2} alt="" />
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

export default ServiceArea;