/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionLeft.css';
import ProfilePicture from '../../../assets/ProfilePicture.jpg';

function ProfileLeft() {
  return (
    <div className="profilKiriFlex">
      <img src={ProfilePicture} alt="Rayhand" className="profilKiri" />
      <div>
        <div className="cursorAuto">Rayhand</div>
        <div className="iconGojek">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/e69b0960.svg" alt="logo gojek" />
          Tersambung ke Gojek
        </div>
      </div>
    </div>
  );
}

export default ProfileLeft;
