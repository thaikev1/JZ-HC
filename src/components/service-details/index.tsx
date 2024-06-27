import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";

const ServiceDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Service Details" title="Service Details" />
        <ServiceDetailsArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default ServiceDetails;
