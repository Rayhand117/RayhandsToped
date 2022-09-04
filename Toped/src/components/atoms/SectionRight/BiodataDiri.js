/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-filename-extension */
import './SectionRight.css';
import '../../molecules/SectionRight2/SectionRight2.css';
import { useState } from 'react';

function BiodataDiri() {
  const [isActive, setIsActive] = useState(true);

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
  };
  return (
    <div
      className="padTop"
      id={isActive ? 'padKlik' : ''}
      onClick={handleClick}
    >
      Biodata Diri
    </div>
  );
}

export default BiodataDiri;
