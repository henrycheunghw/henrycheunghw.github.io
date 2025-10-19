import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Components from "../../assets/icons/components.svg";
import Effects from "../../assets/icons/effects.svg";
import Cooktivatehero from "../../assets/project-hero/cooktivate-hero.png";
import Cooktivateherosm from "../../assets/project-hero/cooktivate-hero-sm.png";
import Cooktivategame from "../../assets/showcase/cooktivate-game.mp4";
import Cooktivatelearn from "../../assets/showcase/cooktivate-learn.mp4";
import Cooktivatesocial from "../../assets/showcase/cooktivate-social.mp4";

// Define
import CooktivateValueProposition from "../../assets/ux/cooktivate/cookativate-value-proposition.png";
import CooktivateUserWorkflow from "../../assets/ux/cooktivate/cooktivate-user-workflow.png";
import CooktivateCardSorting1 from "../../assets/ux/cooktivate/cooktivate-card-sorting-1.png";
import CooktivateCardSorting2 from "../../assets/ux/cooktivate/cooktivate-card-sorting-2.png";
import CooktivateCardSorting3 from "../../assets/ux/cooktivate/cooktivate-card-sorting-3.png";
import CooktivateLeanCanvas from "../../assets/ux/cooktivate/cooktivate-lean-canvas.png";
import CooktivateUserPersona1 from "../../assets/project-img/cooktivate-user-persona1.png";
import CooktivateUserPersona2 from "../../assets/project-img/cooktivate-user-persona2.png";

// Ideate
import CooktivateWireframing from "../../assets/ux/cooktivate/cooktivate-wireframing.png";
import Cooktivateillustration from "../../assets/project-img/cooktivate-illustration.png";
import CooktivateDesignSystem from "../../assets/project-img/cooktivate-design-system.png";
import CooktivateComponents from "../../assets/ux/cooktivate/cooktivate-components.png";

// Test
import CooktvateUsabilityTestingReport from "../../assets/ux/cooktivate/cooktivate-usability-testing-report.png";

// Takeaways
import CooktivateTrello from "../../assets/project-img/cooktivate-trello.png";

import Riceball from "../../assets/interactive/riceball/riceball2.svg";
import { NavLink } from "react-router-dom";


