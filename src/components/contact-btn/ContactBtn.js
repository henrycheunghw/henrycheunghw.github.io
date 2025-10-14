import React from "react";
import ReactGA from "react-ga4";

const ContactButton = () => {
  const navigateToLinkedIn = () => {
    ReactGA.event({
      category: "Button",
      action: "Click",
      label: "Connect with Me Button",
    });
    window.open("https://www.linkedin.com/in/hoi-wing-henry-cheung/", "_blank");
  };

  return (
    <button className="contact-button" onClick={navigateToLinkedIn}>
        👋 Connect with Me!
    </button>
  );
};

export default ContactButton;
