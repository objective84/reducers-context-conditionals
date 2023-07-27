import React, { useContext } from 'react'
import { DiceContext } from '../App'

const DiceBtn = ({img, value}) => {

  let [currentDice, setCurrentDice] = useContext(DiceContext);
  return (
    <div>
      <button onClick={e => setCurrentDice({img, value})}><img src={img} /></button>
    </div>
  )
}

export default DiceBtn
