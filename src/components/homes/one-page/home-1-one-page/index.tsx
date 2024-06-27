import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "../../multi-page/home/HeroAreaHomeOne";
import FeatureAreaHomeOne from "../../multi-page/home/FeatureAreaHomeOne";
import AboutAreaHomeOne from "../../multi-page/home/AboutAreaHomeOne";
import ServiceAreaHomeOne from "../../multi-page/home/ServiceAreaHomeOne";
import ChooseAreaHomeOne from "../../multi-page/home/ChooseAreaHomeOne";
import StepAreaHomeOne from "../../multi-page/home/StepAreaHomeOne";
import VideoAreaHomeOne from "../../multi-page/home/VideoAreaHomeOne";
import FaqAreaHomeOne from "../../multi-page/home/FaqAreaHomeOne";
import TestimonialAreaHomeOne from "../../multi-page/home/TestimonialAreaHomeOne";
import BrandAreaHomeOne from "../../multi-page/home/BrandAreaHomeOne";
import TeamAreaHomeOne from "../../multi-page/home/TeamAreaHomeOne";
import CtaAreaHomeOne from "../../multi-page/home/CtaAreaHomeOne";
import BlogAreaHomeOne from "../../multi-page/home/BlogAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const HomeOneSinglePage = () => {
  return (
    <>
      <HeaderOne onePageHomeOne={true} />
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

    </>
  );
};

export default HomeOneSinglePage;
