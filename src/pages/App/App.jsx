import React, { useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import './App.css'
import AddMonster from '../AddMonster/AddMonster'

function App() {
  const [monsters, setMonsters] = useState([])

  const handleAddMonster = newMonsterData => {
    setMonsters([...monsters, newMonsterData])
  }

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
        <Routes>
          <Route path='/add' element={<AddMonster handleAddMonster={handleAddMonster} />}/>
        </Routes>
      </main>
    </div>
  )
}

export default App
