"use client";
import React from "react";
interface DataType {
  id: string;
  question: string;
  answer: string;
}
const accordion_data: DataType[] = [
  {
    id: "One",
    question: "Can I get your service wheAn I need",
    answer:
      "The transfer of an immigrant visa application from USCIS to the National takes about 30-60 days. Before phoning to confirm receipt of an application, the National Visa Center recommends waiting at least 60 days from",
  },
  {
    id: "Two",
    question:
      "Can not I just call a handyman to fix minor electrical problems?",
    answer:
      "The transfer of an immigrant visa application from USCIS to the National takes about 30-60 days. Before phoning to confirm receipt of an application, the National Visa Center recommends waiting at least 60 days from",
  },
  {
    id: "Three",
    question: "Do I need to be present when your team is working?",
    answer:
      "The transfer of an immigrant visa application from USCIS to the National takes about 30-60 days. Before phoning to confirm receipt of an application, the National Visa Center recommends waiting at least 60 days from",
  },
  {
    id: "Four",
    question: "How do you handle emergency electrical issues?",
    answer:
      "The transfer of an immigrant visa application from USCIS to the National takes about 30-60 days. Before phoning to confirm receipt of an application, the National Visa Center recommends waiting at least 60 days from",
  },
  {
    id: "Five",
    question: "Are You Licensed and Insured?",
    answer:
      "The transfer of an immigrant visa application from USCIS to the National takes about 30-60 days. Before phoning to confirm receipt of an application, the National Visa Center recommends waiting at least 60 days from",
  },
];

interface styleType {
  dark_style?: boolean;
}

const FaqAreaHomeOne = ({ dark_style }: styleType) => {
  return (
    <>
      <div
        className={`tp-faq-area p-relative pt-120 pb-120 ${
          dark_style ? "black-bg tp-black-mode" : ""
        }`}
      >
        <div
          className="tp-faq-thumb"
          style={{ backgroundImage: `url(/assets/img/cta/faq-bg.jpg)` }}
        ></div>

        {dark_style ? null : (
          <div className="tp-faq-text d-none d-xxl-block">
            <h5>OUR {"FAQ'S"}</h5>
          </div>
        )}
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-xl-6 col-lg-6 wow tpfadeLeft"
              data-wow-duration=".9s"
              data-wow-delay=".s"
            >
              <div className="tp-custom-accordion">
                <div className="accordion" id="accordionExample">
                  {accordion_data.map((item, i) => (
                    <div
                      key={i}
                      className={`accordion-items ${
                        i === 0 ? "tp-faq-active" : ""
                      }`}
                    >
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-buttons ${
                            i === 0 ? "" : "collapsed"
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={i === 0 ? "true" : "false"}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${
                          i === 0 ? "show" : ""
                        }`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{item.answer}</div>
                      </div>
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

export default FaqAreaHomeOne;
