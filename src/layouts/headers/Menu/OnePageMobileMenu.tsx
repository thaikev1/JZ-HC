"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
// internal  
import menu_data from "./MenuData";
import ScrollspyNav from "react-scrollspy-nav";


const OnePageMobileMenu = ({ onePageHomeOne, onePageHomeTwo, onePageHomeThree, onePageHomeFour }: any) => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <ul>
        {menu_data.map((menu, i) => (
          <React.Fragment key={i}>
            {menu.img_dropdown &&
              <li className="has-dropdown tp-static">
                <Link href={menu.link}>{menu.title}
                  <button className={`dropdown-toggle-btn ${navTitle === menu.title ? "dropdown-opened" : ""}`}
                    onClick={() => openMobileMenu(menu.title)}
                    style={{ fontSize: "18px", cursor: "pointer" }}>
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </Link>
                <div className="tp-submenu has-homemenu" style={{ display: navTitle === menu.title ? "block" : "none" }}>
                  <div className="row gx-6 row-cols-1 row-cols-md-2 row-cols-xl-5">

                    {menu.sub_menus?.map((sub_menu, index) =>
                      <div key={index} className="col homemenu">
                        <div className="homemenu-thumb mb-15">
                          <Image src={sub_menu.demo_img} style={{ width: '100%', height: 'auto' }} alt="image-title" />
                          <div className="homemenu-btn">
                            {index !== 4 &&
                              <React.Fragment>
                                <Link className="tp-menu-btn" href={sub_menu.link}>Multi Page</Link> {' '}
                                <Link className="tp-menu-btn" href={sub_menu.one_page_link}>One Page</Link>
                              </React.Fragment>
                            }
                            {index === 4 &&
                              <Link className="tp-menu-btn" href={sub_menu.link}>View Page</Link>
                            }
                          </div>
                        </div>

                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title text-white">
                            <Link href={sub_menu.link}>{sub_menu.title}</Link>
                          </h4>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            }
          </React.Fragment>
        ))} 

        {onePageHomeOne &&
          <ScrollspyNav
            scrollTargetIds={["About", "Service", "Project", "Blog", "Contact",]}
            offset={50}
            activeNavClass="is-active"
            scrollDuration="1000"
            headerBackground="true"
          >
            <ul>
              <li><a href="#about-one-page">About</a></li>
              <li><a href="#services-one-page">Service</a></li>
              <li><a href="#step-one-page">Step</a></li>
              <li><a href="#blog-one-page">Blog </a></li>
              <li><a href="#testimonial-one-page">Testimonial</a></li>
              <li><a href="#team-one-page">Team</a></li>
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
              <li><a href="#about-one-page">About</a></li>
              <li><a href="#services-one-page">Service</a></li>
              <li><a href="#project-one-page">Project</a></li>
              <li><a href="#video-one-page">Video</a></li>
              <li><a href="#blog-one-page">Blog</a></li>
              <li><a href="#footer-one-page">Footer</a></li>
            </ul>
          </ScrollspyNav>
        }
      </ul>
    </>
  );
};

export default OnePageMobileMenu;



