import React, { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const [monsters, setMonsters] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        Monster Hunter Rise Quick Guide
        <nav>
          <NavLink to='/'>Monster List</NavLink>
          <NavLink className='m-left' to='/add'>Add Monster</NavLink>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  )
}

export default App
