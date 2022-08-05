import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import './PlayPage.css'


const PlayPage = () => {
    const { navBarVisible, setNavBarVisible } = useContext(AppContext)
    
    setNavBarVisible('NavBar-container')


    return (
        <div className='container'>
            <div>test</div>
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