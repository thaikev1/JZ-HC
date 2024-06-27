
import React from 'react';
import HeaderFour from '@/layouts/headers/HeaderFour';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import ShopDetailsArea from './ShopDetailsArea';

const ShopDetails = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle='Shop Details' title='Shop Details' />
        <ShopDetailsArea />
      </main>
      <FooterOne style_2={false} />
    </>
  );
};

export default ShopDetails;