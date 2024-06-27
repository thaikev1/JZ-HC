import React from "react";
import Wrapper from "@/layouts/Wrapper";
import TeamDetails from "@/components/team-details";

export const metadata = {
  title: "Biddut Team Details - Electricity Services React Next js Template",
};

const index = () => {
  return (
    <Wrapper>
      <TeamDetails />
    </Wrapper>
  );
};

export default index;
