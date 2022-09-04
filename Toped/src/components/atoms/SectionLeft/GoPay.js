/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './SectionLeft.css';

function GoPay() {
  return (
    <div className="Plus Minus">
      <div className="Dompetnya">
        <div className="Wallets">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9deb8233.png" alt="Lapak" className="dompetPng" />
          <div className="Saldo">
            <div className="fontWallet fontMoney">Gopay</div>
            <div className="fontWallet fontMoney">Rp5.826</div>
          </div>
        </div>
        <div className="Nominal">
          <img src="https://assets.tokopedia.net/assets-tokopedia-lite/v2/zeus/kratos/9deb8233.png" alt="Lapak" className="dompetPng Sembunyi" />
          <div className="Saldo">
            <div className="fontCoins fontMoney">Gopay Coins</div>
            <div className="fontWallet fontMoney">7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoPay;
