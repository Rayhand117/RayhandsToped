/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import './SectionRight.css';
import React from 'react';

function UbahBio() {
  return (
    <div className="ubahBio">
      <p className="changeTitleUbah">Ubah Biodata Diri</p>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Nama
        </span>
        <span className="theSpanRight">
          Rayhand
        </span>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="theUbah">Ubah</a>
      </div>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Tanggal Lahir
        </span>
        <span className="theSpanRight">
          26 Juni 2002
        </span>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="theUbah">Ubah Tanggal Lahir</a>
      </div>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Jenis Kelamin
        </span>
        <span className="theSpanRight">
          Pria
        </span>
        <a href="http://" target="_blank" rel="noopener noreferrer" className="theUbah">Ubah</a>
      </div>
    </div>
  );
}

export default UbahBio;
