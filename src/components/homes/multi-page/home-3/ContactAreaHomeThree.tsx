
'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import shape_1 from "@/assets/img/contact/shape-1-2.png";
import shape_2 from "@/assets/img/contact/shape-1-1.png";
import thumb_1 from "@/assets/img/contact/contact1-1.jpg";
import thumb_2 from "@/assets/img/contact/contact1-2.jpg";
import thumb_3 from "@/assets/img/contact/contact1-3.jpg";
import VideoPopup from '@/modals/VideoPopup';


const contact_content = {
  subtitle: `CONTACT US`,
  title: <>Need any electrical <br />service help</>,
  des: <>Do not hesitate to call us on any elctrical service, our <br />team wait for your call</>,
  phone: `+999 4545 94569`,
  tab_data: [
    {
      id: "home",
      tab_title: "VISSION",
      thumb: thumb_1,
      title: `Emergancy Electricity Fixing Whithin 60 Minitues`,
      features: [
        `Full-service electrical layout `,
        `AC instalation in one hour `,
        `Wiring and installation`,
      ]
    },
    {
      id: "profile",
      tab_title: "MISSION",
      thumb: thumb_2,
      title: `Emergancy Electricity Fixing Whithin 60 Minitues`,
      features: [
        `Full-service electrical layout `,
        `AC instalation in one hour `,
        `Wiring and installation`,
      ]
    },
    {
      id: "contact",
      tab_title: "ELECTRIC",
      thumb: thumb_3,
      title: `Emergancy Electricity Fixing Whithin 60 Minitues`,
      features: [
        `Full-service electrical layout `,
        `AC instalation in one hour `,
        `Wiring and installation`,
      ]
    },
  ]
}

const { subtitle, title, des, phone, tab_data } = contact_content

const ContactAreaHomeThree = () => {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);


  return (
    <>
      <div id="contact-one-page" className="tp-contact-area">
        <div className="tp-contact-bg p-relative jarallax pt-120" style={{ backgroundImage: `url(/assets/img/contact/bg-1-1.jpg)` }}>
          <div className="tp-contact-shape-2 d-none d-xl-block">
            <Image src={shape_1} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="tp-contact-wrap z-index wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                  <div className="tp-contact-tab mb-50">
                    <ul className="nav nav-tab" id="myTab" role="tablist">
                      {tab_data.map((item, i) => (
                        <li key={i} className="nav-items" role="presentation">
                          <button
                            className={`nav-link ${i === 0 ? 'active' : ''}`}
                            id={`${item.id}-tab`}
                            data-bs-toggle="tab"
                            data-bs-target={`#${item.id}`}
                            type="button" role="tab"
                            aria-controls={`${item.id}`}
                            aria-selected={`${i === 0 ? 'true' : 'false'}`}>
                            {item.tab_title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="tp-contact-tab-content">
                    <div className="tab-content" id="myTabContent">

                      {tab_data.map((item, i) => (
                        <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={`${item.id}`} role="tabpanel" aria-labelledby={`${item.id}-tab`}>
                          <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5">
                              <div className="tp-contact-tab-content-left p-relative">
                                <div className="tp-contact-tab-content-thumb">
                                  <Image className="w-100" src={item.thumb} style={{height:"auto"}} alt="" />
                                </div>
                                <div className="tp-contact-tab-play-icon">
                                  <a className="popup-video"
                                    onClick={() => setIsVideoOpen(true)}
                                    style={{ cursor: "pointer" }}
                                  ><i
                                    className="flaticon-play-button"></i></a>
                                </div>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7">
                              <div className="tp-contact-tab-content-right">
                                <h5 className="tp-contact-tab-content-title">{item.title}</h5>
                                <div className="tp-contact-tab-content-list">
                                  <ul>
                                    {item.features.map((feature, index) => (
                                      <li key={index}><i className="fa-light fa-badge-check"></i>{feature}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-contact-right-box p-relative z-index">
                  <div className="tp-contact-section-box mb-25">
                    <span className="tp-section-subtitle">{subtitle}</span>
                    <h4 className="tp-section-title-2">{title}</h4>
                  </div>
                  <div className="tp-contact-text">
                    <p className="mb-35">{des}</p>
                    <div className="tp-contact-right-tel-box">
                      <div className="tp-contact-right-tel-icon d-flex align-items-center">
                        <i className="flaticon-phone-call"></i>
                        <div className="tp-contact-right-tel-content">
                          <span>For emergency </span>
                          <a href={`tel:${phone}`}>{phone}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-contact-shape-1">
                    <Image src={shape_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"CHSnz0bCaUk"}
      />
      {/* video modal end */}

    </>
  );
};

export default ContactAreaHomeThree;