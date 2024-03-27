import React from 'react';
import "./LeftMenu.css"


const LeftMenu = ({ onMenuClick }) => {
    return (
        <div className="left-selection">
            <div className="left-selection_button" onClick={() => onMenuClick('Лента')}>
                <div className="left-selection_button_img">
                    <img src={"icons/note.svg"} alt="search" />
                </div>
                <span className="left-selection_txt">Лента</span>
            </div>
            <div className="left-selection_button" onClick={() => onMenuClick('Сэмплы')}>
                <div className="left-selection_button_img">
                    <img src={"icons/sounds.svg"} alt="search" />
                </div>
                <span className="left-selection_txt">Звуки</span>
            </div>
            <div className="left-selection_button" onClick={() => onMenuClick('Треки')}>
                <div className="left-selection_button_img">
                    <img src={"icons/tracks.svg"} alt="search" />
                </div>
                <span className="left-selection_txt">Треки</span>
            </div>
        </div>
    );
};

export default LeftMenu;

