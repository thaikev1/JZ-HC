import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import HeaderFour from "@/layouts/headers/HeaderFour";
import AboutAreaHomeOne from "../homes/multi-page/home/AboutAreaHomeOne";
import ServiceAreaHomeThree from "../homes/multi-page/home-3/ServiceAreaHomeThree";
import ChooseAreaHomeOne from "../homes/multi-page/home/ChooseAreaHomeOne";
import ProjectAreaHomeThree from "../homes/multi-page/home-3/ProjectAreaHomeThree";
import TeamAreaHomeThree from "../homes/multi-page/home-3/TeamAreaHomeThree";
import CtaAreaHomeTwo from "../homes/multi-page/home-2/CtaAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";

const About = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb title="About us" subtitle="About us" />
        <AboutAreaHomeOne about_style={true} />
        <ServiceAreaHomeThree />
        <ChooseAreaHomeOne about_style={true} />
        <ProjectAreaHomeThree />
        <TeamAreaHomeThree about_style={true} />
        <CtaAreaHomeTwo about_style={true} />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default About;
