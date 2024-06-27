import React from "react";
import About from "@/components/about";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "JZ Heating and Cooling Solutions",
};

const index = () => {
  return (
    <Wrapper>
      <About />
    </Wrapper>
  );
};

export default index;
