

"use client"
import React from 'react';

const ContactForm = () => {
  return (
    <>
      <div className="tp-contact-form-area pb-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-contact-form-border">
                <h4 className="tp-contact-form-title">Send your message</h4>
                <form onSubmit={e => e.preventDefault()}>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-20">
                      <div className="tp-contact-form-input-box">
                        <input type="text" placeholder="Enter your name" />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg- col-md-6 col-12 mb-20">
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

export default ContactForm;