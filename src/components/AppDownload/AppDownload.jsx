import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <section className="app-download" id="app-download">
      {/* should be h2 */}
      <h2>
        For Better Experience Download <br /> CookHub App
      </h2>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play Store" />
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </section>
  );
};

export default AppDownload;
