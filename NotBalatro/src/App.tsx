import Board from './components/Board';
import { GameContext } from './components/GameContext';
import { useContext, useEffect } from 'react';
import Rewards from "./components/Rewards";

import './App.css'

function App() {
  const { state } = useContext(GameContext);
  useEffect(() => {
    sessionStorage.setItem('isReloading', 'true');

    const handleBeforeUnload = () => {
      if (!sessionStorage.getItem('isReloading')) {
        // If 'isReloading' is not set, the window is likely closing for good.
        localStorage.clear(); // Clear local storage
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      sessionStorage.removeItem('isReloading'); // Clear flag on unload, so it's not set if closed.
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    <>
      {state.rewards ? <Rewards/> : <Board />}
    </>
  )
}

export default App
