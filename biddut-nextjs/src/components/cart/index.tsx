import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import CartArea from "./CartArea";

const Cart = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Cart" title="Cart" />
        <CartArea />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default Cart;
