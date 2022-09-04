/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './HeaderMain.css';
import SvgSearchButton from './SvgSearchButton';

function SearchIcon() {
  return (
    <button type="button" className="searchIconSize">
      <SvgSearchButton />
    </button>
  );
}

export default SearchIcon;
