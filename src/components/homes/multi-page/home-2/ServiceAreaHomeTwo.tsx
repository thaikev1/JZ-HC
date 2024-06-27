
'use client'

import Link from 'next/link';
import React, { useEffect } from 'react';
import service_data from '@/data/service_data';

const services = service_data.filter(item => item.path === 'home_2')

const ServiceAreaHomeTwo = () => {

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll('.tp-service-2-item');

      if (target.classList.contains('tp-service-2-item')) {
        target.classList.add('active');

        // Remove 'active' class from all items except the current one
        tpService2Items.forEach(item => {
          if (item !== target) {
            item.classList.remove('active');
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll('.tp-service-2-item');

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
      <div id="services-one-page" className="tp-service-2-area tp-service-2-bg black-bg pt-120 pb-120" style={{ backgroundImage: `url(/assets/img/service/bg-2.jpg)` }}>
        <div className="container custom-container-3">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-2-section-box text-center mb-50">
                <span className="tp-section-subtitle text-color-2">OUR BIDDUT SERVICES</span>
                <h4 className="tp-section-title text-white">Outstanding residential & <br />commercial services</h4>
              </div>
            </div>
            {services.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className={`tp-service-2-item text-center ${i === 1 ? 'active' : ''}`}>
                  <div className="tp-service-2-icon">
                    <span><i className={`flaticon-${item.icon}`}></i></span>
                  </div>
                  <div className="tp-service-2-text">
                    <h5 className="tp-service-2-title">
                      <Link href="/service-details">{item.title}</Link>
                    </h5>
                    <p>{item.description}</p>
                  </div>
                  <div className="tp-service-2-link">
                    <Link href="/service-details"><i className="flaticon-right-arrow"></i></Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-xl-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="tp-service-2-bottom-text text-center mt-25">
                <p>Make your first quality for electrical services <Link href="/service-details">Find Your Solution</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeTwo;