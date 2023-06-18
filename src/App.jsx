import { useState } from 'react'
import Nav from './components/nav'
import Home from './components/home'
import './App.css'
import Projects from './components/projects'
import Contact from './components/contact'
import { useEffect } from 'react'


function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  
  

  return (
    <div className={`body_content ${darkMode ? 'dark-mode' : ''}`}>
     <Nav darkMode = {darkMode} handleToggle= {handleToggle}/>
     <Home darkMode = {darkMode} handleToggle= {handleToggle}/>
     <Projects />
     <Contact darkMode = {darkMode} handleToggle= {handleToggle}/>
    </div>
  )
}

export default App
