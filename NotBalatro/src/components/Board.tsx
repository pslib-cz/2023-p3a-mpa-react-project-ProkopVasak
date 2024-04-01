import React, { useContext, useEffect, useState } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import PlayingCard from "./Card.tsx"
import {Card} from "./types.tsx"
import { actionType } from "./types.tsx"

const Board: React.FC = () => {

    const { state, dispatch, selectedCards } = useContext(GameContext);

    const [initialCards, setInitialCards] = useState<Card[]>([]);

    useEffect(() => {
        setInitialCards(state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8));
    }, []);

    return (
        <div className={styles.board}>
            <div className={styles.sidepanel}></div>
            <button onClick={() => dispatch({ type: actionType.EVALUATE_CARDS, cards: selectedCards })}>Vyhodnotit karty</button>
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