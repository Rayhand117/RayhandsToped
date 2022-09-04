/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-filename-extension */
import './SectionLeft.css';
import React from 'react';
import SvgRightArrow from '../HeaderMain/SvgRightArrow';

function KotakMasuk() {
  return (
    <nav>
      <div className="KiriDropdown minPadd borderAtas margAtas">
        <div className="fontDropKiri">Kotak Masuk</div>
        <SvgRightArrow className="Bulat rotasi" />
      </div>
      <span className="menu-toggle">
        <input type="checkbox" className="btnDrop" />
        <ul className="menuDrop tinggiKotakMasuk">
          <li><p>Chat</p></li>
          <li><p>Diskusi Produk</p></li>
          <li><p>Ulasan</p></li>
          <li><p>Pesan Bantuan</p></li>
          <li><p>Pesanan Dikomplain</p></li>
          <li><p>Update</p></li>
        </ul>
      </span>
    </nav>
  );
}
// Ga bisa kasi listener:v
// const menuToggle = document.querySelector('.menu-toggle input');
// const nav = document.querySelector('nav ul');

// menuToggle.addEventListener('click', () => {
//   nav.classList.toggle('rotasi');
// });

export default KotakMasuk;
