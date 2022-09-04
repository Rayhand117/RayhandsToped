/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import './SectionRight.css';
import React from 'react';

function SafeMode() {
  return (
    <div className="safeMode">
      <p className="changeTitleUbah">Safe Mode</p>
      <p className="fiturSafe">Fitur ini akan otomatis menyaring hasil pencarian sesuai kebijakan dan batasan usia pengguna</p>
      <div className="theBioDiv">
        <span className="theSpanLeft">
          Aktifkan
        </span>
        <span className="theSpanRight minLeft">
          <label className="switch">
            <input type="checkbox" role="switch" className="inputToggle" />
            <span className="slider" />
          </label>
        </span>
      </div>
    </div>
  );
}

export default SafeMode;
