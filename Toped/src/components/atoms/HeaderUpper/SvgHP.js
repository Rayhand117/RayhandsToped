/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function SvgHP() {
  return (
    <svg width="24" height="24" y="72" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M9 4H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM8 2h8a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z"
          id="g"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="h" fill="#fff">
          <use xlinkHref="#g" />
        </mask>
        <use fill="#9FA6B0" xlinkHref="#g" />
        <g mask="url(#h)" fill="#6C727C" fillRule="nonzero">
          <path d="M1 1h22v22H1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgHP;
