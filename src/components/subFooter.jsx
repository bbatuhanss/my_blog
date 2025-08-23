import "../styles/subFooter.scss";
import LogoIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

function subFooter() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleButtonClick = (router) => {
    navigate(router);
    if (scrollPosition > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  window.addEventListener("scroll", () => {
    setScrollPosition(window.pageYOffset);
  });

  return (
    <div className="footer">
      <div className="content">
        <div className="logo">
          <img src={LogoIcon} alt="Logo" />
        </div>
        <div className="services">
          <h4>Services</h4>
          <p><a href="#">App Development</a></p>
          <p><a href="#">Web Development</a></p>
          <p><a href="#">React</a></p>
          <p><a href="#">Flutter</a></p>
          <p><a href="#">Angular</a></p>
          <p><a href="#">JavaScript</a></p>
          <p><a href="#">HTML</a></p>
          <p><a href="#">CSS</a></p>
          <p><a href="#">SASS</a></p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p><a href="https://www.linkedin.com/in/batuhansevinc/" target="_blank">LinkedIn</a></p>
          <p><a href="https://github.com/bbatuhanss" target="_blank">GitHub</a></p>
          <p><a href="https://www.instagram.com/bbatuhansevinc/?hl=tr" target="_blank">Instagram</a></p>
        </div>
        <div className="links">
          <h4>Quick Links</h4>
          <p><a onClick={() => handleButtonClick("home")}>Home</a></p>
          <p><a onClick={() => handleButtonClick("about")}>About</a></p>
          <p><a onClick={() => handleButtonClick("publications")}>Articles</a></p>
          <p><a onClick={() => handleButtonClick("project")}>Project</a></p>
        </div>
        <div className="details">
          <h4 className="mail">Contact Me</h4>
          <p><a>bbatuhansevincc@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default subFooter;
