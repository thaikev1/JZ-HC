import HeaderFour from "@/layouts/headers/HeaderFour";
import HeroAreaHomeFour from "../../multi-page/home-4/HeroAreaHomeFour";
import FeatureAreaHomeOne from "../../multi-page/home/FeatureAreaHomeOne";
import AboutAreaHomeFour from "../../multi-page/home-4/AboutAreaHomeFour";
import ServiceAreaHomeFour from "../../multi-page/home-4/ServiceAreaHomeFour";
import StepAreaHomeOne from "../../multi-page/home/StepAreaHomeOne";
import AppAreaHomeFour from "../../multi-page/home-4/AppAreaHomeFour";
import FunfactAreaHomeFour from "../../multi-page/home-4/FunfactAreaHomeFour";
import ProjectAreaHomeFour from "../../multi-page/home-4/ProjectAreaHomeFour";
import VideoAreaHomeFour from "../../multi-page/home-4/VideoAreaHomeFour";
import BlogAreaHomeOne from "../../multi-page/home/BlogAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeFourOnePage = () => {
  return (
    <>
      <HeaderFour onePageHomeFour={true} />
      <main>
        <HeroAreaHomeFour />
        <FeatureAreaHomeOne />
        <AboutAreaHomeFour />
        <ServiceAreaHomeFour />
        <StepAreaHomeOne />
        <AppAreaHomeFour />
        <FunfactAreaHomeFour />
        <ProjectAreaHomeFour />
        <VideoAreaHomeFour />
        <BlogAreaHomeOne />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default HomeFourOnePage;
