import React from 'react'

import { SongGen } from '../SongGen/SongGen'

import './SongGenKit.css'

const SongGenKit = (object) => {

  return (
    <div className="songgen-kit-container">
        {console.log(object.sounds)}
        {console.log(typeof(object.sounds))}
        {object.sounds.map((sound, index) => (
                    <SongGen 
                      number={index+1}
                      imageUrl={sound.imageUrl}
                      title={sound.title}
                      audioUrl={sound.audioUrl}
                    />
                ))}
    </div>
)
}

export default SongGenKit