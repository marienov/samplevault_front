import React, { useState, useEffect } from 'react';
import "./MainPage.css"
import LeftMenu from "../../components/LeftMenu/LeftMenu";

import Lenta from '../Lenta/Lenta'; 
import SampleCollection from '../SampleCollection/SampleCollection';
import SampleGen from '../SampleGen/SampleGen';
import AudioPlayer from '../../components/Player/Player';

// import tracks from "../../tracks";

const MainPage = ({selectedMenuDrop, handlerselectedMenuDrop}) => {
    
    const [playingPlaylist, setPlayingPlaylist] = useState([]); 
    const [currentMusicID, setCurrentMusicID] = useState(0); 

    const [selectedMenu, setSelectedMenu] = useState('Лента'); 

    const handleMenuClick = (menuName) => {
        handlerselectedMenuDrop(menuName);
    };

    useEffect(() => {
        setSelectedMenu(selectedMenuDrop); // Обновляем selectedMenu при изменении selectedMenuDrop
    }, [selectedMenuDrop]);

    const onStartMusic = (playlist, music_index) => {
        
        console.log('onStartMusic')
        setPlayingPlaylist(playlist);
        setCurrentMusicID(music_index);
    } 

    const renderRightSelection = () => {
        switch (selectedMenu) {
            case 'Лента':
                return <Lenta onStartMusic={onStartMusic}/>;
            case 'Сгенерировать AI':
                return <SampleGen />;
            case 'Сэмплы':
                return <SampleCollection />;
            default:
                return null;
        }
    };


    const createPlayer = ()  => {
        console.log('Player__', playingPlaylist)
        if ((playingPlaylist.length!==0) & (currentMusicID>0)) {
            console.log('in __Player__', playingPlaylist.length)
           return <AudioPlayer tracks={playingPlaylist} current_id={currentMusicID} />
        }
        else return null;
    }

    return (
        <div className="main-page">
            <LeftMenu onMenuClick={handleMenuClick} />
            {renderRightSelection()}
            {createPlayer()}
        </div>
    );
};

export default MainPage;
