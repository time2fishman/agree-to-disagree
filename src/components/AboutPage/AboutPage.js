import React, { useContext, useState } from 'react'
import { AppContext } from '../../AppContext';
import './AboutPage.css'

const AboutPage = () => {

    const {
        navBarVisible, setNavBarVisible,
        setLogoClassName,
        setStartButtonClassName
    }
    =useContext(AppContext)
    
    setNavBarVisible('NavBar-container')
    setLogoClassName('AgreeToDisagreeLogo animated rollOut hiddenLogo')
    setStartButtonClassName('start-button clicked')


    return (
        <div className='AboutPage-main'>
            <div className='AboutPage-container'>
                <div className='aboutTitle'>This app was created by:
                    <div className='aboutCredits'>
                        <div className='mikeAbout'>
                            <img className='aboutPictures' src='https://media-exp1.licdn.com/dms/image/C5603AQHky31HvQLT6w/profile-displayphoto-shrink_200_200/0/1656617005444?e=1665014400&v=beta&t=zSU9aYhAEcP9fs4Uy-SRzW6n81MpGbMhB-mDOO5Domg' alt='Mike Krueger picture'/>
                            <div className='mikeName'>
                                Mike Krueger
                            </div>
                            <div className='aboutIcons'>
                                <a href="https://www.linkedin.com/in/mikekrueger1/" target="_blank" rel="noreferrer noopener">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a> 
                                <a href="https://github.com/mickrueg" target="_blank" rel="noreferrer noopener">
                                    <i className="fa-brands fa-square-github"></i>
                                </a>
                            </div>
                            
                        </div> 

                        <div className='adamAbout'>
                            <img className='aboutPictures' src='https://media-exp1.licdn.com/dms/image/C4E03AQFUMj1whYgVFA/profile-displayphoto-shrink_800_800/0/1516946945016?e=1665014400&v=beta&t=8bITAKs31trQgnlOWQLkmVsD1nu5-lcpp1Oy77IcV9c' alt='Adam Martinez picture'/>
                            <div className='adamName'>
                                Adam Martinez
                            </div>
                            <div className='aboutIcons'>
                                <a href="https://www.linkedin.com/in/adam-martinez/" target="_blank" rel="noreferrer noopener">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a> 
                                <a href="https://github.com/time2fishman" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-square-github"></i>
                                </a>
                            </div>
                        </div>

                        <div className='travisAbout'>
                            <img className='aboutPictures' src='https://media-exp1.licdn.com/dms/image/C4E03AQHNAQPHokpO_A/profile-displayphoto-shrink_800_800/0/1572099796537?e=1665014400&v=beta&t=1ErD9ih5px39JAJ5sEsP3ngjXDAENrVl_15RYs_CCjg' alt='Travis Micheletti picture'/>
                            <div className='travisName'>
                                Travis Micheletti
                            </div>
                            <div className='aboutIcons'>
                                <a href="https://www.linkedin.com/in/travis-micheletti/" target="_blank" rel="noreferrer noopener">
                                    <i className="fa-brands fa-linkedin"></i>
                                </a> 
                                <a href="https://github.com/travis-micheletti" target="_blank" rel="noreferrer noopener">
                                    <i className="fa-brands fa-square-github"></i>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage