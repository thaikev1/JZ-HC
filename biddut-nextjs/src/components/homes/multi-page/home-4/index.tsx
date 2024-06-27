import HeaderFour from "@/layouts/headers/HeaderFour";
import HeroAreaHomeFour from "./HeroAreaHomeFour";
import FeatureAreaHomeOne from "../home/FeatureAreaHomeOne";
import ServiceAreaHomeFour from "./ServiceAreaHomeFour";
import StepAreaHomeOne from "../home/StepAreaHomeOne";
import AppAreaHomeFour from "./AppAreaHomeFour";
import AboutAreaHomeFour from "./AboutAreaHomeFour";
import FunfactAreaHomeFour from "./FunfactAreaHomeFour";
import ProjectAreaHomeFour from "./ProjectAreaHomeFour";
import VideoAreaHomeFour from "./VideoAreaHomeFour";
import BlogAreaHomeOne from "../home/BlogAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";


const HomeFour = () => {
  return (
    <>
      <HeaderFour />
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

export default HomeFour;
