import React, { useEffect, useState } from 'react';
import './style.css';

export default () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    localStorage.getItem('Check') == null
      ? setValue(0)
      : setValue(parseInt(localStorage.getItem('Check')));
  }, []);
  return (
    <div>
      <h1>Score: {value}</h1>
      <img
        src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png"
        alt="ciasteczko"
        onClick={() => {
          let newValue = value + 1;
          setValue(newValue);
          localStorage.setItem('Check', newValue);
        }}
      />
    </div>
  );
};