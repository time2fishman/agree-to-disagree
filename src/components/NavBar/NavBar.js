import React, { useContext, useState } from "react";
import { AppContext } from "../../AppContext";
import handShake from "../../images/handShake.png";
import { Link } from "react-router-dom";
import "./NavBar.css";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar = () => {
  const { navBarVisible, setMainPageVisible, setLogoClassName, setStartButtonClassName } = useContext(AppContext);
  const[isDarkMode, setIsDarkmode] = useState(() => false)
  const [isActive, setActive] = useState(() => true);
  
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark-mode");
    setIsDarkmode(!isDarkMode)
  }

  const checkMode = () => {
    return isDarkMode
  }
  const menuToggle = () => {
    setActive(!isActive);
  };

  const handshakeClick = () => {
        setMainPageVisible('MainPage-main')
        setLogoClassName('AgreeToDisagreeLogo')
        setStartButtonClassName('start-button')
  }

  return (
    <div className="NavBar-main">
      <div className={navBarVisible}>
        <Link to="/" onClick={handshakeClick}>
            <img className="handShake-icon" src={handShake} alt="handshake icon" />
          </Link>
        <i className="menuBars-icon fa-solid fa-bars" onClick={menuToggle}></i>
      </div>
      <DarkModeToggle
            className='darkModeToggle'
            onChange={toggleDarkMode}
            checked={checkMode()}
            size={75}
            />
      <div className={isActive ? "hiddenMenu" : "dropFields"}>
        <div className="dropMenuContainer">
          <Link onClick={menuToggle} to="/home">
            <li>Home</li>
          </Link>
          <Link onClick={menuToggle} to="/about">
            <li>About</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
