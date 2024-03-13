import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { DiCssdeck } from "react-icons/di";
import { SlMenu as MobileIcon } from "react-icons/sl";
import { VscChromeClose as CloseIcon } from "react-icons/vsc";
import { Bio } from "../../data/myData"

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [show, setShow] = useState("show"); //for scrolling effect
  const [lastScrollY, setLastScrollY] = useState(0); //for scrolling effect

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (window.scrollY > 250 && window.scrollY > lastScrollY) {
      setShow("show");
    } else {
      setShow("hide");
    }
    setLastScrollY(window.scrollY);
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <Link className="nav-logo">
          <div className="nav-logo-link">
            <DiCssdeck size="3rem" className="logo" />
            <span>Portfolio</span>
          </div>
        </Link>
        <div className="mobile-icon" onClick={() => setMenu(!menu)}>
          {!menu && <MobileIcon />}
          {menu && <CloseIcon />}
        </div>
        <div className="nav-items">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#skills" className="nav-link">
            Skills
          </a>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#experience" className="nav-link">
            Experience
          </a>
          <a href="#education" className="nav-link">
            Education
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
        <div className="button-container">
          <button className="githubButton"><a href={Bio.github} target="_blank">GitHub Profile</a></button>
        </div>

        {menu && (
          <div className="mobile-menu">
            <a
              href="#about"
              className="mobileLink"
              onClick={() => setMenu(!menu)}
            >
              About
            </a>
            <a
              href="#skills"
              className="mobileLink"
              onClick={() => setMenu(!menu)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="mobileLink"
              onClick={() => setMenu(!menu)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="mobileLink"
              onClick={() => setMenu(!menu)}
            >
              Projects
            </a>
            <a
              href="#education"
              className="mobileLink"
              onClick={() => setMenu(!menu)}
            >
              Education
            </a>
            <button className="githubButtonMobileMenu">
              <a href={Bio.github} target="_blank">
                GitHub Profile
              </a>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
