import React from 'react';
import { Loader } from '../static';
import './Preloader.css';

function Preloader() {
  return (
    <div className="preloaderContainer">
      <Loader />
      <h1>Freeloader</h1>
    </div>
  );
}

export default Preloader;
