import React from 'react';
import "./LogoPart.css";


const LogoPart = () => {
    return (
        <div className="logo-section">
                <img src={"icons/logo.svg"} alt="logo" />
                <span className='logo-text'>
                    <strong>
                        Sample
                    </strong>
                    Vault
                </span>

        </div>
    );
};

export default LogoPart;
