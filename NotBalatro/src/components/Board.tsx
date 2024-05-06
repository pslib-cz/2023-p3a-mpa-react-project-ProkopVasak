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


    const handleEvaluateCards = () => {
        dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards });
        dispatch({ type: actionType.RESET_SELECTED_CARDS });
    };

    useEffect(() => {
        dispatch({ type: actionType.LOAD_INITIAL_CARDS });
    }, [dispatch]);
    if (state.gameOver) {
        return (<div>Game Over</div>);
    }else{
        return(
        <>
            <div className={styles.board}>
                <div className={styles.joker__panel}>
                    {state.player.jokers.map((joker, index) => (
                        <PlayingJoker key={joker.id} joker={joker}  />
                    ))}
                </div>
                <div className={styles.sidepanel}>
                    <div>{state.enemy.score}</div>
                </div>
                <button 
                    className={styles.res} 
                    onClick={handleEvaluateCards} 
                    disabled={selectedCards.length === 0 || state.attemptsLeft <= 0}>
                    Evaluate Cards
                </button>
                <div>Attempts left: {state.attemptsLeft}</div>
                <button className={styles.button}
                        onClick={() => dispatch({ type: actionType.CHANGE_SELECTED_CARDS, cards: selectedCards })}
                        disabled={selectedCards.length === 0 || state.changeCardsAttemptsLeft <= 0}>
                    Change Cards
                </button>
                {state.changeCardsAttemptsLeft > 0 ? (
                <p>You can change cards {state.changeCardsAttemptsLeft} more times.</p>
                ) : (
                    <p>No more changes allowed.</p>
                )}
                <div className={styles.box}>
                <div className={styles.card_box}>
                    {currentCards.map((card) => (
                        <PlayingCard key={card.id} card={card} />
                    ))}
                </div>
                </div>
            </div>
        </>
        );
    }
    
};

export default Board;