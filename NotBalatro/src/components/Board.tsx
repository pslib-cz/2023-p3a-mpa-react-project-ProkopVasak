import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import { Card } from "./types.tsx"
import { actionType } from "./types.tsx"
import useLocalStorage from './useLocalStorage';

const Board: React.FC = () => {

    const { state, dispatch, selectedCards } = useContext(GameContext);

    const [initialCards, setInitialCards] = useState<Card[]>([]);
    const [storedCards, setStoredCards] = useLocalStorage<Card[]>('cards', []);

    useEffect(() => {
        if (storedCards.length === 0) {
            const newCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);
            setStoredCards(newCards);
            setInitialCards(newCards);
        } else {
            setInitialCards(storedCards);
        }
    }, []);

    return (
        <div className={styles.board}>
            <div className={styles.sidepanel}>
                <div>{state.enemy.score}</div>
            </div>
            <button className={styles.res} onClick={() => {
                const newCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);
                setStoredCards(newCards);
                setInitialCards(newCards);
            }}>Vyměnit karty</button>
            <button className={styles.hod} onClick={() => dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards })}>Vyhodnotit karty</button>
            <div className={styles.box}>
                <div className={styles.card_box}>
                    {initialCards.map((card) => (
                        <PlayingCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Board;
