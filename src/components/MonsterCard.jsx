import React from 'react'

function MonsterCard({monster}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{monster.name}</h2>
        <img alt='scary monster' src={`${monster.imgUrl}`} className="card-img-top"></img>
        <p className="card-text">{monster.type}</p>
        <p className="card-text">{monster.topweakness}</p>
      </div>
    </div>
  )
}

export default MonsterCard