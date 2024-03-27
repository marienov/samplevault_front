import React, { useState, useEffect } from 'react';
import "./SampleGen.css"

import Generation from "../../components/Generation/Generation"
import SongGenKit from '../../components/SongKit/SongGenKit';

const SampleGen = () => {

    const [genSounds, setGenSounds] = useState([]);

    const handleGetGenSounds = async () => {
        try {
            const response = await fetch('https://samplevault.ru/api/v1/sounds/last_generated', {
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
                    audioUrl: item.audio_url
                };
            });
            console.log(typeof(Sounds))

            setGenSounds(Sounds); // Обновляем состояние samples

        } catch (error) {
            console.error('Ошибка:', error);
        }

    };

    const handleGenerateSound = async () => {
        console.log("HERE")
        try {
            const response = await fetch('https://samplevault.ru/api/v1/sounds/generate', {
                method: 'GET',
                mode: 'cors',
                // Добавьте необходимые заголовки и тело запроса, если требуется
            });

            if (!response.ok) {
                throw new Error('Ошибка при запросе на сервер');
            }

            // Получение данных из ответа
            //const data = await response.json();

            // Обновление списка genSounds с новым сгенерированным треком
            setGenSounds(prevSounds => [{
                imageUrl: "SongImgs/song1.png",
                title: "GeneratedSound",
                audioUrl: 'https://samplevault.ru/api/v1/sounds/generate'
            }, ...prevSounds]);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    useEffect(() => {
        handleGetGenSounds();
    }, []);

    return (
        <div className="right-selection">
            <Generation onGenerate={handleGenerateSound}/>

            <div className='sample-gen-body-recent'>
                <div className='sample-gen-text-recent-wrapper'>
                    <span className='sample-gen-text-recent'>Мои последние сгенерированные звуки: </span>
                </div>
                {/* <SongGen imageUrl={"SongImgs/song1.png"} number={"1"} title={"I'm a song"}/> */}
                <SongGenKit sounds={genSounds}/>

            </div>
        </div>
    );
};

export default SampleGen;
