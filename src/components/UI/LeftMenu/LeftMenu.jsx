import React from 'react';
import "./LeftMenu.css"
import note from "../icons/note.svg"
import generate from "../icons/generate.svg"
import dotpoints from "../icons/dotpoints.svg"


const LeftMenu = () => {
    return (
        <div className="left-selection">
            <div className='but'>
                <div className='img'>
                    <img src={note} alt="search" />
                </div>
                <spam className="txt">Лента</spam>
            </div>
            <div className='but'>
                <div className='img'>
                    <img src={generate} alt="search" />
                </div>
                <spam className="txt">Сгенерировать AI</spam>
            </div>
            <div className='but'>
                <div className='img'>
                    <img src={dotpoints} alt="search" />
                </div>
                <spam className="txt">Сэмплы</spam>
            </div>
        </div>
    );
};

export default LeftMenu;
