

import React from 'react';

import faq_img_1 from "@/assets/img/faq/thumb-1.jpg";
import faq_img_2 from "@/assets/img/faq/thumb-2.jpg";
import faq_img_3 from "@/assets/img/faq/thumb-3.jpg";
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DataType {
  delay: string;
  img: StaticImageData;
  info: string;
}

const faq_data: DataType[] = [
  {
    delay: `.3s`,
    img: faq_img_1,
    info: `24/7 Support`
  },
  {
    delay: `.5s`,
    img: faq_img_2,
    info: `Community`
  },
  {
    delay: `.7s`,
    img: faq_img_3,
    info: `News & Update`
  },
]

const FaqArea = () => {
  return (
    <>
      <div className="tp-faq-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-faq-title-box text-center pb-60">
                <h4 className="tp-section-title text-black">
                  Steel need help?
                </h4>
              </div>
            </div>
            {faq_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-faq-item p-relative">
                  <div className="tp-faq-thumb-box">
                    <Image src={item.img} alt="" />
                  </div>
                  <div className="tp-faq-thumb-text">
                    <h4 className="tp-faq-title">{item.info}</h4>
                    <Link href="/contact"><i className="flaticon-right-arrow"></i></Link>
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

export default FaqArea;