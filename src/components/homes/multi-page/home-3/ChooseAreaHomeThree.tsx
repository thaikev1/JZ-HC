


import Image from 'next/image';
import React from 'react';

import choose_img from "@/assets/img/choose/choose-1-1.png";
import choose_shape_1 from "@/assets/img/choose/shape-1-1.png";
import choose_shape_2 from "@/assets/img/choose/shape-1-2.png";
import choose_shape_3 from "@/assets/img/choose/shape-1-3.png";
import choose_shape_4 from "@/assets/img/choose/shape-1-4.png";
import choose_shape_5 from "@/assets/img/choose/shape-1-5.png";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  description: React.JSX.Element;
  features: {
    icon: string;
    title: string;
  }[];
}

const choose_content: DataType = {
  subtitle: `WHY CHOOSE OUR BIDDUT`,
  title: <>Great reason for the people <b />choose our biddut</>,
  description: <>For more than a decade, we have been building the fueling network of the future. We have delivered more places to charge than anyone else, and people <b />count on us for charging systemtic</>,
  features: [
    { icon: `battery`, title: `Custom support` },
    { icon: `electrician-1`, title: `Insured expert` },
    { icon: `price-tag`, title: `Flat rate` },
    { icon: `alarm-clock`, title: `24/7 Available` },

  ]
}

const { subtitle, title, description, features } = choose_content

const ChooseAreaHomeThree = () => {
  return (
    <>
      <div className="tp-choose-area tp-choose-space fix p-relative black-bg">
        <div className="tp-choose-shape-1 d-none d-lg-block">
          <Image src={choose_shape_1} alt="" />
        </div>
        <div className="tp-choose-shape-2 d-none d-xl-block">
          <Image src={choose_shape_2} alt="" />
        </div>
        <div className="tp-choose-shape-3 d-none d-md-block">
          <Image src={choose_shape_3} alt="" />
        </div>
        <div className="tp-choose-shape-4 d-none d-md-block">
          <Image src={choose_shape_4} alt="" />
        </div>
        <div className="tp-choose-shape-5 d-none d-xl-block">
          <Image src={choose_shape_5} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-choose-content z-index">
                <div className="tp-choose-section-box mb-30">
                  <span className="tp-section-subtitle text-color"><i className="flaticon-flash"></i>{subtitle}</span>
                  <h4 className="tp-section-title text-white">{title}</h4>
                </div>
                <div className="tp-choose-text mb-50">
                  <p>{description}</p>
                </div>
                <div className="tp-choose-wrap">
                  <div className="row">
                    {features.map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-20">
                        <div className="tp-choose-item d-flex align-items-center">
                          <span><i className={`flaticon-${item.icon}`}></i></span>
                          <h5 className="tp-choose-item-title">{item.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-choose-thumb-box">
          <Image src={choose_img} style={{height:"auto"}} alt="" />
        </div>
      </div>
    </>
  );
};

export default ChooseAreaHomeThree;

