/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionLeft.css';

function PlusLeft() {
  return (
    <div className="Plus borderPlus">
      <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/63040a89.png" alt="Lapak" className="plusPng" />
      <div className="fontOngkir">Nikmatin Bebas Ongkir tanpa batas!</div>
      <div className="fontLangganan fontPlus">
        Langganan PLUS diskon 50%,
        <span className="duaLima fontPlus"> Rp25 rb/bulan</span>
      </div>
    </div>
  );
}

export default PlusLeft;
