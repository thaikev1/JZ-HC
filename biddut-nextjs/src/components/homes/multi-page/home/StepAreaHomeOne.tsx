"use client";

import Link from "next/link";
import React, { useEffect } from "react";

interface DataType {
  subtitle: string;
  title: string;
  step_data: {
    delay: string;
    icon: string;
    title: string;
    description: string;
  }[];
}

const step_content: DataType = {
  subtitle: "OUR WORKING STEPS",
  title: "We provide professional <br />electric services",
  step_data: [
    {
      delay: `.3s`,
      icon: `problem-solving`,
      title: `Identify problem`,
      description: `This box could corrode over time losse connection, dust`,
    },
    {
      delay: `.5s`,
      icon: `plug-1`,
      title: `Provide time & cost`,
      description: `This box could corrode over time losse connection, dust`,
    },
    {
      delay: `.7s`,
      icon: `service`,
      title: `Implement service`,
      description: `This box could corrode over time losse connection, dust`,
    },
    {
      delay: `.9s`,
      icon: `creative`,
      title: `Identify problem`,
      description: `This box could corrode over time losse connection, dust`,
    },
  ],
};

const { subtitle, title, step_data } = step_content;

interface styleType {
  dark_style?: boolean;
}

const StepAreaHomeOne = ({ dark_style }: styleType) => {
  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const tpService2Items = document.querySelectorAll(".tp-step-item-box");

      if (target.classList.contains("tp-step-item-box")) {
        target.classList.add("active");

        // Remove 'active' class from all items except the current one
        tpService2Items.forEach((item) => {
          if (item !== target) {
            item.classList.remove("active");
          }
        });
      }
    };

    const tpService2Items = document.querySelectorAll(".tp-step-item-box");

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
        id="step-one-page"
        className={`tp-step-area pt-120 pb-90 ${
          dark_style ? "tp-black-mode black-bg" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-step-section-box text-center mb-50">
                <span className="tp-section-subtitle">
                  <span>{"//"}</span>
                  {subtitle}
                </span>
                <h4
                  className="tp-section-title"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h4>
              </div>
            </div>
            {step_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-3 col-lg-4 col-md-6 mb-60  wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div
                  className={`tp-step-item-box ${i === 1 ? "active" : ""} ${
                    i % 2 === 1 ? "tp-step-item-box-pl" : ""
                  }`}
                >
                  <div className="tp-step-item p-relative text-center">
                    <div className="tp-step-icon">
                      <span>
                        <i className={`flaticon-${item.icon}`}></i>
                      </span>
                    </div>
                    <div className="tp-step-text">
                      <h5 className="tp-step-title">
                        <Link href="/service-details">{item.title}</Link>
                      </h5>
                      <p>{item.description}</p>
                    </div>
                    <div className="tp-step-number">
                      <span>Step 0{i + 1}</span>
                    </div>
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

export default StepAreaHomeOne;
