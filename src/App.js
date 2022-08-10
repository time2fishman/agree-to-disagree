// Import components
import NavBar from './components/NavBar/NavBar';
import StartPage from './components/StartPage/StartPage';
import MainPage from './components/MainPage/MainPage';
import AboutPage from './components/AboutPage/AboutPage'
import PlayPage from './components/PlayPage/PlayPage'
import ResultsPage from './components/ResultsPage/ResultsPage';

//Import React dependencies
import { Route, Routes } from "react-router-dom";
import { useState, createContext } from 'react';

// Import Images
import sparkles from './images/sparkles.png'

//Setup context
import { AppContext } from './AppContext'

function App() {

  //Set state
  const [navBarVisible, setNavBarVisible] = useState('NavBar-container hidden')
  const [mainPageVisible, setMainPageVisible] = useState('MainPage-main hidden')
  const [resultsPageVisible, setResultsPageVisible] = useState('resultsPage-main hidden')
  const [playPageVisible, setPlayPageVisible] = useState('playPage-main hidden')
  const [playArray, setPlayArray] = useState([])
  const [logoClassName, setLogoClassName] = useState('AgreeToDisagreeLogo')
  const [startButtonClassName, setStartButtonClassName] = useState('start-button')
  const [finalResult, setFinalResult] = useState()
  const [editModal, setEditModal] = useState()
  const [editModalClass, setEditModalClass] = useState('EditModal-container EMChidden')
  const [descriptionModal, setDescriptionModal] = useState()
  const [descriptionModalClass, setDescriptionModalClass] = useState('DescriptionModal-container DMChidden')

  //Return routes
  return (
    <div className='App'>
      <img className='sparkle-one' src={sparkles} alt='Sparkle to add depth' />
      <AppContext.Provider value={
        {
          navBarVisible, setNavBarVisible,
          mainPageVisible, setMainPageVisible,
          playPageVisible, setPlayPageVisible,
          playArray, setPlayArray,
          logoClassName, setLogoClassName,
          startButtonClassName, setStartButtonClassName,
          finalResult, setFinalResult,
          editModal, setEditModal,
          editModalClass, setEditModalClass,
          resultsPageVisible, setResultsPageVisible,
          descriptionModalClass, setDescriptionModalClass,
          descriptionModal, setDescriptionModal
        }
      }>
        <NavBar />
        <Routes>
          <Route path="/*" element={<StartPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </AppContext.Provider>

      <img className='sparkle-two' src={sparkles} alt='Sparkle to add depth' />
    </div>
  );
}

export default App;