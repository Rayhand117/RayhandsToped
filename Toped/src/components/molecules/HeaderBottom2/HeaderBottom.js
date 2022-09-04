/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './HeaderBottom2.css';
import Iphone from '../../atoms/HeaderBottom/Iphone';
import Karpet from '../../atoms/HeaderBottom/Karpet';
import AirPurifier from '../../atoms/HeaderBottom/AirPurifier';
import Samsung from '../../atoms/HeaderBottom/Samsung';
import SepatuBola from '../../atoms/HeaderBottom/SepatuBola';
import SSD from '../../atoms/HeaderBottom/SSD';

function HeaderBottom() {
  return (
    <div className="HeaderBottom">
      <Iphone />
      <Karpet />
      <AirPurifier />
      <Samsung />
      <SepatuBola />
      <SSD />
    </div>
  );
}

export default HeaderBottom;
