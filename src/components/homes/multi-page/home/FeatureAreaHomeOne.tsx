"use client";
import React, { useEffect } from "react";

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
    icon: `guaranteed`,
    title: `Licensed`,
  },
];

interface styleType {
  dark_style?: boolean;
  style_2?: boolean;
}

const FeatureAreaHomeOne = ({ dark_style, style_2 }: styleType) => {
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll(".tp-feature-2-item");

      if (target.classList.contains("tp-feature-2-item")) {
        target.classList.add("active");

        tpService2Items.forEach((item) => {
          if (item !== target) {
            item.classList.remove("active");
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll(".tp-feature-2-item");

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

  return (
    <>
      <div
        id="feature-box"
        className={`tp-feature-2-area p-relative ${
          dark_style ? "tp-black-mode black-bg-3" : style_2 ? "" : "grey-bg"
        }`}
      >
        <div
          className="tp-feature-2-bg pt-120 pb-90"
          style={{
            backgroundImage: `url(${
              dark_style ? null : "/assets/img/feature/bg-1.png"
            })`,
          }}
        >
          <div className="container">
            <div className="row">
              {feature_data.map((item, i) => (
                <div
                  key={i}
                  className="col-xl-3 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay={item.delay}
                >
                  <div
                    className={`tp-feature-2-item ${i === 2 ? "active" : ""}`}
                  >
                    <div className="tp-feature-2-icon">
                      <span>
                        <i className={`flaticon-${item.icon}`}></i>
                      </span>
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

export default FeatureAreaHomeOne;
