import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../AppContext';
import './PlayPage.css'
import remove from '../../images/removeItem.svg'

const PlayPage = () => {

    const { navBarVisible, setNavBarVisible } = useContext(AppContext)

    useEffect(() => {
        setNavBarVisible('NavBar-container')
        console.log("testing")
    })

    const handleClick = () => {
        alert("are you sure you want to delete this food?")
    }

    return (
        <div className='playPage-main'>
            <div className='playPage-background'></div>
            <div className='playPage-container'>
                <div className='info-box'>
                    <h2>Decision Maker 1:</h2>
                    <p>Delete your least desired option</p>
                </div>
                <div className='choose-one'>
                    <div className='food-choice'>
                        <p>pizza</p>
                        <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                    </div>
                    <div className='food-choice'>
                        <p>hotdog</p>
                        <img onClick={handleClick} className='delete-button' src={remove} alt='Remove Button' />
                    </div>
                </div>
            </div>
        </div>
    )
}

// return (
//     <div className={mainPageVisible}>
//         <div className='MainPage-container'>
//             <div className='Play-container'>
//                 <h3>Play</h3><br></br>
//                 <h4>Select a number below to start! Add additional instruction text here...</h4><br></br>
//                 <div className='orange-circle-container'>
//                     <div className='orange-circle-small'>5</div>
//                     <div className='orange-circle-small'>10</div>
//                     <div className='orange-circle-small'>20</div>
//                 </div>
//             </div>
//             <div className='Add-food-container'>
//                 <h4>Type to add food...</h4>
//                 <div className='orange-circle-small'>5</div>
//             </div>
//         </div>
//     </div>
// );

export default PlayPage;