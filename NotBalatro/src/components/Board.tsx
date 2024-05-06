import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import PlayingJoker from "./Joker.tsx"
import { Card } from "./types.tsx"
import { actionType } from "./types.tsx"
import useLocalStorage from './useLocalStorage';
import { Jokers } from './Data.tsx';

const Board: React.FC = () => {

    const { state, dispatch } = useContext(GameContext);
    const { currentCards, selectedCards } = state;
    const [isOpen, setIsOpen] = useState(false);


    const handleEvaluateCards = () => {
        dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards });
        dispatch({ type: actionType.RESET_SELECTED_CARDS });
    };

    useEffect(() => {
        dispatch({ type: actionType.LOAD_INITIAL_CARDS });
    }, [dispatch]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
    if (state.gameOver) {
        return (<div>Game Over</div>);
    }else{
        return(
        <>
        <button className={styles.btn} onClick={toggleMenu}><div className={styles.btn__icon}>☰</div></button>
        <div  className={styles.menu} style={{height: isOpen ? '100vh' : '0',}}>
                <div className={styles.enemy__box}>
                    <h2 className={styles.enemy__header}>Current Enemy:</h2>
                    <div className={styles.enemy__name}>Name: {state.enemy.name}</div>
                    <div className={styles.enemy__name}>Score: {state.enemy.score}</div>
                </div>
                <div className={styles.stats}>
                    <div className={styles.stat} style={{backgroundColor:"red"}}>Evaluate: {state.attemptsLeft}</div>
                    <div className={styles.stat} style={{backgroundColor:"blue"}}>Change: {state.changeCardsAttemptsLeft}</div>
                </div>
            </div>
            <div className={styles.joker__panel}>
                    {state.player.jokers.map((joker) => (
                        <PlayingJoker key={joker.id} joker={joker}  />
                    ))}
                </div>
            <div className={styles.board}>
                
                
                
                
                <div className={styles.box}>
                    <div className={styles.btn__box}>
                        <button 
                            className={styles.res} 
                            onClick={handleEvaluateCards} 
                            disabled={selectedCards.length === 0 || state.attemptsLeft <= 0}>
                            Evaluate Cards
                        </button>
                        <button className={styles.button}
                                onClick={() => dispatch({ type: actionType.CHANGE_SELECTED_CARDS, cards: selectedCards })}
                                disabled={selectedCards.length === 0 || state.changeCardsAttemptsLeft <= 0}>
                            Change Cards
                        </button>
                    </div>
                        {currentCards.map((card) => (
                            <PlayingCard key={card.id} card={card} />
                        ))}
                    
                </div>
            </div>
        </>
        );
    }
    
};

export default Board;