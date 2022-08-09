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
                <div className='dropMenu'>
                <ul className='dropList' onClick={menuToggle}>
                <i className='menuBars fa-solid fa-bars'></i>
                </ul>
                <ul className={isActive ? 'hiddenMenu': 'dropFields'}>
                    <div className='dropMenuContainer'>
                    <Link onClick={menuToggle} to='/*'><li>Home</li></Link>
                    <Link onClick={menuToggle} to='/about'><li>About</li></Link>
                    </div>
                   
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;