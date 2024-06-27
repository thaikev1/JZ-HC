
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ScrollspyNav from "react-scrollspy-nav";

import demo_img_1 from "@/assets/img/menu/home-1.jpg";
import demo_img_2 from "@/assets/img/menu/home-2.jpg";
import demo_img_3 from "@/assets/img/menu/home-3.jpg";
import demo_img_4 from "@/assets/img/menu/home-4.jpg";
import demo_img_5 from "@/assets/img/menu/home-5.jpg";
import React from "react";

interface DataType {
  id: number;
  title: string;
  link: string;
  img_dropdown: boolean;
  sub_menus: {
    link: string;
    title: string;
    one_page_link: string;
    demo_img: StaticImageData;
  }[];
}[]
const on_page_menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    img_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home 01", one_page_link: "/home-1-one-page", demo_img: demo_img_1, },
      { link: "/home-2", title: "Home 02", one_page_link: "/home-2-one-page", demo_img: demo_img_2, },
      { link: "/home-3", title: "Home 03", one_page_link: "/home-3-one-page", demo_img: demo_img_3, },
      { link: "/home-4", title: "Home 04", one_page_link: "/home-4-one-page", demo_img: demo_img_4, },
      { link: "/home-5", title: "Home 05", one_page_link: "/home-5-one-page", demo_img: demo_img_5, },
    ],
  },
]

type styleType = {
  onePageHomeOne?: any
  onePageHomeTwo?: any
  onePageHomeThree?: any
  onePageHomeFour?: any
  onePageHomeFive?: any
  style_2?: any
}
const OnPageMenu = ({ onePageHomeOne, onePageHomeTwo, onePageHomeThree, onePageHomeFour, style_2 }: styleType) => {

  return (
    <>
      <ul className="d-flex align-items-center">
        {on_page_menu_data.map((item, i) =>
          <li key={i} className={`${item.img_dropdown ? `${style_2 ? 'has-dropdown' : 'has-dropdown'}` : ""}`}>
            <Link href={item.link}>{item.title}</Link>
            <div className={`tp-submenu submenu has-homemenu ${style_2 ? "menu-fix-width" : ""}`}>
              <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">
                {item.sub_menus?.map((sub_item, index) =>
                  <div key={index} className="col homemenu">
                    <div className="homemenu-thumb mb-15">
                      <Image src={sub_item.demo_img} style={{ width: '100%', height: 'auto' }} alt="image" />
                      <div className="homemenu-btn">
                        {index !== 4 &&
                          <React.Fragment>
                            <Link className="tp-menu-btn" href={sub_item.link}>Multi Page</Link> {' '}
                            <Link className="tp-menu-btn" href={sub_item.one_page_link}>One Page</Link>
                          </React.Fragment>
                        }
                        {index === 4 &&
                          <Link className="tp-menu-btn" href={sub_item.link}>View Page</Link>
                        }
                      </div>
                    </div>
                    <div className="homemenu-content text-center">
                      <h4 className="homemenu-title">
                        <Link href={sub_item.link}>{sub_item.title}</Link>
                      </h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </li>
        )}
        {onePageHomeOne &&
          <ScrollspyNav
            scrollTargetIds={["About", "Service", "Project", "Blog", "Contact",]}
            offset={50}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li><a style={{ padding: 0 }} href="#about-one-page">About</a></li>
              <li><a style={{ padding: 0 }} href="#services-one-page">Service</a></li>
              <li><a style={{ padding: 0 }} href="#step-one-page">Step</a></li>
              <li><a style={{ padding: 0 }} href="#blog-one-page">Blog </a></li>
              <li><a style={{ padding: 0 }} href="#testimonial-one-page">Testimonial</a></li>
              <li><a style={{ padding: 0 }} href="#team-one-page">Team</a></li>
            </ul>
          </ScrollspyNav>
        }

        {onePageHomeTwo &&
          <ScrollspyNav
            scrollTargetIds={["Team", "Service", "Project", "Blog", "Contact",]}
            offset={-10}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li><a href="#about-one-page">About</a></li>
              <li><a href="#services-one-page">Service</a></li>
              <li><a href="#project-one-page">Project</a></li>
              <li><a href="#testimonial-one-page">Testimonial</a></li>
              <li><a href="#blog-one-page">Blog </a></li>
              <li><a href="#contact-one-page">Contact</a></li>
            </ul>
          </ScrollspyNav>
        }

        {onePageHomeThree &&
          <ScrollspyNav
            scrollTargetIds={["Service", "Project", "Shop", "Blog",]}
            offset={30}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li><a href="#about-one-page">About</a></li>
              <li><a href="#services-one-page">Service</a></li>
              <li><a href="#project-one-page">Project</a></li>
              <li><a href="#team-one-page">Team</a></li>
              <li><a href="#blog-one-page">Blog </a></li>
              <li><a href="#contact-one-page">Contact</a></li>
            </ul>
          </ScrollspyNav>
        }
        {onePageHomeFour &&
          <ScrollspyNav
            scrollTargetIds={["Service", "Project", "Shop", "Blog",]}
            offset={0}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#about-one-page">About</a></li>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#services-one-page">Service</a></li>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#project-one-page">Project</a></li>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#video-one-page">Video</a></li>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#blog-one-page">Blog</a></li>
              <li style={{margin: "0 23px"}}><a style={{ padding: 0 }} href="#footer-one-page">Footer</a></li>
            </ul>
          </ScrollspyNav>
        } 
      </ul>
    </>
  );
};

export default OnPageMenu;