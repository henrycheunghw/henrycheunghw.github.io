import React, { useState } from "react";
import Components from "../../assets/icons/components.svg";
import Effects from "../../assets/icons/effects.svg";
import Linkedinlearninghero from "../../assets/project-hero/linkedin-learning-hero.png";
import Linkedinlearningherosm from "../../assets/project-hero/linkedin-learning-hero-sm.png";
import Ai from "../../assets/project-img/ai.png";
import Learning from "../../assets/project-img/learning.png";
import Quiz from "../../assets/project-img/quiz.png";
import Classroom from "../../assets/project-img/classroom.png";
import { NavLink } from "react-router-dom";


const Linkedinlearning = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    return (
        <div className="linkedin-learning project-container">
            <div className="linkedin-learning-hero hero">
                <div className="linkedin-learning-hero-img hero-img">
                    <picture>
                        <source media="(min-width: 900px)" srcSet={Linkedinlearninghero} />
                        <img loading="lazy" src={Linkedinlearningherosm} alt="Linkedinlearning Hero" />
                    </picture>
                </div>
            </div>
            <div className="grid">
                <div className="intro">
                    <div className="intro-container">
                        <div className="intro-title">
                            <h1>LinkedIn Learning Redesign</h1>
                        </div>
                        <div className="intro-content"><p>Introducing "LinkedIn Learning Redesign" - a collaborative UX research, testing and redesign project aimed at enhancing the user experience of LinkedIn Learning. With a focus on user research, user-centered design and usability testing, we aim to transform the platform into a more intuitive and personalized learning environment. Users can expect a seamless journey through courses, improved engagement, and a more efficient way to achieve their educational goals.</p></div>
                        <div className="category"><p>Role</p></div>
                        <div className="detail"><p>UX Research, UI/UX Design</p></div>
                        <div className="category"><p>Tools</p></div>
                        <div className="detail"><p>Figma, User Research, Usability Testing, Canva</p></div>
                        <div className="category"><p>Teammates</p></div>
                        <div className="detail"><p>Johann Duque<br />Julie Chan<br />Oskar Tsang</p></div>
                        <div className="category"><p>Duration</p></div>
                        <div className="detail"><p>8 weeks</p></div>
                        <div className="category"><p>Time</p></div>
                        <div className="detail"><p>Aug 2023</p></div>
                        <a href="https://www.figma.com/file/9vQLXWg0DVAmerQ36l5sq6/LinkedIn-Learning-Redesign?type=design&node-id=0%3A1&mode=design&t=jAfVOwRdCesBLXtr-1" className="button repository" target="_blank">View Figma Design</a>
                        <a href="https://drive.google.com/file/d/1WACAcj_sRfMxB-hE8ldVjMfWgbemsVm9/view?usp=drive_link" className="button repository" target="_blank">View Usability Report</a>
                    </div>
                </div>

                <div className="feature-title">
                    <h2>Key Features</h2>
                </div>

                <div className="features ai-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>AI-Driven Personalized Learning</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Elevate your experience with AI-powered personalized searching for precise and efficient results.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Engage effortlessly with our user-friendly chatbot, enabling seamless communication with AI.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Save and review chat records and explore voice messaging for enhanced accessibility.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card game img-container">
                        <img loading="lazy" src={Ai} alt="AI"/>
                    </div>
                </div>
        
                <div className="features learn-feature">
                    <div className="card right-card img-container">
                        <img loading="lazy" src={Learning} alt="Learning"/>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Enhanced Learning Features</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Elevate your learning experience with enhanced notes functionality.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Organize your notes efficiently with formatting options like bullet points, bold, and highlighting.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Facilitate active engagement by capturing and reviewing key concepts effortlessly.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="features quiz-feature">
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Improved Quiz Experience</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Access saved notes during quizzes for better reference.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Access saved notes during quizzes for better reference.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Access saved notes during quizzes for better reference.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Notes are initially hidden for focused question answering.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                A confirmation step before submitting allows for last-minute changes and review.
                            </p>
                        </div>
                    </div>
                    <div className="card left-card img-container">
                        <img loading="lazy" src={Quiz} alt="Quiz"/>
                    </div>
                </div>

                <div className="features classroom-feature">
                    <div className="card right-card img-container">
                        <img loading="lazy" src={Classroom} alt="Classroom"/>
                    </div>
                    <div className="description">
                        <div className="feature-subtitle">
                            <img loading="lazy" src={Effects} alt="Effects"/>
                            <h2>Enhanced Classroom Design</h2>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Improve instructor content for a more engaging learning experience.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Improve instructor content for a more engaging learning experience.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Notify learners about the latest lessons and facilitate progress tracking.
                            </p>
                        </div>
                        <div className="bullet-pts">
                            <p className="bullet">►</p>
                            <p>
                                Simplify social interaction with a single CTA button for personal engagement with instructors.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="usability-testing-container writings-container grid">
                    <h2 className="usability-testing-title">Usability Testing</h2>

                    <h3 className="method-title">Method</h3>
                    <p className="method-content">
                        Our usability testing method involved a diverse group of participants navigating the platform while we observed their interactions. We collected valuable feedback through direct communication and questionnaire, aiming to identify user challenges and improve the overall learning experience.
                    </p>

                    <h3 className="findings-title">Findings</h3>
                    <p className="findings-content">
                        We hypothesize that personalized course recommendations, optimized website design, and improved learning process will enhance user engagement and satisfaction.
                    </p>

                    <h3 className="reflection-title">Reflection</h3>
                    <p className="reflection-content">
                        Our findings suggest the potential for improving search results with personalized suggestions using facet tags and AI. Participants also underutilized tools like note-taking and transcript features. They felt disengaged in the virtual classroom due to a lack of structured course layouts and communication channels with peers and instructors.
                    </p>
                </div>

                <div className="prototype-container">
                    <h2>Wireframes & Prototype</h2>
                    <p>
                        Our team created low-fidelity wireframes to demonstrate our solutions to the usability issues identified in our research and usability testing. After the project, I individually created a high-fidelity prototype to showcase our design solutions with a more realistic look and feel.
                    </p>
                    <iframe
                        style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                        width="100%"
                        height="450"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F9vQLXWg0DVAmerQ36l5sq6%2FLinkedIn-Learning-Redesign%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DjAfVOwRdCesBLXtr-1"
                        allowFullScreen
                        title="Embedded Figma Design"
                    ></iframe>
                </div>

                <NavLink onClick={scrollToTop()} to="/Sirloinsociety" className="button view-others">
                    😎 Next Cool Project!
                </NavLink>
            </div>
        </div>
    )
}

export default Linkedinlearning;