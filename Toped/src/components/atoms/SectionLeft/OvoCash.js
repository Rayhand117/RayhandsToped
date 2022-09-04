/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionLeft.css';

function OvoCash() {
  return (
    <div className="Plus">
      <div className="Dompetnya">
        <div className="Wallets">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8bdce0f2.png" alt="Lapak" className="dompetPng" />
          <div className="Saldo">
            <div className="fontWallet fontMoney">OVO Cash</div>
            <div className="fontWallet fontMoney">Rp1.293</div>
          </div>
        </div>
        <div className="Nominal">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/8bdce0f2.png" alt="Lapak" className="dompetPng Sembunyi" />
          <div className="Saldo">
            <div className="fontCoins fontMoney">OVO Points</div>
            <div className="fontWallet fontMoney">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OvoCash;
