
'use client'

import Link from 'next/link';
import Image from 'next/image';
import NavMenu from './Menu/NavMenu';
import React, { useState } from 'react';
import Offcanvas from './Menu/Offcanvas';
import UseSticky from '@/hooks/UseSticky';
import SearchPopup from '@/components/common/SearchPopup';
import OnPageMenu from './Menu/OnPageMenu';
import OnePageOffcanvas from './Menu/OnePageOffcanvas';

const HeaderTwo = ({ onePageHomeTwo }: any) => {

  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)



  return (
    <>
      <header>
        <div className="tp-header-transparent">

          <div className="tp-header-top-area tp-header-top-wrap tp-header-top-space p-relative black-bg">
            <div className="container custom-container-1">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                  <div className="tp-header-top-left-box text-center text-md-start">
                    <ul>
                      <li>
                        <i className="flaticon-pin"></i>
                        <a href="#">76 San Fransisco Street. New York</a>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <i className="flaticon-mail-1"></i>
                        <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 d-none d-sm-block">
                  <div className="tp-header-top-right-box text-end">
                    <ul>
                      <li>
                        <div className="tp-header-top-right-text d-none d-xl-block">
                          <a href="#">Help</a>
                          <a href="#">Support</a>
                          <a href="#">Comments</a>
                        </div>
                      </li>
                      <li>
                        <div className="tp-header-top-right-social">
                          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                          <a href="#"><i className="fa-brands fa-instagram"></i></a>
                          <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                          <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div id="header-sticky" className={`tp-header-area tp-header-style-2 ${sticky ? 'header-sticky' : ''}`}>
            <div className="container custom-container-1">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-6">
                  <div className="tp-header-logo">
                    <Link href="/">
                      <Image src="/assets/img/logo/white-logo.png" width={152} height={100} style={{ height: 'auto' }} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                  <div className="tp-header-main-menu text-end text-xxl-start">
                    <nav className="tp-main-menu-content">
                      
                      {!onePageHomeTwo && <NavMenu style_2={true} />}
                      {onePageHomeTwo && <OnPageMenu onePageHomeTwo={onePageHomeTwo} />}

                    </nav>
                  </div>
                </div>
                <div className="col-xxl-5 col-xl-4 col-lg-8 col-md-8 col-6">
                  <div className="tp-header-right-box">
                    <div className="tp-header-right-action d-flex align-items-center justify-content-end">
                      <div className="tp-header-right-icon-action d-none d-lg-block">
                        <div className="tp-header-right-icon d-flex align-items-center">
                          <button className="search-open-btn" onClick={() => setSearchOpen(!searchOpen)}><i className="flaticon-loupe"></i></button>
                          <div className="tp-header-right-shop p-relative">
                            <Link href="/cart">
                              <i className="fa-light fa-bag-shopping"></i>
                              <span>2</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="tp-header-right-btn d-none d-md-block">
                        <Link className="tp-btn hover-2" href="/contact"><span>MAKE APPOINMENT</span></Link>
                      </div>
                      <div className="tp-header-right-tel-box d-none d-xxl-block">
                        <div className="tp-header-right-tel-icon d-flex align-items-center">
                          <i className="flaticon-phone-call"></i>
                          <div className="tp-header-right-tel-content">
                            <span>Talk to an expert </span>
                            <a href="tel:+997868765"><span>Free</span> +99 (786) 8765</a>
                          </div>
                        </div>
                      </div>
                      <div className="tp-header-bar d-xl-none">
                        <button className="tp-menu-bar" onClick={() => setOpenCanvas(!openCanvas)}>
                          <i className="fa-sharp fa-regular fa-bars-staggered"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>


      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      {onePageHomeTwo && <OnePageOffcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} onePageHomeTwo={onePageHomeTwo} />}




    </>
  );
};

export default HeaderTwo;