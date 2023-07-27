import React, { useContext } from 'react'
import d20 from '../assests/d20.jpg';
import d12 from '../assests/d12.jpg';
import d8 from '../assests/d8.jpg';
import d6 from '../assests/d6.jpg';
import d4 from '../assests/d4.jpg';
import DiceBtn from './DiceBtn';
import { DiceContext } from '../App';

const DiceSelector = () => {

  let [currentDice, setCurrentDice] = useContext(DiceContext);

  return (
    <div>
      <h1>Select a die to roll:</h1>
      <div className='diceSelection'>
        <DiceBtn {...{img:d20, value: 20, setCurrentDice}}/>
        <DiceBtn {...{img:d12, value: 12, setCurrentDice}}/>
        <DiceBtn {...{img:d8, value: 8, setCurrentDice}}/>
        <DiceBtn {...{img:d6, value: 6, setCurrentDice}}/>
        <DiceBtn {...{img:d4, value: 4, setCurrentDice}}/>
      </div>
    </div>
  )
}

export default DiceSelector
