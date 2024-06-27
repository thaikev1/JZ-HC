import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import CheckoutArea from "./CheckoutArea";

const Checkout = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Checkout" title="Checkout" />\
        <CheckoutArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Checkout;
