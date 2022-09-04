/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import './SectionRight.css';
import React from 'react';
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

function BigPicture() {
  return (
    <div className="gambarBesar">
      <img src={ProfilePicture} alt="Rayhand" className="bigPicture" />
      <button type="button" className="pilFoto tombol2Bio">Pilih Foto</button>
      <p>Besar file: maksimum 10.000.000 bytes (10 Megabytes). Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</p>
    </div>
  );
}

export default BigPicture;
