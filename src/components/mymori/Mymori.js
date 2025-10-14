import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Effects from "../../assets/icons/effects.svg";
import Mymorihero from "../../assets/project-hero/mymori-hero.png";
import Mymoriherosm from "../../assets/project-hero/mymori-hero-sm.png";
import Mymoriai from "../../assets/showcase/mymori-ai.mp4";
import Mymoriusercentered from "../../assets/showcase/mymori-usercentered.mp4";
import Mymorigamification from "../../assets/showcase/mymori-gamification.mp4";
import Mymoridesignsystem from "../../assets/project-img/mymori-design-system.png";
import Mymoriprocessflowchart from "../../assets/project-img/mymori-flowchart.png";
import { NavLink } from "react-router-dom";


const Mymori = () => {

    useEffect(() => {
        // Send pageview only, GA is already initialized in index.js
        ReactGA.send({ hitType: "pageview", page: "/Mymori" });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    // Button click handlers for GA tracking
    const handleDemoVideoClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Demo Video - MyMori",
        });
    };

    const handleFigmaDesignClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Design - MyMori",
        });
    };

    const handleFigmaPrototypeClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Prototype - MyMori",
        });
    };

    const handleNextProjectClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Next Cool Project - MyMori",
        });
    };

    return (
        <div className="inm mymori project-container">
            <div className="mymori-hero hero">
                <div className="mymori-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Mymorihero} />
                        <img loading="lazy" src={Mymoriherosm} alt="Mymori Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>MyMori</h1>
                        </div>
                        <div className="intro-content"><p>Introducing "MyMori" – a mobile app fostering emotional well-being and community through virtual forests. Working collaboratively, our team draw inspiration from the growth of tiny seeds into thriving forests. MyMori's mission: nurture individuals in a challenging social world. Users grow Diary Trees, sharing feelings and receiving AI forest companions, building a virtual forest, one tree at a time.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UI/UX Design, Graphic Design, Prompt Engineering</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Illustrator, Photoshop, Generative AI Design</p></div>
                        <div className="category"><p>Teammates</p></div>
                        <div className="detail"><p>Johann Duque<br />Julie Chan<br />Selene Choi</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>4 weeks (ongoing)</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Jun 2023</p></div>
                        <a 
                            href="https://www.youtube.com/watch?v=HR4TJpqNWcs&ab_channel=HoiWingHenryCheung" 
                            className="button repository" 
                            target="_blank"
                            onClick={handleDemoVideoClick}
                        >
                            View Demo Video
                        </a>
                        <a 
                            href="https://www.figma.com/file/jSXsAIo8puevjI05sRxUHe/My-Mori-(Hackathon-Version)?type=design&node-id=0%3A1&mode=design&t=62stQrmVfd96NZTn-1" 
                            className="button repository" 
                            target="_blank"
                            onClick={handleFigmaDesignClick}
                        >
                            View Figma Design
                        </a>
                        <a 
                            href="https://www.figma.com/proto/voJ09e9SrygsFZTgSkAC9M/My-Mori?page-id=0%3A1&type=design&node-id=78-1307&viewport=16%2C263%2C0.3&scaling=scale-down&starting-point-node-id=78%3A1307&mode=design" 
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

                <div className="features ai-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>AI-Generated Personalized Forests</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Experience the magic of AI-generated visuals with MyMori's unique feature.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Experience the magic of AI-generated visuals with MyMori's unique feature.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Experience the magic of AI-generated visuals with MyMori's unique feature.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Plant your diary tree, each with a distinct appearance generated by Stable Diffusion AI.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Your trees are a visual representation of your emotions, nurturing your personal growth and emotional journey in a truly one-of-a-kind way.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card ai video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Mymoriai} type="video/mp4" />
                        </video>
                    </div>
                </div>
        
                <div className="features usercentered-feature">
                    <div className="card right-card usercentered video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Mymoriusercentered} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Thoughtful User-Centered Design</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Our environment is crafted to be warm and welcoming, with encouraging copy that makes sharing emotions a breeze.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Our environment is crafted to be warm and welcoming, with encouraging copy that makes sharing emotions a breeze.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Embrace anonymity, ensuring users can express themselves openly and honestly without any reservations.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Embrace anonymity, ensuring users can express themselves openly and honestly without any reservations.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                MyMori offers an adorable and captivating visual style that adds joy to user experience, all within a secure space that lets you revisit your records whenever you need.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features gamification-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Engaging Gamification Elements</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Share feelings regularly to earn ame points, making the emotional journey rewarding.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Visit the in-app shop to purchase items, enhancing user experience with personalized choices.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Users can customize their own virtual land, turning emotional expression into an enjoyable and immersive journey.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card identity video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Mymorigamification} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="demo-container">
                    <h2>Demo Video</h2>
                    <div className="video-wrapper">
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/HR4TJpqNWcs?si=q2hDa8WuZs8lS1ld"
                            title="Demo Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className="user-research-container writings-container grid">
                    <h2 className="user-research-title">User Research</h2>
                    <h3 className="user-needs-title">User Needs</h3>
                    <p className="user-needs-content">
                        In today's world, where many struggle with feelings of loneliness and anxiety, MyMori steps in to provide a simple solution. People want an easy-to-use way to share their emotions, and build a virtual land of shared experiences. MyMori brings together digital connection and the soothing power of nature right to your screen.
                    </p>

                    <h3 className="user-problem-title">User Problem</h3>
                    <p className="user-problem-content">
                        Existing solutions often leave users unsatisfied and disconnected. People struggle to find a single app that meets their emotional needs, leading to a fragmented experience.
                    </p>

                    <h3 className="value-proposition-title">Value Proposition</h3>
                    <p className="value-proposition-content">
                        Our mission at MyMori is to provide a user-friendly gamification app that offers a comfortable space for individuals to openly express their emotions and foster their mental well-being.
                    </p>
                </div>

                <div className="visual-identity-container">
                    <h2>Design System</h2>
                    <p>
                        We've established a design system for MyMori to maintain a consistent brand look. Our primary colors – purple, pink, and green – evoke feelings of security and comfort. Our welcoming and vivid typography complements our logo, a leaf with a fountain pen shape, representing the act of sharing thoughts to nurture your emotional growth.
                    </p>
                    <img loading="lazy" src={Mymoridesignsystem} alt="MyMori Design System" className="mymori-design-system" />

                    <h2>Process Flowchart</h2>
                    <p>
                        We've crafted a process flowchart to illustrate the primary user journey within the app, guaranteeing a seamless and user-friendly experience. This visual roadmap guides users through MyMori effortlessly, ensuring they can navigate, express, and connect with ease.
                    </p>
                    <img loading="lazy" src={Mymoriprocessflowchart} alt="MyMori Process Flowchart" className="mymori-processflowchart" />
                </div>

                <div className="prototype-container">
                    <h2>Prototype</h2>
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="450"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FjSXsAIo8puevjI05sRxUHe%2FMy-Mori-(Hackathon-Version)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DP6I7N9KvnX0Xnfgw-1" 
                        allowfullscreens
                        title="Embedded Figma Design"
                    ></iframe>
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Knapsackx" 
                    className="button view-others"
                >
                    😎 Next Cool Project!
                </NavLink>
            </div>
        </div>
    )
}

export default Mymori;