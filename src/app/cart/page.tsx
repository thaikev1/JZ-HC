import Cart from "@/components/cart";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Biddut Cart - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Cart />
    </Wrapper>
  );
};

export default index;
