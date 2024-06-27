

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import footer_shape_1 from "@/assets/img/footer/shape-1-1.png";
import footer_shape_2 from "@/assets/img/footer/shape-1-2.png";
import biddut_logo from "@/assets/img/logo/white-logo.png";
import footer_img_1 from "@/assets/img/footer/footer-1-1.jpg";
import footer_img_2 from "@/assets/img/footer/footer-1-2.jpg";
import footer_img_3 from "@/assets/img/footer/footer-1-3.jpg";
import footer_img_4 from "@/assets/img/footer/footer-1-4.jpg";
import footer_img_5 from "@/assets/img/footer/footer-1-5.jpg";
import footer_img_6 from "@/assets/img/footer/footer-1-6.jpg";
import { CopyRight, TeamSocialLinks } from '@/components/common/SocialLinks';


interface DataType {
  info: string;
  email: string;
  address: string;
  footer_links: {
    id: number;
    delay: string;
    title: string;
    links: {
      title: string;
      link: string;
    }[];
  }[];
  footer_images: {
    items: StaticImageData[];
  }[];
}


const footer_content: DataType = {
  info: `HVAC technicians are efficient because they have their ducts in a row.`,
  email: `jzhvac@gmail.com`,
  address: `Mississauga, Brampton, Toronto, GTA`,
  footer_links: [
    {
      id: 2,
      delay: `.5s`,
      title: "Usefull Links",
      links: [
        { title: "About Biddut", link: "/about" },
        { title: "Our Team", link: "/team" },
        { title: "Our Portfolio", link: "/portfolio" },
        { title: "Testimonials", link: "/blog" },
        { title: "Blog Details", link: "/blog" },
      ]
    },
    {
      id: 3,
      delay: `.7s`,
      title: "Services",
      links: [
        { title: "Air Conditioning", link: "#" },
        { title: "Electrical Panels", link: "#" },
        { title: "Security System", link: "#" },
        { title: "Indoor", link: "#" },
        { title: " Electrical Services", link: "/service" },
      ]
    }
  ],
  footer_images: [
    {
      items: [
        footer_img_1,
        footer_img_2,
        footer_img_3,
      ]
    },
    {
      items: [
        footer_img_4,
        footer_img_5,
        footer_img_6,
      ]
    },

  ]
}

const {
  info,
  email,
  address,
  footer_links,
  footer_images
} = footer_content


interface StyleData {
  style_2: boolean
}

const FooterOne = ({ style_2 }: StyleData) => {
  return (
    <>
      <footer id="footer-one-page">
        <div className={`tp-footer-area ${style_2 ? 'tp-footer-space' : 'pt-120 pb-120'}  p-relative z-index-3 black-bg`}>
          <div className="tp-footer-shape-1 d-none d-lg-block">
            <Image src={footer_shape_1} alt="" />
          </div>
          <div className="tp-footer-shape-2 d-none d-lg-block">
            <Image src={footer_shape_2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-footer-widget footer-cols-1">
                  <div className="tp-footer-logo">
                    <Link href="/">
                      <Image width={250} height={150} src={biddut_logo} alt="" />
                    </Link>
                  </div>
                  <div className="tp-footer-text">
                    <p>{info}</p>
                  </div>
                  <div className="tp-footer-contact">
                    <a href={`mailto:${email}`}><i className="flaticon-mail-1"></i>{email}</a>
                    <a href="#"><i className="flaticon-pin"></i>{address}</a>
                  </div>
                </div>
              </div>
              {footer_links.map((item, i) => (
                <div key={i} className={`col-xl-${item.id} col-lg-4 col-md-6 col-sm-6 mb-50 wow tpfadeUp`} data-wow-duration=".9s" data-wow-delay={item.delay}>
                  <div className={`tp-footer-widget footer-cols-${item.id}`}>
                    <h4 className="tp-footer-title">{item.title}</h4>
                    <div className="tp-footer-list">
                      <ul>
                        {item.links.map((link, i) => (
                          <li key={i}><Link href={link.link}><i className="fa-sharp fa-solid fa-plus"></i>{link.title}</Link></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
                <div className="tp-footer-widget footer-cols-4">
                  <h4 className="tp-footer-title">Instagram</h4>
                  <div className="tp-footer-thumb-wrap">
                    {footer_images.map((item, i) => (
                      <div key={i} className="tp-footer-thumb-box d-flex">
                        {item.items.map((img, index) => (
                          <div key={index} className="tp-footer-thumb p-relative">
                            <Image src={img} alt="" />
                            <div className="tp-footer-thumb-icon">
                              <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="tp-copyright-area tp-copyright-space black-bg-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tp-copyright-left text-center text-md-start">
                  <p> <CopyRight /> </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tp-copyright-social text-center text-md-end">
                  <TeamSocialLinks />
                </div>
              </div>
            </div>
          </div>
        </div>


      </footer>
    </>
  );
};

export default FooterOne;