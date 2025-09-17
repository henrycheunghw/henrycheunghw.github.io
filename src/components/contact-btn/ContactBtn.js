import React from "react";

const ContactButton = () => {
  const navigateToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/hoi-wing-henry-cheung/", "_blank");
  };

  return (
    <button className="contact-button" onClick={navigateToLinkedIn}>
        👋 Connect with Me!
    </button>
  );
};

export default ContactButton;
