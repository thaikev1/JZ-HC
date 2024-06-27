

import React from 'react';
import TeamArea from './TeamArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderFour from '@/layouts/headers/HeaderFour';
import CtaAreaHomeTwo from '../homes/multi-page/home-2/CtaAreaHomeTwo';

const Team = () => {
  return (
    <>
      <HeaderFour />
      <main>
        <Breadcrumb subtitle='Our Team' title='Our Team' />
        <TeamArea />
        <CtaAreaHomeTwo about_style={true} />
      </main>
      <FooterOne style_2={true} />
    </>
  );
};

export default Team;