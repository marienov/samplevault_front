import React from 'react'

import { Song } from '../Song/Song.jsx'


// import image from "../icons/Cardkit/image111145-g8le-200h.png"


import './Cardkit.css'

const Cardkit = (props) => {
  //console.log('logging '+process.env.PUBLIC_URL)
  return (
    <div className="cardkit-container">
        <Song number = '1' title = "Embient Electronica" description = "Electronica" imageUrl = '/SongImgs/song1.png' />
        <Song number = '2' title = "Ricch Rap Trap" description = "Hip Hop / Trap" imageUrl = '/SongImgs/song2.png' />
        <Song number = '3' title = "G-Funk Classic" description = "Hip Hop / Trap" imageUrl = '/SongImgs/song3.png' />
        <Song number = '4' title = "Melodic Metal" description = "Rock / Metal" imageUrl = '/SongImgs/song4.png' />
    </div>
)
}

export default Cardkit
