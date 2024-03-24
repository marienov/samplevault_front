import React from 'react';
import "./Navbar.css";
import LogoPart from './LogoPart/LogoPart';
import RightPart from './RightPart/RightPart';
import Drop from './Drop/Drop';
//import logo from "icons/logo.svg"
//import avatar from "icons/avatar.svg"
//import search from "icons/search.svg"



const Navbar = () => {
    return (
        <div className="navbar">
            <LogoPart/>
            <Drop/>
            <RightPart/>
        </div>
    );
};

export default Navbar;
