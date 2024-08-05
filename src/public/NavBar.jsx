import logo from "../assets/logo.svg";
import "./navBar.css";
import { useState } from "react";

const NavBar = () => {
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
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
