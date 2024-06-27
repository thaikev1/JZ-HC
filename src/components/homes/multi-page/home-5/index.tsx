import HeaderOne from "@/layouts/headers/HeaderOne";
import HeroAreaHomeOne from "../home/HeroAreaHomeOne";
import FeatureAreaHomeOne from "../home/FeatureAreaHomeOne";
import AboutAreaHomeOne from "../home/AboutAreaHomeOne";
import ServiceAreaHomeOne from "../home/ServiceAreaHomeOne";
import ChooseAreaHomeOne from "../home/ChooseAreaHomeOne";
import StepAreaHomeOne from "../home/StepAreaHomeOne";
import VideoAreaHomeOne from "../home/VideoAreaHomeOne";
import FaqAreaHomeOne from "../home/FaqAreaHomeOne";
import TestimonialAreaHomeOne from "../home/TestimonialAreaHomeOne";
import BrandAreaHomeOne from "../home/BrandAreaHomeOne";
import TeamAreaHomeOne from "../home/TeamAreaHomeOne";
import CtaAreaHomeOne from "../home/CtaAreaHomeOne";
import BlogAreaHomeOne from "../home/BlogAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeFive = () => {
  return (
    <>
      <HeaderOne style_3={true} />
      <main>
        <HeroAreaHomeOne />
        <FeatureAreaHomeOne dark_style={true} />
        <AboutAreaHomeOne dark_style={true} />
        <ServiceAreaHomeOne dark_style={true} />
        <ChooseAreaHomeOne dark_style={true} />
        <StepAreaHomeOne dark_style={true} />
        <VideoAreaHomeOne />
        <FaqAreaHomeOne dark_style={true} /> 
        <TestimonialAreaHomeOne dark_style={true} />
        <BrandAreaHomeOne dark_style={true} /> 
        <TeamAreaHomeOne dark_style={true} />
        <CtaAreaHomeOne />
        <BlogAreaHomeOne dark_style={true} />
      </main>
      <FooterOne style_2={false} />

    </>
  );
};

export default HomeFive;


