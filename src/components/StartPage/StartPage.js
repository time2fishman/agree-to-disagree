import React from 'react';
import agreeToDisagreeLogo from '../../images/agreeToDisagreeLogo.png';
import './StartPage.css';

const StartPage = () => {
    return (
        <div className='StartPage-main'>
            <div className='StartPage-container'>
                <img className='AgreeToDisagreeLogo' src={agreeToDisagreeLogo} alt="Agree To Disagree Logo"></img>
                <div className='start-button-container'>
                    <div className='start-button'>
                        START
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;