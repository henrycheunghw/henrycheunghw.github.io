import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";

import Figma from "../../assets/skills/figma.svg"; 
import Illustrator from "../../assets/skills/illustrator.svg";
import Photoshop from "../../assets/skills/photoshop.svg";
import Framer from "../../assets/skills/framer.svg";
import Miro from "../../assets/skills/miro.svg";
import Protopie from "../../assets/skills/protopie.svg";
import Procreate from "../../assets/skills/procreate.svg";
import Canva from "../../assets/skills/canva.svg";
import Xd from "../../assets/skills/xd.svg";
import Indesign from "../../assets/skills/indesign.svg";
import Aftereffects from "../../assets/skills/after-effects.svg";
import Dimension from "../../assets/skills/dimension.svg";
import Aero from "../../assets/skills/aero.svg";
import Zeplin from "../../assets/skills/zeplin.svg";
import Spline from "../../assets/skills/spline.svg";
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
import Php from "../../assets/skills/php.svg";
import Sql from "../../assets/skills/sql.svg";
import Mysql from "../../assets/skills/mysql.svg";
import Gsap from "../../assets/skills/gsap.svg";
import Aframe from "../../assets/skills/aframe.svg";
import Phaser from "../../assets/skills/phaser.svg";
import D3 from "../../assets/skills/d3.svg";
import Wix from "../../assets/skills/wix.svg";
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
import Clickup from "../../assets/skills/clickup.svg";
import Microsoftoffice from "../../assets/skills/microsoft-office.svg";
import Googlesuite from "../../assets/skills/google-suite.svg";
import Jitter from "../../assets/skills/jitter.svg";
import Uxtweak from "../../assets/skills/uxtweak.svg";

