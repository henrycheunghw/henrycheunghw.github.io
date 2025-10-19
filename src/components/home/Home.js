import React, { useState } from "react";
import ReactGA from "react-ga4";

import PersonalLogo from "../../assets/cards/personal-logo.svg";
import Components from "../../assets/icons/components.svg";
import Effects from "../../assets/icons/effects.svg";
import AskAiden from "../../assets/cards/askaiden.svg";
import Inm from "../../assets/cards/inm.svg";
import Cooktivate from "../../assets/cards/cooktivate.svg";
import SadPigeon from "../../assets/cards/sad-pigeon.svg";
import SirloinSociety from "../../assets/cards/sirloin-society.svg";
import KnapsackxDevice from "../../assets/mockup/knapsackx.png";
import InmDevice from "../../assets/mockup/inm.png";
import CooktivateDevice from "../../assets/mockup/cooktivate.png";
import AskAidenDevice from "../../assets/mockup/askaiden.png";
import MymoriDevice from "../../assets/mockup/mymori.png";
import SirloinSocietyDevice from "../../assets/mockup/sirloin-society.png";
import LinkedInLearningDevice from "../../assets/mockup/linkedinlearning.png";
import Figmalink from "../../assets/icons/figma-link.svg";
import Githublink from "../../assets/icons/github-link.svg";
import { NavLink } from "react-router-dom";

import Figma from "../../assets/skills/figma.svg"; 
import Illustrator from "../../assets/skills/illustrator.svg";
import Photoshop from "../../assets/skills/photoshop.svg";
import Xd from "../../assets/skills/xd.svg";
import Indesign from "../../assets/skills/indesign.svg";
import Aftereffects from "../../assets/skills/after-effects.svg";
import Dimension from "../../assets/skills/dimension.svg";
import Aero from "../../assets/skills/aero.svg";
import Miro from "../../assets/skills/miro.svg";
import Protopie from "../../assets/skills/protopie.svg";
import Zeplin from "../../assets/skills/zeplin.svg";
import Procreate from "../../assets/skills/procreate.svg";
import Spline from "../../assets/skills/spline.svg";
import Canva from "../../assets/skills/canva.svg";
import Lottieflies from "../../assets/skills/lottieflies.svg";
import Html from "../../assets/skills/html.svg";
import Css from "../../assets/skills/css.svg";
import Javascript from "../../assets/skills/js.svg";
import Reactjs from "../../assets/skills/react.svg";
import Reactnative from "../../assets/skills/react-native.svg";
import Redux from "../../assets/skills/redux.svg";
import Jquery from "../../assets/skills/jQuery.svg";
import Typescript from "../../assets/skills/typescript.svg";
import Bootstrap from "../../assets/skills/bootstrap.svg";
import Tailwind from "../../assets/skills/tailwind.svg";
import Sass from "../../assets/skills/sass.svg";
import Materialui from "../../assets/skills/materialui.svg";
import Git from "../../assets/skills/git.svg";
import Wordpress from "../../assets/skills/wordpress.svg";
import Elementor from "../../assets/skills/elementor.svg";
import Webflow from "../../assets/skills/webflow.svg";
import Node from "../../assets/skills/node.svg";
import Python from "../../assets/skills/python.svg";
import Php from "../../assets/skills/php.svg";
import Sql from "../../assets/skills/sql.svg";
import Mysql from "../../assets/skills/mysql.svg";
import Aframe from "../../assets/skills/aframe.svg";
import Phaser from "../../assets/skills/phaser.svg";
import D3 from "../../assets/skills/d3.svg";
import Prompt from "../../assets/skills/prompt.svg";
import Ai from "../../assets/skills/ai.svg";
import Novels from "../../assets/skills/novels.svg";
import Graphic from "../../assets/skills/graphic.svg";
import Copywriting from "../../assets/skills/copywriting.svg"
import Premiere from "../../assets/skills/premiere.svg";
import Audition from "../../assets/skills/audition.svg";
import Communication from "../../assets/skills/communication.svg";
import Socialmedia from "../../assets/skills/social-media.svg";
import Storytelling from "../../assets/skills/storytelling.svg";
import Jira from "../../assets/skills/jira.svg";
import Trello from "../../assets/skills/trello.svg";
import Slack from "../../assets/skills/slack.svg";
import Jitter from "../../assets/skills/jitter.svg";
import Uxtweak from "../../assets/skills/uxtweak.svg";

