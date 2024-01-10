import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [isDark, setIsdark] = useState(true);
  function themeToggle() {
    setIsdark(!isDark);
  }
  const theme = isDark ? "dark" : "ligth";
  useEffect(
    () => document.documentElement.setAttribute("data-theme", theme),
    [isDark]
  );
  console.log();
  return (
    <nav className="nav">
      <div className="logo">logo</div>
      <ul className="navList">
        <NavLink to="/" className="navListItem">
          Home
        </NavLink>
        <NavLink to="/about" className="navListItem">
          About
        </NavLink>
        <NavLink to="/projects" className="navListItem">
          Projects
        </NavLink>
        <NavLink to="/contactus" className="navListItem">
          ContactUs
        </NavLink>
      </ul>
      <div
        className={`theme_button ${isDark ? "dark" : "light"}`}
        onClick={() => themeToggle()}
      >
        {" "}
        <div className={`slider ${isDark ? "dark" : "light"}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
