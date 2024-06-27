

import React from 'react';

import shape_1 from "@/assets/img/choose/shape-2-1.png";
import shape_2 from "@/assets/img/choose/shape-2-2.png";
import Image from 'next/image';



interface DataType {
  subtitle: string;
  title: string;
  description: string;
  features: {
    icon: string;
    title: string;
    info: string;
  }[];
}

const choose_content: DataType = {
  subtitle: `WHY CHOOSE OUR BIDDUT`,
  title: `Great reason for the people <br />choose our biddut`,
  description: `For more than a decade, we have been building the fueling network of the future. We have delivered more places to charge than anyone else, and people <br /> count on us for charging systemtic`,
  features: [
    {
      icon: `price-tag`,
      title: `Affrodable price`,
      info: `Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus`,
    },
    {
      icon: `battery`,
      title: `Customer support`,
      info: `Nullam eu nibh vitae est tempor molestie id sed ex. Quisque dignissim maximus`,
    }
  ]
}
const { subtitle, title, description, features } = choose_content

const ChooseAreaHomeTwo = () => {
  return (
    <>
      <div className="tp-choose-2-area p-relative fix pt-110 pb-115">
        <div className="tp-choose-2-shape-1 d-none d-lg-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-choose-2-shape-2 d-none d-xxl-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="tp-choose-2-bg" style={{ backgroundImage: `url(/assets/img/choose/bg-2-1.jpg)` }}></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-choose-2-item z-index-3">
                <div className="tp-choose-2-section-box mb-25">
                  <span className="tp-section-subtitle">{subtitle}</span>
                  <h4 className="tp-section-title" dangerouslySetInnerHTML={{ __html: title }}></h4>
                </div>
                <div className="tp-choose-2-text mb-45">
                  <p dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
                <div className="tp-choose-2-icon-wrap">
                  {features.map((item, i) => (
                    <div key={i} className={`tp-choose-2-icon-box d-flex align-items-start ${i === 0 ? 'mb-30' : ''}`}>
                      <div className="tp-choose-2-icon">
                        <span><i className={`flaticon-${item.icon}`}></i></span>
                      </div>
                      <div className="tp-choose-2-icon-text">
                        <h5>{item.title}</h5>
                        <p>{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseAreaHomeTwo;