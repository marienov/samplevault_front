import React from 'react';
import "./SongGen.css"

import { SampleButton } from '../../FeedContent/SampleInfo/SampleButton';

export function SongGen({number, imageUrl, title, audioUrl}) {
    const handleDownload = () => {
    fetch(audioUrl.split("?")[0])
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${title}.mp3`);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Ошибка при загрузке файла:', error));
  };

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
          onClick={handleDownload}
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