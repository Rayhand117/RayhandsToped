/* eslint-disable react/jsx-filename-extension */
import React from 'react';

function SvgBell() {
  return (
    <svg width="24" height="24" y="48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M19 15v-4a7 7 0 0 0-5-6.71l-.02-.01L14 4a2 2 0 0 0-2-2 2 2 0 0 0-1.98 2.28l-.02.01A7 7 0 0 0 5 11v4a2 2 0 0 1-2 2v1.24a19.83 19.83 0 0 0 2.16.76c1.56.47 3.18.77 4.85.91L10 20a2 2 0 0 0 4 0v-.09c1.66-.14 3.3-.44 4.85-.91l.15-.04c.68-.21 1.35-.44 2-.72V17a2 2 0 0 1-2-2"
          id="e"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <mask id="f" fill="#fff">
          <use xlinkHref="#e" />
        </mask>
        <use fill="#9FA6B0" xlinkHref="#e" />
        <g mask="url(#f)" fill="#6C727C" fillRule="nonzero">
          <path d="M1 1h22v22H1z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBell;
