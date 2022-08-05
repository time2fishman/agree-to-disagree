import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './MainPage.css'


const MainPage = () => {

    const {
        mainPageVisible, setMainPageVisible
    }
    =useContext(AppContext)

    return (
        <div className={mainPageVisible}>
            <div className='MainPage-container'>
                <div className='Play-container'>
                    <h3>Play</h3><br></br>
                    <h4>Select a number below to start! Add additional instruction text here...</h4><br></br>
                    <div className='orange-circle-container'>
                        <div className='orange-circle-small'>5</div>
                        <div className='orange-circle-small'>10</div>
                        <div className='orange-circle-small'>20</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MainPage;