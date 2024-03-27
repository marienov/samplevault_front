import React from 'react';
import "./Lenta.css"

import Cardkit from '../../components/Cardkit/Cardkit';
import { ImageSection } from '../../components/ImageSection/ImageSection';

const Lenta = () => {
    return (
        <div className="right-selection">
            <div className='container-new'>
                <span className='text-new'>Новое</span>
                <ImageSection/>
            </div>
            <div className='container-new'>
                <span className='text-new'>В тренде</span>
                <div className="trend-block">
                    
                    <div className="trend-block_box">
                        <h1 className="container-text">Треки</h1>
                        <Cardkit></Cardkit>
                    </div>
                    <div className="trend-block_box">
                    <h1 className="container-text">Звуки</h1>
                        <Cardkit></Cardkit>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lenta;