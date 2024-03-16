import React, { useState } from 'react';
import "./MainPage.css"
import LeftMenu from "../../components/UI/LeftMenu/LeftMenu";

import Lenta from '../Lenta/Lenta'; // Импортируйте нужные компоненты правой панели
import SampleCollection from '../SampleCollection/SampleCollection';
import SampleGen from '../SampleGen/SampleGen';

const MainPage = () => {
    const [selectedMenu, setSelectedMenu] = useState('Лента'); // Используйте состояние для отслеживания выбранного элемента

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
    };

    // Определите содержимое правой панели в зависимости от выбранного элемента меню
    const renderRightSelection = () => {
        switch (selectedMenu) {
            case 'Лента':
                return <Lenta />;
            case 'Сгенерировать AI':
                return <SampleGen />;
            case 'Сэмплы':
                return <SampleCollection />;
            default:
                return null;
        }
    };

    return (
        <div className="main-page">
            <LeftMenu onMenuClick={handleMenuClick} />
            {renderRightSelection()}
        </div>
    );
};

export default MainPage;
