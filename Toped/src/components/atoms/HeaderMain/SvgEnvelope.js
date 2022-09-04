/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function SvgEnvelope() {
  return (
    <svg width="24" height="24" y="24" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M12 14l10-4v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l10 4zm0-2L2 8V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v2l-10 4z"
          id="c"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="d" fill="#fff">
          <use xlinkHref="#c" />
        </mask>
        <use fill="#9FA6B0" xlinkHref="#c" />
        <g mask="url(#d)" fill="#6C727C" fillRule="nonzero">
          <path d="M1 1h22v22H1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgEnvelope;
