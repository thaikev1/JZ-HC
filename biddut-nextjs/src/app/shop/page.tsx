import React from "react";
import Shop from "@/components/shop";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Biddut Shop - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Shop />
    </Wrapper>
  );
};

export default index;
