import FooterOne from "@/layouts/footers/FooterOne";
import HeaderFour from "@/layouts/headers/HeaderFour";
import React from "react";
import Breadcrumb from "../common/Breadcrumb";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Our Blog" title="Our Blog" />
        <BlogArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Blog;