import Riceball from "../../assets/interactive/riceball/riceball.svg";

const Home = () => {

    const handleImpressClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Impress Me Button",
        });
    };

    const [activeprojects, setActiveprojects] = useState(null);

    const handleClick = (projects) => {
        setActiveprojects(projects);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    return (
        <div className="home">
            <div className="home-hero">
                <div className="grid">
                    <div className="hero-content">
                        <h1 className="big-title name">Hi! I'm Henry,</h1>
                        <div className="components">
                            <img loading="lazy" src={Components} alt="Components"/>
                            <h3><span className="glow">Product Designer + Storyteller</span></h3>
                        </div>
                        <div className="effects first-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>UI/UX with 9+ years of storytelling experience</p>
                        </div>
                        <div className="effects second-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>Design-to-Code with front-end skills</p>
                        </div>
                        <div className="effects third-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>Accelerating Design by 50%+ with <span className="glow">AI-Driven</span> solutions</p>
                        </div>
                        <div className="quote">
                            <p className="quote-symbol-1">❛❛</p>
                            <p>
                                Design can create meaningful connections among those who matter most to us!
                            </p>
                            <p className="quote-symbol-2">❜❜</p>
                        </div>
                        <div className="show-me-btn-container">
                            <NavLink 
                                to="knapsackx" 
                                className="button show-me-btn"
                                onClick={handleImpressClick}
                            >
                                See My Work
                            </NavLink>
                            <img loading="lazy" src={Riceball} alt="Riceball" className="riceball" />
                        </div>
                    </div>
                    <div className="hero-cards">
                        <img loading="lazy" className="cards personal-logo-icon" src={PersonalLogo} alt="Personal Logo" />
                        <img loading="lazy" className="cards askaiden-icon" src={AskAiden} alt="AskAiden"/>
                        <img loading="lazy" className="cards inm-icon" src={Inm} alt="INM"/>
                        <img loading="lazy" className="cards cooktivate-icon" src={Cooktivate} alt="Cooktivate"/>
                        <img loading="lazy" className="cards sad-pigeon-icon" src={SadPigeon} alt="Sad Pigeon"/>
                        <img loading="lazy" className="cards sirloin-society-icon" src={SirloinSociety} alt="Sirloin Society"/>
                    </div>
                </div>
            </div>
            
            <div className="projects">
                <div className="projects-intro grid">
                    <h2 className="projects-title">UI/UX Projects</h2>
                    {/* <button class={`button uiux-btn ${activeprojects === 'uiux-btn' ? 'active' : ''}`} onClick={() => handleClick('uiux-btn')}>UI/UX Design</button>
                    <button class={`button all-btn ${activeprojects === 'all-btn' ? 'active' : ''}`} onClick={() => handleClick('all-btn')}>All</button>
                    <button class={`button web-dev-btn ${activeprojects === 'web-dev-btn' ? 'active' : ''}`} onClick={() => handleClick('web-dev-btn')}>Web Development</button> */}
                </div>

                <div className="projects-details grid">
                    <div className={`projects knapsack-x ${activeprojects === 'uiux-btn' ? 'active' : ''}`}>
                        <div className="project-info">
                            <h3 className="project-title">Knapsack-X Mobile App Redesign</h3>
                            <p>End-to-end Figma mobile gaming app redesign from 100+ generative AI visuals to compelling interactive Figma prototype shaped by design system and usability testing.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Photoshop}></img>
                                <img loading="lazy" src={Ai}></img>
                                <img loading="lazy" src={Jira}></img>
                            </div>
                            <div className="project-more">
                                <NavLink 
                                    to="knapsackx" 
                                    className="button"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "Project",
                                            action: "Click",
                                            label: "View Project - Knapsack X",
                                        });
                                    }}
                                >
                                    View Project
                                </NavLink>
                                <a 
                                    href="https://www.figma.com/file/k6fWF3Y2sM2ErLyADyed8B/Knapsack-X-Mobile-App-Design-(Portfolio-Version)?type=design&node-id=246%3A3318&mode=design&t=BdSrWe1tFmXZluay-1" 
                                    target="_blank" 
                                    className="project-link"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "External Link",
                                            action: "Click",
                                            label: "Figma Link - Knapsack X",
                                        });
                                    }}
                                >
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img knapsackx-img">
                            <img loading="lazy" src={KnapsackxDevice} alt="KnapsackX Showcase"/>
                        </div>
                    </div>
                    <div className={`projects cooktivate ${activeprojects === 'web-dev-btn' ? 'active' : ''}`}>                        
                        <div className="project-info">
                            <h3 className="project-title">Cooktivate</h3>
                            <p>Gamified cooking app design from a personalized, interactive user experience to a compelling interactive Figma prototype with powerful animations, shaped by a custom visual design and reusable Figma components.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Procreate}></img>
                                <img loading="lazy" src={Canva}></img>
                                <img loading="lazy" src={Uxtweak}></img>
                                <img loading="lazy" src={Trello}></img>
                            </div>
                            <div className="project-more">
                                <NavLink
                                    to="cooktivate"
                                    className="button"
                                    onClick={() => {
                                        ReactGA.event({
                                        category: "Project",
                                        action: "Click",
                                        label: "View Project - Cooktivate",
                                        });
                                    }}
                                >
                                    View Project
                                </NavLink>

                                <a 
                                    href="https://www.figma.com/file/xrQiKR2isA2DHtOJbcdmoU/Project-2%3A-Cooktivate-Design?type=design&node-id=0%3A1&t=V0SnVXTB0ymkRIah-1" 
                                    target="_blank" 
                                    className="project-link"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "External Link",
                                            action: "Click",
                                            label: "Figma Link - Cooktivate",
                                        });
                                    }}
                                >
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img cooktivate-img">
                            <img loading="lazy" src={CooktivateDevice} alt="Cooktivate Showcase"/>
                        </div>
                    </div>                    
                    <div className={`projects inm ${activeprojects === 'web-dev-btn' ? 'active' : ''}`}>
                        <div className="project-info">
                            <h3 className="project-title">Institute of New Media</h3>
                            <p>Collaborative Figma project to build a single, comprehensive school app that centralizes class schedules, communication, a marketplace, activity tracking, and digital identity into a streamlined user experience.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Procreate}></img>
                                <img loading="lazy" src={Canva}></img>
                            </div>
                            <div className="project-more">
                                <NavLink
                                    to="inm"
                                    className="button"
                                    onClick={() => {
                                        ReactGA.event({
                                        category: "Project",
                                        action: "Click",
                                        label: "View Project - INM",
                                        });
                                    }}
                                >
                                    View Project
                                </NavLink>
                                <a 
                                    href="https://www.figma.com/file/q4koYIkUc84agIgD9o4dLn/Project-3%3A-INM?type=design&node-id=0%3A1&t=tznyvIfj6pidYAuN-1" 
                                    target="_blank" 
                                    className="project-link"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "External Link",
                                            action: "Click",
                                            label: "Figma Link - INM",
                                        });
                                    }}
                                >
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img inm-img">
                            <img loading="lazy" src={InmDevice} alt="INM Showcase"/>
                        </div>
                    </div>
                    <div className="projects askaiden">
                        <div className="project-info">
                            <h3 className="project-title">AskAiden</h3>
                            <p>Publicly launched AI-powered education search website designed to simplify prompt writing and transform the AI search experience, collaborating with developers leveraging the ChatGPT API</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Jira}></img>
                                <img loading="lazy" src={Reactjs}></img>
                                <img loading="lazy" src={Typescript}></img>
                                <img loading="lazy" src={Sass}></img>
                            </div>
                            <div className="project-more">
                                <NavLink
                                    to="askaiden"
                                    className="button"
                                    onClick={() => {
                                        ReactGA.event({
                                        category: "Project",
                                        action: "Click",
                                        label: "View Project - AskAiden",
                                        });
                                    }}
                                >
                                    View Project
                                </NavLink>
                                <a 
                                    href="https://www.figma.com/file/Elh3B0N2vESHLu2myUhYJZ/AskAiden-Design?type=design&node-id=305%3A3363&mode=design&t=T8JBCvi2qm1bNKsy-1" 
                                    target="_blank" 
                                    className="project-link"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "External Link",
                                            action: "Click",
                                            label: "Figma Link - AskAiden",
                                        });
                                    }}
                                >
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img askaiden-img">
                            <img loading="lazy" src={AskAidenDevice} alt="AskAiden Showcase"/>
                        </div>
                    </div>
                    <div className={`projects mymori ${activeprojects === 'web-dev-btn' ? 'active' : ''}`}>
                        <div className="project-info">
                            <h3 className="project-title">MyMori</h3>
                            <p>AI-powered gamified mobile app designed to foster emotional well-being by helping users grow a virtual forest, with visual assets crafted using generative AI.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Ai}></img>
                                <img loading="lazy" src={Photoshop}></img>
                                <img loading="lazy" src={Illustrator}></img>
                            </div>
                            <div className="project-more">
                                <NavLink
                                    to="mymori"
                                    className="button"
                                    onClick={() => {
                                        ReactGA.event({
                                        category: "Project",
                                        action: "Click",
                                        label: "View Project - MyMori",
                                        });
                                    }}
                                >
                                    View Project
                                </NavLink>
                                <a 
                                    href="https://www.figma.com/file/jSXsAIo8puevjI05sRxUHe/My-Mori-(Hackathon-Version)?type=design&node-id=0%3A1&mode=design&t=62stQrmVfd96NZTn-1" 
                                    target="_blank" 
                                    className="project-link"
                                    onClick={() => {
                                        ReactGA.event({
                                            category: "External Link",
                                            action: "Click",
                                            label: "Figma Link - MyMori",
                                        });
                                    }}
                                >
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img mymori-img">
                            <img loading="lazy" src={MymoriDevice} alt="MyMori Showcase"/>
                        </div>
                    </div>                 
                    {/* <div className="projects sirloin-society">
                        <div className="project-info">
                            <h3 className="project-title">Sirloin Society</h3>
                            <p>Responsive website project that showcases a luxurious steakhouse experience. The project involved creating a comprehensive design system, wireframing, prototyping, and hand coding.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Javascript}></img>
                                <img loading="lazy" src={Jquery}></img>
                                <img loading="lazy" src={Git}></img>
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Photoshop}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="sirloinsociety" className="button">View Project</NavLink>
                                <a href="https://henrycheunghw.github.io/sirloinsociety/" target="_blank" className="project-link">
                                <img loading="lazy" src={Githublink} alt="Github Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img sirloin-society-img">
                            <img loading="lazy" src={SirloinSocietyDevice} alt="Sirloin Society Showcase"/>
                        </div>
                    </div>
                    <div className={`projects linkedin-learning ${activeprojects === 'web-dev-btn' ? 'active' : ''}`}>
                        <div className="project-info">
                            <h3 className="project-title">LinkedIn Learning Redesign</h3>
                            <p>UX research, testing and redesign project aimed at enhancing the user experience of LinkedIn Learning, with an user-centric approach.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Canva}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="linkedinlearning" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/9vQLXWg0DVAmerQ36l5sq6/LinkedIn-Learning-Redesign?type=design&node-id=0%3A1&mode=design&t=jAfVOwRdCesBLXtr-1" target="_blank" className="project-link">
                                <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img linkedin-learning-img">
                            <img loading="lazy" src={LinkedInLearningDevice} alt="LinkedIn Learning Showcase"/>
                        </div>
                    </div>    */}
                </div>
            </div>
            <div className="grid">
                {/* <NavLink onClick={scrollToTop()} to="/skills" className="button view-others">
                    🤩 View My Skills!
                </NavLink> */}
                <NavLink 
                    onClick={() => {
                        ReactGA.event({
                        category: "Button",
                        action: "Click",
                        label: "Know More About Me Button",
                        });
                        scrollToTop();
                    }} 
                    to="/About" 
                    className="button view-others"
                >
                    Know More About Me
                </NavLink>
            </div>
        </div>
    )
}

export default Home;