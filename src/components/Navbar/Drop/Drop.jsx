import React, {useState} from 'react';
import "./Drop.css"


const Drop = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div>
            <button className="menu-button" onClick={() => setOpen(!isOpen)}>
                <div className="left">Создать</div>
                <div className="right">
                    <img className="chevron" src={"icons/chevron/chevron-down.svg"} alt="My SVG" />
                </div>
            </button>
            <nav className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="menu-list">
                   <div className="new-buttons">
                        <button className="btn-top">Новый звук с AI</button>
                        <button className="btn-bottom">Новый трек в редакторе</button>
                   </div>
                   <div className="own-sound">
                     <button className="btn2">
                        <div className="bl">
                            <img className="chevron" src={"icons/add-circle.svg"} alt="My SVG" />
                        </div>
                        <div className="br">Загрузить новый трек</div>
                     </button>
                   </div>
                </ul>
            </nav>
        </div>
    );
};

export default Drop;
