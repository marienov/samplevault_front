import React from 'react';
import "./Song.css"

const Song = ({ imageUrl, title, description }) => {
  return (
    <div className="song-container">
      <img src={imageUrl} alt={title} className="song-image" />
      <div className="song-details">
        <h2 className="song-title">{title}</h2>
        <p className="song-description">{description}</p>
      </div>
    </div>
  );
};

export default Song;
