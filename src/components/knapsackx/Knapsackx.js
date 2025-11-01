import React, { useState, useEffect } from "react";
import ReactGA from "react-ga4";
import Components from "../../assets/icons/components.svg";
import Effects from "../../assets/icons/effects.svg";
import Knapsackxhero from "../../assets/project-hero/knapsackx-hero.png";
import Knapsackxherosm from "../../assets/project-hero/knapsackx-hero-sm.png";
import Knapsackxguidance from "../../assets/showcase/knapsackx-guidance.mp4";
import Knapsackxgamification from "../../assets/showcase/knapsackx-gamification.mp4";
import Knapsackxreadability from "../../assets/showcase/knapsackx-readability.mp4";
import Knapsackxuniversal from "../../assets/showcase/knapsackx-universal.mp4";

// Design Process
import KnapsackxDesignProcess from "../../assets/ux/knapsackx/knapsackx-design-process.png";

// Brainstorm
import KnapsackxPowerpoint from "../../assets/ux/knapsackx/knapsackx-powerpoint.mp4";

// Define
import KnapsackxValuePropositionMap from "../../assets/ux/knapsackx/knapsackx-value-proposition-map.png";
import KnapsackxPersona1 from "../../assets/ux/knapsackx/knapsackx-persona-1.png";
import KnapsackxPersona2 from "../../assets/ux/knapsackx/knapsackx-persona-2.png";
import KnapsackxAppFlowDiagram from "../../assets/ux/knapsackx/knapsackx-app-flow-diagram.png";

// Ideate
import KnapsackxWireframes from "../../assets/ux/knapsackx/knapsackx-wireframes.mp4";
import KnapsackxMoodboard from "../../assets/ux/knapsackx/knapsackx-moodboard.png";
import KnapsackxStyleGuide from "../../assets/ux/knapsackx/knapsackx-style-guide.png";

// Prototype
import KnapsackxComponents from "../../assets/ux/knapsackx/knapsackx-components.png";
import KnapsackxAi from "../../assets/ux/knapsackx/knapsackx-ai.mp4";

// Test
import KnapsackxAffinityDiagram from "../../assets/ux/knapsackx/knapsackx-affinity-diagram.png";
import KnapsackxSus from "../../assets/ux/knapsackx/knapsackx-sus.png";
import KnapsackxBeforeAfter from "../../assets/ux/knapsackx/knapsackx-before-after.mp4";

import { NavLink } from "react-router-dom";


