import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

import "./DragDrop.css"

const fileTypes = ["JPG", "PNG", "GIF"];
// , label, hoverTitle, classes, children, dropMessageStyle
function DragDrop({ fileTypes, label, dropMessageStyle, pathtoicon, alt}) {
    const [file, setFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
    setIsDragging(false);
    };

    const handleDrop = () => {
    setIsDragging(false);
    };

    const handleChange = (file) => {
    setIsDragging(false);
    setFile(file);
    };

    return (
    <FileUploader 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes} 
        label={label} 
        dropMessageStyle={dropMessageStyle}
        pathtoicon={pathtoicon}
        alt={alt}
        children=
        <div className={`generation-drag-drop-img-wrapper ${isDragging ? 'drag-over' : ''}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            >
            <div className='generation-drag-drop-img-text'>
                {label}
            </div>
            <div className='generation-drag-drop-img-icon'>
                <img src={pathtoicon} alt={alt} />
            </div>
        </div>
    />
    );
}

export default DragDrop;