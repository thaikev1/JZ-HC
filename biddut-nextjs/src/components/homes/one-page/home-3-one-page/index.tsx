import HeaderThree from "@/layouts/headers/HeaderThree";
import HeroAreaHomeThree from "../../multi-page/home-3/HeroAreaHomeThree";
import AboutAreaHomeThree from "../../multi-page/home-3/AboutAreaHomeThree";
import ServiceAreaHomeThree from "../../multi-page/home-3/ServiceAreaHomeThree";
import ChooseAreaHomeThree from "../../multi-page/home-3/ChooseAreaHomeThree";
import ProjectAreaHomeThree from "../../multi-page/home-3/ProjectAreaHomeThree";
import ContactAreaHomeThree from "../../multi-page/home-3/ContactAreaHomeThree";
import FunfactAreaHomeThree from "../../multi-page/home-3/FunfactAreaHomeThree";
import TeamAreaHomeThree from "../../multi-page/home-3/TeamAreaHomeThree";
import TestimonialAreaHomeThree from "../../multi-page/home-3/TestimonialAreaHomeThree";
import BlogAreaHomeTwo from "../../multi-page/home-2/BlogAreaHomeTwo";
import CtaAreaHomeTwo from "../../multi-page/home-2/CtaAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeThreeOnePage = () => {
  return (
    <>
      <HeaderThree onePageHomeThree ={true} />
      <main>
        <HeroAreaHomeThree />
        <AboutAreaHomeThree />
        <ServiceAreaHomeThree />
        <ChooseAreaHomeThree />
        <ProjectAreaHomeThree />
        <ContactAreaHomeThree />
        <FunfactAreaHomeThree />
        <TeamAreaHomeThree />
        <TestimonialAreaHomeThree />
        <BlogAreaHomeTwo />
        <CtaAreaHomeTwo />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default HomeThreeOnePage;