import React from "react";
import { NavLink } from "react-router-dom";
import Propic from "../../assets/propic.png";
import Riceball from "../../assets/interactive/riceball/riceball.svg";
import ReactGA from "react-ga4";

const About = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    const navigateToLinkedIn = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "connect with me - About Page"
        });
        window.open("https://www.linkedin.com/in/hoi-wing-henry-cheung/", "_blank");
    };

    const handleViewSkills = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "view my skills - About Page"
        });
        scrollToTop();
    };

    return (
        <div className="about">
            <div className="about-content">
                <div className="about-title-container">
                    <div className="grid">
                        <div className="about-image">
                            <img loading="lazy" src={Propic} alt="Henry Cheung"></img>
                        </div>
                        <div className="about-text">
                            <div className="about-intro">
                                <h1 className="title about-title name">About Me</h1>
                                <h3 className="hi-sentence gradient-text">
                                    Hi! I'm Henry!
                                </h3>
                                <p>
                                    Acting as the <span class="extra-bold-white">UX Team Lead</span> at Lifeguard Digital Health, I'm passionate about crafting human-centric products that solve complex challenges in highly-collaborative, fast-paced environments. My unique background in <span class="extra-bold-white">storytelling</span>, <span class="extra-bold-white">front-end development</span>, and <span class="extra-bold-white">generative AI</span> allows me to approach design holistically.
                                </p>
                                <p>
                                    At Lifeguard Digital Health, I designed user experiences for products that impacted 70,000+ users and were credited with saving 280+ lives. I also led a team in creating a design system that streamlined development and integrated generative AI into our workflow, <span class="extra-bold-white">boosting design efficiency by 50%</span>.
                                </p>
                                <p>
                                    As a seasoned content creator, I've leveraged visual storytelling to <span class="extra-bold-white">publish 6 books</span>, building an online audience of 6,500+ followers with 3.5 million+ views. I excel at creating designs that are not only functional but also deeply engaging and impactful.
                                </p>
                                <p>
                                    I am a proactive problem-solver dedicated to creating meaningful, data-informed experiences and am always eager to take on a new challenge.
                                </p>
                                <p className="extra-bold-white gradient-text">
                                    I leverage AI to place human at the core, multiplying empathy with efficiency.
                                </p>
                                <button 
                                    className="contact-me-btn button" 
                                    onClick={navigateToLinkedIn}
                                >
                                    Connect with Me
                                </button>
                            </div>

                            <div className="about-experience">
                                <h2 className="about-titles">Experience</h2>
                                <p className="extra-bold-white about-subtitles">UX/UI Designer</p>
                                <p>Lifeguard Digital Health</p>
                                <p className="extra-bold-white about-subtitles">UX/UI Designer Intern</p>
                                <p>Knapsack-X</p>
                                <p className="extra-bold-white about-subtitles">UI/UX Graphic Designer</p>
                                <p>Empowered Futures</p>
                                <p className="extra-bold-white about-subtitles">Guest Panelist, New Media Design & Web Development</p>
                                <p>British Columbia Institute of Technology</p>
                                <p className="extra-bold-white about-subtitles">Set Representative, New Media Design & Web Development</p>
                                <p>British Columbia Institute of Technology</p>
                                <p className="extra-bold-white about-subtitles">Nomination for the 13th Hong Kong Emerging Writer Award</p>
                                <p>Radio Television Hong Kong (RTHK)</p>
                                <p className="extra-bold-white about-subtitles">Guest Speaker for Hong Kong Book Fair 2017</p>
                                <p>Hong Kong Trade Development Council</p>
                            </div>

                            <div className="about-education">
                                <h2 className="about-titles">Education</h2>
                                <p className="about-subtitles">
                                    <span className="extra-bold-white">New Media Design and Web Development, Diploma</span> - Sep 2022 - Mar 2024
                                </p>
                                <p>British Columbia Institute of Technology, Vancouver BC</p>
                                <p className="about-subtitles">
                                    <span className="extra-bold-white">Bachelor of Social Science, Government and Public Administration</span> - Sep 2014 - May 2018
                                </p>
                                <p>The Chinese University of Hong Kong, Hong Kong</p>
                            </div>

                            <div className="about-certification">
                                <h2 className="about-titles">Certification</h2>
                                <p className="extra-bold-white about-subtitles">Coursera</p>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Google UX Design</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Google Prompting Essentials</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>GenAI for UX Designers</p>
                                </div>
                                <p className="extra-bold-white about-subtitles">LinkedIn Learning</p>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>The AI-Driven Product Designer</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Career Essentials in Generative AI by Microsoft and LinkedIn</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Designing Accessible Components in Figma</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Designing Microinteractions with Figma</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Figma: Handling off to Developers</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Figma: Designing with Variables and Conditionals</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Figma: Using Auto Layout</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Using AI in the UX Design Process</p>
                                </div>
                                <div className="bullet-pts">
                                    <p className="bullet">►</p>
                                    <p>Design Psychology: Master the Art and Science of UX Design</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="grid">
                <NavLink 
                    onClick={handleViewSkills} 
                    to="/skills" 
                    className="button view-others"
                >
                    View My Skills
                </NavLink>
            </div>
        </div>
    )
}

export default About;
