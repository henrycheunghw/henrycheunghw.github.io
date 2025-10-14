import React from "react";
import ReactGA from "react-ga4";

const Footer = () => {
    const trackClick = (label) => {
        ReactGA.event({
            category: "Footer",
            action: "Click",
            label: label
        });
    };

    return (
        <footer className="footer">
            <div className="grid">
                <div className="container">
                    <div>
                        <h2>Connect with Me!</h2>
                        <p className="contact-message">👋 I'm always thrilled to hear from you and explore exciting opportunities together! 👍</p>
                    </div>

                    <div>
                        <a 
                            href="https://www.linkedin.com/in/hoi-wing-henry-cheung/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackClick("LinkedIn")}
                        >
                            <svg className="icon linkedin" width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_306_47)">
                                <path className="fill" fill-rule="evenodd" clip-rule="evenodd" d="M32.5098 0C50.4515 0 65.0195 14.7723 65.0195 33.0099C65.0195 51.2277 50.471 66.0198 32.5098 66.0198C14.568 66.0198 0 51.2475 0 33.0099C0 14.7921 14.5485 0 32.5098 0ZM28.3168 26.4554H34.9865V29.9208H35.084C36.0201 28.2178 38.2823 26.4554 41.6757 26.4554C48.7159 26.4554 50.0225 30.9109 50.0225 36.6931V48.4951H43.0603V38.0396C43.0603 35.5446 43.0018 32.3366 39.4329 32.3366C35.8056 32.3366 35.2595 35.0495 35.2595 37.8614V48.4951H28.2973V26.4554H28.3168ZM23.4999 20.3366C23.4999 22.3564 21.8812 24.0198 19.8725 24.0198C17.8833 24.0198 16.2451 22.3762 16.2451 20.3366C16.2451 18.3168 17.8638 16.6535 19.8725 16.6535C21.8617 16.6535 23.4999 18.297 23.4999 20.3366ZM16.2646 26.4554H23.4999V48.4951H16.2646V26.4554Z" fill="url(#paint0_linear_306_47)"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_306_47" x1="32.5098" y1="0" x2="32.5098" y2="66.0198" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="#D0D0D0"/>
                                </linearGradient>
                                <clipPath id="clip0_306_47">
                                <rect width="65" height="66" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>

                        <a 
                            href="mailto:hoiwinghenrycheung@gmail.com" 
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackClick("Email")}
                        >
                            <svg className="icon email" width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_306_49)">
                                <path className="fill" fill-rule="evenodd" clip-rule="evenodd" d="M32.5 0C38.9279 0 45.2114 1.93542 50.556 5.5615C55.9006 9.18759 60.0662 14.3415 62.5261 20.3714C64.9859 26.4014 65.6295 33.0366 64.3755 39.438C63.1215 45.8394 60.0262 51.7194 55.481 56.3345C50.9358 60.9497 45.1448 64.0926 38.8404 65.3659C32.5361 66.6392 26.0014 65.9857 20.0628 63.488C14.1242 60.9903 9.04838 56.7606 5.47724 51.3338C1.90609 45.907 0 39.5268 0 33C0 24.2479 3.4241 15.8542 9.51903 9.66548C15.614 3.47678 23.8805 0 32.5 0ZM16.2553 20.4102L32.7962 34.0903L48.6178 20.4102H16.2553ZM15.1973 43.4468L26.9775 31.4478L15.1868 21.6938V43.436L15.1973 43.4468ZM28.2629 32.522L16.123 44.8755H48.7765L37.1708 32.522L33.3252 35.8306C33.1763 35.9554 32.9893 36.0238 32.7962 36.0238C32.6031 36.0238 32.4161 35.9554 32.2673 35.8306L28.2524 32.5059L28.2629 32.522ZM38.4403 31.4478L49.8132 43.5542V21.5864L38.4403 31.4263V31.4478Z" fill="url(#paint0_linear_306_49)"/>
                                </g>
                                <defs>
                                <linearGradient id="paint0_linear_306_49" x1="32.5" y1="0" x2="32.5" y2="66" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="#D0D0D0"/>
                                </linearGradient>
                                <clipPath id="clip0_306_49">
                                <rect width="65" height="66" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>

                        <a 
                            href="https://drive.google.com/file/d/1y03aq5B7tXwzGWyOwYzBY2reAMJaUb_W/view?usp=sharing" 
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackClick("Resume")}
                        >
                            <svg className="icon resume" width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="32.5" cy="32.5" r="32.5" fill="url(#paint0_linear_0_1)"/>
                                <path d="M33 18L33.1755 18.0105C33.5103 18.05 33.8221 18.2011 34.0605 18.4395C34.2989 18.6779 34.45 18.9897 34.4895 19.3245L34.5 19.5V25.5L34.5075 25.725C34.5612 26.4393 34.8686 27.1107 35.3743 27.618C35.8799 28.1254 36.5504 28.435 37.2645 28.491L37.5 28.5H43.5L43.6755 28.5105C44.0103 28.55 44.3221 28.7011 44.5605 28.9395C44.7989 29.1779 44.95 29.4897 44.9895 29.8245L45 30V43.5C45.0001 44.6478 44.5615 45.7523 43.7741 46.5874C42.9866 47.4225 41.9098 47.9252 40.764 47.9925L40.5 48H25.5C24.3522 48.0001 23.2477 47.5615 22.4126 46.7741C21.5775 45.9866 21.0748 44.9098 21.0075 43.764L21 43.5V22.5C20.9999 21.3522 21.4385 20.2477 22.2259 19.4126C23.0134 18.5775 24.0902 18.0748 25.236 18.0075L25.5 18H33Z" fill="#0D0D0D"/>
                                <path d="M43.5 25.5H37.5L37.4985 19.4985L43.5 25.5Z" fill="#0D0D0D"/>
                                <defs>
                                <linearGradient id="paint0_linear_0_1" x1="32.5" y1="0" x2="32.5" y2="65" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white"/>
                                <stop offset="1" stop-color="#D0D0D0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>

                    <div className="copyright-message">
                        <p>Designed in Figma and developed with React.js, this portfolio shows my versatility as a designer who understands the language of development ✨</p>
                        <p>&copy; 2025 Hoi Wing Henry Cheung. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;