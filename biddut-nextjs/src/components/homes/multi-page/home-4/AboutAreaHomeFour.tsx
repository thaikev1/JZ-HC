


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import about_img from "@/assets/img/about/thumb-4.jpg";


interface DataType {
  subtitle: string;
  title: React.JSX.Element;
  des: string;
  features: {
    icon: string;
    title: string;
    info: React.JSX.Element;
  }[];
}

const about_content: DataType = {
  subtitle: `ELECTRIC VEICHALE CHARGING COMPANY`,
  title: <>We have planing for all <br />your needs</>,
  des: `Our expertise includes architecture, planning, structura interior design, sustainable design, building  pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus`,
  features: [
    { icon: `mission`, title: `Our Mission`, info: <>Delivered more than 50 design <br /> including remodeling</> },
    { icon: `lamp`, title: `Our Vission`, info: <>nteger pretium molestie nisl, non <br /> blandit lectus suscipit in </> },
  ]
}
const { subtitle, title, des, features } = about_content

const AboutAreaHomeFour = () => {
  return (
    <>
      <div id="about-one-page" className="tp-about-4-area pt-120 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 mb-50 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="tp-about-4-left-box">
                <div className="tp-about-4-section-box mb-30">
                  <span className="tp-section-subtitle">{subtitle}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
                <div className="tp-about-4-text pb-15">
                  <p>{des}</p>
                </div>
                <div className="tp-about-4__progress pb-55">
                  <div className="tp-about-4__progress-item mb-25 fix">
                    <h4>Eco friendly chargning</h4>
                    <span className="progress-count">75%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="75%"
                        aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "75%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>
                      </div>
                    </div>
                  </div>
                  <div className="tp-about-4__progress-item fix">
                    <h4>Cost Effective</h4>
                    <span className="progress-count">85%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="85%"
                        aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "85%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="tp-btn-black" href="/about"><span>KNOW MORE</span></Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 mb-50 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="tp-about-4-right-box">
                <div className="tp-about-4-thumb mb-30">
                  <Image src={about_img} style={{height:"auto"}} alt="" />
                </div>
                <div className="tp-about-4-content d-flex align-items-center justify-content-between">
                  {features.map((item, i) => (
                    <div className="tp-about-4-mission-box" key={i}>
                      <h4><i className={`flaticon-${item.icon}`}></i>{item.title}</h4>
                      <p>{item.info}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutAreaHomeFour;