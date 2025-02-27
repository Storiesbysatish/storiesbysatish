import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [navPosition, setNavPosition] = useState("absolute");
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroBottom = hero.getBoundingClientRect().bottom;

      if (heroBottom > 0) {
        setIsFixed(false);
        setNavPosition("absolute");
      } else {
        setIsFixed(true);
        setNavPosition("fixed");
      }

      // Detect which section is in view
      const sections = ["hero", "about", "portfolio", "news", "contact"];
      for (let section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const rect = elem.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-lg"
      style={{
        position: navPosition,
        bottom: isFixed ? "auto" : "0px",
        top: isFixed ? "0px" : "auto",
        width: "100%",
        transition: "top 0.3s ease-in-out, bottom 0.3s ease-in-out",
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <i className=""></i> <strong>StoriesbySatish</strong>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "hero" ? "active" : ""}`} href="#hero">
                <i className={`${activeSection === "hero" ? "active" : ""}`}></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "about" ? "active" : ""}`} href="#about">
                <i className={`${activeSection === "about" ? "active" : ""}`}></i> Our Studio
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "portfolio" ? "active" : ""}`} href="#portfolio">
                <i className={` ${activeSection === "portfolio" ? "active" : ""}`}></i> Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "news" ? "active" : ""}`} href="#news">
                <i className={` ${activeSection === "news" ? "active" : ""}`}></i> Events & Shoots
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeSection === "contact" ? "active" : ""}`} href="#contact">
                <i className={` ${activeSection === "contact" ? "active" : ""}`}></i> Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;