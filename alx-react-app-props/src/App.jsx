import UserContext from './components/UserContext.js'
import UserProfile from '../UserProfile.jsx'
import Footer from './Footer.jsx'
import MainContent from './MainContent.jsx'
import Header from './Header.jsx';
import WelcomeMessage from './components/WelcomeMessage.jsx'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  setcount (count + 1); 

  return (
    <>
      <div>
        Create a new file called WelcomeMessage.jsx under src/components
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <WelcomeMessage />
      <Header />
      <Footer />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserContext.Provider value = {userData}>
         <ProfilePage />
      </UserContext.Provider>
    </>
  )
}

export default App
