import React, { useEffect, useState } from 'react'
import { Route, Routes, NavLink, useNavigate } from 'react-router-dom'
import './App.css'
import AddMonster from '../AddMonster/AddMonster'
import MonsterList from '../MonsterList/MonsterList'
import EditMonster from '../EditMonster/EditMonster'
import * as monsterService from '../../services/monsters'

function App() {
  const navigate = useNavigate()
  const [monsters, setMonsters] = useState([])

  const handleAddMonster = async newMonsterData => {
    const newMonster = await monsterService.create(newMonsterData)
    setMonsters([...monsters, newMonster])
    navigate('/')
  }

  useEffect(() => {
    monsterService.getAll()
      .then(allMonsters => setMonsters(allMonsters))
  }, [])

  const handleDeleteMonster = id => {
    monsterService.deleteOne(id)
      .then(setMonsters(monsters.filter(monster => monster._id !== id)))
  }

  const handleUpdateMonster = updatedMonsterData => {
    monsterService.update(updatedMonsterData)
      .then(updatedMonster => {
        const newMonstersArray = monsters.map(monster =>
          monster._id === updatedMonster._id ? updatedMonster : monster
        )
        setMonsters(newMonstersArray)
        navigate('/')
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        MHR Quick Reference
        <nav>
          <NavLink to='/'>Monster List</NavLink>
          <NavLink className='m-left' to='/add'>Add Monster</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path='/add' element={<AddMonster handleAddMonster={handleAddMonster} />} />
          <Route path='/' element={<MonsterList handleDeleteMonster={handleDeleteMonster} monsters={monsters} />} />
          <Route path='/edit' element={<EditMonster handleUpdateMonster={handleUpdateMonster} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
