import React from 'react';
import "./Lenta.css"

import Cardkit from '../../components/UI/Cardkit/cardkit';
import { ImageSection } from '../../components/UI/ImageSection/ImageSection';

const Lenta = () => {
    return (
        <div className="right-selection">
            <ImageSection/>
            <div className='block2'>
                <div className="trend-block">
                    <div className="kit">
                        <h1 className="container-text">Киты</h1>
                        <Cardkit></Cardkit>
                    </div>
                    <div className="sample">
                    <h1 className="container-text">Сэмплы</h1>
                        <Cardkit></Cardkit>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lenta;