import React from "react";
import Wrapper from "@/layouts/Wrapper";
import HomeThreeOnePage from "@/components/homes/one-page/home-3-one-page";

export const metadata = {
  title: "Biddut Single Page - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HomeThreeOnePage />
    </Wrapper>
  );
};

export default index;
