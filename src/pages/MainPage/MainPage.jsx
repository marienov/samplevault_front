import React, { useState } from 'react';
import "./MainPage.css"
import LeftMenu from "../../components/LeftMenu/LeftMenu";

import Lenta from '../Lenta/Lenta'; 
import SampleCollection from '../SampleCollection/SampleCollection';
import SampleGen from '../SampleGen/SampleGen';

const MainPage = () => {
    const [selectedMenu, setSelectedMenu] = useState('Лента'); 

    const handleMenuClick = (menuName) => {
        setSelectedMenu(menuName);
    };

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
