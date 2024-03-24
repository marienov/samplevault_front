import React from 'react'

import { Song } from '../Song/Song.jsx'


// import image from "../icons/Cardkit/image111145-g8le-200h.png"


import './Cardkit.css'

const Cardkit = (object) => {

  //const trendSoundsArr = [...trendSounds]
  //console.log('logging '+process.env.PUBLIC_URL)
  return (
    <div className="cardkit-container">
        {}
        {console.log(object.trendSounds)}
        {console.log(typeof(object.trendSounds))}
        {object.trendSounds.map((sound, index) => (
                    <Song number={index+1} {...sound} />
                ))}
        
    </div>
)
}

export default Cardkit
