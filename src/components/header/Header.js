import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/personal-logo.png";

const Header = () => {
    return (
        <header className="header">
            <NavLink to="/" className="logo">
                <img src={logo} alt="logo>"></img>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><NavLink to="/" className="nav-item">Projects</NavLink></li>
                <li><NavLink to="about" className="nav-item">About</NavLink></li>
                <li><NavLink to="skills" className="nav-item">Skills</NavLink></li>
                <li><a href="https://drive.google.com/file/d/1y03aq5B7tXwzGWyOwYzBY2reAMJaUb_W/view?usp=sharing" target="_blank" className="nav-item">Resume</a></li>
            </ul>
        </header>
    );
};

export default Header;