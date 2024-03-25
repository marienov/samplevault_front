import React, { useState } from 'react';
import "./LeftMenu.css"
import note from "../icons/note.svg"
import generate from "../icons/generate.svg"
import dotpoints from "../icons/dotpoints.svg"

const LeftMenu = ({ onMenuClick }) => {
    return (
        <div className="left-selection">
            <div className="but" onClick={() => onMenuClick('Лента')}>
                <div className="img">
                    <img src={note} alt="search" />
                </div>
                <span className="txt">Лента</span>
            </div>
            <div className="but" onClick={() => onMenuClick('Сгенерировать AI')}>
                <div className="img">
                    <img src={generate} alt="search" />
                </div>
                <span className="txt">Сгенерировать AI</span>
            </div>
            <div className="but" onClick={() => onMenuClick('Сэмплы')}>
                <div className="img">
                    <img src={dotpoints} alt="search" />
                </div>
                <span className="txt">Сэмплы</span>
            </div>
        </div>
    );
};

export default LeftMenu;

