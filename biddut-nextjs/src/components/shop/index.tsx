
import HeaderFour from '@/layouts/headers/HeaderFour';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import ShopArea from './ShopArea';

const Shop = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle='Shop Grid' title='Shop Grid' />
        <ShopArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default Shop;