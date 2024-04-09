import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LeftMenu from './components/LeftMenu/LeftMenu';
// import MainContent from './components/MainContent/MainContent';
// import Player from './components/Player/Player';
import Feed from './containers/Feed/Feed'
import SoundGen from './containers/SoundGen/SoundGen'
import SoundCollection from './containers/SoundCollection/SoundCollection';
import AudioPlayer from './components/Player/Player';

const playlist = [
  { name: "Песня 1", src: "https://samplevault.ru/sounds/Nice_Strum_A.wav" },
  { name: "Песня 2", src: "https://samplevault.ru/sounds/Gentle_Riff_C.wav" },
  { name: "Песня 3", src: "https://samplevault.ru/sounds/Nice_Strum_D.wav" },
  // Добавьте столько треков, сколько необходимо
];

function App() {
  
  return (
    <Router>
        <Navbar />
          <div className={"main-page"}>
            <LeftMenu />
            <Routes>
              <Route exact path="/" element={<Navigate to="/feed" />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/generate" element={<SoundGen />} />
              <Route path="/sound_collection" element={<SoundCollection />} /> 
              {/*    <Route path="/tracks" element={TO BE} />
                  <Route path="/upload" element={TO BE} />
                  <Route path="/daw" element={TO BE} />
                  <Route path="/profile" element={TO BE} />
              */}
            </Routes> 
          </div>

          <AudioPlayer initialPlaylist={playlist} />

    </Router>
  );
}

export default App;