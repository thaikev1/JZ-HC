

import React from 'react';

interface DataType {
  tab_id: string;
  question: string;
  ans: string;
}

const faq_data: DataType[] = [
  {
    tab_id: `One`,
    question: `How long does a service take?`,
    ans: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id Non similique culpa in provident quos sit commodi et`,
  },
  {
    tab_id: `Two`,
    question: `How do I know my package has shipped?`,
    ans: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id Non similique culpa in provident quos sit commodi et`,
  },
  {
    tab_id: `Three`,
    question: `What payment gateway you support?`,
    ans: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id Non similique culpa in provident quos sit commodi et`,
  },
  {
    tab_id: `Four`,
    question: `Why are products unavailable to so ship internationaly?`,
    ans: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id Non similique culpa in provident quos sit commodi et`,
  },
  {
    tab_id: `Five`,
    question: `How long does a service take?`,
    ans: `Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id Non similique culpa in provident quos sit commodi et`,
  },
]

const FaqFaw = () => {
  return (
    <>
      <div className="tp-faq-area tp-faq-space grey-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-5 mb-50 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="tp-faq-left-box">
                <h4 className="tp-section-title">
                  Our most popular <br /> question
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 mb-50 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="tp-custom-accordion-2">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item, i) => (
                    <div key={i} className={`accordion-items ${i === 0 ? 'tp-faq-active' : ''}`}>
                      <h2 className="accordion-header" id={`heading${item.tab_id}`}>
                        <button className={`accordion-buttons ${i === 0 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.tab_id}`} aria-expanded={`${i === 0 ? "true" : "false"}`} aria-controls={`collapse${item.tab_id}`}>
                          {item.question}
                        </button>
                      </h2>
                      <div id={`collapse${item.tab_id}`} className={`accordion-collapse collapse ${i === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading${item.tab_id}`} data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          {item.ans}
                        </div>
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

export default FaqFaw;