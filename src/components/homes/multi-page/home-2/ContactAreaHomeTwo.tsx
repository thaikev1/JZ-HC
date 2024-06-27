


import React from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/contact/shape-2-1.png";
import shape_2 from "@/assets/img/contact/shape-2-2.png";
import shape_3 from "@/assets/img/contact/shape-2-3.png";
import shape_4 from "@/assets/img/contact/shape-2-4.png";
import contact_img from "@/assets/img/contact/contact-2-1.png";

const ContactAreaHomeTwo = () => {
  return (
    <>
      <div id="contact-one-page" className="tp-contact-2-area tp-contact-2-bg fix p-relative">
        <div className="tp-contact-2-shape-1 d-none d-lg-block">
          <Image src={shape_1} alt="" />
        </div>
        <div className="tp-contact-2-shape-2 d-none d-lg-block">
          <Image src={shape_2} alt="" />
        </div>
        <div className="tp-contact-2-shape-3 d-none d-lg-block">
          <Image src={shape_3} alt="" />
        </div>
        <div className="tp-contact-2-shape-4 d-none d-xxl-block">
          <Image src={shape_4} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-xl-6 offset-lg-6">
              <div className="tp-contact-2-item z-index">
                <div className="tp-contact-2-section-box mb-40">
                  <span className="tp-contact-2-subtitle">Contact us</span>
                  <h4 className="tp-contact-2-title">Get a call back </h4>
                </div>
                <div className="tp-contact-2-input-box">
                  <input type="text" placeholder="Your Name*" />
                  <input type="email" placeholder="Your Email*" />
                  <input type="text" placeholder="Your Phone*" />
                  <textarea placeholder="Messege*"></textarea>
                </div>
                <button type="submit" className="tp-btn w-100 text-center"><span>Send Message</span></button>
              </div>
            </div>
          </div>
        </div>
        <div className="tp-contact-2-thumb">
          <Image src={contact_img} style={{height: 'auto'}} alt="" />
        </div>
      </div>
    </>
  );
};

export default ContactAreaHomeTwo;