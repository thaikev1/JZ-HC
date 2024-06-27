import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import FeatureAreaHomeOne from "../homes/multi-page/home/FeatureAreaHomeOne";
import ServiceArea from "./ServiceArea";
import FaqBrand from "../faq/FaqBrand";

const Service = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Our Service" title="Our Service" />
        <FeatureAreaHomeOne style_2={true} />
        <ServiceArea />
        <FaqBrand style_2={true} />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Service;
