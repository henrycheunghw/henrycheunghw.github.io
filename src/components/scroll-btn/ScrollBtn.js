import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className="scroll-button" onClick={scrollToTop}>
      ▲
    </button>
  );
};

export default ScrollToTopButton;