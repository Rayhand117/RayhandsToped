/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Headers.css';
import UpperHeader from '../molecules/HeaderUpper2/UpperHeader';
import MainHeader from '../molecules/HeaderMain2/MainHeader';
import HeaderBottom from '../molecules/HeaderBottom2/HeaderBottom';

function Header() {
  return (
    <header>
      <div>
        <UpperHeader />
      </div>
      <div>
        <MainHeader />
      </div>
      <div>
        <HeaderBottom />
      </div>
    </header>
  );
}

export default Header;
