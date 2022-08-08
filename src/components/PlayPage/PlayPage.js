import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import './PlayPage.css';
import remove from '../../images/remove.svg'
import Option from '../Option/Option';

const PlayPage = () => {

    const [incrementor, setIncrementor] = useState(1)
    const { playArray, navBarVisible, setNavBarVisible } = useContext(AppContext)
    console.log(playArray)
    useEffect(() => {
        setNavBarVisible('NavBar-container')
    })

    const handleClick = () => {
        alert("are you sure you want to delete this food?")
    }

    return (
        <div className='playPage-main'>
            <div className='playPage-background'>
                <div className='playPage-container'>
                    <div className='info-box'>
                        <h2>Decision Maker 1:</h2>
                        <p>Delete your least desired option</p>
                    </div>
                    <div className='choose-one'>
                        <div className='food-choice'>
                            <Option
                                name={playArray[0].name}
                                image={playArray[0].image}
                                cuisine={playArray[0].cuisine}
                                description={playArray[0].description}
                            />
                            <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                        <div className='food-choice'>
                            <Option
                                name={playArray[1].name}
                                image={playArray[1].image}
                                cuisine={playArray[1].cuisine}
                                description={playArray[1].description}
                            />
                            <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='counter'>
                <h2>1/{playArray.length}</h2>
            </div>
        </div>
    )
}

export default PlayPage;