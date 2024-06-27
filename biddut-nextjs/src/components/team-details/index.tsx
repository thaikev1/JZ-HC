import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import TeamDetailsArea from "./TeamDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";

const TeamDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Team Details" title="Team Details" />
        <TeamDetailsArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default TeamDetails;
