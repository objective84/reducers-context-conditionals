import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import DiceRoller from './Components/DiceRoller';
import DiceSelector from './Components/DiceSelector';

export const DiceContext = createContext();

const App = () => {

  let [currentDice, setCurrentDice] = useState();

  return (
    <div className="App">
    <DiceContext.Provider value={[currentDice, setCurrentDice]}>
      {currentDice ? <DiceRoller/> : <DiceSelector/>}
    </DiceContext.Provider>
    </div>
  )};
export default App;