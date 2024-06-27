import HomeOne from "@/components/homes/multi-page/home"; 
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "JZ Heating and Cooling",
};

const index = () => {
  return (
    <Wrapper>
       <HomeOne  />
    </Wrapper>

  )
};

export default index;
