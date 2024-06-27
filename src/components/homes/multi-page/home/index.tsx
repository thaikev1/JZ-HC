
'use client'

import React from "react";
import HeroAreaHomeOne from "./HeroAreaHomeOne";
import HeaderOne from "@/layouts/headers/HeaderOne"; 
import AboutAreaHomeOne from "./AboutAreaHomeOne";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne";
import ChooseAreaHomeOne from "./ChooseAreaHomeOne";
import StepAreaHomeOne from "./StepAreaHomeOne";
import VideoAreaHomeOne from "./VideoAreaHomeOne";
import FaqAreaHomeOne from "./FaqAreaHomeOne";
import TestimonialAreaHomeOne from "./TestimonialAreaHomeOne";
import BrandAreaHomeOne from "./BrandAreaHomeOne";
import TeamAreaHomeOne from "./TeamAreaHomeOne";
import CtaAreaHomeOne from "./CtaAreaHomeOne";
import BlogAreaHomeOne from "./BlogAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import FeatureAreaHomeOne from "./FeatureAreaHomeOne";

const HomeOne = () => {
  return <>
    <HeaderOne />
    <main>
      <HeroAreaHomeOne />
      <FeatureAreaHomeOne />
      <AboutAreaHomeOne />
      <ServiceAreaHomeOne />
      <ChooseAreaHomeOne />
      <StepAreaHomeOne />
      <VideoAreaHomeOne />
      <FaqAreaHomeOne />
      <TestimonialAreaHomeOne />
      <BrandAreaHomeOne /> 
      <TeamAreaHomeOne />
      <CtaAreaHomeOne />
      <BlogAreaHomeOne />
    </main>
    <FooterOne style_2={false} />
  </>;
};

export default HomeOne;
