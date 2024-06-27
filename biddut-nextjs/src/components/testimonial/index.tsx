import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import TestimonialArea from "./TestimonialArea";
import HeaderFour from "@/layouts/headers/HeaderFour";
import TestimonialBrand from "./TestimonialBrand";
import FooterOne from "@/layouts/footers/FooterOne";

const Testimonial = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Testimonial" title="Testimonial" />
        <TestimonialArea />
        <TestimonialBrand />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Testimonial;
