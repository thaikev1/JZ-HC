

import Link from 'next/link';
import React from 'react';

interface DataType {
  title: string;
  subtitle: string;
}

const Breadcrumb = ({ title, subtitle }: DataType) => {
  return (
    <>
      <div className="breadcrumb__area breadcrumb__overlay breadcrumb__height p-relative fix" style={{ backgroundImage: `url(/assets/img/breadcurmb/breadcurmb.jpg)` }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content z-index d-flex justify-content-between align-items-end">
                <div className="breadcrumb__section-title-box">
                  <h4 className="breadcrumb__subtitle">BIDDUT ELCETRIC SERVICE</h4>
                  <h3 className="breadcrumb__title">{title}</h3>
                </div>
                <div className="breadcrumb__list">
                  <span><Link href="/">Home</Link></span>
                <span className="dvdr"><i> / </i></span> 
                  <span>{subtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;