import StartPage from './components/StartPage/StartPage';
import sparkles from './images/sparkles.png'

function App() {
  return (
    <div className='App'>
      <img className='sparkle-one' src={sparkles} alt='Sparkle to add depth' />
        <StartPage />
      <img className='sparkle-two' src={sparkles} alt='Sparkle to add depth' />
    </div>
  );
}

export default App;
