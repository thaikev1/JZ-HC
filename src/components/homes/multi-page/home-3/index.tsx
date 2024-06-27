import HeaderThree from "@/layouts/headers/HeaderThree";
import HeroAreaHomeThree from "./HeroAreaHomeThree";
import AboutAreaHomeThree from "./AboutAreaHomeThree";
import ServiceAreaHomeThree from "./ServiceAreaHomeThree";
import ChooseAreaHomeThree from "./ChooseAreaHomeThree";
import ProjectAreaHomeThree from "./ProjectAreaHomeThree";
import ContactAreaHomeThree from "./ContactAreaHomeThree";
import FunfactAreaHomeThree from "./FunfactAreaHomeThree";
import TeamAreaHomeThree from "./TeamAreaHomeThree";
import TestimonialAreaHomeThree from "./TestimonialAreaHomeThree";
import BlogAreaHomeTwo from "../home-2/BlogAreaHomeTwo";
import FooterOne from "@/layouts/footers/FooterOne";
import CtaAreaHomeTwo from "../home-2/CtaAreaHomeTwo";



const HomeThree = () => {
  return (
    <>
      <HeaderThree />
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

export default HomeThree;




