'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import MobileMenu from './MobileMenu';



const Offcanvas = ({ openCanvas, setOpenCanvas }: any) => {
  const [nevIcon, setNevIcon] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setNevIcon(windowWidth <= 1199);
    };
    // Call the function once to set the initial value based on the window width
    handleResize();
    // Add event listener for the 'resize' event
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])
  return (
    <>
      <div className="tpoffcanvas-area">
        <div className={`tpoffcanvas ${openCanvas ? "opened" : ""}`}>
          <div className="tpoffcanvas__close-btn" onClick={() => setOpenCanvas(false)}>
            <button className="close-btn"><i className="fal fa-times"></i></button>
          </div>
          <div className="tpoffcanvas__logo">
            <Link href="/">
              <Image src="/assets/img/logo/white-logo.png" width={152} height={100} style={{ height: 'auto' }} alt="" />
            </Link>
          </div>
          <div className="tpoffcanvas__title">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima incidunt eaque ab cumque, porro maxime autem sed.</p>
          </div>
          <div className="tp-main-menu-mobile d-xl-none">
            <nav className='tp-main-menu-content'>
              <MobileMenu />
            </nav>
          </div>
          <div className="tpoffcanvas__contact-info">
            <div className="tpoffcanvas__contact-title">
              <h5>Contact us</h5>
            </div>
            <ul>
              <li>
                <i className="fa-light fa-location-dot"></i>
                <a href="https://www.google.com/maps/@23.8223586,90.3661283,15z" target="_blank">Melbone st, Australia, Ny 12099</a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:solaredge@gmail.com">themepure@gmail.com</a>
              </li>
              <li>
                <i className="fal fa-phone-alt"></i>
                <a href="tel:+48555223224">+48 555 223 224</a>
              </li>
            </ul>
          </div>
          <div className="tpoffcanvas__input">
            <div className="tpoffcanvas__input-title">
              <h4>Get UPdate</h4>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="p-relative">
                <input type="text" placeholder="Enter mail" />
                <button>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
          <div className="tpoffcanvas__social">
            <div className="social-icon">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className={`body-overlay ${openCanvas ? "apply" : ""}`} onClick={() => setOpenCanvas(false)}></div>
    </>
  );
};

export default Offcanvas;