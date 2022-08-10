import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import './PlayPage.css';
import remove from '../../images/remove.svg'
import Option from '../Option/Option';
import DescriptionModal from '../DescriptionModal/DescriptionModal';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PlayPage = () => {

    const [leftChoice, setLeftChoice] = useState(0)
    const [rightChoice, setRightChoice] = useState(1)
    const [incrementor, setIncrementor] = useState(1)
    const { 
            finalResult, setFinalResult, playArray, navBarVisible, setNavBarVisible,
            playPageVisible, setPlayPageVisible,
            setMainPageVisible, 
            DescriptionModal, setDescriptionModal, setDescriptionModalClass
          } = useContext(AppContext)
    const navigate = useNavigate();

    useEffect(() => {
        setNavBarVisible('NavBar-container')
        setPlayPageVisible('playPage-main')
        setMainPageVisible('MainPage-main hidden')
    }, [])
    
    useEffect(() => {
        console.log(playPageVisible)
    }, [playPageVisible])
    
    const handleClick = (choiceSelected, setChoiceSelected) => {
        if (incrementor + 1 === playArray.length) {
            setFinalResult(
                choiceSelected === leftChoice ? rightChoice : leftChoice
            )
            setPlayPageVisible('playPage-main hidden')
            setTimeout(() => {
                navigate('/results', {replace: true})
            }, 750);
        } else {
            setChoiceSelected(incrementor + 1)
            setIncrementor(previous => previous + 1)
        }
    }

    const handleDescriptionClickLeft = () => {
        console.log(playArray[leftChoice].name + ' is ' + playArray[leftChoice].description)
    }

    const handleDescriptionClickRight = () => {
        console.log(playArray[rightChoice].name + ' is ' + playArray[rightChoice].description)
    }
    

    return (
        <div className={playPageVisible}>
            <div className='playPage-background'>
                <div className='playPage-container'>
                    <div className='info-box'>
                        <h2>Alternate Players:</h2>
                        <p><strong>Player 1</strong> - Delete your least desired option</p>
                        <p><strong>Player 2</strong> - Delete your least desired option</p>
                        <p><strong>Repeat</strong> until all options have been filtered</p>
                    </div>
                    <div className='choose-one'>
                        <div className='food-choice'>
                            <Option
                                name={playArray[leftChoice].name}
                                image={playArray[leftChoice].image}
                                cuisine={playArray[leftChoice].cuisine}
                                description={playArray[leftChoice].description}
                            />
                            <i onClick={() => handleDescriptionClickLeft()} className="infoLeft-icon fa-solid fa-circle-info"></i>
                            <img onClick={() => handleClick(leftChoice, setLeftChoice)} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                        <div className='food-choice'>
                            <Option
                                name={playArray[rightChoice].name}
                                image={playArray[rightChoice].image}
                                cuisine={playArray[rightChoice].cuisine}
                                description={playArray[rightChoice].description}

                            />
                            <i onClick={() => handleDescriptionClickRight()} className="infoRight-icon fa-solid fa-circle-info"></i>
                            <img onClick={() => handleClick(rightChoice, setRightChoice)} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='counter'>
                <h2>{incrementor + 1}/{playArray.length}</h2>
            </div>
        </div>
    )
}

export default PlayPage;