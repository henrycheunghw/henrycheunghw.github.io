import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Effects from "../../assets/icons/effects.svg";
import Inmhero from "../../assets/project-hero/inm-hero.png";
import Inmherosm from "../../assets/project-hero/inm-hero-sm.png";
import Inmelearning from "../../assets/showcase/inm-elearning.mp4";
import Inmcommunity from "../../assets/showcase/inm-community.mp4";
import Inmidentity from "../../assets/showcase/inm-identity.mp4";
import Inmlogo from "../../assets/project-img/inm-logo.png";
import Inmstyleguide from "../../assets/project-img/inm-styleguide.png";
import { NavLink } from "react-router-dom";


const Inm = () => {

    useEffect(() => {
        // Send pageview only, GA is already initialized in index.js
        ReactGA.send({ hitType: "pageview", page: "/Inm" });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

        // Button click handlers for GA tracking
    const handleFigmaDesignClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Design - INM",
        });
    };

    const handleFigmaPrototypeClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Prototype - INM",
        });
    };

    const handleNextProjectClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Next Cool Project - INM",
        });
    };

    return (
        <div className="inm project-container">
            <div className="inm-hero hero">
                <div className="inm-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Inmhero} />
                        <img loading="lazy" src={Inmherosm} alt="INM Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>Institute of New Media</h1>
                        </div>
                        <div className="intro-content"><p>Presenting "Institute of New Media" – an innovative education institution app design group project aimed at digitalize school experience. Collaborating with teammates in this Waterfall project, I played a key role in developing the app's logo, wireframes, interactive prototype, and brochure.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>Web Development, UI/UX Design</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Illustrator, Procreate, User Research, Canva</p></div>
                        <div className="category"><p>Teammates</p></div>
                        <div className="detail"><p>Chloe Kang<br />Johann Duque<br />Julie Chan<br />Nicola Lee</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>6 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Apr 2023</p></div>
                        <a 
                            href="https://www.figma.com/file/q4koYIkUc84agIgD9o4dLn/Project-3%3A-INM?type=design&node-id=0%3A1&mode=design&t=lEnBUTxqOMb4m10d-1" 
                            className="button repository" 
                            target="_blank"
                            onClick={handleFigmaDesignClick}
                        >
                            View Figma Design
                        </a>
                        <a 
                            href="https://www.figma.com/proto/q4koYIkUc84agIgD9o4dLn/Project-3%3A-INM?page-id=0%3A1&type=design&node-id=1-139&viewport=528%2C406%2C0.03&scaling=scale-down&starting-point-node-id=1%3A139&show-proto-sidebar=1&mode=design" 
                            className="button website" 
                            target="_blank"
                            onClick={handleFigmaPrototypeClick}
                        >
                            View Figma Prototype
                        </a>
                    </div>
                </div>

                <div className="feature-title">
                    <h2>Key Features</h2>
                </div>

                <div className="features elearning-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Seamless E-Learning</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Stay updated with notifications and announcements, ensuring you never miss important information.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Access your class schedule effortlessly, keeping track of upcoming lectures and events.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Seamlessly manage due dates and access detailed class information.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card elearning video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Inmelearning} type="video/mp4" />
                        </video>
                    </div>
                </div>
        
                <div className="features community-feature">
                    <div className="card right-card community video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Inmcommunity} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Interactive Community</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Explore a dedicated marketplace where students and teachers can connect, collaborate, and share resources.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Explore a dedicated marketplace where students and teachers can connect, collaborate, and share resources.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Engage with social networking features, fostering meaningful connections with peers and educators.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Communicate conveniently through an integrated email function, facilitating seamless communication within the educational community.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features identity-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Digital Identity</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Utilize a digital wallet feature for quick and secure transactions within the app.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                            Personalize your profile, showcasing your achievements, interests, and educational journey.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card identity video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Inmidentity} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="user-research-container writings-container grid">
                    <h2 className="user-research-title">User Research</h2>
                    <h3 className="user-needs-title">User Needs</h3>
                    <p className="user-needs-content">
                        In today's digital era, where learning, teaching, and working have become increasingly digitalized, there is a growing need for a comprehensive online app that can effectively replace various real-life functionalities within educational institutions. Students and teaching staff are seeking a user-friendly and efficient solution that can streamline their daily tasks, enhance communication, and provide seamless access to educational resources.
                    </p>

                    <h3 className="user-problem-title">User Problem</h3>
                    <p className="user-problem-content">
                        Existing education apps often fall short in delivering the comprehensive support expected by users, leading to frustration and limitations in the learning experience. Students and educators encounter difficulties in finding a single app that encompasses all necessary functionalities, resulting in a fragmented digital ecosystem for education.
                    </p>

                    <h3 className="value-proposition-title">Value Proposition</h3>
                    <p className="value-proposition-content">
                        Our aim was to create an educational institution app that provides a convenient and comprehensive digital experience. Key features included connecting with teachers and students, easy access to student and staff cards, and essential e-learning tools such as notifications, a calendar, and class details.
                    </p>
                </div>

                <div className="visual-identity-container">
                    <h2>Design System</h2>
                    <p>
                        My teammate designed a comprehensive style guide that defines INM's visual identity, colors, typography, and design elements, ensuring a professional and reliable brand personality.
                    </p>
                    <img loading="lazy" src={Inmstyleguide} alt="INM Style Guide" className="inm-style-guide" />
                    <p>(Designed by Nicola Lee)</p>

                    <h2>Logo Design</h2>
                    <p>
                        I designed the logo from scratch using Adobe Illustrator. It showcases the characters "INM" in a school building-inspired shape. With consistent colors, clean lines and memorable design, it captures the essence of the brand.
                    </p>
                    <img loading="lazy" src={Inmlogo} alt="INM Logo" className="inm-logo" />
                </div>

                <div className="prototype-container">
                    <h2>Prototype</h2>
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="450"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fq4koYIkUc84agIgD9o4dLn%2FProject-3%253A-INM%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3Ds1Ms9WzX8QYu3SAg-1"
                        allowFullScreen
                        title="Embedded Figma Design"
                    ></iframe>
                    {/* <iframe 
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%" 
                        height="500px" 
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fq4koYIkUc84agIgD9o4dLn%2FProject-3%253A-INM%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-139%26viewport%3D654%252C578%252C0.04%26t%3D06OcRskJTAo6QqL5-1%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A139%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen>
                    </iframe> */}
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Askaiden" 
                    className="button view-others"
                >
                    Next Cool Project
                </NavLink>
            </div>
        </div>
    )
}

export default Inm;