import React from 'react';
import "./SampleGen.css"

import Generation from "../../components/Generation/Generation"

const SampleGen = () => {
    return (
        <div className="right-selection">
            <Generation />
            <div className='container-new'>
                <span className='text-new'>Мои генерации: </span>
                Здесь нужно отобразить звуки
            </div>
            <div className='container-new'>
                <span className='text-new'>Опубликованные генерации других пользователей: </span>
                Здесь тоже звуки
            </div>
        </div>
    );
};

export default SampleGen;
