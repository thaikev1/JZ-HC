
'use client'

import React, { useState } from 'react';
import NavMenu from './Menu/NavMenu';
import Link from 'next/link';
import Image from 'next/image';
import SearchPopup from '@/components/common/SearchPopup';
import UseSticky from '@/hooks/UseSticky';
import Offcanvas from './Menu/Offcanvas';
import OnPageMenu from './Menu/OnPageMenu';
import OnePageOffcanvas from './Menu/OnePageOffcanvas';

const HeaderThree = ({ onePageHomeThree }: any) => {
  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)



  return (
    <>
      <header className="tp-header-height">

        <div className="tp-header-top-area tp-header-top-space black-bg">
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



        <div id="header-sticky" className={`tp-header-area ${sticky ? 'header-sticky' : ''}`}>
          <div className="container custom-container-1">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-4 col-md-4 col-6">
                <div className="tp-header-logo">
                  <Link href="/">
                    <Image src="/assets/img/logo/black-logo.png" width={161} height={100} style={{ objectFit: 'contain' }} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-6 d-none d-xl-block">
                <div className="tp-header-main-menu tp-header-menu-border text-end text-xxl-start">
                  <nav className="tp-main-menu-content">

                    {!onePageHomeThree && <NavMenu style_2={true} />}
                    {onePageHomeThree && <OnPageMenu onePageHomeThree={onePageHomeThree} />}

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
                      <Link className="tp-btn" href="/contact"><span>MAKE APPOINMENT</span></Link>
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

      </header>

      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />
      {onePageHomeThree && <OnePageOffcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} onePageHomeThree={onePageHomeThree} />}




    </>
  );
};

export default HeaderThree;