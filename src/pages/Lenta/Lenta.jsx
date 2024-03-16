import React from 'react';
import "./Lenta.css"

import Cardkit from '../../components/UI/Cardkit/cardkit';

const Lenta = () => {
    return (
        <div className="right-selection">
            <div className="new-block">
                <div className="large-image">1</div>
                <div className="small-images">
                    <div className="small-image">2</div>
                    <div className="small-image">4</div>
                </div>
                <div className="small-images">
                    <div className="small-image">3</div>
                    <div className="small-image">5</div>
                </div>
            </div>
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