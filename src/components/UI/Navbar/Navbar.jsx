import React from 'react';
import "./Navbar.css";
import logo from "../icons/logo.svg"
import avatar from "../icons/avatar.svg"
import search from "../icons/search.svg"



const Navbar = () => {
    return (
        <div className="navbar">
            <div className="left-section">
                <img src={logo} alt="logo" />
                <span style={{fontSize: "32px"}}>
                    <strong>
                        Sample
                    </strong>
                    Vault
                </span>

            </div>
            <div className="right-section">
                <div className="search-box">
                    <img src={search} alt="search" />
                    <input type="text" placeholder="Поиск"/>
                </div>
                <img style={{margin: "0 15px"}} src={avatar} alt="My SVG" />
            </div>
        </div>
    );
};

export default Navbar;
