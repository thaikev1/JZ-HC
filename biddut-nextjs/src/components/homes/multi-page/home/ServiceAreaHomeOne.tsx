"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import service_data from "@/data/service_data";
import service_shape_1 from "@/assets/img/service/shape-3-1.png";
import service_shape_2 from "@/assets/img/service/shape-3-3.png";
import service_shape_3 from "@/assets/img/service/shape-3-2.png";
import service_shape_5_1 from "@/assets/img/service/shape-3-5.png";

interface DataType {
  subtitle: string;
  title: string;
}

const service_content: DataType = {
  subtitle: `OUR BIDDUT SERVICES`,
  title: `Outstanding residential & <br />commercial services`,
};
const { subtitle, title } = service_content;

const services = service_data.filter((item) => item.path === "home_1");

interface styleType {
  dark_style?: boolean;
}

const ServiceAreaHomeOne = ({ dark_style }: styleType) => {
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll(".tp-service-3-item");

      if (target.classList.contains("tp-service-3-item")) {
        target.classList.add("active");

        // Remove 'active' class from all items except the current one
        tpService2Items.forEach((item) => {
          if (item !== target) {
            item.classList.remove("active");
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll(".tp-service-3-item");

    tpService2Items.forEach((item) => {
      item.addEventListener(
        "mouseenter",
        handleMouseEnter as EventListenerOrEventListenerObject
      );
    });

    return () => {
      tpService2Items.forEach((item) => {
        item.removeEventListener(
          "mouseenter",
          handleMouseEnter as EventListenerOrEventListenerObject
        );
      });
    };
  }, []);

  const shape = dark_style ? service_shape_5_1 : service_shape_2;

  return (
    <>
      <div
        id="services-one-page"
        className={`tp-service-3-area p-relative fix pt-120 pb-90 ${
          dark_style ? "tp-black-mode black-bg-2" : "grey-bg"
        }`}
      >
        <div className="tp-service-3-shape-1 d-none d-xl-block">
          <Image src={service_shape_1} alt="" />
        </div>
        <div className="tp-service-3-shape-2 d-none d-xl-block">
          <Image src={shape} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-3-section-title text-center mb-50">
                <span className="tp-section-subtitle">
                  <span>{"//"}</span>
                  {subtitle}
                </span>
                <h4
                  className={`tp-section-title ${
                    dark_style ? "text-white" : ""
                  }`}
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h4>
              </div>
            </div>

            {services.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 mb-30  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div
                  className={`tp-service-3-item fix ${i === 1 ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(/assets/img/service/sv-3-1.jpg)`,
                  }}
                >
                  <div className="tp-service-3-shape-3">
                    <Image src={service_shape_3} alt="" />
                  </div>
                  <div className="tp-service-3-content z-index">
                    <div className="tp-service-3-icon pb-40">
                      <span>
                        <i className={`flaticon-${item.icon}`}></i>
                      </span>
                    </div>
                    <div className="tp-service-3-text pb-30">
                      <h4 className="tp-service-3-title pb-15">
                        <Link href="/service-details">{item.title}</Link>
                      </h4>
                      <p>{item.description}</p>
                    </div>
                    <Link href="/service-details">
                      <div className="tp-service-3-link d-flex justify-content-between">
                        <span>Read More</span>
                        <i className="flaticon-right-arrow"></i>
                      </div>
                    </Link>
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

export default ServiceAreaHomeOne;
