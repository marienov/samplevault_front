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
                            <h1>Kit</h1>
                            {/* <Song
                imageUrl="https://adminu.ru/wp-content/uploads/2022/12/vkontakte.jpg"
                title="Название песни"
                description="Описание песни"
            /> */}
                            {/* <Cardkit></Cardkit> */}
                            <p>Kit text line 1</p>
                            <p>Kit text line 2</p>
                            <p>Kit text line 3</p>
                        </div>
                        <div className="sample">
                            <h1>Sample</h1>
                            <p>Sample text line 1</p>
                            <p>Sample text line 2</p>
                            <p>Sample text line 3</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Lenta;