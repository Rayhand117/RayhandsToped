/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionLeft2.css';
import ProfileLeft from '../../atoms/SectionLeft/ProfileLeft';
import PlusLeft from '../../atoms/SectionLeft/PlusLeft';
import GoPay from '../../atoms/SectionLeft/GoPay';
import GoPayLater from '../../atoms/SectionLeft/GoPayLater';
import Saldo from '../../atoms/SectionLeft/Saldo';
import OvoCash from '../../atoms/SectionLeft/OvoCash';
import MemberSilver from '../../atoms/SectionLeft/MemberSilver';
import KotakMasuk from '../../atoms/SectionLeft/KotakMasuk';
import Pembelian from '../../atoms/SectionLeft/Pembelian';
import ProfilSaya from '../../atoms/SectionLeft/ProfilSaya';

function SectionLeft2() {
  return (
    <div className="SectionLeft2">
      <ProfileLeft />
      <PlusLeft />
      <GoPay />
      <GoPayLater />
      <Saldo />
      <OvoCash />
      <MemberSilver />
      <KotakMasuk />
      <Pembelian />
      <ProfilSaya />
    </div>
  );
}

export default SectionLeft2;
