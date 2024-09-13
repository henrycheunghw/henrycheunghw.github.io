import React from "react";
import { NavLink } from "react-router-dom";
import Propic from "../../assets/propic.png";
import Riceball from "../../assets/interactive/riceball/riceball.svg";

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    const navigateToLinkedIn = () => {
        window.open("https://www.linkedin.com/in/hoi-wing-henry-cheung/", "_blank");
    };

    return (
        <div className="about">
            <div className="about-content">
                <div className="about-title-container">
                    <div className="grid">
                        <div className="about-image">
                            <img loading="lazy" src={Propic}></img>
                        </div>
                        <div className="about-text">
                            <div className="about-intro">
                            <h1 className="title about-title name">About Me</h1>
                                <h3 className="hi-sentence glow">
                                    Who is Henry?
                                </h3>
                                <p>
                                    Hey there! 👋 I'm a UI/UX Designer at Lifeguard Digital Health and a graduate of BCIT's New Media Design and Web Development program. My passion lies in crafting seamless user experiences with amazing interactivity and functionality.
                                </p>
                                <p>
                                    I'm an everyday explorer, perpetually hungry for knowledge. Whether it's coding 💻, storytelling 📖, or tinkering with generative AI 🤖, I'm all in! I'm like a sponge for new skills, soaking them up to fuel my passion for user-centered design.
                                </p>
                                <p>
                                    Writing novels is my ultimate passion 📚! It's not just a hobby; it's a way for me to dive into the depths of understanding user needs, weaving messages with creativity, and nurturing brilliant ideas. With published works and a thriving online community, I've amassed 6500+ Facebook followers 🌟 and 3 million+ online hits 📊. Join me on this literary journey! 😊
                                </p>
                                <p className="bold-text glow">
                                    I believe that design can create meaningful connections among those who matter most to us!
                                </p>
                                <button className="contact-me-btn button" onClick={navigateToLinkedIn}>
                                    🚀 Connect with Me!
                                </button>
                            </div>

                            <div className="about-experience">
                                <h2 className="about-titles">
                                    Experience
                                </h2>
                                <p className="bold-text about-subtitles">
                                    UX/UI Designer
                                </p>
                                <p>
                                    Lifeguard Digital Health
                                </p>
                                <p className="bold-text about-subtitles">
                                    UX/UI Designer - Internship
                                </p>
                                <p>
                                    Knapsack-X
                                </p>
                                <p className="bold-text about-subtitles">
                                    UI/UX Graphic Designer - Volunteer
                                </p>
                                <p>
                                    Empowered Futures
                                </p>
                                <p className="bold-text about-subtitles">
                                    UI/UX Designer
                                </p>
                                <p>
                                    WaffleHacks 2023 by Major League Hacking (MLH)
                                </p>
                                <p className="bold-text about-subtitles">
                                    Set Representative
                                </p>
                                <p>
                                    British Columbia Institute of Technology
                                </p>
                                <p className="bold-text about-subtitles">
                                    Nomination for the 13th Hong Kong Emerging Writer Award
                                </p>
                                <p>
                                    Radio Television Hong Kong (RTHK)
                                </p>
                                <p className="bold-text about-subtitles">
                                    Guest Speaker for Hong Kong Book Fair 2017
                                </p>
                                <p>
                                    Hong Kong Trade Development Council
                                </p>
                            </div>

                            <div className="about-education">
                                <h2 className="about-titles">
                                    Education
                                </h2>
                                <p className="about-subtitles">
                                    <span className="bold-text">New Media Design and Web Development, Diploma</span>  -  Currently Enrolled
                                </p>
                                <p>
                                    British Columbia Institute of Technology, Vancouver BC
                                </p>
                                <p className="about-subtitles">
                                    <span className="bold-text">Bachelor of Social Science, Politics and Public Administration</span>  -  Sep 2014 - May 2018
                                </p>
                                <p>
                                    The Chinese University of Hong Kong, Hong Kong
                                </p>
                            </div>

                            <div className="about-certification">
                                <h2 className="about-titles">
                                    Certification
                                </h2>
                                <p className="bold-text about-subtitles">
                                    Google UX Design Certificate
                                </p>
                                <p>
                                    ➊ Foundations of User Experience (UX) Design
                                </p>
                                <p>
                                    ➋ Start the UX Design Process: Empathize, Define, and Ideate
                                </p>
                                <p>
                                    ➌ Conduct UX Research and Test Early Concepts
                                </p>
                                <p>
                                    ➍ Build Wireframes and Low-Fidelity Prototypes
                                </p> 
                                <p className="bold-text about-subtitles">
                                    LinkedIn Learning
                                </p>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Career Essentials in Generative AI by Microsoft and LinkedIn
                                    </p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Designing Accessible Components in Figma
                                    </p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Designing Microinteractions with Figma
                                    </p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Figma: Handling off to Developers
                                    </p>
                                </div>
                                <p className="bold-text about-subtitles">
                                    Codecademy
                                </p>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Create a Front-End App with React Skill Path
                                    </p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>
                                        Build a Website with HTML, CSS, and GitHub Pages Skill Path
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid">
                {/* <NavLink onClick={scrollToTop()} to="/" className="button view-others">
                    😎 View My Projects!
                </NavLink> */}
                <NavLink onClick={scrollToTop()} to="/skills" className="button view-others">
                    🤩 View My Skills!
                </NavLink>
            </div>
        </div>
    )
}

export default About;