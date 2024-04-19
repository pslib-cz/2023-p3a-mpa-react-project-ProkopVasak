import Board from './components/Board';
import { GameContext } from './components/GameContext';
import { useContext } from 'react';
import Rewards from "./components/Rewards";

import './App.css'

function App() {
  const { state } = useContext(GameContext);

  return (
    <>
      {state.enemy.score <= 0 ? <Rewards/> : <Board />}
    </>
  )
}

export default App
