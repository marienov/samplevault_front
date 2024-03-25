import React, { useState, useEffect } from 'react';
import "./SampleGen.css"

import Generation from "../../components/Generation/Generation"
import Cardkit from '../../components/Cardkit/Cardkit';

const SampleGen = () => {

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
            <Generation />
            <div className='sample-gen-body-recent'>
                <div className='sample-gen-text-recent-wrapper'>
                    <span className='sample-gen-text-recent'>Мои последние сгенерированные звуки: </span>
                </div>
                <Cardkit trendSounds={trendSounds}></Cardkit>
            </div>
            

        </div>
    );
};

export default SampleGen;
