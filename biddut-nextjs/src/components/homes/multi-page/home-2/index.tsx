import React from "react";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo";
import OrderAreaHomeTwo from "./OrderAreaHomeTwo";
import AboutAreaHomeTwo from "./AboutAreaHomeTwo";
import ServiceAreaHomeTwo from "./ServiceAreaHomeTwo";
import PriceAreaHomeTwo from "./PriceAreaHomeTwo";
import ProjectAreaHomeTwo from "./ProjectAreaHomeTwo";
import ChooseAreaHomeTwo from "./ChooseAreaHomeTwo";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo";
import ContactAreaHomeTwo from "./ContactAreaHomeTwo";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaAreaHomeTwo from "./CtaAreaHomeTwo";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <HeroAreaHomeTwo />
        <OrderAreaHomeTwo />
        <AboutAreaHomeTwo />
        <ServiceAreaHomeTwo />
        <PriceAreaHomeTwo />
        <ProjectAreaHomeTwo />
        <ChooseAreaHomeTwo />
        <TestimonialAreaHomeTwo />
        <ContactAreaHomeTwo />
        <BlogAreaHomeTwo />
        <CtaAreaHomeTwo />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default HomeTwo;
