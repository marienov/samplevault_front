// import React from 'react';
import React, { useState, useEffect } from 'react';
import "./SampleCollection.css"
import SampleItem from './UI/Sample/SampleItem';
import Body1 from "./UI/Sample/SampleItem.css"
import {ImageSection} from "../../components/ImageSection/ImageSection";
// import SoundProperties from "./UI/SoundsProperties/SoundProperties";
// import Cardkit from "../../components/Cardkit/Cardkit";

const SampleCollection = () =>  {
    const [samples, setSamples] = useState([]);

    const handleGetAllSamples = async (event) => {
        try {
            const response = await fetch('https://samplevault.ru/api/v1/sounds', {
                method: 'GET',
                mode: 'cors'
            });

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

            const updatedSamples = data.map(item => {
                return {
                    icon_url: item.icon_url,
                    title: item.title,
                    musical_instrument: item.musical_instrument,
                    genre: item.genre,
                    mood: item.mood,
                    tonality: item.tonality,
                    tempo: item.tempo,
                };
            });

            setSamples(updatedSamples); // Обновляем состояние samples
        } catch (error) {
            console.error('Ошибка при получении списка сэмплов:', error);
        }
    };

    useEffect(() => {
        handleGetAllSamples();
    }, []);

    return (
        <div className="sounds-block_box">
            <div className="sound-properties-container">
                {samples.map((sample, index) => (
                    <SampleItem
                        number = {index+1}
                        icon_url = {sample.icon_url}
                        title = {sample.title}
                        musical_instrument = {sample.musical_instrument}
                        genre = {sample.genre}
                        mood = {sample.mood}
                        tonality = {sample.tonality}
                        tempo = {sample.tempo}
                    />
                ))}
            </div>
        </div>
    );
};

export default SampleCollection;
