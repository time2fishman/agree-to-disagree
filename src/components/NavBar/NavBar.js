import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import handShake from '../../images/handShake.png'
import './NavBar.css'

const NavBar = () => {

    const {
        navBarVisible, setNavBarVisible
    }
    =useContext(AppContext)

    return (
        <div className='NavBar-main'>
            <div className={navBarVisible}>
                <img className='handShake-icon' src={handShake} alt="handshake icon" />
            </div>
        </div>
    );
};

export default NavBar;