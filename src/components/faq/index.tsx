import React from "react";
import FaqFaw from "./FaqFaw";
import FaqArea from "./FaqArea";
import FaqBrand from "./FaqBrand";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CtaAreaHomeTwo from "../homes/multi-page/home-2/CtaAreaHomeTwo";

const Faq = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb subtitle="Our Faq" title="Our Faq" />
        <FaqArea />
        <FaqBrand />
        <CtaAreaHomeTwo about_style={true} faq_style={true} />
        <FaqFaw />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Faq;
