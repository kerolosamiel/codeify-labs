import logo from "../assets/logo.svg";
import "./public.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "home", to: "/" },
    { name: "about", to: "about" },
    { name: "projects", to: "projects" },
    { name: "contact", to: "contact" },
  ];
  const [activeClass, setActiveClass] = useState(false);
  const onClickHandler = () => {
    setActiveClass(!activeClass);
  };
  return (
    <header
      className={`header d-flex justify-content-between ${
        activeClass ? "active" : ""
      }`}
    >
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div
        className="burger-icon d-flex  justify-content-center align-items-center"
        onClick={onClickHandler}
      >
        <div className="lines-container d-flex flex-column align-items-end gap-2">
          <div className="line line-1"></div>
          <div className="line line-3"></div>
        </div>
      </div>
      <nav className="custom-nav">
        <ul className="d-flex flex-column gap-2 links-container">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
