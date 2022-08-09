import React, { useContext, useState } from 'react';
import { AppContext } from '../../AppContext';
import handShake from '../../images/handShake.png'
import { Link } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {

    const {
        navBarVisible, setNavBarVisible
    }
    =useContext(AppContext)

    const [isActive, setActive] = useState('false')

    const menuToggle = () => {
        setActive(!isActive)
    }

    return (
        <div className='NavBar-main'>
            <div className={navBarVisible}>
                <img className='handShake-icon' src={handShake} alt="handshake icon" />
                <i className='menuBars-icon fa-solid fa-bars' onClick={menuToggle}></i>
                </div>
                <div className={isActive ? 'hiddenMenu': 'dropFields'}>
                    <div className='dropMenuContainer'>
                    <Link onClick={menuToggle} to='/home'><li>Home</li></Link>
                    <Link onClick={menuToggle} to='/about'><li>About</li></Link>
                    </div>
                   
                    </div>
                </div>
                
            
    );
};

export default NavBar;