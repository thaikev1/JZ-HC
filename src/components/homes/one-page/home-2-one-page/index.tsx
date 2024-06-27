import HeaderTwo from "@/layouts/headers/HeaderTwo";
import HeroAreaHomeTwo from "../../multi-page/home-2/HeroAreaHomeTwo";
import OrderAreaHomeTwo from "../../multi-page/home-2/OrderAreaHomeTwo";
import AboutAreaHomeTwo from "../../multi-page/home-2/AboutAreaHomeTwo";
import ServiceAreaHomeTwo from "../../multi-page/home-2/ServiceAreaHomeTwo";
import PriceAreaHomeTwo from "../../multi-page/home-2/PriceAreaHomeTwo";
import ProjectAreaHomeTwo from "../../multi-page/home-2/ProjectAreaHomeTwo";
import ChooseAreaHomeTwo from "../../multi-page/home-2/ChooseAreaHomeTwo";
import TestimonialAreaHomeTwo from "../../multi-page/home-2/TestimonialAreaHomeTwo";
import ContactAreaHomeTwo from "../../multi-page/home-2/ContactAreaHomeTwo";
import BlogAreaHomeTwo from "../../multi-page/home-2/BlogAreaHomeTwo";
import CtaAreaHomeTwo from "../../multi-page/home-2/CtaAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeTwoOnePage = () => {
  return (
    <>
      <HeaderTwo onePageHomeTwo={true} />
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

export default HomeTwoOnePage;
