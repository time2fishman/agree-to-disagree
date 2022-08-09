import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../../AppContext';
import agreeToDisagreeLogo from '../../images/agreeToDisagreeLogo.png';
import './StartPage.css'


const StartPage = () => {
    const { 
        logoClassName, setLogoClassName,
        startButtonClassName, setStartButtonClassName
        } = useContext(AppContext)

    const navigate = useNavigate();

    function clickHandler(){
        setLogoClassName('AgreeToDisagreeLogo animated rollOut')
        setStartButtonClassName('start-button clicked')
        setTimeout(() => {
            navigate('/home', {replace: true})
        }, 750);
    }


    return (
        <div className='StartPage-main'>
            <div className='StartPage-container'>
                <img className={logoClassName} src={agreeToDisagreeLogo} alt="Agree To Disagree Logo"></img>
                <div className='start-button-container'>
                    <div className={startButtonClassName} onClick={()=>clickHandler()}>
                        START
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;