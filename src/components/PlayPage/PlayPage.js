import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import './PlayPage.css';
import remove from '../../images/remove.svg'

const PlayPage = () => {

    const { navBarVisible, setNavBarVisible } = useContext(AppContext)

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
                            <img className='food' src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='pizza pic' />
                            <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                        <div className='food-choice'>
                            <img className='food' src='https://images.pexels.com/photos/4113455/pexels-photo-4113455.jpeg?auto=compress&cs=tinysrgb&w=600' alt='hot dog pic' />
                            <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayPage;