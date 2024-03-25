
import React, { useState, useEffect } from 'react';
import "./Lenta.css"

import Cardkit from '../../components/Cardkit/Cardkit';
import { ImageSection } from '../../components/ImageSection/ImageSection';

const Lenta = () => {

    const [trendSounds, setTrendSounds] = useState([]);

    const handleGetTrendSounds = async () => {
        try {
            const response = await fetch('https://samplevault.ru/api/v1/sounds/random', {
                method: 'GET',
                mode: 'cors'
            });
            console.log(response)
            if (!response) {
                throw new Error('Ошибка при получении списка сэмплов');
            }

            const text = await response.text();
            if (text.trim() === '') {
                console.log('Ответ пустой');
                return;
            }

            const data = JSON.parse(text);
            console.log('Сэмплы получены: ', data);

            if (data.length === 0) {
                console.log('Список сэмплов пуст');
            }

            const Sounds = data.map(item => {
                return {
                    imageUrl: item.icon_url,
                    author: 'autor',
                    duration: item.duration,
                    title: item.title,
                };
            });
            console.log(typeof(Sounds))

            setTrendSounds(Sounds); // Обновляем состояние samples

        } catch (error) {
            console.error('Ошибка:', error);
        }

    };

    

    useEffect(() => {
        handleGetTrendSounds();
    }, []);


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
                        <Cardkit trendSounds={trendSounds}></Cardkit>
                    </div>
                    <div className="trend-block_box">
                    <h1 className="container-text">Звуки</h1>
                        <Cardkit trendSounds={trendSounds}></Cardkit>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lenta;