
'use client'

import shop_data from '@/data/shop_data';
import InputRange from '@/ui/InputRange';
import NiceSelect from '@/ui/NiceSelect';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const ShopArea = () => {
  const selectHandler = (e: any) => { };

  const maxPrice = 1000
  const [priceValue, setPriceValue] = useState<number[]>([150, 750]);
  const handleChanges = (val: number[]) => {
    setPriceValue(val)
  }



  return (
    <>
      <div className="tp-product__area pt-100 pb-120">
        <div className="container">
          <div className="row ">
            <div className="col-xl-3 col-lg-4">
              <div className="tp-shop-sidebar mr-10">

                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Categories</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-categories">
                      <ul>
                        <li><a href="#">Leather <span>10</span></a></li>
                        <li><a href="#">ClassclassNameic Watch <span>18</span></a></li>
                        <li><a href="#">Leather Man Wacth <span>22</span></a></li>
                        <li><a href="#">Trending Watch <span>17</span></a></li>
                        <li><a href="#">Google <span>22</span></a></li>
                        <li><a href="#">Woman Wacth <span>14</span></a></li>
                        <li><a href="#">Tables <span>19</span></a></li>
                        <li><a href="#">Electronics <span>29</span></a></li>
                        <li><a href="#">Phones <span>05</span></a></li>
                        <li><a href="#">Grocery <span>14</span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="tp-shop-widget mb-35">
                  <h3 className="tp-shop-widget-title no-border">Price Filter</h3>

                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-filter">
                      <div id="slider-range" className="mb-10"></div>
                      <div className="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">

                        <InputRange
                          MAX={maxPrice}
                          MIN={0}
                          STEP={1}
                          values={priceValue}
                          handleChanges={handleChanges}
                        />
                      </div>
                      <div className="price-filter mt-25 d-flex align-items-center justify-content-between">
                        <span className="input-range" onChange={() => handleChanges}>
                          ${priceValue[0]} - ${priceValue[1]}
                        </span>
                        <button className="tp-shop-widget-filter-btn" type="button">Filter</button>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="tp-shop-widget mb-50">
                  <h3 className="tp-shop-widget-title">Top Rated Products</h3>
                  <div className="tp-shop-widget-content">
                    <div className="tp-shop-widget-product">
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-sm-1.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.2)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <Link href="/shop-details">Smart watches wood...</Link>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">$150.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-sm-2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <Link href="/shop-details">Decoration for panda.</Link>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">$120.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-sm-3.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(3.5)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <Link href="/shop-details">Trending Watch for Man</Link>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">$99.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="tp-shop-widget-product-item d-flex align-items-center">
                        <div className="tp-shop-widget-product-thumb">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-sm-4.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="tp-shop-widget-product-content">
                          <div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
                            <div className="tp-shop-widget-product-rating">
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                              <span>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z" fill="currentColor" />
                                </svg>
                              </span>
                            </div>
                            <div className="tp-shop-widget-product-rating-number">
                              <span>(4.8)</span>
                            </div>
                          </div>
                          <h4 className="tp-shop-widget-product-title">
                            <Link href="/shop-details">Minimal Backpack.</Link>
                          </h4>
                          <div className="tp-shop-widget-product-price-wrapper">
                            <span className="tp-shop-widget-product-price">$165.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tp-shop-top pb-15">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                    <div className="tp-product__text">
                      <span>Showing 12 of 120 results</span>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                    <div className="tp-product__filter">

                      <NiceSelect
                        className="postform"
                        options={[
                          { value: "01", text: "Default Sorting" },
                          { value: "02", text: "Low to Hight" },
                          { value: "03", text: "High to Low" },
                          { value: "04", text: "New Added" },
                          { value: "04", text: "On Sale" },
                        ]}
                        defaultCurrent={0}
                        onChange={selectHandler}
                        name=""
                        placeholder="" />

                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {shop_data.map((item, i) => (
                  <div key={i} className="col-xl-4 col-md-6 col-sm-6 infinite-item">
                    <div className="tp-product-item-2 mb-40">
                      <div className="tp-product-thumb-2 p-relative z-index-1 fix w-img">
                        <Link href="/shop-details">
                          <Image width={100} height={100} style={{ height: 'auto' }} src={item.img} alt="" />
                        </Link>
                        <div className="tp-product-action-2 tp-product-action-blackStyle">
                          <div className="tp-product-action-item-2 d-flex flex-column">
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-cart-btn">
                              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.34706 4.53799L3.85961 10.6239C3.89701 11.0923 4.28036 11.4436 4.74871 11.4436H4.75212H14.0265H14.0282C14.4711 11.4436 14.8493 11.1144 14.9122 10.6774L15.7197 5.11162C15.7384 4.97924 15.7053 4.84687 15.6245 4.73995C15.5446 4.63218 15.4273 4.5626 15.2947 4.54393C15.1171 4.55072 7.74498 4.54054 3.34706 4.53799ZM4.74722 12.7162C3.62777 12.7162 2.68001 11.8438 2.58906 10.728L1.81046 1.4837L0.529505 1.26308C0.181854 1.20198 -0.0501969 0.873587 0.00930333 0.526523C0.0705036 0.17946 0.406255 -0.0462578 0.746256 0.00805037L2.51426 0.313534C2.79901 0.363599 3.01576 0.5995 3.04042 0.888012L3.24017 3.26484C15.3748 3.26993 15.4139 3.27587 15.4726 3.28266C15.946 3.3514 16.3625 3.59833 16.6464 3.97849C16.9303 4.35779 17.0493 4.82535 16.9813 5.29376L16.1747 10.8586C16.0225 11.9177 15.1011 12.7162 14.0301 12.7162H14.0259H4.75402H4.74722Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6629 7.67446H10.3067C9.95394 7.67446 9.66919 7.38934 9.66919 7.03804C9.66919 6.68673 9.95394 6.40161 10.3067 6.40161H12.6629C13.0148 6.40161 13.3004 6.68673 13.3004 7.03804C13.3004 7.38934 13.0148 7.67446 12.6629 7.67446Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.38171 15.0212C4.63756 15.0212 4.84411 15.2278 4.84411 15.4836C4.84411 15.7395 4.63756 15.9469 4.38171 15.9469C4.12501 15.9469 3.91846 15.7395 3.91846 15.4836C3.91846 15.2278 4.12501 15.0212 4.38171 15.0212Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.38082 15.3091C4.28477 15.3091 4.20657 15.3873 4.20657 15.4833C4.20657 15.6763 4.55592 15.6763 4.55592 15.4833C4.55592 15.3873 4.47687 15.3091 4.38082 15.3091ZM4.38067 16.5815C3.77376 16.5815 3.28076 16.0884 3.28076 15.4826C3.28076 14.8767 3.77376 14.3845 4.38067 14.3845C4.98757 14.3845 5.48142 14.8767 5.48142 15.4826C5.48142 16.0884 4.98757 16.5815 4.38067 16.5815Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9701 15.0212C14.2259 15.0212 14.4333 15.2278 14.4333 15.4836C14.4333 15.7395 14.2259 15.9469 13.9701 15.9469C13.7134 15.9469 13.5068 15.7395 13.5068 15.4836C13.5068 15.2278 13.7134 15.0212 13.9701 15.0212Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9692 15.3092C13.874 15.3092 13.7958 15.3874 13.7958 15.4835C13.7966 15.6781 14.1451 15.6764 14.1443 15.4835C14.1443 15.3874 14.0652 15.3092 13.9692 15.3092ZM13.969 16.5815C13.3621 16.5815 12.8691 16.0884 12.8691 15.4826C12.8691 14.8767 13.3621 14.3845 13.969 14.3845C14.5768 14.3845 15.0706 14.8767 15.0706 15.4826C15.0706 16.0884 14.5768 16.5815 13.969 16.5815Z" fill="currentColor" />
                              </svg>
                              <span className="tp-product-tooltip tp-product-tooltip-right">Add to Cart</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-quick-view-btn" data-bs-toggle="modal" data-bs-target="#producQuickViewModal">
                              <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99948 5.06828C7.80247 5.06828 6.82956 6.04044 6.82956 7.23542C6.82956 8.42951 7.80247 9.40077 8.99948 9.40077C10.1965 9.40077 11.1703 8.42951 11.1703 7.23542C11.1703 6.04044 10.1965 5.06828 8.99948 5.06828ZM8.99942 10.7482C7.0581 10.7482 5.47949 9.17221 5.47949 7.23508C5.47949 5.29705 7.0581 3.72021 8.99942 3.72021C10.9407 3.72021 12.5202 5.29705 12.5202 7.23508C12.5202 9.17221 10.9407 10.7482 8.99942 10.7482Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.41273 7.2346C3.08674 10.9265 5.90646 13.1215 8.99978 13.1224C12.0931 13.1215 14.9128 10.9265 16.5868 7.2346C14.9128 3.54363 12.0931 1.34863 8.99978 1.34773C5.90736 1.34863 3.08674 3.54363 1.41273 7.2346ZM9.00164 14.4703H8.99804H8.99714C5.27471 14.4676 1.93209 11.8629 0.0546754 7.50073C-0.0182251 7.33091 -0.0182251 7.13864 0.0546754 6.96883C1.93209 2.60759 5.27561 0.00288103 8.99714 0.000185582C8.99894 -0.000712902 8.99894 -0.000712902 8.99984 0.000185582C9.00164 -0.000712902 9.00164 -0.000712902 9.00254 0.000185582C12.725 0.00288103 16.0676 2.60759 17.945 6.96883C18.0188 7.13864 18.0188 7.33091 17.945 7.50073C16.0685 11.8629 12.725 14.4676 9.00254 14.4703H9.00164Z" fill="currentColor" />
                              </svg>
                              <span className="tp-product-tooltip tp-product-tooltip-right">Quick View</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-to-wishlist-btn">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60355 7.98635C2.83622 11.8048 7.7062 14.8923 9.0004 15.6565C10.299 14.8844 15.2042 11.7628 16.3973 7.98985C17.1806 5.55102 16.4535 2.46177 13.5644 1.53473C12.1647 1.08741 10.532 1.35966 9.40484 2.22804C9.16921 2.40837 8.84214 2.41187 8.60476 2.23329C7.41078 1.33952 5.85105 1.07778 4.42936 1.53473C1.54465 2.4609 0.820172 5.55014 1.60355 7.98635ZM9.00138 17.0711C8.89236 17.0711 8.78421 17.0448 8.68574 16.9914C8.41055 16.8417 1.92808 13.2841 0.348132 8.3872C0.347252 8.3872 0.347252 8.38633 0.347252 8.38633C-0.644504 5.30321 0.459792 1.42874 4.02502 0.284605C5.69904 -0.254635 7.52342 -0.0174044 8.99874 0.909632C10.4283 0.00973263 12.3275 -0.238878 13.9681 0.284605C17.5368 1.43049 18.6446 5.30408 17.6538 8.38633C16.1248 13.2272 9.59485 16.8382 9.3179 16.9896C9.21943 17.0439 9.1104 17.0711 9.00138 17.0711Z" fill="currentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.203 6.67473C13.8627 6.67473 13.5743 6.41474 13.5462 6.07159C13.4882 5.35202 13.0046 4.7445 12.3162 4.52302C11.9689 4.41097 11.779 4.04068 11.8906 3.69666C12.0041 3.35175 12.3724 3.16442 12.7206 3.27297C13.919 3.65901 14.7586 4.71561 14.8615 5.96479C14.8905 6.32632 14.6206 6.64322 14.2575 6.6721C14.239 6.67385 14.2214 6.67473 14.203 6.67473Z" fill="currentColor" />
                              </svg>
                              <span className="tp-product-tooltip tp-product-tooltip-right">Add To Wishlist</span>
                            </button>
                            <button type="button" className="tp-product-action-btn-2 tp-product-add-to-compare-btn">
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4144 6.16828L14 3.58412L11.4144 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.48883 3.58374L14 3.58374" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4.07446 8.32153L1.48884 10.9057L4.07446 13.4898" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14 10.9058H1.48883" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              <span className="tp-product-tooltip tp-product-tooltip-right">Add To Compare</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="tp-product-content-2 pt-15">
                        <div className="tp-product-tag-2">
                          <a href="#">{item.product_tag}</a>
                        </div>
                        <h3 className="tp-product-title-2">
                          <Link href="/shop-details">{item.title}</Link>
                        </h3>
                        <div className="tp-product-rating-icon">
                          <Rating allowFraction size={16} initialValue={item.ratting} readonly={true} />
                        </div>
                        <div className="tp-product-price-wrapper-2">
                          <span className="tp-product-price-2 new-price">${item.new_price}.00</span> {' '}
                          <span className="tp-product-price-2 old-price">${item.old_price}.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-xl-12">
                  <div className="basic-pagination mt-20">
                    <nav>
                      <ul>
                        <li className="active">
                          <Link href="/blog">1</Link>
                        </li>
                        <li>
                          <Link href="/blog">2</Link>
                        </li>
                        <li>
                          <Link href="/blog">3</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <span className="current"><i className="fa-regular fa-arrow-right"></i></span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
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

export default ShopArea;