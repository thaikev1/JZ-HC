import React from "react";
import Faq from "@/components/faq";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "JZ Heating and Cooling Solutions",
};

const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;
