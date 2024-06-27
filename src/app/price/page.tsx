import React from "react";
import Price from "@/components/price";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Biddut Price - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Price />
    </Wrapper>
  );
};

export default index;
