import React from "react";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Breadcrumb from "../common/Breadcrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import BlogDetailsArea from "./BlogDetailsArea";

const BlogDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Blog Details" title="Blog Details" />
        <BlogDetailsArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default BlogDetails;
