import React from 'react';
import "./Song.css"

import star from '../icons/star.svg'
import download from '../icons/download.svg'
import { SampleButton } from '../SampleInfo/SampleButton';



export function Song({number, imageUrl, title, description }) {
  
  
  return (
    

    <div className="song-container">
      <div className="song-number">
        <span className="song-number-text">{number}</span>
      </div>
      <div className="song-info" >
        <SampleButton imageUrl={imageUrl}  />
        {/* <img src={imageUrl} alt={title} className="song-image" /> */}
        <div className="song-details">
          <h2 className="song-title">{title}</h2>
          <p className="song-description">{description}</p>
        </div>
        <img
          src={star}
          alt="star01I114"
          className="song-control-img"
        />
        <img
          src={download}
          alt="download01I114"
          className="song-control-img"
        />
      </div>
    </div>
  );
};



/*
<div className="cardkit-stroke1artist">
            <div className="cardkit-frame18">
              <span className="cardkit-text02">1</span>
            </div>
            <div className="cardkit-frame20">
              <img
                // src={image}
                alt="IMAGE111145"
                className="cardkit-image11"
              />
              <div className="cardkit-frame19">
                <span className="cardkit-text03">
                  <span className="cardkit-text04">
                    <span>Ambient Electronica</span>
                    <br></br>
                    <span></span>
                  </span>
                  <span>Electronic</span>
                </span>
                <div className="cardkit-star01">
                  <img
                    src="./icons/star01i114-fzuj.svg"
                    alt="star01I114"
                    className="cardkit-star0101"
                  />
                </div>
                <div className="cardkit-download01">
                  <img
                    src="/icons/download01i114-ybo.svg"
                    alt="download01I114"
                    className="cardkit-download0101"
                  />
                </div>
              </div>
            </div>
          </div> */