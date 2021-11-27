import React, { useEffect, useState } from 'react'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'
import './App.css'
import AddMonster from '../AddMonster/AddMonster'
import * as monsterService from '../../services/monsters'

function App() {
  const [monsters, setMonsters] = useState([])

  const handleAddMonster = async newMonsterData => {
    const newMonster = await monsterService.create(newMonsterData)
    setMonsters([...monsters, newMonster])
  }

  useEffect(() => {
    monsterService.getAll()
    .then(allMonsters => setMonsters(allMonsters))
  }, [])

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
