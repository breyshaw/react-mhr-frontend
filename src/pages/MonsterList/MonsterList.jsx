import React from 'react'
import styles from './MonsterList.module.css'
import MonsterCard from '../../components/MonsterCard'


const MonsterList = (props) => {

    return (
        <>
            <h1>Monster List</h1>
            <div className={styles.container}>
                {props.monsters.map(monster =>
                    <MonsterCard
                        key={monster._id}
                        monster={monster}
                        handleDeleteMonster={props.handleDeleteMonster}
                    />
                )}
            </div>
        </>
    )
}

export default MonsterList