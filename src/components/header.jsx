import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import Button from "../components/button";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleNav = (to) => {
    navigate(to);
    setOpen(false); // mobilde menüyü kapat
  };

  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <button
            className="skip-link"
            onClick={() => document.getElementById("main-content")?.focus()}
          >
            İçeriğe geç
          </button>

          <img
            src={LogoIcon}
            alt="Logo"
            className="brand__logo"
            width={140}
            height={40}
            loading="eager"
          />
        </div>

        <nav
          id="primary-navigation"
          className={`nav ${open ? "nav--open" : ""}`} // 🔥 düzeltildi
          aria-label="Birincil"
        >
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " is-active" : "")
                }
                onClick={() => handleNav("home")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " is-active" : "")
                }
                onClick={() => handleNav("about")}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/publications"
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " is-active" : "")
                }
                onClick={() => handleNav("publications")}
              >
                Articles
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  "nav__link" + (isActive ? " is-active" : "")
                }
                onClick={() => handleNav("project")}
              >
                Project
              </NavLink>
            </li>
            <li className="nav__cta">
              <Button />
            </li>
          </ul>
        </nav>
        <button
          className={`nav-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen((s) => !s)}
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
