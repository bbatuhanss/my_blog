import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import Button from "../components/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/" || location.pathname === "/home";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleNav = (to) => {
    navigate(to);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // sticky (scrolls with page) when on hero, fixed when scrolled
  const headerClass = [
    "site-header",
    isHome && !scrolled ? "site-header--hero" : "site-header--fixed",
  ].join(" ");

  return (
    <header className={headerClass}>
      <div className="container">
        <div className="brand">
          <img
            src={LogoIcon}
            alt="Batuhan Sevinç"
            className="brand__logo"
            height={34}
            loading="eager"
          />
        </div>

        <nav
          id="primary-navigation"
          className={`nav ${open ? "nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <ul className="nav__list">
            {[
              { to: "/home", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/skills", label: "Skills" },
              { to: "/project", label: "Projects" },
              { to: "/publications", label: "Articles" },
            ].map(({ to, label }) => (
              <li key={to} className="nav__item">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " is-active" : "")
                  }
                  onClick={() => handleNav(to)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav__cta">
              <Button />
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-navigation"
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </div>
    </header>
  );
};

export default Header;
