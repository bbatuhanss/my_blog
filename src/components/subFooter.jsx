import { useEffect, useState } from "react";
import "../styles/subFooter.scss";
import LogoIcon from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function SubFooter() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (route) => {
    navigate(route);
    if (scrollPosition > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <div className="content">
        {/* Logo + tagline */}
        <div className="footer-brand">
          <img src={LogoIcon} alt="Batuhan Sevinç" />
          <p className="footer-tagline">
            Full-Stack Engineer building web, mobile & backend systems.
          </p>
          <a
            href="mailto:bbatuhansevincc@gmail.com"
            className="footer-email-btn"
          >
            ✉ bbatuhansevincc@gmail.com
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Navigation</h4>
          {[
            { label: "Home", route: "/home" },
            { label: "About", route: "/about" },
            { label: "Skills", route: "/skills" },
            { label: "Projects", route: "/project" },
            { label: "Articles", route: "/publications" },
          ].map(({ label, route }) => (
            <p key={route}>
              <a onClick={() => handleNav(route)} role="button" tabIndex={0}>
                {label}
              </a>
            </p>
          ))}
        </div>

        {/* Tech stack */}
        <div className="footer-col">
          <h4>Tech Stack</h4>
          {[
            "Angular",
            "React",
            "Flutter",
            "Java",
            "Spring Boot",
            "TypeScript",
            "PL/SQL",
            "GitLab CI/CD",
          ].map((t) => (
            <p key={t}>
              <span className="footer-tech">{t}</span>
            </p>
          ))}
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Connect</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/batuhansevinc/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/bbatuhanss"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/bbatuhansevinc/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.batuhansevinc.com"
              target="_blank"
              rel="noreferrer"
            >
              batuhansevinc.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubFooter;
