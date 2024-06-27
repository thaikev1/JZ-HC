import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import ProjectDetailsArea from "./ProjectDetailsArea";
import RetaledProject from "./RetaledProject";

const ProjectDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Project Details" title="Project Details" />
        <ProjectDetailsArea />
        <RetaledProject />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default ProjectDetails;
