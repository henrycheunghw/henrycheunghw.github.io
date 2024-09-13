import React, { useState } from "react";
import Effects from "../../assets/icons/effects.svg";
import Sirloinsocietyhero from "../../assets/project-hero/sirloin-society-hero.png";
import Sirloinsocietyherosm from "../../assets/project-hero/sirloin-society-hero-sm.png";
import Sirloinsocietywebsite from "../../assets/project-img/sirloin-society-website.png";
import Sirloinsocietydesktop from "../../assets/project-img/sirloin-society-desktop.png";
import Sirloinsocietytablet from "../../assets/project-img/sirloin-society-tablet.png";
import Sirloinsocietymobile from "../../assets/project-img/sirloin-society-mobile.png";
import Instagram from "../../assets/project-img/instagram.svg";
import Facebook from "../../assets/project-img/facebook.svg";
import Youtube from "../../assets/project-img/youtube.svg";
import Whatsapp from "../../assets/project-img/whatsapp.svg";
import { NavLink } from "react-router-dom";


const Sirloinsociety = () => {

    const [activeDevice, setActiveDevice] = useState("desktop-btn");

    const handleDeviceClick = (device) => {
        setActiveDevice(device);
    };

    const [activeColor, setActiveColor] = useState(null);

    const handleColorClick = (color) => {
        setActiveColor(color);
    };
    
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    return (
        <div className="sirloin-society project-container">
            <div className="sirloin-society-hero hero">
                <div className="sirloin-society-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Sirloinsocietyhero} />
                        <img loading="lazy" src={Sirloinsocietyherosm} alt="Sirloin Society Hero" />
                    </picture>
                </div>
            </div>

            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>Sirloin Society</h1>
                        </div>
                        <div className="intro-content"><p>Introducing "Sirloin Society" – a responsive website project that showcases a luxurious steakhouse experience. The project involved creating a comprehensive design system, wireframing, prototyping, and hand coding, combining accessibility and compatibility with visually appealing interface aesthetics.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>Web Development, UI/UX Design</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>HTML, CSS, JavaScript, jQuery, Git, GitHub, Figma, PhotoShop</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>12 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Jun 2023</p></div>
                        <a href="https://henrycheunghw.github.io/sirloinsociety/" className="button repository" target="_blank">View Website</a>
                        <a href="https://github.com/henrycheunghw/sirloinsociety" className="button website" target="_blank">View GitHub</a>
                    </div>
                </div>

                <div className="features responsive-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Responsive Web Design</h2>
                        </div>
                        <p>
                            ► The responsive design adapts to various screen sizes, ensuring a captivating experience for users across devices.
                        </p>
                        <p>
                            ► The hamburger menu for mobile screens enhances user experience, allowing for effortless navigation.
                        </p>
                        <div className="button-container">
                            <button className="button desktop-btn" onClick={() => handleDeviceClick('desktop-btn')}>Desktop</button>

                            <button className="button tablet-btn" onClick={() => handleDeviceClick('tablet-btn')}>Tablet</button>

                            <button className="button mobile-btn" onClick={() => handleDeviceClick('mobile-btn')}>Mobile</button>
                        </div>
                    </div>
                    <div className="card left-card responsive">

                    <img loading="lazy" className={`desktop-img ${activeDevice === 'desktop-btn' ? 'active' : ''}`} src={Sirloinsocietydesktop} alt="Desktop layout" />

                    <img loading="lazy" className={`tablet-img ${activeDevice === 'tablet-btn' ? 'active' : ''}`} src={Sirloinsocietytablet} alt="Tablet layout" />

                    <img loading="lazy" className={`mobile-img ${activeDevice === 'mobile-btn' ? 'active' : ''}`} src={Sirloinsocietymobile} alt="Mobile layout" />

                    </div>
                </div>
        
                <div className="features one-page-feature">
                    <div className="card right-card one-page">
                        <img loading="lazy" src={Sirloinsocietywebsite} alt="Sirloin Society Website" />
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>One-Page Design</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                The one-page layout combines aesthetics and user-friendly design, offering a seamless scrolling experience to explore key sections without reloads.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Convenient back-to-top buttons further enhance usability.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features accessibility-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Aesthetics Comes with Accessibility</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Elegant and luxurious design elements, including the logo, typography, and color palette, create a visually captivating experience.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Ensuring accessibility by employing suitable font sizes and contrasting color scheme.
                            </p>
                        </div>
                        <div className="color-palette">
                            <div className="red-btn" onClick={() => handleColorClick('red')}></div>
                            <div className="grey-btn" onClick={() => handleColorClick('grey')}></div>
                            <div className="pink-btn" onClick={() => handleColorClick('pink')}></div>
                            <div className="blue-btn" onClick={() => handleColorClick('blue')}></div>
                        </div>
                    </div>
                    <div className={`card left-card accessibility ${activeColor}`}>
                        <div className="intro-text">
                            <p>Sirloin Society</p>
                        </div>
                    </div>
                </div>

                <div className="features interactivity-feature">
                    <div className="card interactivity">
                        <p className="nav-btns">Navigation</p>
                        <button className="button-pink">Button</button>
                        <button className="button-blue">Button</button>
                        <div className="icons">
                            <div className="contact-items icon" id="icon-1">
                                <a href><img loading="lazy" src={Instagram} alt="Instagram" /></a>
                            </div>
                            <div className="contact-items icon" id="icon-2">
                                <a href><img loading="lazy" src={Facebook} alt="Facebook" /></a>
                            </div>
                            <div className="contact-items icon" id="icon-3">
                                <a href><img loading="lazy" src={Youtube} alt="YouTube" /></a>
                            </div>
                            <div className="contact-items icon" id="icon-4">
                                <a href><img loading="lazy" src={Whatsapp} alt="WhatsApp" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Immersive Interactivity</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                CSS animations bring elements to life with captivating effects like overlays, mouse click interactions, and smooth transitions.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                jQuery plugins enhance user experience with dynamic features, crafting a visually appealing and engaging interface for visitors.
                            </p>
                        </div>
                    </div>
                </div>
                <NavLink onClick={scrollToTop()} to="/Cooktivate" className="button view-others">
                    😎 Next Cool Project!
                </NavLink>
            </div>
        </div>
    )
}

export default Sirloinsociety;