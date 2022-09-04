/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function SvgCart() {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M20.47 5a1.5 1.5 0 0 1 1.48 1.9l-1.83 6.52A3.58 3.58 0 0 1 16.66 16H8.93c-.94 0-1.76-.63-1.99-1.52L4.26 4H3.02C2.46 4 2 3.55 2 3s.46-1 1.02-1H5.1c.47 0 .88.31.99.76L6.65 5h13.82zM9 17.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          id="a"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="b" fill="#fff">
          <use xlinkHref="#a" />
        </mask>
        <use fill="#9FA6B0" xlinkHref="#a" />
        <g mask="url(#b)" fill="#6C727C" fillRule="nonzero">
          <path d="M1 1h22v22H1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgCart;
