import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../AppContext';
import './ResultsPage.css';
import Option from '../Option/Option';

const ResultsPage = () => {

    const { finalResult, playArray, navBarVisible, setNavBarVisible } = useContext(AppContext)
    const chosenFood = playArray[finalResult].name

    useEffect(() => {
        setNavBarVisible('NavBar-container')
    })

    return (
        <main className='resultsPage-main'>
            <div className='resultsPage-background'>
                <div className='resultsPage-container'>
                    <div className='results-info-box'>
                        <h2>The universe has spoken! Somebody's eatin' some "{chosenFood}"!</h2>
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
        </main>
    )
}

export default ResultsPage;