const Cooktivate = () => {

    useEffect(() => {
        // Send pageview only, GA is already initialized in index.js
        ReactGA.send({ hitType: "pageview", page: "/Cooktivate" });
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
            label: "View Figma Design - Cooktivate",
        });
    };

    const handleFigmaPrototypeClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Prototype - Cooktivate",
        });
    };

    const handleCallRiceballClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Call Riceball - Cooktivate",
        });
    };


    const handleUsabilityReportClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Usability Test Report - Cooktivate",
        });
    };

    const handleNextProjectClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Next Cool Project - Cooktivate",
        });
    };

    return (
        <div className="cooktivate project-container">
            <div className="cooktivate-hero hero">
                <div className="cooktivate-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Cooktivatehero} />
                        <img loading="lazy" src={Cooktivateherosm} alt="Cooktivate Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>Cooktivate</h1>
                        </div>
                        <div className="intro-content"><p>"Cooktivate" is an interactive mobile app that gamifies the cooking learning experience and incorporates social media features. Through thorough user research, wireframing, prototyping, and usability testing, Cooktivate offers an engaging and enjoyable way to learn to cook.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UI/UX Design, UX Research, Graphic Design, Usability Testing</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Illustrator, Procreate, Canva, UXtweak, Trello</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>12 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Apr 2023</p></div>
                        <a 
                            href="https://www.figma.com/file/xrQiKR2isA2DHtOJbcdmoU/Project-2%3A-Cooktivate-Design?type=design&node-id=0%3A1&mode=design&t=RsbyYBfAbnfERQEC-1" 
                            className="button repository" 
                            target="_blank"
                            onClick={handleFigmaDesignClick}
                        >
                            View Figma Design
                        </a>
                        <a 
                            href="https://www.figma.com/proto/xrQiKR2isA2DHtOJbcdmoU/Project-2%3A-Cooktivate-Design?page-id=0%3A1&type=design&node-id=644-6452&viewport=993%2C1133%2C0.41&t=pt1Jv9waXxaF0HEt-1&scaling=scale-down&starting-point-node-id=644%3A6452" 
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

                <div className="features game-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Gamification of Learning</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Transform cooking into an engaging game-like experience with captivating challenges.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Earn points and badges for completing cooking tasks, fostering a sense of achievement and motivation.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Interact with Riceball, an adorable seal character, as your guide in the world of culinary exploration.
                            </p>
                        </div>
                        <div className="call-riceball">
                            <button 
                                className="button call-riceball"
                                onClick={handleCallRiceballClick}
                            >
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_644_5958)">
                                    <path d="M24.9988 77.6606H24.9839C16.0813 77.424 8.38557 74.3563 3.87167 69.2456C0.117155 64.9948 -1.44404 59.4995 -0.771625 52.9162C0.223215 43.1891 3.22895 35.1185 7.92103 29.5746C12.3904 24.297 18.2873 21.3561 24.9754 21.0687H24.9988H25.0221C31.7102 21.3561 37.6071 24.297 42.0765 29.5746C46.7686 35.1185 49.7764 43.1891 50.7691 52.9162C51.4416 59.5016 49.8804 64.9948 46.1258 69.2456C41.6119 74.3584 33.9163 77.424 25.0136 77.6606H24.9988ZM24.9988 22.1251C18.6246 22.404 13.0013 25.216 8.73344 30.2549C4.17924 35.634 1.25624 43.5082 0.284729 53.0218C-0.357992 59.303 1.11836 64.5257 4.66924 68.5484C8.98587 73.4373 16.3952 76.374 24.9988 76.6043C33.6023 76.374 41.0117 73.4373 45.3283 68.5484C48.8792 64.5257 50.3534 59.303 49.7128 53.0218C48.7413 43.5082 45.8183 35.634 41.2641 30.2549C36.9962 25.216 31.3729 22.404 24.9988 22.1251Z" fill="white"/>
                                    <path d="M29.5529 42.1962C29.1902 42.5807 28.8232 42.9653 28.4138 43.3012C28.1126 43.5505 27.7669 43.8019 27.3766 43.8843C26.4411 44.0829 25.9426 42.9124 25.6754 42.192C26.1887 42.0969 26.6235 41.9216 26.9184 41.6976L28.3905 42.0314C28.575 42.0737 28.7596 42.1159 28.9441 42.1561C29.3429 42.2469 29.5126 41.6363 29.1138 41.5455C28.5157 41.4103 27.9175 41.2751 27.3172 41.1398C27.3257 41.0955 27.332 41.0511 27.332 41.0067C27.332 40.9391 27.3193 40.8758 27.2981 40.8124C27.716 40.7342 28.1338 40.6539 28.5517 40.5757C28.7384 40.5398 28.9272 40.5039 29.1138 40.4701C29.5147 40.394 29.345 39.7835 28.9441 39.8595L26.8335 40.2588C26.3711 39.9461 25.6266 39.7412 24.7845 39.7412C23.9424 39.7412 23.149 39.9588 22.6887 40.2905L20.9769 39.9652C20.7903 39.9292 20.6015 39.8933 20.4148 39.8595C20.0139 39.7835 19.8442 40.394 20.2451 40.4701C20.9175 40.5969 21.5878 40.7257 22.2603 40.8525C22.2475 40.9032 22.239 40.956 22.239 41.0089C22.239 41.0384 22.2433 41.0659 22.2475 41.0955C21.7639 41.2053 21.2824 41.3131 20.7987 41.423C20.6142 41.4652 20.4297 41.5075 20.2451 41.5476C19.8463 41.6385 20.0139 42.249 20.4148 42.1582C21.1466 41.9934 21.8763 41.8265 22.6081 41.6617C22.903 41.9047 23.359 42.0948 23.9021 42.1941C23.6051 42.9505 23.0705 44.0808 22.099 43.8864C21.7003 43.8061 21.3418 43.5653 21.0257 43.3202C20.5887 42.9822 20.1942 42.5913 19.8082 42.1983C19.6978 42.0864 19.4985 42.1983 19.543 42.3526C19.8124 43.2948 20.4488 44.1864 21.3206 44.6618C22.1648 45.1203 23.1342 45.0484 23.8405 44.3766C24.2987 43.9413 24.5914 43.3603 24.8036 42.7667C25.1302 43.7195 25.7051 44.7695 26.7635 44.9428C27.6629 45.0928 28.5029 44.5308 29.0459 43.8632C29.4066 43.4195 29.6696 42.904 29.8202 42.3526C29.8605 42.2026 29.6653 42.08 29.555 42.1983L29.5529 42.1962Z" fill="white"/>
                                    <path d="M39.3953 15.8186C39.1365 13.1164 36.9708 10.9255 34.2642 10.6192C33.2672 10.5072 32.3148 10.6487 31.4621 10.9826C30.4184 8.51276 27.9663 6.7782 25.107 6.7782C22.2476 6.7782 19.6958 8.58459 18.6904 11.1368C17.8122 10.7227 16.8152 10.5199 15.7631 10.5959C12.8571 10.8072 10.5195 13.1904 10.3732 16.0891C10.2586 18.3412 11.4359 20.3314 13.2283 21.3899V25.0513L15.7016 26.1077C21.6982 28.6683 28.4966 28.6218 34.4593 25.983L36.5635 25.0513V21.3899C38.4302 20.2892 39.6265 18.1807 39.3996 15.8165L39.3953 15.8186Z" fill="white"/>
                                    <path d="M24.933 28.5183C21.7152 28.5183 18.4973 27.8781 15.4895 26.5936L12.6959 25.3999V21.6815C10.8144 20.4455 9.7262 18.3201 9.84075 16.0616C10.002 12.8756 12.5304 10.3001 15.7228 10.0677C16.6392 10.0001 17.5577 10.1311 18.4104 10.4459C19.6407 7.88104 22.2115 6.25 25.1049 6.25C27.9982 6.25 30.4863 7.83456 31.7421 10.3255C32.5757 10.072 33.4412 9.99378 34.3257 10.0931C37.2869 10.4269 39.6414 12.8143 39.9256 15.7679C40.1547 18.1469 39.0729 20.3864 37.0917 21.6836V25.3957L34.6736 26.4668C31.5851 27.8338 28.2612 28.5183 24.9352 28.5183H24.933ZM13.7565 24.7048L15.9074 25.6238C21.7491 28.1169 28.4309 28.0725 34.2408 25.5013L36.029 24.709V21.0899L36.2899 20.9357C38.0802 19.8793 39.0666 17.9377 38.8693 15.8672C38.6338 13.408 36.6717 11.4199 34.2069 11.141C33.3287 11.0417 32.4718 11.1537 31.6572 11.4706L31.1757 11.6586L30.9742 11.1833C29.9772 8.82543 27.6736 7.30215 25.107 7.30215C22.5403 7.30215 20.1476 8.88248 19.1825 11.3269L18.9746 11.853L18.4613 11.6121C17.6383 11.2255 16.7177 11.0565 15.8013 11.122C13.1434 11.3142 11.0371 13.4608 10.9013 16.1144C10.8016 18.0835 11.7965 19.93 13.4977 20.9357L13.7586 21.0899V24.7048H13.7565Z" fill="white"/>
                                    <path d="M20.3321 24.4914C20.0393 24.4914 19.8018 24.2547 19.8018 23.9632V19.4609C19.8018 19.1694 20.0393 18.9327 20.3321 18.9327C20.6248 18.9327 20.8624 19.1694 20.8624 19.4609V23.9632C20.8624 24.2547 20.6248 24.4914 20.3321 24.4914Z" fill="white"/>
                                    <path d="M29.6653 24.4914C29.3726 24.4914 29.135 24.2547 29.135 23.9632V19.4609C29.135 19.1694 29.3726 18.9327 29.6653 18.9327C29.958 18.9327 30.1956 19.1694 30.1956 19.4609V23.9632C30.1956 24.2547 29.958 24.4914 29.6653 24.4914Z" fill="white"/>
                                    <path d="M24.9988 25.1253C24.7061 25.1253 24.4685 24.8886 24.4685 24.5971V20.0948C24.4685 19.8033 24.7061 19.5667 24.9988 19.5667C25.2915 19.5667 25.5291 19.8033 25.5291 20.0948V24.5971C25.5291 24.8886 25.2915 25.1253 24.9988 25.1253Z" fill="white"/>
                                    <path d="M19.5897 34.2946L20.4085 35.9488L22.2412 36.215L20.9155 37.5017L21.2273 39.3187L19.5897 38.4609L17.95 39.3187L18.264 37.5017L16.9382 36.215L18.7709 35.9488L19.5897 34.2946Z" fill="white"/>
                                    <path d="M29.7714 34.2946L30.5901 35.9488L32.4229 36.215L31.0971 37.5017L31.4089 39.3187L29.7714 38.4609L28.1317 39.3187L28.4456 37.5017L27.1199 36.215L28.9526 35.9488L29.7714 34.2946Z" fill="white"/>
                                    </g>
                                    <circle cx="25" cy="25" r="24.5" stroke="white"/>
                                    <defs>
                                    <clipPath id="clip0_644_5958">
                                    <rect width="41.6667" height="41.6667" fill="white" transform="translate(4.1665 6.25)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                Call Riceball!
                            </button>
                            <img loading="lazy" src={Riceball} alt="Riceball" className="riceball" />
                        </div>
                    </div>
                    <div className="card left-card game video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Cooktivategame} type="video/mp4" />
                        </video>
                    </div>
                </div>
        
                <div className="features learn-feature">
                    <div className="card right-card community video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Cooktivatelearn} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Personalized Learning Experience</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Get personalized cooking guidance from Riceball, the chatbot powered by AI speciaizing in cooking.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Customize cooking challenges to match your food preferences and specific culinary interests.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                            Access a range of cooking tutorials, including videos, texts, and voice-overs, tailored to your unique learning style and needs.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features social-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Social Engagement</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Engage in cooking challenges with friends, competing for top scores and earning well-deserved recognition.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Connect with friends and a community of cooking enthusiasts, fostering meaningful connections.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Explore and discover a diverse range of food and recipes shared by fellow users, igniting inspiration and culinary exploration.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card social video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Cooktivatesocial} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="user-research-container writings-container grid">
                    <h2 className="user-research-title">Empathize</h2>
                    <h3 className="user-needs-title">User Needs</h3>
                    <p className="user-needs-content">
                        Many beginners, especially teenagers, struggle to learn cooking due to a lack of proper guidance. Cooking alone can be time-consuming and uninspiring. These users seek an interactive solution that makes learning enjoyable and enhances their quality of life. 
                    </p>

                    <h3 className="user-problem-title">User Problem</h3>
                    <p className="user-problem-content">
                        Existing cooking apps often fall short in meeting these needs. While they provide recipes and basic instructions, they lack the interactive and gamified elements that engage users. Additionally, the social aspect of cooking is often absent. This leaves beginners feeling disengaged, impeding their progress in acquiring essential cooking skills.
                    </p>
                </div>

                <div className="writings-container grid">
                    <h2 className="user-research-title">Define</h2>
                    <div className="user-research-subtitle">
                        <h3>Value Proposition Map</h3>
                        <p>
                            My app transforms cooking education through gamification, social networking, and personalized guidance, making cooking an enjoyable path to self-improvement.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateValueProposition} alt="Cooktivate Value Proposition Map" className="cooktivate-value-proposition" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>User Workflow</h3>
                        <p>
                            This user flow lets users pick cooking challenges with clear step-by-step instructions. After finishing, they can upload images for points and medals. Users can also check out others' work and take on new challenges to keep learning.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateUserWorkflow} alt="Cooktivate User Workflow" className="cooktivate-user-workflow" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Card Sorting</h3>
                        <p>
                            I leveraged UXtweak, a popular UX research tool, to enhance Cooktivate's user-friendly navigation through card sorting. This section provides insights into user perceptions of our information structure, supported by visual aids like the similarity matrix, dendrogram, and hierarchy diagram. These visuals illustrate improvements based on user input in our updated information architecture.
                        </p>
                    </div>
                    <div className="user-research-img card-sorting-img">
                        <img loading="lazy" src={CooktivateCardSorting1} alt="Cooktivate Card Sorting" className="cooktivate-card-sorting" />
                        <img loading="lazy" src={CooktivateCardSorting2} alt="Cooktivate Card Sorting" className="cooktivate-card-sorting" />
                        <img loading="lazy" src={CooktivateCardSorting3} alt="Cooktivate Card Sorting" className="cooktivate-card-sorting" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Lean Canvas</h3>
                        <p>
                            The lean canvas highlights Cooktivate's key business model elements, such as target customers, value proposition, revenue streams, and cost structure. It helps me understand how to build a successful and sustainable business that provides value to users.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateLeanCanvas} alt="Cooktivate Lean Canvas" className="cooktivate-lean-canvas" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>User Persona</h3>
                        <p>
                            The two user personas, designed for the end users of Cooktivate, offer invaluable insights into our target audience. This user-centric approach enables us to tailor our products to meet their needs, ensuring a satisfying user experience. Understanding our users' preferences and pain points drives our mission to provide the best possible experience.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateUserPersona1} alt="Cooktivate User Persona 1" className="cooktivate-user-persona-1" />
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateUserPersona2} alt="Cooktivate User Persona 2" className="cooktivate-user-persona-2" />
                    </div>
                </div>

                <div className="writings-container grid">
                    <h2 className="user-research-title">Ideate</h2>
                    <div className="user-research-subtitle">
                        <h3>Wireframing</h3>
                        <p>
                            I've created a low-fidelity wireframe utilizing Procreate as an initial step, which provides a basic structure and layout for the app's design. It helps me visualize functionality and interactions before moving on to the final high-fidelity design in Figma.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateWireframing} alt="Cooktivate Wireframing" className="cooktivate-wireframing" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Design System</h3>
                        <p>
                            I've created Cooktivate's design system to maintain a consistent brand identity. I've chosen lively orange and cool blue as primary colors for a friendly ambiance. The typography is modern and clean, while illustrations are straightforward and charming. Minimalistic icons ensure a user-friendly experience.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateDesignSystem} alt="Cooktivate Design System" className="cooktivate-design-system" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Logo & Illustration</h3>
                        <p>
                            I designed Riceball, an adorable cartoon character, to accompany users on their cooking learning journey. With its charming and cute style, Riceball perfectly complements the app's design, making it approachable for everyone. I created Riceball using Adobe Illustrator, ensuring a high-quality and visually engaging addition to the app.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={Cooktivateillustration} alt="Cooktivate Illustration" className="cooktivate-illustration" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Components</h3>
                        <p>
                            I've designed numerous advanced Figma components for adding animations and microinteractions to our high-fidelity prototypes, making the prototype closely resemble a real mobile app.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={CooktivateComponents} alt="Cooktivate Components" className="cooktivate-components" />
                    </div>
                </div>

                <div className="prototype-container">
                    <h2>Prototype</h2>
                    <p>
                        The Figma high-fidelity prototype simulates the app's actual user experience, enabling detailed testing and refinement.
                    </p>
                    <iframe
                        title="Figma Embed"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="650"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FR6KyFRhwMI8b6JDIpa5qD7%2F%255BBETA%255D-Project-2%253A-Cooktivate-Design%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D1-2%26viewport%3D630%252C945%252C0.29%26t%3D7ksCVjM5QtXHEYyn-1%26scaling%3Dscale-down%26starting-point-node-id%3D644%253A6452%26mode%3Ddesign"
                        allowFullScreen
                    />
                </div>

                <div className="usability-testing-container writings-container grid">
                    <h2 className="usability-testing-title">Usability Testing</h2>

                    <h3 className="method-title">Method</h3>
                    <p className="method-content">
                        The usability test evaluated Cooktivate's high-fidelity prototype, focusing on the cooking challenge feature. Participants provided feedback on design, functionality, and user experience. 
                    </p>

                    <h3 className="findings-title">Findings</h3>
                    <p className="findings-content">
                        Usability test participants provided valuable feedback on Cooktivate, focusing on aspects like interface design, sign-in, challenge filters, navigation, and more. These insights will drive improvements to enhance the overall user experience. The final usability testing report was created using Canva for clear and visually appealing presentation.
                    </p>

                    <h3 className="reflection-title">Reflection</h3>
                    <p className="reflection-content">
                        The test highlighted strengths in Cooktivate's interface and sign-in process. Areas for improvement include the challenge page, cooking guidance, and user assistance. Addressing participant feedback will enhance usability and user experience.
                    </p>

                    <div className="usability-testing-img">
                        <img loading="lazy" src={CooktvateUsabilityTestingReport} alt="Cooktvate Usability Testing Report" className="cooktvate-usability-testing-report" />
                    </div>
                </div>

                <a 
                    href="https://www.canva.com/design/DAFfrGK-w0Q/XJV432mtM4tAtgS0vuSw6g/view?utm_content=DAFfrGK-w0Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" 
                    className="button view-others usability-test-report-button" 
                    target="_blank"
                    onClick={handleUsabilityReportClick}
                >
                    🔍 View Usability Test Report
                </a>

                <div className="usability-testing-container writings-container grid">
                    <h2 className="usability-testing-title">Takeaways</h2>

                    <h3 className="method-title">User-Centric is Key 🔑</h3>
                    <p className="method-content">
                        Prioritizing user needs and addressing real-world problems is paramount in effective UX design. Identifying the primary user pain point, such as the challenge of learning cooking, served as the foundation for this project. Our solution centered around a gamified, social experience with a refreshing color palette, engaging UX writing, and delightful illustrations, ensuring a simple and enjoyable user journey.
                    </p>

                    <h3 className="findings-title">Design System Matters 🎨</h3>
                    <p className="findings-content">
                        Establishing a design system upfront may seem daunting, but it pays dividends during high-fidelity prototyping. This approach streamlines the application of interactions and animations to buttons, toggles, and illustrations across all screens. Moreover, it guarantees design consistency, a fundamental requirement in the professional UX design landscape.
                    </p>

                    <h3 className="reflection-title">Always Plan before Work 🗓️</h3>
                    <p className="reflection-content">
                        This multifaceted project encompassed UX research, UX/UI design, graphic design, and usability testing, necessitating a well-structured schedule. Leveraging Trello, a renowned productivity tool, was instrumental in maintaining organization and ensuring a smooth design process. Thorough planning is a cornerstone of success in complex projects.
                    </p>

                    <div className="takeaways-img">
                        <img loading="lazy" src={CooktivateTrello} alt="Trello" className="cooktivate-trello" />
                    </div>
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Inm" 
                    className="button view-others"
                >
                    Next Cool Project
                </NavLink>
            </div>
        </div>
    )
}

export default Cooktivate;