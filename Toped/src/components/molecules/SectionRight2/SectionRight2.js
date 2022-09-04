/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionRight2.css';
import KratosSvg from '../../atoms/SectionRight/KratosSvg';
import BiodataDiri from '../../atoms/SectionRight/BiodataDiri';
import DaftarAlamat from '../../atoms/SectionRight/DaftarAlamat';
import Pembayaran from '../../atoms/SectionRight/Pembayaran';
import RekeningBank from '../../atoms/SectionRight/RekeningBank';
import Notifikasi from '../../atoms/SectionRight/Notifikasi';
import Keamanan from '../../atoms/SectionRight/Keamanan';
import GoogleAuth from '../../atoms/SectionRight/GoogleAuth';
import BigPicture from '../../atoms/SectionRight/BigPicture';
import UbahSandi from '../../atoms/SectionRight/UbahSandi';
import PinToped from '../../atoms/SectionRight/PinToped';
import VerifInstan from '../../atoms/SectionRight/VerifInstan';
import UbahBio from '../../atoms/SectionRight/UbahBio';
import UbahKontak from '../../atoms/SectionRight/UbahKontak';
import SafeMode from '../../atoms/SectionRight/SafeMode';

function SectionRight2() {
  return (
    <div className="sectionRightMol">
      <div>
        <KratosSvg />
      </div>
      <div className="TopBar">
        <BiodataDiri />
        <DaftarAlamat />
        <Pembayaran />
        <RekeningBank />
        <Notifikasi />
        <Keamanan />
        <GoogleAuth />
      </div>
      <div className="Biodatah">
        <div className="BioKiri">
          <BigPicture />
          <UbahSandi />
          <PinToped />
          <VerifInstan />
        </div>
        <div className="BioKanan">
          <UbahBio />
          <UbahKontak />
          <SafeMode />
        </div>
      </div>
    </div>
  );
}

export default SectionRight2;
