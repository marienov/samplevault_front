import React from "react";
import { ReactComponent as Same } from "./assets/same.svg";
import { ReactComponent as Download } from "./assets/download.svg";
import { ReactComponent as Sound } from "./assets/sound.svg";

const AudioButtons = () => (
  <div className="audio-buttons">
    <button
      type="button"
      className="player_but"
      aria-label="Same"
    >
      <Same />
    </button>
      <button
        type="button"
        className="player_but"
        // onClick={() => onPlayPauseClick(true)}
        aria-label="Download"
      >
        <Download />
    </button>
    <button
      type="button"
      className="player_but"
      aria-label="Sound"
    //   onClick={onNextClick}
    >
      <Sound />
    </button>
  </div>
);

export default AudioButtons;
