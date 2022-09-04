/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './MainHeader2.css';
import SvgToped from '../../atoms/HeaderMain/SvgToped';
import Kategori from '../../atoms/HeaderMain/Kategori';
import SearchBar from '../../atoms/HeaderMain/SearchBar';
import SearchIcon from '../../atoms/HeaderMain/SearchIcon';
// import SvgSearchButton from '../../atoms/HeaderMain/SvgSearchButton';
import SvgCart from '../../atoms/HeaderMain/SvgCart';
import SvgBell from '../../atoms/HeaderMain/SvgBell';
import SvgEnvelope from '../../atoms/HeaderMain/SvgEnvelope';
import Garis from '../../atoms/HeaderMain/Garis';
import PngToko from '../../atoms/HeaderMain/PngToko';
import PngProfile from '../../atoms/HeaderMain/PngProfile';

function MainHeader() {
  return (
    <div className="MainHeader">
      <SvgToped />
      <Kategori />
      <div className="Search">
        <SearchBar />
        <SearchIcon />
      </div>
      {/* <SvgSearchButton /> */}
      <div className="notifIcon">
        <SvgCart />
        <SvgBell />
        <SvgEnvelope />
        <Garis />
      </div>
      <PngToko />
      <PngProfile />
    </div>
  );
}

export default MainHeader;
