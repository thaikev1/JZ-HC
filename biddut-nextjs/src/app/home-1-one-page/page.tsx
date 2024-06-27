import HomeOneSinglePage from "@/components/homes/one-page/home-1-one-page";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Biddut Single Page - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <HomeOneSinglePage />
    </Wrapper>
  );
};

export default index;
