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
                    <li className='navDots' id='dot1'></li>
                    <li className='navDots'  id='dot2'></li>
                    <li className='navDots'  id='dot3'></li>
                </ul>
                <ul className={isActive ? 'hidden': 'dropFields'}>
                    <Link to='/*'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default NavBar;