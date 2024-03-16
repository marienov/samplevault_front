import React from 'react';
import "./SampleCollection.css"
import Body1 from "./UI/body/body1"

const SampleCollection = () => {
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log('Выбранный файл:', file);
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
