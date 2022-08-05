import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import './AboutPage.css'

const AboutPage = () => {

    const {
        navBarVisible, setNavBarVisible
    }
    =useContext(AppContext)
    
    setNavBarVisible('NavBar-container')


    return (
        <div className='AboutPage-main'>
            <div className='AboutPage-container'>
                <div>
                    This app was created over the course of a long week by:
                    <ul className='aboutCredits'>
                        <li>Mike Krueger <a href="https://www.linkedin.com/in/mikekrueger1/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/mickrueg" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a> </li>
                        <li>Adam Martinez <a href="https://www.linkedin.com/in/adam-martinez/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/time2fishman" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a></li>
                        <li>Travis Micheletti <a href="https://www.linkedin.com/in/travis-micheletti/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/travis-micheletti" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a></li>
                        <li>Dominique Dutton <a href="https://www.linkedin.com/in/domdutton/" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-linkedin"></i></a> <a href="https://github.com/domdutton" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-square-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage