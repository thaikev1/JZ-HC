

import React from 'react';

import icon_1 from "@/assets/img/contact/icon-1.png";
import icon_2 from "@/assets/img/contact/icon-2.png";
import icon_3 from "@/assets/img/contact/icon-3.png";
import Image, { StaticImageData } from 'next/image';


interface DataType {
  delay: string;
  img: StaticImageData;
  title: string;
  des: React.JSX.Element;
}

const contact_info:DataType[] = [
  {
    delay: ".3s",
    img: icon_1,
    title: "Visit our place",
    des: <>88 New South Head Rd, Triple <br /> New York</>
  },
  {
    delay: ".5s",
    img: icon_2,
    title: "Contact us",
    des: <>biddut@website.com</>
  },
  {
    delay: ".7s",
    img: icon_3,
    title: "Office time",
    des: <>Five days 8:00 am -  5:00 pm <br /> Firday is closed</>
  }
]

const ContactInfo = () => {
  return (
    <>
      <div className="tp-contact-3-area pt-120 pb-90">
        <div className="container">
          <div className="row">

            {contact_info.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                <div className="tp-contact-3-item text-center">
                  <div className="tp-contact-3-icon">
                    <span><Image className="z-index" src={item.img} alt="" /></span>
                  </div>
                  <div className="tp-contact-3-text">
                    <h5 className="tp-contact-3-title">{item.title}</h5>
                    <a href="mailto:biddut@website.com">{item.des}</a> <br />
                   {i === 1 && <a href="tel:+60276247296">+(602) 762 472 96</a>} 
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

export default ContactInfo;