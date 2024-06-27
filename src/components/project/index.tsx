import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import ProjectArea from "./ProjectArea";

const Project = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Our Project" title="Our Project" />
        <ProjectArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Project;