const Skills = () => {

    const [activeSkill, setActiveSkill] = useState(null); // State to track the clicked element

    const uiuxCardRef = useRef(null);
    const webDevCardRef = useRef(null);
    const explorerCardRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    const handleClick = (skill) => {
      setActiveSkill(skill); // Update the activeSkill state with the clicked element

          // Scroll to the corresponding card based on the clicked skill
        if (skill === 'uiux') {
            uiuxCardRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (skill === 'web-dev') {
            webDevCardRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (skill === 'explorer') {
            explorerCardRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="skills">
            <div className="skills-content">
                <div className="skills-title-container">
                    <div className="grid">
                        <h1 className="title skills-title big-title">My Skills</h1>
                        <div className="iam">
                            {/* <p className="big-title let">let</p> */}
                            <h1 className="big-title name">I'm absolutely a</h1>
                        </div>
                        <div className="arrow glow">
                            <p className="arrow1">►</p>
                            <p className="arrow2">►</p>
                            <p className="arrow3">►</p>
                        </div>
                        <div className="skills-role">
                            <p className={`uiux ${activeSkill === 'uiux' ? 'active' : ''}`} onClick={() => handleClick('uiux')}>UI/UX Designer</p>
                            <p className={`web-dev ${activeSkill === 'web-dev' ? 'active' : ''}`} onClick={() => handleClick('web-dev')}>Web Developer</p>
                            <p className={`explorer ${activeSkill === 'explorer' ? 'active' : ''}`} onClick={() => handleClick('explorer')}>Everyday Explorer</p>
                        </div>
                        <div className={`skills-cards uiux-card grid ${activeSkill === 'uiux' ? 'active' : ''}`} ref={uiuxCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2>UI/UX Designer</h2>
                                    <NavLink onClick={scrollToTop()} to="/Knapsackx" className="button">
                                        Show Me! 😍
                                    </NavLink>
                                </div>
                                <p>
                                    I blend creativity and empathy to shape intuitive and visually stunning experiences that leave a lasting impression and make users feel truly connected.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item">
                                        <img src={Figma}></img>
                                        <p>Figma</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Illustrator}></img>
                                        <p>Illustrator</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Photoshop}></img>
                                        <p>Photoshop</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Framer}></img>
                                        <p>Framer</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Miro}></img>
                                        <p>Miro</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Protopie}></img>
                                        <p>ProtoPie</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Xd}></img>
                                        <p>XD</p>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="card-item">
                                        <img src={Wordpress}></img>
                                        <p>WordPress</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Elementor}></img>
                                        <p>Elementor</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Webflow}></img>
                                        <p>Webflow</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Wix}></img>
                                        <p>Wix</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Procreate}></img>
                                        <p>Procreate</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Indesign}></img>
                                        <p>InDesign</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Spline}></img>
                                        <p>Spline</p>
                                    </div>
                                </div>
                                <div className="col3">
                                    <div className="card-item">
                                        <img src={Canva}></img>
                                        <p>Canva</p>
                                    </div>
                                    <div className="card-item last">
                                        <img src={Zeplin}></img>
                                        <p>Zeplin</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Aftereffects}></img>
                                        <p>After Effects</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Dimension}></img>
                                        <p>Dimension</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Aero}></img>
                                        <p>Aero</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Jitter}></img>
                                        <p>Jitter</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Uxtweak}></img>
                                        <p>UXTweak</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`skills-cards web-dev-card grid ${activeSkill === 'web-dev' ? 'active' : ''}`} ref={webDevCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2>Web Developer</h2>
                                    <NavLink onClick={scrollToTop()} to="/Askaiden" className="button">
                                        Show Me! 😍
                                    </NavLink>
                                </div>
                                <p>
                                I'm the architect behind captivating digital experiences, crafting code that brings ideas to life and builds connections in the virtual world.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item">
                                        <img src={Html}></img>
                                        <p>HTML5</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Css}></img>
                                        <p>CSS3</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Javascript}></img>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Reactjs}></img>
                                        <p>React.js</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Reactnative}></img>
                                        <p>React Native</p>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="card-item">
                                        <img src={Jquery}></img>
                                        <p>jQuery</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Typescript}></img>
                                        <p>Typescript</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Bootstrap}></img>
                                        <p>Bootstrap</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Tailwind}></img>
                                        <p>Tailwind</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Sass}></img>
                                        <p>Sass</p>
                                    </div>
                                </div>
                                <div className="col3">
                                    <div className="card-item">
                                        <img src={Materialui}></img>
                                        <p>Material UI</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Git}></img>
                                        <p>Git</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Gsap}></img>
                                        <p>GSAP</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Aframe}></img>
                                        <p>A-Frame</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Phaser}></img>
                                        <p>Phaser.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`skills-cards explorer-card grid ${activeSkill === 'explorer' ? 'active' : ''}`} ref={explorerCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2>Everyday Explorer</h2>
                                    <NavLink onClick={scrollToTop()} to="/Mymori" className="button">
                                        Show Me! 😍
                                    </NavLink>
                                </div>
                                <p>
                                    I'm an enthusiastic learner, constantly exploring and pushing my limits to unlock new possibilities.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item">
                                        <img src={Ai}></img>
                                        <p>Generative AI</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Prompt}></img>
                                        <p>Prompt Engineering</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Jira}></img>
                                        <p>Jira</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Trello}></img>
                                        <p>Trello</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Slack}></img>
                                        <p>Slack</p>
                                    </div>
                                </div>
                                <div className="col2">
                                    <div className="card-item">
                                        <img src={Microsoftoffice}></img>
                                        <p>Microsoft Office</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Googlesuite}></img>
                                        <p>Google Suite</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Storytelling}></img>
                                        <p>Storytelling</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Copywriting}></img>
                                        <p>Copywriting</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Novels}></img>
                                        <p>Novels Writing</p>
                                    </div>
                                </div>
                                <div className="col3">
                                    <div className="card-item">
                                        <img src={Graphic}></img>
                                        <p>Graphic Design</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Communication}></img>
                                        <p>Communication</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Premiere}></img>
                                        <p>Premiere Pro</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Audition}></img>
                                        <p>Audition</p>
                                    </div>
                                    <div className="card-item">
                                        <img src={Socialmedia}></img>
                                        <p>Social Media</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                {/* <NavLink onClick={scrollToTop()} to="/About" className="button view-others">
                    😆 Know More About Me!
                </NavLink> */}
                <NavLink onClick={scrollToTop()} to="/" className="button view-others">
                    😎 View My Projects!
                </NavLink>
            </div>
        </div>

    )
}

export default Skills;