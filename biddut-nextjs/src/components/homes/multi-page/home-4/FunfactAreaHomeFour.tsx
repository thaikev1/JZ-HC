

import React from 'react';
import Count from '@/components/common/Count';

interface DataType {
  icon: string;
  number: number;
  title: string;
}

const funfact_data: DataType[] = [
  {
    icon: 'solution',
    number: 980,
    title: 'Projects'
  },
  {
    icon: 'teamwork',
    number: 600,
    title: 'People'
  },
  {
    icon: 'guaranteed',
    number: 30,
    title: 'Years'
  },
  {
    icon: 'coffee',
    number: 148,
    title: 'Station'
  },
]

const FunfactAreaHomeFour = () => {
  return (
    <>
      <div className="tp-funfact-4-area pt-120 pb-60">
        <div className="container">
          <div className="row g-0">
            {funfact_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-30">
                <div className="tp-funfact-4-item text-center">
                  <div className="tp-funfact-4-icon">
                    <span><i className={`flaticon-${item.icon}`}></i></span>
                  </div>
                  <div className={`tp-funfact-4-content p-relative ${i === 3 ? 'content-box' : ''}`}>
                    <h5 className="tp-funfact-4-number purecounter">
                      <Count number={item.number} />
                    </h5>
                    <div className="tp-funfact-4-text">
                      <span>{item.title}</span>
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

export default FunfactAreaHomeFour;