import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/frontend_assets/assets';

const AppDownload = () => {
  return (
    <section className='app-download' id='app-download'>
      <p>For Better Experience Download <br /> CookHub App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </section>
  );
};

export default AppDownload;
