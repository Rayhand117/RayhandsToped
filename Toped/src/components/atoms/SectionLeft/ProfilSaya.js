/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import './SectionLeft.css';
import React from 'react';
import SvgRightArrow from '../HeaderMain/SvgRightArrow';

function ProfilSaya() {
  return (
    <nav>
      <div className="KiriDropdown minPadd borderAtas">
        <div className="fontDropKiri">Profil Saya</div>
        <SvgRightArrow className="Bulat rotasi" />
      </div>
      <span className="menu-toggle" id="kelasDrop3">
        <input type="checkbox" className="btnDrop" />
        <ul className="menuDrop tinggiPembelian">
          <li><p>Wishlist</p></li>
          <li><p>Toko Favorit</p></li>
          <li><p>Pengaturan</p></li>
        </ul>
      </span>
    </nav>
  );
}

export default ProfilSaya;
