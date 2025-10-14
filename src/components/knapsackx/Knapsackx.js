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
                        <div className="intro-content"><p>During my internship at Knapsack-X, as the sole UI/UX designer, I led the redesign of a Canadian mobile gaming app. Integrating play-to-earn and AI features, I conducted user research, crafted wireframes, prototypes, and generated graphic assets using generative AI. Through comprehensive testing and collaborative reviews, I ensured a seamless transition to development by creating a detailed design system.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UI/UX Design, UX Research, Usability Testing, Design System, Prompt Engineering</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, Figjam, Photoshop, Generative AI Design</p></div>
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
                                Onboarding screens guide new users through the app's unique value proposition, enhancing user retention and setting clear expectations.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Tutorial screens offer intuitive assistance, ensuring first-time users effortlessly grasp the user interface.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Intuitive tooltips empower users to understand UI elements with ease.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Responsive click feedback provides clear interaction cues, enhancing user confidence and engagement.
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
                                Clear instructions guide users on how to participate in paid games, eliminating confusion.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Confirmation pop-ups prevent user errors, reducing frustration.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Post-game pop-ups confirm game outcomes, fostering user trust and transparency.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Most visuals crafted by cutting-edge text-to-image AI, aligning seamlessly with the futuristic brand vibe.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Vibrant cyberpunk colours and fonts evoke excitement and playfulness throughout the interface.
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
                                Intuitive sign-up and sign-in processes streamline user access.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Norm-following icons enhance user recognition and ease of navigation.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Information architecture organizes screen content intuitively, catering to the majority of users' expectations.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Engaging animations such as progress bars and spinners reduce perceived wait times, ensuring a seamless user experience.
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
                                Light theme option caters to users preferring a brighter interface, enhancing personalization.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Consistent variations in font sizes, text opacity, and relative positioning establish a clear visual hierarchy.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Adherence to "AAA" color contrast ratio guidelines ensures optimal accessibility, aligning with Web Content Accessibility Guidelines.
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

                <div className="design-process-container writings-container grid">
                    <h2 className="user-research-title">Design Process</h2>
                    <div className="user-research-subtitle">
                        <p>
                            As the sole UI/UX designer on the team during my 3-month internship, I took on the challenge of designing an entire app. To stay organized and productive, I broke down the process into six main phases:
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
                            To foster team collaboration, I crafted a PowerPoint presentation detailing my approach and proposed schedule for designing the app as the sole UI/UX specialist. This allowed for efficient feedback gathering and ensured alignment on design objectives.
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
                            To prioritize user needs, I created a value proposition map to align my design direction with the company's objectives, ensuring effective solutions for users' needs.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxValuePropositionMap} alt="Knapsack-X Value Proposition Map" className="knapsackx-value-proposition" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>User Persona</h3>
                        <p>
                            After finalizing the unique value proposition, I crafted user personas outlining pain points, tasks, and desired outcomes. This user-centric approach guided my design decisions, fostering empathy and meeting user needs effectively.
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
                            After understanding the app's purpose, I created an app flow diagram to organize content for both our team and users. It acted as a blueprint for wireframing, streamlining the design process.
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
                            With the UX strategy set, I moved to create wireframes in Figma, aligning with the app flow diagram. This helped establish the basic structure, gather feedback swiftly, and ensure alignment with objectives before advancing to high-fidelity prototyping.
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
                            The moodboard and style guide provide the initial visual direction. They propose design elements such as colors, typography, and UI components, ensuring consistency with the brand's cyberpunk, futuristic, gaming vibe in cyan and pink. Utilizing text-to-image generative AI, images are crafted to align with the brand's style and official website.
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
                        I chose a high-fidelity prototype to closely resemble a real project, expanding on wireframes, a moodboard, and a style guide. Targeting young adults, the app features a cyberpunk, futuristic vibe. Prioritizing trust, I focused on clarity and security by maintaining consistent design elements, intuitive buttons, and providing thorough guidance like onboarding and tutorials. This aims to build user confidence, particularly given the app's monetized nature.
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
                            I've created a variety of advanced Figma components to add animations and small interactive features to our detailed prototypes. This makes the prototype look and feel like a real mobile app.
                        </p>
                    </div>
                    <div className="user-research-img">
                        <img loading="lazy" src={KnapsackxComponents} alt="Knapsack-x Components" className="knapsackx-components" />
                    </div>

                    <div className="user-research-subtitle">
                        <h3>Generative AI Graphics</h3>
                        <p>
                            I extensively employed text-to-image AI to create graphics that align with the brand's personality and improve design efficiency. Utilizing models like Stable Diffusion XL and Leonardo Diffusion XL, I generated images that complemented the design.
                        </p>
                        <p>
                            Crafting prompts to guide AI image generation, I prioritized key subjects and styling attributes, ensuring precise outcomes. Refining drafts using Photoshop, I utilized tools like the remove tool and generative fill for optimization and enhancements.
                        </p>
                        <p>
                            Additionally, I created a separate set of AI-generated graphics with a 2D, cartoonish style to offer alternative options for the team's reference, aiding decision-making. Throughout, I upheld AI ethics, maintaining transparency and adhering to copyright specifications to safeguard business rights.
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
                        I interviewed 5 Canadian residents aged 18-35 interested in mobile gaming via an online survey on LinkedIn. Each participant underwent a 30-minute online interview, testing the Figma prototype with 3 assigned tasks. I moderated, with teammate Selene Choi observing. Feedback was collected via recording and an Affinity Diagram, supplemented by System Usability Scale (SUS) forms for standardized feedback.
                    </p>

                    <h3 className="findings-title">Findings</h3>
                    <p className="findings-content">
                        All users completed the tasks successfully. Suggestions for improving the app ranged from refining icons to adjusting UI spacing. As a user advocate, I discussed these changes with the team, supported by a SUS score of 83.5, indicating general user satisfaction. With proper improvements, users can expect a smoother app experience.
                    </p>

                    <h3 className="reflection-title">Reflection</h3>
                    <p className="reflection-content">
                        I've learned the importance of staying neutral and receptive during usability testing moderation. The goal isn't personal satisfaction but gathering constructive feedback for design improvement. Testing highlights overlooked user needs and potential design frustrations, making it an invaluable tool for identifying and rectifying mistakes.
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
                        I created a detailed design system outlining all design specifications, including spacing, colors, typography, buttons, icons, and interactive elements. This serves as a structured guide for adhering to the design. Since the app will be developed in React Native, I included code snippets to facilitate developers in implementing the design seamlessly.
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
                        I learned that effective communication, especially with developers, is crucial for successful collaboration. By prioritizing empathy and using tools like high-fidelity prototypes and design systems, I fostered mutual understanding. This collaborative approach ensures the final product meets both design and development needs, benefiting everyone involved.
                    </p>

                    <h3 className="findings-title">Constructive Feedback Drives Success 🚀</h3>
                    <p className="findings-content">
                        Delivering weekly presentations to the team, I actively sought constructive feedback from various viewpoints. This practice honed my ability to accept criticism gracefully, handle challenging discussions adeptly, and champion user interests when necessary. Striking a balance between compromises and advocating for user needs underscored the significance of both soft and hard skills.
                    </p>

                    <h3 className="reflection-title">Embrace AI for Enhanced Creativity ✨</h3>
                    <p className="reflection-content">
                        I'm a big fan of using AI to boost productivity and creativity in real-world business tasks. In this project, I've been using AI-generated images, which I then fine-tune in Photoshop to match our brand's style. AI helps speed up tasks like brainstorming and drafting, but it's still us designers who make the big decisions. It's important to use AI responsibly and ethically. Plus, having good skills in setting up AI prompts is key to getting good results. So, I'm glad I've got those skills in my toolkit for this AI-powered era.
                    </p>

                    <h3 className="reflection-title">Coding Skills is a Great Bonus for Designers 💻</h3>
                    <p className="reflection-content">
                        I've learned that having coding skills is a great bonus for designers. It helps me understand the development process better, and I can communicate with developers more effectively. I've included code snippets in the design system to help developers implement the design seamlessly. This ensures that the final product will look and feel exactly as intended. It's a win-win for everyone involved.
                    </p>
                </div>

                <NavLink 
                    onClick={() => { scrollToTop(); handleNextProjectClick(); }}
                    to="/Cooktivate" 
                    className="button view-others"
                >
                    😎 Next Cool Project!
                </NavLink>
            </div>
        </div>
    )
}

export default Knapsackx;