import "../styles/header.scss";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import React, { useState, useEffect } from "react";
import Button  from  "../components/button";

//rafce use to function class
const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <div className="navbar background " style={{ zIndex: 1 }}>
      
      <div className="logo">
        {showButton  && <img src={LogoIcon} />}
      </div>
      <nav className="list">
        <ul className="nav-list">
          <li>
            <a onClick={() => navigate("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => navigate("about")}>About</a>
          </li>
          <li>
            <a onClick={() => navigate("publications")}>Articles</a>
          </li>
          <li>
            <a onClick={() => navigate("project")}>Project</a>
          </li>
          <Button/>
        </ul>
      </nav>
    </div>
  );
};

export default header;
