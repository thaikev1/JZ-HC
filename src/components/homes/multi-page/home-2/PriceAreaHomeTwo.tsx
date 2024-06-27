

import React from 'react';


interface DataType {
  id: string;
  tab: {
    title: string;
    price: number;
    features: {
      colro: string;
      title: string;
    }[];
  }[];
}[]

const price_data: DataType[] = [
  {
    id: "home",
    tab: [
      {
        title: "Basic",
        price: 428,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
      {
        title: "Standard",
        price: 520,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
      {
        title: "Premium",
        price: 728,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
    ]
  },
  {
    id: "profile",
    tab: [
      {
        title: "Basic",
        price: 278,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
      {
        title: "Standard",
        price: 912,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
      {
        title: "Premium",
        price: 412,
        features: [
          { colro: ``, title: `Solar panel check` },
          { colro: ``, title: `Generator inspection` },
          { colro: `color`, title: `Electric cable checkup` },
          { colro: ``, title: `A/C inspection & servicing` },
          { colro: `color`, title: `Electric equipments checkup` },
        ]
      },
    ]
  },
]

const PriceAreaHomeTwo = () => {
  return (
    <>
      <div className="tp-price-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-price-section-box text-center mb-35">
                <span className="tp-section-subtitle">OUR PRICING PLANS</span>
                <h4 className="tp-section-title">Serving you 24 hours a day <br /> 365 days a year</h4>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="tp-price-tab mb-100">
                <ul className="nav nav-tab justify-content-center" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Monthly</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Yearly</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="tp-price-wrapper">
              <div className="col-xl-12">
                <div className="tp-price-tab-content">
                  <div className="tab-content" id="myTabContent">
                    {price_data.map((item, i) => (
                      <div key={i} className={`tab-pane fade ${i === 0 ? 'show active' : ''}`} id={item.id} role="tabpanel" aria-labelledby={`${item.id}-tab`}>
                        <div className="row g-0">
                          {item.tab.map((item_tab, tab_index) => (
                            <div key={tab_index} className="col-xl-4 col-lg-4 col-md-6 mb-30">
                              <div className={`tp-price-item ${tab_index === 1 ? "p-relative fix active" : ""}`}>
                                <div className="tp-price-top-box mb-20 d-flex align-items-start justify-content-between">
                                  <span>{item_tab.title}</span>
                                  <img src="assets/img/price/icon-1.png" alt="" />
                                </div>
                                <div className="tp-price-middle-box mb-85">
                                  <h5 className="tp-price-middle-number">${item_tab.price}</h5>
                                  <span>PER {tab_index === 0 ? "MONTH" : "YEAR"}</span>
                                </div>
                                <div className="tp-price-list mb-35">
                                  <ul>
                                    {item_tab.features.map((feature, index) => (
                                      <li key={index} className={`${feature.colro}`}><i className="fa-light fa-badge-check"></i>{feature.title}</li>
                                    ))}
                                  </ul>
                                </div>
                                <a className="tp-btn grey-bg" href="#"><span>CHOOSE A PLAN</span></a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceAreaHomeTwo;