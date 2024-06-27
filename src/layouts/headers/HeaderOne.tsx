
'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './Menu/NavMenu';
import Image from 'next/image';
import SearchPopup from '@/components/common/SearchPopup';
import UseSticky from '@/hooks/UseSticky';
import Offcanvas from './Menu/Offcanvas';
import OnPageMenu from './Menu/OnPageMenu';
import OnePageOffcanvas from './Menu/OnePageOffcanvas';

const HeaderOne = ({ style_3, onePageHomeOne }: any) => {

  const { sticky } = UseSticky()
  const [searchOpen, setSearchOpen] = useState<boolean>(false)
  const [openCanvas, setOpenCanvas] = useState<boolean>(false)




  return (
    <>
      <header>
        <div className="tp-header-transparent">

          <div className="tp-header-top-area tp-header-top-wrap tp-header-top-space p-relative black-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                  <div className="tp-header-top-left-box text-center text-md-start">
                    <ul>
                      <li>
                        <i className="flaticon-pin"></i>
                        <a href="#">Mississauga, Brampton, GTA</a>
                      </li>
                      <li className="d-none d-md-inline-block">
                        <i className="flaticon-mail-1"></i>
                        <a href="mailto:needhelp@company.com">contact@jzhvac.ca</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 d-none d-sm-block">
                  <div className="tp-header-top-right-box text-end">
                    <ul>
                      <li>
                        <div className="tp-header-top-right-social">
                          <a target='_blank' href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                          <a target='_blank' href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="header-sticky" className={`tp-header-area tp-header-style-2 tp-header-style-3 ${sticky ? 'header-sticky' : ''}`}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                  <div className="tp-header-logo">
                    <Link href="/">
                      <Image src="/assets/img/logo/white-logo.png" width={152} height={100} style={{ height: 'auto' }} alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 d-none d-xl-block">
                  <div className="tp-header-main-menu tp-header-menu-border-2 text-end text-xxl-start">
                    <nav className="tp-main-menu-content">

                      {!onePageHomeOne && <NavMenu style_3={style_3} />}
                      {onePageHomeOne && <OnPageMenu onePageHomeOne={onePageHomeOne} />}


                    </nav>
                  </div>
                </div>
                <div className="col-xxl-2 col-xl-2 col-lg-8 col-md-8 col-6">
                  <div className="tp-header-right-box">
                    <div className="tp-header-right-action d-flex align-items-center justify-content-end">
                      <div className="tp-header-right-icon-action d-none d-lg-block">
                        <div className="tp-header-right-icon d-flex align-items-center">
                          <button className="search-open-btn" onClick={() => setSearchOpen(!searchOpen)}><i className="flaticon-loupe"></i></button>
                          <div className="tp-header-right-shop p-relative">
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
      {!onePageHomeOne && <Offcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} />}
      {onePageHomeOne && <OnePageOffcanvas openCanvas={openCanvas} setOpenCanvas={setOpenCanvas} onePageHomeOne={onePageHomeOne} />}

      
    </>
  );
};

export default HeaderOne;