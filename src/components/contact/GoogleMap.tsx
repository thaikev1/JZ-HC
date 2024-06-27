

import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <div className="tp-map-area">
        <div className="tp-map__item">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146513.05509247648!2d73.19133525789097!3d54.98596156928781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafde2f601090b%3A0x5eefc33861a69b1a!2z4KaT4Kau4Ka44KeN4KaVLCBPbXNrIE9ibGFzdCwg4Kaw4Ka-4Ka24Ka_4Kav4Ka84Ka-!5e0!3m2!1sbn!2sbd!4v1689181288902!5m2!1sbn!2sbd" width="600" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default GoogleMap;