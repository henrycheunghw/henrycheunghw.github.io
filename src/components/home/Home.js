import React, { useState } from "react";

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
                            <h3>A <span className="glow">UI/UX Designer</span></h3>
                        </div>
                        <div className="effects first-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>Storyteller in User-Centred Design</p>
                        </div>
                        <div className="effects second-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>Designer With Web Development Skills</p>
                        </div>
                        <div className="effects third-effect">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <p>Everyday Explorer Embracing <span className="glow">Dreams</span></p>
                        </div>
                        <div className="quote">
                            <p className="quote-symbol-1">❛❛</p>
                            <p>
                                I believe that design can create meaningful connections among those who matter most to us!
                            </p>
                            <p className="quote-symbol-2">❜❜</p>
                        </div>
                        <div className="show-me-btn-container">
                            <NavLink to="about" className="button show-me-btn">
                                ✨ Know More About Me!
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
                            <p>Play-to-earn app redesign shaped by generative AI, user research, usability testing, and a comprehensive design system.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Photoshop}></img>
                                <img loading="lazy" src={Ai}></img>
                                <img loading="lazy" src={Jira}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="knapsackx" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/k6fWF3Y2sM2ErLyADyed8B/Knapsack-X-Mobile-App-Design-(Portfolio-Version)?type=design&node-id=246%3A3318&mode=design&t=BdSrWe1tFmXZluay-1" target="_blank" className="project-link">
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
                            <p>Interactive cooking learning app design that ingeniously blends the excitement of gaming and the connectivity of social media, transforming your culinary journey into an immersive and captivating experience.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Procreate}></img>
                                <img loading="lazy" src={Canva}></img>
                                <img loading="lazy" src={Uxtweak}></img>
                                <img loading="lazy" src={Trello}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="cooktivate" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/xrQiKR2isA2DHtOJbcdmoU/Project-2%3A-Cooktivate-Design?type=design&node-id=0%3A1&t=V0SnVXTB0ymkRIah-1" target="_blank" className="project-link">
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
                            <p>Education institution multi-purpose app design reimagined for the modern era, empowering users with seamless functionality and captivating user experience.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Procreate}></img>
                                <img loading="lazy" src={Canva}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="inm" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/q4koYIkUc84agIgD9o4dLn/Project-3%3A-INM?type=design&node-id=0%3A1&t=tznyvIfj6pidYAuN-1" target="_blank" className="project-link">
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
                            <p>AI-powered education search website design, transforming search experiences with an interactive user interface and the innovative ChatGPT API, and simplifying prompt writing.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Illustrator}></img>
                                <img loading="lazy" src={Jira}></img>
                                <img loading="lazy" src={Reactjs}></img>
                                <img loading="lazy" src={Typescript}></img>
                                <img loading="lazy" src={Sass}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="askaiden" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/Elh3B0N2vESHLu2myUhYJZ/AskAiden-Design?type=design&node-id=305%3A3363&mode=design&t=T8JBCvi2qm1bNKsy-1" target="_blank" className="project-link">
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
                            <p>AI-powered gamified app design fostering emotional well-being and community through virtual forests.</p>
                            <div className="stacks-container">
                                <img loading="lazy" src={Figma}></img>
                                <img loading="lazy" src={Ai}></img>
                                <img loading="lazy" src={Photoshop}></img>
                                <img loading="lazy" src={Illustrator}></img>
                            </div>
                            <div className="project-more">
                                <NavLink to="mymori" className="button">View Project</NavLink>
                                <a href="https://www.figma.com/file/jSXsAIo8puevjI05sRxUHe/My-Mori-(Hackathon-Version)?type=design&node-id=0%3A1&mode=design&t=62stQrmVfd96NZTn-1" target="_blank" className="project-link">
                                    <img loading="lazy" src={Figmalink} alt="Figma Link"/>
                                </a>
                            </div>
                        </div>
                        <div className="project-img mymori-img">
                            <img loading="lazy" src={MymoriDevice} alt="MyMori Showcase"/>
                        </div>
                    </div>                 
                    <div className="projects sirloin-society">
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
                    </div>   
                </div>
            </div>
            <div className="grid">
                {/* <NavLink onClick={scrollToTop()} to="/skills" className="button view-others">
                    🤩 View My Skills!
                </NavLink> */}
                <NavLink onClick={scrollToTop()} to="/About" className="button view-others">
                    😆 Know More About Me!
                </NavLink>
            </div>
        </div>
    )
}

export default Home;