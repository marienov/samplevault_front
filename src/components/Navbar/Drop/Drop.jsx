import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Drop.css"


// TODO: Необходимо исправить ошибку с подгрузкой модуля
// import Modal from './modal/index';

// import "./styles.css";

// export default function App() {
//   const [isModalActive, setModalActive] = useState(false);

//   const handleModalOpen = () => {
//     setModalActive(true);
//   };
//   const handleModalClose = () => {
//     setModalActive(false);
//   };


const Drop = ({onMenuClick}) => {
        const [isModalActive, setModalActive] = useState(false);

    const handleModalOpen = () => {
        setModalActive(true);
    };
    const handleModalClose = () => {
        setModalActive(false);
    };
    const [isOpen, setOpen] = useState(false);

    const navigate = useNavigate(); 

    const handleMenuSelect = () => {
        setOpen(false);
        navigate('/generate');;
    };

    return (
        <div>
            <button className="menu-button" onClick={() => setOpen(!isOpen)}>
                <div className="left">
                <span className='txt'>Создать</span>
                </div>
                <div className="right">
                    <img className="chevron" src={"icons/chevron/chevron-down.svg"} alt="My SVG" />
                </div>
            </button>
            <nav className={`menu ${isOpen ? "active" : ""}`}>
                <ul className="menu-list">
                   <div className="new-buttons">
                        <button className="btn-top" onClick={handleMenuSelect}>
                            <span className='txt' style={{color:"black"}}>Новый звук с </span>
                            <span className='txt' style={{color:"red"}}>AI</span>
                        </button>
                        <button className="btn-bottom">
                        <spam className="txt" style={{color:"#478DF7"}}>Новый трек в редакторе</spam>
                        </button>
                   </div>
                   <div className="own-sound">
                     <button className="btn2" onClick={handleModalOpen}> 
                        <div className="bl">
                            <img className="chevron" src={"icons/add-circle.svg"} alt="My SVG" />
                        </div>
                        <div className="br">
                        <span className='txt' style={{color:"black", textAlign:"center", alignItems:"center",justifyContent:"center"}}>Загрузить новый трек</span>
                        </div>
                     </button>
                     
                   </div>
                </ul>
            </nav>
            <div>
        {isModalActive && (
          <div title="some modal title" onClose={handleModalClose}>
            Hello world
          </div>
        )}
      </div>
            
        </div>
        
    );
};

export default Drop;
