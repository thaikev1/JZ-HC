
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Logo from "@/assets/img/logo/black-logo.png";

interface DataType {
  title: string;
  features: string[];
  info: React.JSX.Element;
  phone_title: string;
  phone: string;
  title_2: React.JSX.Element;
  title_3: string;
  title_4: string;
  des_2: string;
  des_3: string;
  des_4: string;
}


const service_details_content: DataType = {
  title: `Electric services`,
  features: [
    `Comercial services`,
    `Electric panel repair`,
    `Instalation equipment`,
    `Short circuit repair`,
    `Installing a ceiling fan`,
    `Upgrade old wiring`,
  ],
  info: <>Get full range <br /> of premium services</>,
  phone_title: `Talk to an expert`,
  phone: `+99 (786) 8765 5689`,
  title_2: <>Electric panel reapiring. <br />Biddut have 25 years experience</>,
  title_3: `Electric panel repair`,
  title_4: `Explore Our Audit & Assurance Services`,
  des_2: `We embrace holistic development and support for employees with the aim of being a first-choice employer within our sectors. Through a unique combination of engineering, construction and design disciplines and expertise`,
  des_3: `Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`,
  des_4: `Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros.`,

}
const { title, features, info, phone_title, phone, title_2, title_3, title_4, des_2, des_3, des_4 } = service_details_content

const ServiceDetailsArea = () => {
  return (
    <>
      <div className="tp-service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              <div className="tp-service-details-left-box">
                <div className="tp-service-details-widget mb-30">
                  <div className="tp-service-details-category">
                    <h4 className="tp-service-details-title">{title}</h4>
                    <ul>
                      {features.map((item,i) => (
                      <li key={i} className={`${i === 1 ? 'active' : '' }`}>
                        <a className={`p-relative ${i === 1 ? 'active' : '' }`} href="#"><span>{item}</span><i className="flaticon-right-arrow"></i></a>
                      </li>
                      ))} 
                    </ul>
                  </div>
                </div>
                <div className="tp-service-details-widget mb-30">
                  <div className="tp-service-details-thumb-box text-center">
                    <Link href="/">
                      <Image src={Logo} alt="" />
                    </Link>
                    <h4 className="tp-service-details-title mt-35 mb-25">{info}</h4>
                    <div className="tp-service-details-thumb">
                      <img src="assets/img/service/Service-Details.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="tp-service-details-widget mb-30">
                  <div className="tp-service-details-contact-box d-flex align-items-center">
                    <div className="tp-service-details-contact-icon">
                      <span><i className="flaticon-phone-call"></i></span>
                    </div>
                    <div className="tp-service-details-contact-text">
                      <span>{phone_title}</span>
                      <a href="tel:9978687655689"><span>Free</span>{phone}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8">
              <div className="tp-service-details-right-wrap">
                <div className="tp-service-details-text pb-40">
                  <h4 className="tp-section-title pb-20">{title_2}</h4>
                  <p>
                    {des_2}
                  </p>
                </div>
                <div className="tp-service-details-right-thumb mb-50">
                  <img className="w-100" src="assets/img/service/sv-details-1.jpg" alt="" />
                </div>
                <div className="tp-service-details-text pb-25">
                  <h4 className="tp-section-title pb-20">{title_3}</h4>
                  <p>
                    {des_3}
                  </p>
                </div>
                <div className="tp-service-details-list-box pb-30">
                  <ul className="d-flex justify-content-between">
                    <li>
                      <span><i className="fa-regular fa-check"></i></span>
                      Neque porro est qui dolorem ipsum <br /> quaed inventore veritatis
                    </li>
                    <li>
                      <span><i className="fa-regular fa-check"></i></span>
                      Neque porro est qui dolorem ipsum <br /> quaed inventore veritatis
                    </li>
                  </ul>
                </div>
                <div className="tp-service-details-icon-wrap pb-30 d-flex justify-content-between">
                  <div className="tp-service-details-icon-box black-bg mb-30 d-flex align-items-center">
                    <div className="tp-service-details-icon">
                      <span><i className="flaticon-guaranteed"></i></span>
                    </div>
                    <div className="tp-service-details-icon-text">
                      <h5>Why our Biddut?</h5>
                      <p>We always try to give <br />best services</p>
                    </div>
                  </div>
                  <div className="tp-service-details-icon-box black-bg mb-30 d-flex align-items-center">
                    <div className="tp-service-details-icon">
                      <span className="active"><i className="flaticon-solution"></i></span>
                    </div>
                    <div className="tp-service-details-icon-text">
                      <h5>Best service</h5>
                      <p>We always try to give <br />best services</p>
                    </div>
                  </div>
                </div>
                <div className="tp-service-details-text">
                  <h4 className="tp-section-title-sm pb-10">{title_4}</h4>
                  <p>
                    {des_4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;