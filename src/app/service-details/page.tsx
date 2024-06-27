import React from "react";
import Wrapper from "@/layouts/Wrapper";
import ServiceDetails from "@/components/service-details";

export const metadata = {
  title: "Biddut Service Details - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <ServiceDetails />
    </Wrapper>
  );
};

export default index;
