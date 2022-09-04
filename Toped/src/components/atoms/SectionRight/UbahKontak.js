/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import './SectionRight.css';
import React from 'react';

function UbahKontak() {
  return (
    <div className="ubahKontak">
      <p className="changeTitleUbah">Ubah Kontak</p>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Email
        </span>
        <span className="theSpanRight">
          vian.117.bls@gmail.com
        </span>
        <span className="theVerified">
          Terverifikasi
        </span>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="theUbah">Ubah</a>
      </div>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Nomor HP
        </span>
        <span className="theSpanRight">
          6287737941843
        </span>
        <span className="theVerified">
          Terverifikasi
        </span>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="theUbah">Ubah</a>
      </div>
    </div>
  );
}

export default UbahKontak;
