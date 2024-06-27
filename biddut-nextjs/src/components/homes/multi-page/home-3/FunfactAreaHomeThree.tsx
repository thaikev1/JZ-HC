

import Image from 'next/image';
import React from 'react';

import shape_1 from "@/assets/img/funfact/shape-1-1.png";
import shape_2 from "@/assets/img/funfact/shape-1-2.png";
import Count from '@/components/common/Count';


interface DataType {
  count: number;
  icon: string;
  title: string;
}

const count_data:DataType[] = [
  {
    count: 820,
    icon: `solution`,
    title: `Succesfull Projects`,
  },
  {
    count: 9,
    icon: `customer-service`,
    title: `Satisfied Clients`,
  },
  {
    count: 45,
    icon: `customer-service-1`,
    title: `Experienced Staff`,
  },
  {
    count: 848,
    icon: `trophy`,
    title: `Awards Winning`,
  },
]

const FunfactAreaHomeThree = () => {
  return (
    <>
      <div className="tp-funfact-area fix p-relative grey-bg pt-180 pb-85">
        <div className="tp-funfact-shape-1">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-funfact-shape-2 d-none d-xl-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {count_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-30">
                <div className="tp-funfact-item text-center">
                  <div className="tp-funfact-icon">
                    <span><i className={`flaticon-${item.icon}`}></i></span>
                  </div>
                  <div className="tp-funfact-content">
                    <h5 className="tp-funfact-number">
                      <i className="purecounter">  
                        <Count number={item.count} />                      
                    </i>{i === 1 ? "M" : "+"} </h5>
                    <span>{item.title}</span>
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

export default FunfactAreaHomeThree;