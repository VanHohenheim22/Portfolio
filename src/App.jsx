import { useState } from 'react'
import Nav from './components/nav'
import Home from './components/home'
import './App.css'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body_content'>
     <Nav></Nav>
     <Home></Home>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  )
}

export default App
