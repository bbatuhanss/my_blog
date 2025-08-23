import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import SubFooter from "../components/subFooter";

const footer = () => {
  const year = new Date().getFullYear();
  const socialLinks = [
    {
      id: 1,
      title: "Instagram",
      icon: <FiInstagram />,
      url: "https://www.instagram.com/bbatuhansevinc/?hl=tr",
    },
    {
      id: 2,
      title: "GitHub",
      icon: <FiGithub />,
      url: "https://github.com/bbatuhanss",
    },
    {
      id: 3,
      title: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/batuhansevinc/",
    },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <SubFooter />

      <div className="footer-bar">
        <p className="footer-copy">© {year} Batuhan Sevinç — All Rights Reserved</p>

        <ul className="footer-social" aria-label="Sosyal medya">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
                title={link.title}
                className="footer-social__btn"
              >
                <span className="footer-social__icon">{link.icon}</span>
                <span className="sr-only">{link.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default footer;
