
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import CtaAreaHomeTwo from '../homes/multi-page/home-2/CtaAreaHomeTwo';
import PriceAreaHomeTwo from '../homes/multi-page/home-2/PriceAreaHomeTwo';

const Price = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle='Pricing Table' title='Pricing Table' />
        <PriceAreaHomeTwo  />
        <CtaAreaHomeTwo about_style={true} />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default Price;