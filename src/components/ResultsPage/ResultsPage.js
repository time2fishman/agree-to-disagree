import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import './ResultsPage.css';
import Option from '../Option/Option';
import { useNavigate } from 'react-router-dom';

const ResultsPage = () => {

    const { finalResult, playArray, navBarVisible, setNavBarVisible, resultsPageVisible, setResultsPageVisible } = useContext(AppContext)
    const chosenFood = playArray[finalResult].name
        
    useEffect(() => {
        setNavBarVisible('NavBar-container')
        setResultsPageVisible('resultsPage-main hidden')
        setTimeout(() => {
            setResultsPageVisible('resultsPage-main')
        }, 100);
    }, [])

    return (
        <main className={resultsPageVisible}>
            <div className='resultsPage-background'>
                <div className='resultsPage-container'>
                    <div className='results-info-box'>
                        <h2>The universe has spoken! Somebody's eatin' {chosenFood}!</h2>
                    </div>
                    <div className='food-result'>
                        <Option
                            name={playArray[finalResult].name}
                            image={playArray[finalResult].image}
                            cuisine={playArray[finalResult].cuisine}
                            description={playArray[finalResult].description}
                        />
                    </div>
                </div>
            </div>
            <h4 className='play-again'>Still undecided? <a href='/home'>Play again</a></h4>
        </main>
    )
}

export default ResultsPage;