const Knapsackx = () => {

    useEffect(() => {
        // Send pageview only, GA is already initialized in index.js
        ReactGA.send({ hitType: "pageview", page: "/Knapsackx" });
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
            label: "View Figma Design - Knapsack X",
        });
    };

    const handleFigmaPrototypeClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "View Figma Prototype - Knapsack X",
        });
    };

    const handleNextProjectClick = () => {
        ReactGA.event({
            category: "Button",
            action: "Click",
            label: "Next Cool Project - Knapsack X",
        });
    };

    return (
        <div className="knapsackx project-container">
            <div className="knapsackx-hero hero">
                <div className="knapsackx-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Knapsackxhero} />
                        <img loading="lazy" src={Knapsackxherosm} alt="Knapsack-X Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>Knapsack-X Mobile App Redesign</h1>
                        </div>
                        <div className="intro-content"><p>As the sole UI/UX designer, I led the full redesign of a mobile gaming app, strategically integrating play to earn features. This involved designing over 100 screens and delivering a scalable design system. My work resulted in a highly intuitive UX validated by an exceptional 83.5 SUS score.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UI/UX Design, UX Research, Usability Testing, Design System, Generative AI</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Figjam, Photoshop, Leonardo AI, Stable Diffusion</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>10 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Feb 2024</p></div>
                        <a 
                            href="https://www.figma.com/file/k6fWF3Y2sM2ErLyADyed8B/Knapsack-X-Mobile-App-Design-(Portfolio-Version)?type=design&node-id=246%3A3318&mode=design&t=1yDzo7qLToTQO5Vb-1" 
                            className="button repository" 
                            target="_blank"
                            onClick={handleFigmaDesignClick}
                        >
                            View Figma Design
                        </a>
                        <a 
                            href="https://www.figma.com/proto/k6fWF3Y2sM2ErLyADyed8B/Knapsack-X-Mobile-App-Design-(Portfolio-Version)?page-id=246%3A3318&type=design&node-id=401-18828&viewport=342%2C612%2C0.03&t=3RB7K0KaHzKsmZSu-1&scaling=scale-down&starting-point-node-id=401%3A18828&mode=design" 
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

                <div className="features guidance-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Effective User Guidance</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Onboarding establishes value, improving user retention.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Tutorials offer intuitive assistance, ensuring effortless interface use.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Tooltips and click feedback empower users with clear cues, boosting confidence.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card guidance video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Knapsackxguidance} type="video/mp4" />
                        </video>
                    </div>
                </div>
        
                <div className="features gamification-feature">
                    <div className="card right-card gamification video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Knapsackxgamification} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Unique Gamification Experience</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Eliminated confusion for play to earn games, preventing user errors.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Fostered user trust by confirming all high value game outcomes.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Executed the brand vision using text to image AI and vibrant colours.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features universal-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Consistency with Universal UI Practices</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Streamlined user access with intuitive sign up and sign in processes.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Optimized information architecture to intuitively organize all screen content.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Enhanced perceived performance and reduced wait times using engaging animations.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card universal video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Knapsackxuniversal} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="features readability-feature">
                    <div className="card right-card readability video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={Knapsackxreadability} type="video/mp4" />
                        </video>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Enhanced Readability via UI Design</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Enhanced personalization by delivering an optional light theme interface.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Established a clear visual hierarchy using consistent variations in font sizes and text opacity.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Ensured optimal accessibility by strictly adhering to AAA colour contrast guidelines.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <div className="user-research-container writings-container grid">
                    <h2 className="user-research-title">Empathize</h2>
                    <h3 className="user-needs-title">User Needs</h3>
                    <p className="user-needs-content">
                        Many beginners, especially teenagers, struggle to learn cooking due to a lack of proper guidance. Cooking alone can be time-consuming and uninspiring. These users seek an interactive solution that makes learning enjoyable and enhances their quality of life. 
                    </p>

                    <h3 className="user-problem-title">User Problem</h3>
                    <p className="user-problem-content">
                        Existing cooking apps often fall short in meeting these needs. While they provide recipes and basic instructions, they lack the interactive and gamified elements that engage users. Additionally, the social aspect of cooking is often absent. This leaves beginners feeling disengaged, impeding their progress in acquiring essential cooking skills.
                    </p>
                </div> */}

                <div className="user-research-container writings-container grid">
                    <h2 className="user-research-title">Core Challenge</h2>
                    <h3 className="user-needs-title">User</h3>
                    <p className="user-needs-content">
                        Mobile gamers demand a real money return for their time, but lack of platform trust was the biggest barrier. Users felt insecure about engaging with these money features. My job was simple: design an experience that was not only engaging enough to pull this valuable user group in, but also absolutely transparent and trustworthy to secure their confidence and ensure players used the financial features long term.
                    </p>

                    <h3 className="user-problem-title">Business</h3>
                    <p className="user-problem-content">
                        Our project had ambitious goals, but faced real constraints: a limited budget and scarce early user feedback. To ensure we delivered the high volume of visuals needed for launch, I strategically shifted our resource allocation. This meant leveraging innovative AI tools for rapid asset creation, which freed up resources to focus heavily on comprehensive usability testing later in the design process.
                    </p>
                </div>

                <div className="design-process-container writings-container grid">
                    <h2 className="user-research-title">Design Process</h2>
                    <div className="user-research-subtitle">
                        <p>
                            As the sole UI/UX designer, I designed the entire app in three months. I structured the end-to-end process into six focused phases to ensure efficiency.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxDesignProcess} alt="Knapsack-X Design Process" className="knapsackx-design-process" />
                    </div>
                </div>

                <div className="brainstorm-container writings-container grid">
                    <h2 className="user-research-title">➊ Brainstorm</h2>
                    <div className="user-research-subtitle">
                        <p>
                            To foster team alignment, I proactively detailed my design approach and schedule. This ensured efficient feedback and shared objectives.
                        </p>
                    </div>
                    <div className="video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={KnapsackxPowerpoint} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="writings-container grid">
                    <h2 className="user-research-title"> ➋ Define</h2>
                    <div className="user-research-subtitle">
                        <h3>Value Proposition Map</h3>
                        <p>
                            I used a Value Proposition Map to prioritize user needs and strategically align design direction with company objectives.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxValuePropositionMap} alt="Knapsack-X Value Proposition Map" className="knapsackx-value-proposition" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>User Persona</h3>
                        <p>
                            I crafted user personas outlining pain points and desired outcomes. This user centric approach directly guided all design decisions.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxPersona1} alt="Knapsack-X Persona 1" className="knapsackx-persona-1" />
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxPersona2} alt="Knapsack-X Persona 2" className="knapsackx-persona-2" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>App Flow Diagram</h3>
                        <p>
                            I created a comprehensive app flow diagram to organize content for both the team and users. This blueprint streamlined the entire design process.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxAppFlowDiagram} alt="Knapsack-X App Flow Diagram" className="knapsackx-app-flow-diagram" />
                    </div>
                </div>

                <div className="writings-container grid">
                    <h2 className="user-research-title"> ➌ Ideate</h2>
                    <div className="user-research-subtitle">
                        <h3>Wireframes</h3>
                        <p>
                            Using the flow diagram, I created wireframes in Figma to establish basic structure. This enabled swift feedback gathering and ensured quick alignment before high fidelity work.
                        </p>
                    </div>
                    <div className="video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={KnapsackxWireframes} type="video/mp4" />
                        </video>
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Moodboard & Style Guide</h3>
                        <p>
                            I established the futuristic cyberpunk brand vibe with a style guide defining colours and typography. Crucially, I used text to image AI to craft all visuals, ensuring consistent brand alignment.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxMoodboard} alt="Knapsack-X Moodboard" className="knapsackx-moodboard" />
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxStyleGuide} alt="Knapsack-X Style Guide" className="knapsackx-style-guide" />
                    </div>
                </div>

                <div className="prototype-container">
                    <h2>➍ Prototype</h2>
                    <p>
                        I executed the final design using a high fidelity prototype to closely resemble the real product. Targeting young adults, the app features a cyberpunk, futuristic vibe. To secure user trust in the monetized features, I prioritized design clarity, security, and consistent elements, supported by thorough guidance like onboarding and tutorials.
                    </p>
                    <iframe
                        title="Figma Embed"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="650"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fk6fWF3Y2sM2ErLyADyed8B%2FKnapsack-X-Mobile-App-Design-(Portfolio-Version)%3Fpage-id%3D246%253A3318%26type%3Ddesign%26node-id%3D401-18837%26viewport%3D390%252C1385%252C0.09%26t%3DWtsSotF6wGCfGhzc-1%26scaling%3Dscale-down%26starting-point-node-id%3D401%253A18828%26mode%3Ddesign"
                        allowFullScreen
                    />

                    <div className="user-research-subtitle">
                        <h3>Figma Components</h3>
                        <p>
                            I built a library of advanced Figma components to add complex animations and interactive features. This high fidelity work ensured the prototype perfectly mimicked a real mobile app.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxComponents} alt="Knapsack-x Components" className="knapsackx-components" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Generative AI Graphics</h3>
                        <p>
                            I built advanced Figma components for complex animations. This ensured the high fidelity prototype mimicked a real app.
                        </p>
                        <p>
                            I directed AI image generation using precise prompts to control subjects and styling. I then used Photoshop tools like generative fill to professionally refine and optimize the final visuals.
                        </p>
                        <p>
                            I created alternative 2D AI graphics to aid team decision making. I strictly upheld AI ethics and copyright rules to safeguard business rights.
                        </p>
                    </div>
                    <div className="video-container">
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={KnapsackxAi} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="usability-testing-container writings-container grid">
                    <h2 className="usability-testing-title">➎  Testing</h2>

                    <h3 className="method-title">Method</h3>
                    <p className="method-content">
                        I recruited 5 Canadian gamers (aged 18-35) via LinkedIn for moderated 30-minute interviews. Participants tested the Figma prototype on 3 assigned tasks. I synthesized feedback using an Affinity Diagram and quantified success using the System Usability Scale (SUS).
                    </p>

                    <h3 className="findings-title">Findings</h3>
                    <p className="findings-content">
                        All users successfully completed the assigned tasks, confirming the design's effectiveness. Suggestions for improvements were mainly minor (e.g., icons and spacing). Backed by an excellent 83.5 SUS score, I successfully advocated for these changes with the team, guaranteeing a smoother final app experience for all users.
                    </p>

                    <h3 className="reflection-title">Reflection</h3>
                    <p className="reflection-content">
                        I confirmed that staying neutral during testing is critical. The goal is never personal validation; it is gathering constructive feedback to identify frustrations and overlook user needs. Usability testing remains the most invaluable tool for rectifying design mistakes early.
                    </p>

                    <div className="usability-testing-img">
                        <h3>Affinity Diagram</h3>
                        <img loading="lazy" src={KnapsackxAffinityDiagram} alt="Knapsack-X Affinity Diagram" className="knapsackx-affinity-diagram" />
                    </div>
                    <div className="usability-testing-img">
                        <h3>System Usability Scale (SUS)</h3>
                        <img loading="lazy" src={KnapsackxSus} alt="Knapsack-X SUS" className="knapsackx-sus" />
                    </div>
                    <div className="video-container">
                        <h3>Before & After</h3>
                        <video className="video" loading="lazy" autoPlay loop muted controls={false} playsInline>
                            <source src={KnapsackxBeforeAfter} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="prototype-container">
                    <h2>➏ Design System</h2>
                    <p>
                        I created a detailed design system that serves as a structured guide for all design specifications. To ensure seamless implementation in React Native, I included code snippets to facilitate the developers' work.
                    </p>
                    <iframe
                        title="Figma Embed"
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="650"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fk6fWF3Y2sM2ErLyADyed8B%2FKnapsack-X-Mobile-App-Design-(Portfolio-Version)%3Ftype%3Ddesign%26node-id%3D4500%253A3367%26mode%3Ddesign%26t%3D1yDzo7qLToTQO5Vb-1"
                        allowFullScreen
                    />
                </div>

                <div className="takeaways usability-testing-container writings-container grid">
                    <h2 className="usability-testing-title">Takeaways</h2>

                    <h3 className="method-title">Team Collaboration Matters 🤝</h3>
                    <p className="method-content">
                        I learned that effective communication with developers is crucial for successful collaboration. Prioritizing empathy and leveraging tools like the design system fostered mutual understanding. This approach ensured the final product met both design and development needs.
                    </p>

                    <h3 className="findings-title">Constructive Feedback Drives Success 🚀</h3>
                    <p className="findings-content">
                        Delivering weekly presentations honed my ability to actively seek constructive feedback and handle challenging discussions. I learned to gracefully balance necessary compromise with strongly championing user interests. This underscored the value of blending soft and hard skills for successful design outcomes.
                    </p>

                    <h3 className="reflection-title">Embrace AI for Enhanced Creativity ✨</h3>
                    <p className="reflection-content">
                        I confirmed that AI is an invaluable tool for boosting creative productivity, but human designers remain the strategic decision makers. My ability to craft precise prompts and refine AI generated assets in Photoshop proved crucial for maintaining brand alignment. I also learned that upholding AI ethics and copyright is essential for responsible design practice in this new era.
                    </p>

                    <h3 className="reflection-title">Coding Skills is a Great Bonus for Designers 💻</h3>
                    <p className="reflection-content">
                        I learned that coding skills are a crucial bonus for designers. This technical understanding greatly improves communication and developer empathy. By including code snippets in the design system, I ensured seamless implementation, guaranteeing the final product would look and feel exactly as intended.
                    </p>
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Cooktivate" 
                    className="button view-others"
                >
                    Next Cool Project
                </NavLink>
            </div>
        </div>
    )
}

export default Knapsackx;