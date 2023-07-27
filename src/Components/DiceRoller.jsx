import React, { useContext, useState } from 'react'
import { DiceContext } from '../App';

const DiceRoller = () => {

    let [currentDice, setCurrentDice] = useContext(DiceContext);
    let [roll, setRoll] = useState();

    const rollDice = () => {
        setRoll(Math.floor(Math.random() * (currentDice.value) + 1))
    }

    return (
        <div className='diceRoller'>
            <img src={currentDice.img}></img>
            <br/>
            <button onClick={rollDice}>Roll</button>
            <button onClick={() => setCurrentDice(undefined)}>Back</button>
            <h1>Result: {roll}</h1>
        </div>
    )
}

export default DiceRoller
