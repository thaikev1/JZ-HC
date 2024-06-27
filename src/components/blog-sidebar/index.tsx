
import HeaderFour from '@/layouts/headers/HeaderFour';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import BlogPostbox from './BlogPostbox';

const BlogSidebar = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle="Blog Sidebar" title="Blog Sidebar" />
        <BlogPostbox />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default BlogSidebar;