
'use client'

import React from 'react';
import Image from 'next/image';

import team_avatar from "@/assets/img/team/team-details-1.jpg";


interface DataType {
  name: string;
  designation: string;
  info: string;
  experience: React.JSX.Element;
  email: string;
  phone: string;
  website: string;
  title_1: string;
  title_2: string;
  title_3: string;
  title_4: string; 
  description_1: React.JSX.Element;
  description_2: string;
  description_3: string;
  description_4: string;
  description_5: string;
  description_6: string;
  description_7: string;

}


const team_content: DataType = {
  name: `Paul Heyman`,
  designation: `CEO & CO Founder`,
  info: `This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service`,
  experience: <><b>Experience:</b>25 Years</>,
  email: `bidduthelp@gmail.com`,
  phone: `+1 888 098-90987`,
  website: `www.bidduthelp@gmail.com`,
  title_1: `Personal Information`,
  title_2: `Early Years`,
  title_3: `Biddut experience`,
  title_4: `Future Solution`,
  description_1: <>Since joining <b>Biddut</b> in 2009, Matilda has helped turn the company from a group of bright technology minds working with startups into a global Digital Product Engineering Services leader helping Fortune 500 companies on their innovation agenda. In Matilda s time as President and CEO of company, the company has experienced explosive growth in size and revenue - all while developing a culture that fosters engaged employees around innovation.</>,
  description_2: `Matilda is a frequent speaker on the topics of global innovation and digital disruption. She is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels, or reading in his home library.`,
  description_3: `He is a services industry veteran with a diversified wealth of expertise that includes worldwide operations, delivery, process improvements, mergers and acquisitions, and integration, as well as sales and business.`,
  description_4: `He is responsible for all delivery, operations, talent recruitment and management, and information technology. Matilda is a frequent speaker on the topics of global innovation and digital disruption`,
  description_5: `If you are going to use a passage of Lorem Ipsum, you need to be all while developing a culture that fosters engaged sure`,
  description_6: `Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business, as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels.`,
  description_7: `She is responsible for all delivery, operations, talent recruitment and management, and information technology. She is responsible for the alignment and prioritization of company investments — enabling growth, consistency, efficiency.`,
}
const {
  name,
  designation,
  info,
  experience,
  email,
  phone,
  website,
  title_1,
  title_2,
  title_3,
  title_4,
  description_1,
  description_2,
  description_3,
  description_4,
  description_5,
  description_6,
  description_7
} = team_content


const TeamDetailsArea = () => {
  return (
    <>
      <div className="tp-team-details-area pt-120 pb-120">
        <div className="container">
          <div className="tp-team-details-bg mb-80 p-relative">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-6">
                <div className="tp-team-details-thumb text-center text-md-start p-relative">
                  <Image src={team_avatar} style={{height: 'auto'}} alt="" />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-6">

                <div className="tp-team-details-info-box">
                  <div className="tp-team-details-title-box">
                    <h4 className="tp-team-details-title">{name}</h4>
                    <span>{designation}</span>
                    <p>{info}</p>
                  </div>
                  <div className="tp-team-details-personal-info-wrap">
                    <div className="tp-team-details-personal-info">
                      <span>{experience}</span>
                    </div>
                    <div className="tp-team-details-personal-info">
                      <span><b>Email Address:</b><a href={`mailto:${email}`}>{email}</a></span>
                    </div>
                    <div className="tp-team-details-personal-info">
                      <span><b>Phone Number:</b><a href={`tel:${phone}`}>{phone}</a></span>
                    </div>
                    <div className="tp-team-details-personal-info">
                      <span><b>Web Address:</b><a href={`${website}`}>{website}</a></span>
                    </div>
                  </div>
                  <div className="tp-team-details-social">
                    <a target="_blank" href="https://facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
                    <a target="_blank" href="https://pinterest.com"><i className="fa-brands fa-pinterest-p"></i></a>
                    <a target="_blank" href="https://instagram.com"><i className="fa-brands fa-instagram"></i></a>
                    <a target="_blank" href="https://twitter.com"><i className="fa-brands fa-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-team-details-text-box mb-50">
                <h4 className="tp-team-details-title">{title_1}</h4>
                <p className="pb-15">
                  {description_1}
                </p>
                <p>{description_2}</p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-team-details-text-box mb-60">
                <h4 className="tp-team-details-title">{title_2}</h4>
                <p className="pb-20">
                  {description_3}
                </p>
                <p>
                  {description_4}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tp-team-details-right-box">
                <div className="tp-team-details-text-box mb-35">
                  <h4 className="tp-team-details-title">{title_3}</h4>
                  <p>
                    {description_5}
                  </p>
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
                  <div className="tp-about-4__progress-item mb-25 fix">
                    <h4>Ac instalation</h4>
                    <span className="progress-count">50%</span>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" data-width="50%"
                        aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "50%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>
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
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-team-details-text-box mb-50">
                <h4 className="tp-team-details-title">{title_4}</h4>
                <p className="pb-20">
                  {description_6}
                </p>
                <p>
                  {description_7}
                </p>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-contact-form-bg">
                <h4 className="tp-contact-form-title">Send your message</h4>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <input type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <input type="text" placeholder="Enter your email" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <input type="text" placeholder="Your website" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <input type="text" placeholder="Your subject" />
                      </div>
                    </div>
                    <div className="col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <textarea placeholder="Write your message"></textarea>
                      </div>
                    </div>
                  </div>
                <button type="submit" className="tp-btn"><span>SEND message</span></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamDetailsArea;