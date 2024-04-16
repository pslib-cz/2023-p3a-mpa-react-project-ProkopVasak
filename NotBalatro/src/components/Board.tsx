import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import PlayingJoker from "./Joker.tsx"
import { Card } from "./types.tsx"
import { actionType } from "./types.tsx"
import useLocalStorage from './useLocalStorage';

const Board: React.FC = () => {

    const { state, dispatch, selectedCards, setSelectedCards } = useContext(GameContext);

    const [initialCards, setInitialCards] = useState<Card[]>([]);
    const [storedCards, setStoredCards] = useLocalStorage<Card[]>('cards', []);
    const [storedEnemyScore, setStoredEnemyScore] = useLocalStorage<number>('enemyScore', state.enemy.score);
    const [isInitialLoad, setIsInitialLoad] = useLocalStorage<boolean>('isInitialLoad', true);
    useEffect(() => {
        if (isInitialLoad) {
            if (storedEnemyScore !== state.enemy.score) {
                dispatch({ type: actionType.SET_ENEMY_SCORE, score: storedEnemyScore });
            }
            setIsInitialLoad(false);
        }
    }, [isInitialLoad, storedEnemyScore, state.enemy.score, dispatch, setIsInitialLoad]);

    /*useEffect(() => {
        if (storedEnemyScore !== undefined && storedEnemyScore !== state.enemy.score) {
            dispatch({ type: actionType.SET_ENEMY_SCORE, score: storedEnemyScore });
        }
    }, []); 

    useEffect(() => {
        if (state.enemy.score !== storedEnemyScore) {
            setStoredEnemyScore(state.enemy.score);
        }
    }, [state.enemy.score]);

    // Načtení skóre z localStorage a aktualizace stavu pouze pokud se liší a není to první načtení
    useEffect(() => {
        if (!isInitialLoad && storedEnemyScore !== state.enemy.score) {
            dispatch({ type: actionType.SET_ENEMY_SCORE, score: storedEnemyScore });
        }
        setIsInitialLoad(false);  // Označíme, že první načtení již proběhlo
    }, [storedEnemyScore]);*/

    useEffect(() => {
        if (storedCards.length === 0) {
            const newCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);
            setStoredCards(newCards);
            setInitialCards(newCards);
        } else {
            setInitialCards(storedCards);
        }
    }, []);
    const isButtonDisabled = selectedCards.length === 0;
    return (
        <>
            
        
            <div className={styles.board}>
                <div className={styles.joker__panel}>
                    {state.player.jokers.map((joker) => (
                        <PlayingJoker key={joker.id} joker={joker}></PlayingJoker>
                    ))}
                </div>
                <div className={styles.sidepanel}>
                    <div>{storedEnemyScore}</div>
                </div>
                <button className={styles.res} onClick={() => {
                    const newCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);
                    setStoredCards(newCards);
                    setInitialCards(newCards);
                    setSelectedCards([]);
                }}>Vyměnit karty</button>
                <button className={styles.hod} onClick={() => dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards })} disabled={isButtonDisabled}>Vyhodnotit karty</button>
                <div className={styles.box}>
                    <div className={styles.card_box}>
                        {initialCards.map((card) => (
                            <PlayingCard key={card.id} card={card} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Board;