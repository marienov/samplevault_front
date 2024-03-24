// import React from 'react';
import React, { useState, useEffect } from 'react';
import "./SampleCollection.css"
import SampleItem from './UI/Sample/SampleItem';
import Body1 from "./UI/body/body1"

const SampleCollection = () =>  {
    const [samples, setSamples] = useState([]);

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        console.log('Выбранный файл:', file);

        const formData = new FormData();
        formData.append('audio', file);

        try {
            const response = await fetch('https://samplevault.ru/api/v1/sounds/upload', {
                method: 'POST',
                body: formData,
                mode: 'cors'
            });
            console.log(response)
            if (!response) {
                throw new Error('Ошибка при загрузке файла');
            }

            const data = await response.json();
            console.log('Файл успешно загружен:', data);
        } catch (error) {
            console.error('Ошибка:', error);
        }

        // TODO Сделать, чтобы sample с ответа добавлять в массив samples, а не ходить за целым списком
        handleGetAllSamples();
    };

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
                    imageUrl: item.icon_url,
                    genre: item.genre,
                    duration: item.duration,
                    soundName: item.title,
                    musicStyle: item.musical_instrument,
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
        <div>
            <input type="file" onChange={handleFileUpload} id="fileInput" className="custom-file-input"/>
            <label htmlFor="fileInput" className="custom-file-label">
            </label>
            <div>
                {samples.map((sample, index) => (
                    <SampleItem key={index} {...sample} />
                ))}
            </div>
        </div>
    );
};

export default SampleCollection;
