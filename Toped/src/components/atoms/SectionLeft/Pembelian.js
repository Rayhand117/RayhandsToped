/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import './SectionLeft.css';
import React from 'react';
import SvgRightArrow from '../HeaderMain/SvgRightArrow';

function Pembelian() {
  return (
    <nav>
      <div className="KiriDropdown minPadd borderAtas">
        <div className="fontDropKiri">Pembelian</div>
        <SvgRightArrow className="Bulat rotasi" />
      </div>
      <span className="menu-toggle">
        <input type="checkbox" className="btnDrop" />
        <ul className="menuDrop tinggiPembelian">
          <li><p>Menunggu Pembayaran</p></li>
          <li><p>Daftar Transaksi</p></li>
        </ul>
      </span>
    </nav>
  );
}

export default Pembelian;
