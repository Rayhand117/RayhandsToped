/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './HeaderMain.css';
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

function PngProfile() {
  return (
    <div className="profileFlex">
      <img src={ProfilePicture} alt="Rayhand" className="profil" />
      <div className="profileFont font">Rayhand</div>
    </div>
  );
}

export default PngProfile;
