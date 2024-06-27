
'use client'

import Link from 'next/link';
import React from 'react';

const CartArea = () => {
  return (
    <>
      <section className="cart-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form onSubmit={e => e.preventDefault()}>
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-price">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-2.jpg" alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop-details">Ultra Powerful Router</Link>
                        </td>
                        <td className="product-price"><span className="amount">$130.00</span></td>
                        <td className="product-quantity text-center">
                          <div className="tp-shop-quantity">
                            <div className="tp-quantity p-relative">
                              <div className="qty_button cart-minus tp-cart-minus"><i className="fal fa-minus"></i></div>
                              <input type="text" value="1" />
                              <div className="qty_button cart-plus tp-cart-plus"><i className="fal fa-plus"></i></div>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">$130.00</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                      <tr>
                        <td className="product-thumbnail">
                          <Link href="/shop-details">
                            <img src="assets/img/product/product-details-3.jpg" alt="" />
                          </Link>
                        </td>
                        <td className="product-name">
                        <Link href="/shop-details">Ultra Powerful Router</Link>
                        </td>
                        <td className="product-price"><span className="amount">$120.50</span></td>
                        <td className="product-quantity text-center">
                          <div className="tp-shop-quantity">
                            <div className="tp-quantity p-relative">
                              <div className="qty_button cart-minus tp-cart-minus"><i className="fal fa-minus"></i></div>
                              <input type="text" value="1" />
                              <div className="qty_button cart-plus tp-cart-plus"><i className="fal fa-plus"></i></div>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">$120.50</span></td>
                        <td className="product-remove"><a href="#"><i className="fa fa-times"></i></a></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon d-flex align-items-center justify-content-between">
                        <input type="text" className="#coupon-code" placeholder="coupon code" />
                        <button className="tp-btn" name="apply_coupon" type="submit"><span>Apply coupon</span></button>
                      </div>
                      <div className="coupon2">
                        <button className="tp-btn" name="update_cart" type="submit"><span>Update cart</span></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-xl-5 col-lg-5 col-md-7">
                    <div className="cart-page-total">
                      <h2>Cart totals</h2>
                      <ul className="mb-20">
                        <li>Subtotal <span>$250.00</span></li>
                        <li>Total <span>$250.00</span></li>
                      </ul>
                      <Link className="tp-btn text-center w-100" href="/checkout"><span>Proceed to checkout</span></Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartArea;