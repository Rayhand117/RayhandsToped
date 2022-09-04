/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './Sections.css';
import SectionLeft2 from '../molecules/SectionLeft2/SectionLeft2';
import SectionRight2 from '../molecules/SectionRight2/SectionRight2';

function Section() {
  return (
    <div className="Split2">
      <div className="splitLeft">
        <SectionLeft2 />
      </div>
      <div className="splitRight">
        <SectionRight2 />
      </div>
    </div>
  );
}

export default Section;
