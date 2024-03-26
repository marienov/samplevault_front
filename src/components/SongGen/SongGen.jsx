import React from 'react';
import "./SongGen.css"

import { SampleButton } from '../SampleInfo/SampleButton';

export function SongGen({number, imageUrl, title}) {
  return (
    <div className="song-gen-container">
      <div className="song-gen-info" >
        <div className="song-gen-number">
        <span className="song-gen-number-text">{number}</span>
      </div>
        <SampleButton imageUrl={imageUrl}  />
        <div className="song-gen-details">
          <h2 className="song-gen-title">{title}</h2>
        </div>
      </div>
        <img
          src={'icons/equalizer.svg'} 
          alt="equalizer"
          className='song-gen-equalizer'
        />
        <img
          src={'icons/star.svg'}
          alt="star"
          className="song-gen-control-img"
        />
        <img
          src={'icons/download.svg'}
          alt="download"
          className="song-gen-control-img"
        />
        <img 
          src={'icons/trash.svg'}
          alt="trash"
          className='song-gen-control-img'
        />
        <button className='song-gen-button-wrapper'>
          <img src="icons/share.svg" className='song-gen-button-img'/>
          <span className='song-gen-button-text'>Опубликовать</span>
        </button>
    </div>
  );
};