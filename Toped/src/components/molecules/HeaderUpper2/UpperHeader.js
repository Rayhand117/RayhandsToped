/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './HeaderUpper2.css';
import Download from '../../atoms/HeaderUpper/Download';
import MitraToped from '../../atoms/HeaderUpper/MitraToped';
import Promo from '../../atoms/HeaderUpper/Promo';
import PusatEdukasi from '../../atoms/HeaderUpper/PusatEdukasi';
import SvgHP from '../../atoms/HeaderUpper/SvgHP';
import TentangToped from '../../atoms/HeaderUpper/TentangToped';
import TopedCare from '../../atoms/HeaderUpper/TopedCare';

function UpperHeader() {
  return (
    <div className="HeaderUpper">
      <div className="HpDownload">
        <SvgHP />
        <Download />
      </div>
      <div className="TopedLink">
        <TentangToped />
        <MitraToped />
        <PusatEdukasi />
        <Promo />
        <TopedCare />
      </div>
    </div>
  );
}

export default UpperHeader;
