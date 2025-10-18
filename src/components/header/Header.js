import React from "react";
import ReactGA from "react-ga4";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/personal-logo.png";

const Header = () => {
    const trackNavClick = (label) => {
        ReactGA.event({
        category: "Navigation",
        action: "Click",
        label,
        });
    };
    
    return (
        <header className="header">
            <NavLink 
                to="/" 
                className="logo"
                onClick={() => {
                    ReactGA.event({
                        category: "Navigation",
                        action: "Click",
                        label: "Logo",
                    });
                }}
            >
                <img src={logo} alt="logo>"></img>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
            
            			<ul className="menu">
				<li>
					<NavLink
						to="/"
						className="nav-item"
						onClick={() => trackNavClick("Projects")}
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						to="about"
						className="nav-item"
						onClick={() => trackNavClick("About")}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="skills"
						className="nav-item"
						onClick={() => trackNavClick("Skills")}
					>
						Skills
					</NavLink>
				</li>
				<li>
					<a
						href="https://drive.google.com/file/d/1_qbmyeOmDkPCWl5MYpMw59UvLYDJxaXW/view?usp=sharing"
						target="_blank"
						className="nav-item"
						onClick={() => trackNavClick("Resume")}
					>
						Resume
					</a>
				</li>
			</ul>
        </header>
    );
};

export default Header;