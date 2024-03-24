import React, { useState } from 'react';
import "./Generation.css"
import Dropdown from './Dropdown/Dropdown';

const Generation = () => {
    const [generationMethod, setGenerationMethod] = useState(""); // Состояние для хранения выбранного метода генерации

    // Обработчик изменения значения в выпадающем списке
    const handleDropdownChange = (selectedValue) => {
        setGenerationMethod(selectedValue);
    };

    // Функция для получения содержимого поля ввода в зависимости от выбранного метода генерации
    const getPlaceholderText = () => {
        switch (generationMethod) {
            case "option1":
                return (
                    <textarea
                type="text"
                className='generation-input'
                placeholder="Напиши что бы ты хотел услышать..."
                />  
                );
            case "option2":
                return "Choose img // TODO";
            default:
                return "Choose Audio // TODO";
        }
    };

    return (
        <div className='generation-container'>
            <div className='generation-input-frame'>
                <div className='generation-input-title-wrapper'>
                    <div className='generation-input-title-text'>
                        Сгенерировать звук by
                    </div>
                    <div className="generation-input-logo-section">
                        <img src={"icons/logo.svg"} alt="logo" />
                        <span className='generation-input-logo-text'>
                            <strong>
                                Sample
                            </strong>
                            Vault
                        </span>
                    </div>  
                </div>
                {getPlaceholderText()}
            </div>
            <div className='generation-right-frame'>
                <div className='generation-right-top-wrapper'>
                    <div className='generation-right-top-text'>
                        <div className='generation-right-top-text-left-wrapper'>
                            <span className='generation-right-top-text-left'>Способ генерации</span>
                        </div>
                        <div className='generation-right-top-text-right-wrapper'>
                            <span className='generation-right-top-text-right'>Длительность</span>
                        </div>
                    </div>
                    <div className='generation-right-top-pick-wrapper'>
                        <Dropdown onChange={handleDropdownChange} />
                        <div className='generation-duration'>
                            <textarea 
                            className='generation-duration-left-text'
                            placeholder="00"
                            maxlength="2"
                            />
                            <div className='generation-duration-text'>:</div>
                            <textarea 
                            className='generation-duration-right-text'
                            placeholder="00"
                            maxlength="2"
                            />
                            
                        </div>
                    </div>
                </div>
                <button className='generation-button'>Сгенерировать звук</button>
            </div>
        </div>

    );
};

export default Generation;
