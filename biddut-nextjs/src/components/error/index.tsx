import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";

import error_img from "@/assets/img/error/thumb-1.png";

const Error = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="404 || error page" title="404 || error page" />
        <div className="tp-error-area pt-120 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-error-content-box text-center">
                  <div className="tp-error-thumb-box pb-75">
                    <Image src={error_img} alt="" />
                  </div>
                  <div className="tp-error-content">
                    <h4 className="tp-error-title">
                      Something went wrong here!
                    </h4>
                    <Link className="tp-btn-black red-bg-2" href="/">
                      <span>BACK TO HOME</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Error;
