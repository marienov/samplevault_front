import React from 'react';
import "./SampleCollection.css"
import Body1 from "./UI/body/body1"

const SampleCollection = () =>  {
    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        console.log('Выбранный файл:', file);

        const formData = new FormData();
        formData.append('audio', file);

        try {
            const response = await fetch('https://samplevault.ru/api/v1/samples/upload', {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
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
    };
    return (
        <div >
            <input type="file" onChange={handleFileUpload} id="fileInput" className="custom-file-input" />
            <label htmlFor="fileInput" className="custom-file-label">
            </label>
        
            <Body1 />
        </div>
    );
};

export default SampleCollection;
