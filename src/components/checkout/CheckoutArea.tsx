
'use client'

import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState } from 'react'; 

const CheckoutArea = () => {

  const selectHandler = (e: any) => { };
  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [coupon, setCoupon] = useState<boolean>(false)
  const [bankOpen, setBankOpen] = useState<boolean>(false)
  const [chequeOpen, setChequeOpen] = useState<boolean>(false)
  const [cashOpen, setCashOpen] = useState<boolean>(false)

  return (
    <>
      <section className="tp-checkout-area pb-160 pt-160">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="tp-checkout-verify">
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">Returning customer?  {' '}
                  <button 
                  onClick={() => setIsLogin(!isLogin)}
                  type="button" className="tp-checkout-login-form-reveal-btn">  Click here to login</button>
                  </p>

                  <div id="tpReturnCustomerLoginForm" style={{display: isLogin? 'block' : 'none'}} className="tp-return-customer">
                    <form onSubmit={e => e.preventDefault()}>

                      <div className="tp-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="tp-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>

                      <div className="tp-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div className="tp-return-customer-remeber">
                          <input id="remeber" type="checkbox" />
                            <label  htmlFor="remeber">Remember me</label>
                        </div>
                        <div className="tp-return-customer-forgot">
                          <Link href="#">Forgot Password?</Link>
                        </div>
                      </div>
                      <button type="submit" className="tp-btn"><span>Login</span></button>
                    </form>
                  </div>
                </div>
                <div className="tp-checkout-verify-item">
                  <p className="tp-checkout-verify-reveal">Have a coupon? {' '}
                  <button
                   onClick={() => setCoupon(!coupon)}
                   type="button" className="tp-checkout-coupon-form-reveal-btn">Click here to enter your code</button></p>

                  <div id="tpCheckoutCouponForm" style={{display: coupon? 'block' : 'none'}} className="tp-return-customer">
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                      </div>
                      <button type="submit" className="tp-btn"><span>Apply</span></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="tp-checkout-bill-area">
                <h3 className="tp-checkout-bill-title">Billing Details</h3>
                <div className="tp-checkout-bill-form">
                  <form onSubmit={e => e.preventDefault()}>
                    <div className="tp-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>First Name <span>*</span></label>
                            <input type="text" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Last Name <span>*</span></label>
                            <input type="text" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Company name (optional)</label>
                            <input type="text" placeholder="Example LTD." />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Country / Region </label>
                            <input type="text" placeholder="United States (US)" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Street address</label>
                            <input type="text" placeholder="House number and street name" />
                          </div>

                          <div className="tp-checkout-input">
                            <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Town / City</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>State / County</label>

                            <NiceSelect
                              className="postform"
                              options={[
                                { value: "01", text: "New York US" },
                                { value: "02", text: "Berlin Germany" },
                                { value: "03", text: "Paris France" },
                                { value: "04", text: "Tokiyo Japan" },
                              ]}
                              defaultCurrent={0}
                              onChange={selectHandler}
                              name=""
                              placeholder="" />
                        
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-checkout-input">
                            <label>Postcode ZIP</label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Phone <span>*</span></label>
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Email address <span>*</span></label>
                            <input type="email" placeholder="" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-option-wrapper">
                            <div className="tp-checkout-option">
                              <input id="create_free_account" type="checkbox" />
                                <label  htmlFor="create_free_account">Create an account?</label>
                            </div>
                            <div className="tp-checkout-option">
                              <input id="ship_to_diff_address" type="checkbox" />
                                <label  htmlFor="ship_to_diff_address">Ship to a different address?</label>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="tp-checkout-input">
                            <label>Order notes (optional)</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              
              <div className="tp-checkout-place">
                <h3 className="tp-checkout-place-title">Your Order</h3>

                <div className="tp-order-info-list">
                  <ul>

                    
                    <li className="tp-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>

                    
                    <li className="tp-order-info-list-desc">
                      <p>Xiaomi Redmi Note 9 Global V. <span> x 2</span></p>
                      <span>$274:00</span>
                    </li>
                    <li className="tp-order-info-list-desc">
                      <p>Office Chair Multifun <span> x 1</span></p>
                      <span>$74:00</span>
                    </li>
                    <li className="tp-order-info-list-desc">
                      <p>Apple Watch Series 6 Stainless  <span> x 3</span></p>
                      <span>$362:00</span>
                    </li>
                    <li className="tp-order-info-list-desc">
                      <p>Body Works Mens Collection <span> x 1</span></p>
                      <span>$145:00</span>
                    </li>

                    
                    <li className="tp-order-info-list-subtotal">
                      <span>Subtotal</span>
                      <span>$507.00</span>
                    </li>

                    
                    <li className="tp-order-info-list-shipping">
                      <span>Shipping</span>
                      <div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
                        <span>
                          <input id="flat_rate" type="radio" name="shipping" />
                            <label  htmlFor="flat_rate">Flat rate: <span>$20.00</span></label>
                        </span>
                        <span>
                          <input id="local_pickup" type="radio" name="shipping" />
                            <label  htmlFor="local_pickup">Local pickup: <span>$25.00</span></label>
                        </span>
                        <span>
                          <input id="free_shipping" type="radio" name="shipping" />
                            <label  htmlFor="free_shipping">Free shipping</label>
                        </span>
                      </div>
                    </li>

                    
                    <li className="tp-order-info-list-total">
                      <span>Total</span>
                      <span>$1,476.00</span>
                    </li>
                  </ul>
                </div>
                <div className="tp-checkout-payment">
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="back_transfer" name="payment" />
                      <label onClick={() => setBankOpen(!bankOpen)} htmlFor="back_transfer" data-bs-toggle="direct-bank-transfer">Direct Bank Transfer</label>
                      <div className={`tp-checkout-payment-desc direct-bank-transfer ${bankOpen ? "d-block" : ""}`} >
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cheque_payment" name="payment" />
                      <label onClick={() => setChequeOpen(!chequeOpen)} htmlFor="cheque_payment">Cheque Payment</label>
                      <div className={`tp-checkout-payment-desc cheque-payment ${chequeOpen ? "d-block" : ""}`} >
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                  </div>
                  <div className="tp-checkout-payment-item">
                    <input type="radio" id="cod" name="payment" />
                      <label onClick={() => setCashOpen(!cashOpen)} htmlFor="cod">Cash on Delivery</label>
                      <div className={`tp-checkout-payment-desc cash-on-delivery ${cashOpen ? "d-block" : ""}`} >
                        <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                      </div>
                  </div>
                  <div className="tp-checkout-payment-item paypal-payment">
                    <input type="radio" id="paypal" name="payment" />
                      <label htmlFor="paypal">PayPal <img src="assets/img/icon/payment-option.png" alt="" /> <a href="#">What is PayPal?</a></label>
                  </div>
                </div>
                <div className="tp-checkout-agree">
                  <div className="tp-checkout-option">
                    <input id="read_all" type="checkbox" />
                      <label htmlFor="read_all">I have read and agree to the website.</label>
                  </div>
                </div>
                <div className="tp-checkout-btn-wrapper">
                  <a href="#" className="tp-btn text-center w-100"><span>Place Order</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutArea;