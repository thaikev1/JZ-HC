import React from "react";
import Wrapper from "@/layouts/Wrapper";
import Checkout from "@/components/checkout";

export const metadata = {
  title: "Biddut Checkout - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Checkout />
    </Wrapper>
  );
};

export default index;
