
'use client'

import Image from 'next/image';
import React, { useEffect } from 'react';
import shape from "@/assets/img/feature/shape-1-1.png";


interface DataType {
  delay: string;
  icon: string;
  title: string;
}
const feature_data: DataType[] = [
  {
    delay: `.3s`,
    icon: `lowest-price`,
    title: `Affradable price`,
  },
  {
    delay: `.5s`,
    icon: `guaranteed`,
    title: `100% Gurantee`,
  },
  {
    delay: `.7s`,
    icon: `repair`,
    title: `24/7 Availabilty`,
  },
  {
    delay: `.9s`,
    icon: `award`,
    title: `Award winning`,
  },
]

const OrderAreaHomeTwo = () => {

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll('.tp-feature-2-item');

      if (target.classList.contains('tp-feature-2-item')) {
        target.classList.add('active');

        // Remove 'active' class from all items except the current one
        tpService2Items.forEach(item => {
          if (item !== target) {
            item.classList.remove('active');
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll('.tp-feature-2-item');

    tpService2Items.forEach(item => {
      item.addEventListener('mouseenter', handleMouseEnter as EventListenerOrEventListenerObject);
    });

    return () => {
      tpService2Items.forEach(item => {
        item.removeEventListener('mouseenter', handleMouseEnter as EventListenerOrEventListenerObject);
      });
    };

  }, []);



  return (
    <>
      <div className="tp-order-form-area p-relative grey-bg" style={{ backgroundImage: `url(/assets/img/feature/bg-1.png)` }}>

        <div className="tp-order-form-area d-none d-md-block">
          <div className="container custom-container-2">
            <div className="tp-order-form-space wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="tp-order-form-wrap d-flex align-items-center justify-content-between">
                <div className="tp-order-form-group">
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="tp-order-form-group">
                  <input type="text" placeholder="Your email" />
                </div>
                <div className="tp-order-form-group">
                  <input type="text" placeholder="Phone" />
                </div>
                <div className="tp-order-form-group">
                  <input type="text" placeholder="Your Subject" />
                </div>
                <div className="tp-order-form-group">
                  <button className="tp-btn-black"><span>GET SERVICES</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-feature-2-bg pt-90 pb-90">
          <div className="tp-feature-2-shape-1 d-none d-xxl-block">
            <Image src={shape} alt="" />
          </div>
          <div className="container">
            <div className="row">
              {feature_data.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className={`tp-feature-2-item ${i === 2 ? 'active' : ''}`}>
                    <div className="tp-feature-2-icon">
                      <span><i className={`flaticon-${item.icon}`}></i></span>
                    </div>
                    <div className="tp-feature-2-text">
                      <h5 className="tp-feature-2-title">{item.title}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderAreaHomeTwo;