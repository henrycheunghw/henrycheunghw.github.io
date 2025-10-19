import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Effects from "../../assets/icons/effects.svg";
import Askaidenhero from "../../assets/project-hero/askaiden-hero.png";
import Askaidenherosm from "../../assets/project-hero/askaiden-hero-sm.png";
import Askaidenprompts from "../../assets/showcase/askaiden-prompts.mp4";
import Askaidencustomization from "../../assets/showcase/askaiden-customization.mp4";
import Askaidenaesthetics from "../../assets/showcase/askaiden-aesthetics.mp4";
import Askaidenwebapp from "../../assets/showcase/askaiden-webapp.mp4";
import Askaidendesignsystem from "../../assets/project-img/askaiden-design-system.png";
import { NavLink } from "react-router-dom";


const Askaiden = () => {

    useEffect(() => {
        // Send pageview only, GA is already initialized in index.js
        ReactGA.send({ hitType: "pageview", page: "/Askaiden" });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

        // Button click handlers for GA tracking
    const handleWebsiteClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Website - AskAiden",
        });
    };

    const handleDemoVideoClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Demo Video - AskAiden",
        });
    };

    const handleFigmaDesignClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Design - AskAiden",
        });
    };


    const handleNextProjectClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Next Cool Project - AskAiden",
        });
    };

    return (
        <div className="askaiden project-container">
            <div className="askaiden-hero hero">
                <div className="askaiden-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Askaidenhero} />
                        <img loading="lazy" src={Askaidenherosm} alt="askaiden Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>AskAiden</h1>
                        </div>
                        <div className="intro-content"><p>Introducing "AskAiden" – a responsive web app powered by OpenAI API that enhances the way users communicate with ChatGPT. Working with developers in this agile project managed through Jira, I played a key role in the UI/UX design, front-end web development, and graphic design aspects of the project, ensuring a smooth and intuitive user experience. From designing intuitive prompts to incorporating customization features, our aim is to empower users to obtain accurate and personalized responses tailored to their specific goals. With AskAiden, users can fully harness the capabilities of ChatGPT for a wide range of inquiries and needs.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UI/UX Design, Web Development, Graphic Design</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Illustrator, Jira, HTML, React.js, Typescript, Sass, Material UI, FastAPI, OpenAI API, AWS</p></div>
                        <div className="category"><p>Teammates</p></div>
                        <div className="detail"><p>Kendice Yeung<br />Peter Hui</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>24 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Jul 2023</p></div>
                        <a href="https://ask-aiden-ui.vercel.app/" className="button website" target="_blank">View Website</a>
                        <a href="https://www.youtube.com/watch?v=0C_UEJAMBg0&ab_channel=TrioLab" className="button demo" target="_blank">View Demo Video</a>
                        <a href="https://www.figma.com/file/Elh3B0N2vESHLu2myUhYJZ/AskAiden-Design?type=design&node-id=305%3A3363&mode=design&t=ru4DRSZRxLjpRC5J-1" className="button design" target="_blank">View Figma Design</a>
                    </div>
                </div>

                <div className="feature-title">
                    <h2>Key Features</h2>
                </div>

                <div className="features prompts-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Efficient Default Prompts</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Simplified Interaction: Access 10 convenient buttons with pre-set default prompts that make communicating with ChatGPT effortless and user-friendly.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Instant Guidance: Benefit from pre-defined prompts that help you get started quickly, saving time and eliminating the need to formulate prompts from scratch.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card prompts video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Askaidenprompts} type="video/mp4" />
                        </video>
                    </div>
                </div>
        
                <div className="features customization-feature">
                    <div className="card right-card customization video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Askaidencustomization} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Flexible Customization Options</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Tailor Responses to Your Needs: Customize the length and level of detail of the responses to align with your preferences and specific requirements.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Enhanced Explanations: Choose whether you want responses with examples, references, and metaphors to gain a deeper understanding and enrich your interactions with ChatGPT.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features aesthetics-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Engaging Cartoon-like Aesthetics</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Whimsical Design: Experience the delightful visuals of AskAiden, featuring a captivating cartoon whale logo named Aiden and an ocean-themed background that adds a playful touch to your AI interactions.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Friendly Environment: Immerse yourself in a welcoming atmosphere that combines the power of AI with a charming and enjoyable aesthetic, ensuring a delightful and engaging user experience.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card aesthetics video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Askaidenaesthetics} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="features webapp-feature">
                    <div className="card right-card webapp video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Askaidenwebapp} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Responsive Web App with Seamless Experience</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Modern Web App: AskAiden is developed using React.js, Typescript, and Material UI, ensuring a modern and optimized performance for a smooth user experience.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Responsive Design: The web app is designed to be responsive, adapting seamlessly to different devices such as mobile, tablet, and desktop. This provides users with a consistent experience and enhances convenience and accessibility.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="demo-container">
                    <h2>Demo Video</h2>
                    <p className="demo-content">
                        I've created a dynamic demo video with Adobe Premiere Pro to showcase AskAiden's features through storytelling. I've also added captivating animation effects using Jitter, enhancing the user experience.
                    </p>
                    <div className="video-wrapper">
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/0C_UEJAMBg0"
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
                        With the increasing popularity of ChatGPT, a text-to-text generative AI model, users have embraced its capabilities in various domains such as work, learning, and creativity. Users needs to use ChatGPT effectively to enhance their productivity and achieve superior outcomes.
                    </p>

                    <h3 className="user-problem-title">User Problem</h3>
                    <p className="user-problem-content">
                        Many users face challenges in effectively communicating with ChatGPT due to the difficulty of writing suitable prompts. This lack of expertise can lead to frustration and prevent users from fully harnessing the potential of ChatGPT to efficiently manage their tasks. Users require intuitive and effective guidance in crafting prompts that yield satisfactory results.
                    </p>

                    <h3 className="value-proposition-title">Value Proposition</h3>
                    <p className="value-proposition-content">
                        To address the user problem, we have created a responsive web app that enables effective utilization of ChatGPT. Users can enter prompts, and the app will utilize the ChatGPT API to generate answers. With default prompts and customization options, users can easily write prompts and receive tailored responses.
                    </p>
                </div>

                <div className="visual-identity-container">
                    <h2>Design System</h2>
                    <p>
                        We have created a design system for AskAiden to ensure consistency in the visual identity of the brand. We adoped purple and blue as the primary colors to convey a sense of calmness and trustworthiness. The typography is modern and clean. The logo is a cartoon whale named Aiden, which is designed to be friendly and welcoming.
                    </p>
                    <img loading="lazy" src={Askaidendesignsystem} alt="Askaiden Design-system" className="askaiden-design-system" />
                </div>

                <div className="prototype-container">
                    <h2>Prototype</h2>
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="450"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FElh3B0N2vESHLu2myUhYJZ%2FAskAiden-Design%3Ftype%3Ddesign%26node-id%3D305%253A3363%26mode%3Ddesign%26t%3Dru4DRSZRxLjpRC5J-1"
                        allowFullScreen
                        title="Embedded Figma Design"
                    ></iframe>
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Mymori" 
                    className="button view-others"
                >
                    Next Cool Project
                </NavLink>
            </div>
        </div>
    )
}

export default Askaiden;