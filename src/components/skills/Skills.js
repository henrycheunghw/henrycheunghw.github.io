import React, { useState, useRef } from 'react';
import { NavLink } from "react-router-dom";
import ReactGA from "react-ga4";

import Figma from "../../assets/skills/figma.svg"; 
import Sketch from "../../assets/skills/sketch.svg";
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

    const [activeSkill, setActiveSkill] = useState(null); 

    const uiuxCardRef = useRef(null);
    const webDevCardRef = useRef(null);
    const explorerCardRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleClick = (skill) => {
      setActiveSkill(skill); 

      if (skill === 'uiux') {
          uiuxCardRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (skill === 'web-dev') {
          webDevCardRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (skill === 'explorer') {
          explorerCardRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const trackShowMe = (label) => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: label
        });
        scrollToTop();
    };

    return (
        <div className="skills">
            <div className="skills-content">
                <div className="skills-title-container">
                    <div className="grid">
                        <h1 className="title skills-title big-title">My Skills</h1>
                        <div className="iam">
                            <h1 className="big-title name">I'm absolutely great at</h1>
                        </div>
                        <div className="arrow">
                            <p className="arrow1 gradient-text">►</p>
                            <p className="arrow2 gradient-text">►</p>
                            <p className="arrow3 gradient-text">►</p>
                        </div>
                        <div className="skills-role">
                            <p className={`uiux ${activeSkill === 'uiux' ? 'active' : ''}`} onClick={() => handleClick('uiux')}>UI/UX Design</p>
                            <p className={`web-dev ${activeSkill === 'web-dev' ? 'active' : ''}`} onClick={() => handleClick('web-dev')}>Development</p>
                            <p className={`explorer ${activeSkill === 'explorer' ? 'active' : ''}`} onClick={() => handleClick('explorer')}>Proactive Learning</p>
                        </div>

                        {/* UI/UX Card */}
                        <div className={`skills-cards uiux-card grid ${activeSkill === 'uiux' ? 'active' : ''}`} ref={uiuxCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2 className="gradient-text">UI/UX Design</h2>
                                    <NavLink 
                                        onClick={() => trackShowMe("show me - UI/UX Designer - Skills Page")} 
                                        to="/Knapsackx" 
                                        className="button"
                                    >
                                        Show Me
                                    </NavLink>
                                </div>
                                <p>
                                    I create intuitive and meaningful experiences that are both beautiful and easy to use, helping users feel understood and connected.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item"><img src={Figma} alt="Figma"/><p>Figma</p></div>
                                    <div className="card-item"><img src={Sketch} alt="Sketch"/><p>Sketch</p></div>
                                    <div className="card-item"><img src={Illustrator} alt="Illustrator"/><p>Illustrator</p></div>
                                    <div className="card-item"><img src={Photoshop} alt="Photoshop"/><p>Photoshop</p></div>
                                    <div className="card-item"><img src={Framer} alt="Framer"/><p>Framer</p></div>
                                    <div className="card-item"><img src={Miro} alt="Miro"/><p>Miro</p></div>
                                    <div className="card-item"><img src={Xd} alt="XD"/><p>XD</p></div>
                                </div>
                                <div className="col2">
                                    <div className="card-item"><img src={Wordpress} alt="WordPress"/><p>WordPress</p></div>
                                    <div className="card-item"><img src={Elementor} alt="Elementor"/><p>Elementor</p></div>
                                    <div className="card-item"><img src={Webflow} alt="Webflow"/><p>Webflow</p></div>
                                    <div className="card-item"><img src={Wix} alt="Wix"/><p>Wix</p></div>
                                    <div className="card-item"><img src={Procreate} alt="Procreate"/><p>Procreate</p></div>
                                    <div className="card-item"><img src={Indesign} alt="InDesign"/><p>InDesign</p></div>
                                    <div className="card-item"><img src={Protopie} alt="ProtoPie"/><p>ProtoPie</p></div>
                                </div>
                                <div className="col3">
                                    <div className="card-item"><img src={Canva} alt="Canva"/><p>Canva</p></div>
                                    <div className="card-item"><img src={Zeplin} alt="Zeplin"/><p>Zeplin</p></div>
                                    <div className="card-item"><img src={Aftereffects} alt="After Effects"/><p>After Effects</p></div>
                                    <div className="card-item"><img src={Dimension} alt="Dimension"/><p>Dimension</p></div>
                                    <div className="card-item"><img src={Aero} alt="Aero"/><p>Aero</p></div>
                                    <div className="card-item"><img src={Spline} alt="Spline"/><p>Spline</p></div>
                                    <div className="card-item"><img src={Uxtweak} alt="UXTweak"/><p>UXTweak</p></div>
                                </div>
                            </div>
                        </div>

                        {/* Web Dev Card */}
                        <div className={`skills-cards web-dev-card grid ${activeSkill === 'web-dev' ? 'active' : ''}`} ref={webDevCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2 className="gradient-text">Development</h2>
                                    <NavLink 
                                        onClick={() => trackShowMe("show me - Web Developer - Skills Page")} 
                                        to="/Askaiden" 
                                        className="button"
                                    >
                                        Show Me
                                    </NavLink>
                                </div>
                                <p>
                                    I'm a designer with coding skills, bridging design and development to build scalable systems and seamless user experiences.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item"><img src={Html} alt="HTML5"/><p>HTML5</p></div>
                                    <div className="card-item"><img src={Css} alt="CSS3"/><p>CSS3</p></div>
                                    <div className="card-item"><img src={Javascript} alt="JavaScript"/><p>JavaScript</p></div>
                                    <div className="card-item"><img src={Reactjs} alt="React.js"/><p>React.js</p></div>
                                    <div className="card-item"><img src={Reactnative} alt="React Native"/><p>React Native</p></div>
                                </div>
                                <div className="col2">
                                    <div className="card-item"><img src={Jquery} alt="jQuery"/><p>jQuery</p></div>
                                    <div className="card-item"><img src={Typescript} alt="Typescript"/><p>Typescript</p></div>
                                    <div className="card-item"><img src={Bootstrap} alt="Bootstrap"/><p>Bootstrap</p></div>
                                    <div className="card-item"><img src={Tailwind} alt="Tailwind"/><p>Tailwind</p></div>
                                    <div className="card-item"><img src={Sass} alt="Sass"/><p>Sass</p></div>
                                </div>
                                <div className="col3">
                                    <div className="card-item"><img src={Materialui} alt="Material UI"/><p>Material UI</p></div>
                                    <div className="card-item"><img src={Git} alt="Git"/><p>Git</p></div>
                                    <div className="card-item"><img src={Gsap} alt="GSAP"/><p>GSAP</p></div>
                                    <div className="card-item"><img src={Aframe} alt="A-Frame"/><p>A-Frame</p></div>
                                    <div className="card-item"><img src={Phaser} alt="Phaser.js"/><p>Phaser.js</p></div>
                                </div>
                            </div>
                        </div>

                        {/* Everyday Explorer Card */}
                        <div className={`skills-cards explorer-card grid ${activeSkill === 'explorer' ? 'active' : ''}`} ref={explorerCardRef}>
                            <div className="card-text">
                                <div className="card-title">
                                    <h2 className="gradient-text">Proactive Learning</h2>
                                    <NavLink 
                                        onClick={() => trackShowMe("show me - Everyday Explorer - Skills Page")} 
                                        to="/Mymori" 
                                        className="button"
                                    >
                                        Show Me
                                    </NavLink>
                                </div>
                                <p>
                                    I’m an enthusiastic learner who wakes up at 5 AM every day to explore new skills and push my limits.
                                </p>
                            </div>
                            <div className="card-items">
                                <div className="col1">
                                    <div className="card-item"><img src={Ai} alt="Generative AI"/><p>Generative AI</p></div>
                                    <div className="card-item"><img src={Prompt} alt="Prompt Engineering"/><p>Prompt Engineering</p></div>
                                    <div className="card-item"><img src={Jira} alt="Jira"/><p>Jira</p></div>
                                    <div className="card-item"><img src={Trello} alt="Trello"/><p>Trello</p></div>
                                    <div className="card-item"><img src={Slack} alt="Slack"/><p>Slack</p></div>
                                </div>
                                <div className="col2">
                                    <div className="card-item"><img src={Microsoftoffice} alt="Microsoft Office"/><p>Microsoft Office</p></div>
                                    <div className="card-item"><img src={Googlesuite} alt="Google Suite"/><p>Google Suite</p></div>
                                    <div className="card-item"><img src={Storytelling} alt="Storytelling"/><p>Storytelling</p></div>
                                    <div className="card-item"><img src={Copywriting} alt="Copywriting"/><p>Copywriting</p></div>
                                    <div className="card-item"><img src={Novels} alt="Novels Writing"/><p>Novels Writing</p></div>
                                </div>
                                <div className="col3">
                                    <div className="card-item"><img src={Socialmedia} alt="Social Media"/><p>Social Media</p></div>
                                    <div className="card-item"><img src={Graphic} alt="Graphic Design"/><p>Graphic Design</p></div>
                                    <div className="card-item"><img src={Premiere} alt="Premiere"/><p>Premiere</p></div>
                                    <div className="card-item"><img src={Audition} alt="Audition"/><p>Audition</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="grid">
                <NavLink onClick={scrollToTop} to="/" className="button view-others">
                    View My Projects
                </NavLink>
            </div>
        </div>
    )
}

export default Skills;