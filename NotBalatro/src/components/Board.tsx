import React, { useContext } from 'react';
import { GameContext } from './GameContext';
import styles from "./Board.module.css";
import Card from "./Card.tsx"

const Board: React.FC = () => {

    const { state, dispatch } = useContext(GameContext);

    // Select 8 random cards
    const randomCards = state.player.deck.sort(() => Math.random() - 0.5).slice(0, 8);

    return (
        <div className={styles.board}>
            <div className={styles.sidepanel}></div>
            
            <div className={styles.box}>
                <div className={styles.card_box}>
                    {randomCards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </div>
                
                
            </div>
        </div>
    );
};

export default Board;