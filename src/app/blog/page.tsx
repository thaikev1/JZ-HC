import React from "react";
import Blog from "@/components/blog";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Biddut Blog - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <Blog />
    </Wrapper>
  );
};

export default index;
